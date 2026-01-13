import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_KEY;

// Supabase is optional - only needed if using database features
// If not provided, supabase client will be undefined and database functions will fail gracefully

// Server-side client with service key (full admin access, bypasses RLS)
// Note: This is the same as "service_role" key in Supabase dashboard
// Only created if both URL and key are provided
export const supabase =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      })
    : null;

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
