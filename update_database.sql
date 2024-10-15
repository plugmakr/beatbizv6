-- Check if the users table exists, if not create it
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Ensure the role column exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT FROM information_schema.columns 
    WHERE table_name = 'users' AND column_name = 'role'
  ) THEN
    ALTER TABLE public.users ADD COLUMN role TEXT NOT NULL DEFAULT 'member';
  END IF;
END $$;

-- Update RLS policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view own user data" ON public.users;
DROP POLICY IF EXISTS "Users can update own user data" ON public.users;
DROP POLICY IF EXISTS "Allow insert for authenticated users" ON public.users;

-- Create new policies
CREATE POLICY "Users can view own user data" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own user data" ON public.users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Allow insert for authenticated users" ON public.users
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Grant necessary permissions
GRANT ALL ON public.users TO authenticated;
GRANT USAGE ON SEQUENCE users_id_seq TO authenticated;

-- Verify policies
SELECT * FROM pg_policies WHERE tablename = 'users';

-- Insert admin user if not exists
INSERT INTO public.users (id, email, role)
VALUES (
  auth.uid(),
  'seth@audicode.com',
  'admin'
)
ON CONFLICT (email) DO NOTHING;

-- Verify admin user
SELECT * FROM public.users WHERE email = 'seth@audicode.com';