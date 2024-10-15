-- Enable RLS on the users table if not already enabled
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS insert_user ON public.users;
DROP POLICY IF EXISTS user_crud ON public.users;

-- Create a policy that allows insertions for new users
CREATE POLICY insert_user ON public.users
    FOR INSERT
    WITH CHECK (true);  -- This allows all inserts

-- Create a policy that allows users to read and update their own data
CREATE POLICY user_crud ON public.users
    FOR ALL
    USING (auth.uid() = id OR auth.role() = 'service_role');

-- Allow the authenticated role to use the users table
GRANT ALL ON public.users TO authenticated;
GRANT USAGE ON SEQUENCE users_id_seq TO authenticated;