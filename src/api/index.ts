import { SupabaseClient, createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oxcqtorrigsanbxaoinq.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase:SupabaseClient = createClient(supabaseUrl, supabaseKey);


