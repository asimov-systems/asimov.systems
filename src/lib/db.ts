import { supabase } from './supabase';

export interface UserProfile {
  clerkId: string;
  email: string;
  createdAt: string;
  reservedNames: ReservedName[];
}

export interface ReservedName {
  id: string;
  name: string;
  reservedAt: string;
  isPaid: boolean;
  isVip: boolean;
  paymentId?: string;
}

export async function getUserProfile(clerkId: string): Promise<UserProfile | null> {
  // Get user from database
  const { data: user, error: userError } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', clerkId)
    .single();

  if (userError || !user) {
    return null;
  }

  // Get user's reserved names
  const { data: names, error: namesError } = await supabase
    .from('reserved_names')
    .select('*')
    .eq('user_id', user.id);

  if (namesError) {
    console.error('Error fetching reserved names:', namesError);
    return null;
  }

  return {
    clerkId: user.clerk_id,
    email: user.email,
    createdAt: user.created_at,
    reservedNames: (names || []).map(n => ({
      id: n.id,
      name: n.name,
      reservedAt: n.reserved_at,
      isPaid: n.is_paid,
      isVip: n.is_vip,
      paymentId: n.payment_id || undefined
    }))
  };
}

export async function createUserProfile(
  clerkId: string,
  email: string
): Promise<UserProfile> {
  const { data, error } = await supabase
    .from('users')
    .insert({
      clerk_id: clerkId,
      email
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating user profile:', error);
    throw new Error('Failed to create user profile');
  }

  return {
    clerkId: data.clerk_id,
    email: data.email,
    createdAt: data.created_at,
    reservedNames: []
  };
}

export async function updateUserProfile(
  clerkId: string,
  updates: { email?: string }
): Promise<UserProfile | null> {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('clerk_id', clerkId)
    .select()
    .single();

  if (error || !data) {
    return null;
  }

  return await getUserProfile(clerkId);
}

export async function isNameAvailable(name: string): Promise<boolean> {
  const normalizedName = name.toLowerCase().trim();

  // Check if name is reserved
  const { data: reserved } = await supabase
    .from('reserved_names')
    .select('id')
    .eq('name', normalizedName)
    .single();

  if (reserved) {
    return false;
  }

  // Check if name is blacklisted
  const { data: blacklisted } = await supabase
    .from('blacklisted_names')
    .select('id')
    .eq('name', normalizedName)
    .single();

  if (blacklisted) {
    return false;
  }

  return true;
}

export async function reserveName(
  clerkId: string,
  name: string,
  isVip: boolean = false,
  paymentId?: string
): Promise<ReservedName | { error: string }> {
  const normalizedName = name.toLowerCase().trim();

  // Check if name is available
  const available = await isNameAvailable(normalizedName);
  if (!available) {
    return { error: 'Name already reserved or blacklisted' };
  }

  // Get user ID and check if they already have VIP status
  const { data: user } = await supabase
    .from('users')
    .select('id')
    .eq('clerk_id', clerkId)
    .single();

  if (!user) {
    return { error: 'User not found' };
  }

  // Check if user already has ANY VIP name (making them a VIP member)
  const { data: existingVipNames } = await supabase
    .from('reserved_names')
    .select('id')
    .eq('user_id', user.id)
    .eq('is_vip', true)
    .limit(1);

  const userIsVipMember = existingVipNames && existingVipNames.length > 0;

  // If user is already a VIP member, all their names get VIP status
  const finalVipStatus = userIsVipMember || isVip;

  // Reserve the name - ALL reservations require payment now
  const { data, error } = await supabase
    .from('reserved_names')
    .insert({
      name: normalizedName,
      user_id: user.id,
      is_vip: finalVipStatus, // VIP if they're upgrading OR already a VIP member
      is_paid: true, // All reservations are paid
      payment_id: paymentId
    })
    .select()
    .single();

  if (error) {
    console.error('Error reserving name:', error);
    return { error: 'Failed to reserve name' };
  }

  return {
    id: data.id,
    name: data.name,
    reservedAt: data.reserved_at,
    isPaid: data.is_paid,
    isVip: data.is_vip,
    paymentId: data.payment_id || undefined
  };
}

export async function getReservedNames(clerkId: string): Promise<ReservedName[]> {
  const profile = await getUserProfile(clerkId);
  return profile?.reservedNames || [];
}

export async function getAllReservedNames(): Promise<string[]> {
  const { data } = await supabase
    .from('reserved_names')
    .select('name');

  return (data || []).map(row => row.name);
}

// Admin function to manually assign a blacklisted name to a user
export async function assignBlacklistedName(
  name: string,
  clerkId: string,
  paymentId?: string
): Promise<ReservedName | { error: string }> {
  const normalizedName = name.toLowerCase().trim();

  // Check if name is blacklisted and can be assigned
  const { data: blacklisted } = await supabase
    .from('blacklisted_names')
    .select('*')
    .eq('name', normalizedName)
    .single();

  if (!blacklisted) {
    return { error: 'Name is not blacklisted' };
  }

  // Get user ID
  const { data: user } = await supabase
    .from('users')
    .select('id')
    .eq('clerk_id', clerkId)
    .single();

  if (!user) {
    return { error: 'User not found' };
  }

  // Remove from blacklist and assign to user
  await supabase
    .from('blacklisted_names')
    .update({ assigned_to: user.id })
    .eq('name', normalizedName);

  // Create reservation
  const { data, error } = await supabase
    .from('reserved_names')
    .insert({
      name: normalizedName,
      user_id: user.id,
      is_vip: true, // Manually assigned names are VIP
      is_paid: true,
      payment_id: paymentId
    })
    .select()
    .single();

  if (error) {
    return { error: 'Failed to assign name' };
  }

  return {
    id: data.id,
    name: data.name,
    reservedAt: data.reserved_at,
    isPaid: data.is_paid,
    isVip: data.is_vip,
    paymentId: data.payment_id || undefined
  };
}

