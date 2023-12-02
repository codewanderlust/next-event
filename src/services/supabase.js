import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tsinjvrkdxwhkuxgogjm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzaW5qdnJrZHh3aGt1eGdvZ2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyODQ2NzUsImV4cCI6MjAxNjg2MDY3NX0.nf7h3enB3LesA9Fhx_8WoPKNc-XZ7EYccDl13AXdwAQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
