import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export const createAdminAccount = async (email: string, password: string, username: string) => {
  // First, create the user account
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) throw authError;

  // Then, add the user details to the users table
  const { data, error } = await supabase
    .from('users')
    .insert([
      { id: authData.user?.id, username, email, role: 'admin' }
    ]);

  if (error) throw error;
  return data;
};

// ... (rest of the file remains the same)