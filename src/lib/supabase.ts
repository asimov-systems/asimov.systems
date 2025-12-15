import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables. Please add PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_KEY to your .env file');
}

// Server-side client with service key (full admin access, bypasses RLS)
// Note: This is the same as "service_role" key in Supabase dashboard
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

export interface Database {
  users: {
    id: string;
    clerk_id: string;
    email: string;
    created_at: string;
  };
  reserved_names: {
    id: string;
    name: string;
    user_id: string;
    is_vip: boolean;
    is_paid: boolean;
    payment_id: string | null;
    reserved_at: string;
  };
  blacklisted_names: {
    id: string;
    name: string;
    reason: string | null;
    can_request: boolean;
    assigned_to: string | null;
    created_at: string;
  };
}

