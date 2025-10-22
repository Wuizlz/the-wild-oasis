import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://poebzrfwxvzfgnbbiutm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvZWJ6cmZ3eHZ6ZmduYmJpdXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMjA4NTMsImV4cCI6MjA3NDg5Njg1M30.MUldR_q_Aaqc4h6cujWOWdyxJb_IX8X-lN54Q187HWE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
