import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://savgirnxmxwzedeuzyar.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhdmdpcm54bXh3emVkZXV6eWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNzgyNTgsImV4cCI6MjA5NDc1NDI1OH0._sxpzhdlK4wIKyAha6udu7uSgBm53HfIzBT_LsMmFqI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
