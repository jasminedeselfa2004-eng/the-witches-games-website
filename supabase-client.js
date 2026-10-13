
const SUPABASE_URL = "https://ehrqwsqpbkbsjxkuvqjr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Bbh_sSJzmmc9CoGjNkLNnQ__AmCTLPb";

// Shared connection for The Witches Games.
window.twgSupabase = window.supabase.createClient(
  SUPABASE_URL, 
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);
