-- Insert admin user into auth.users table
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at
)
VALUES (
  '00000000-0000-0000-0000-000000000000', -- instance_id (use the appropriate value for your Supabase project)
  gen_random_uuid(), -- id
  'authenticated', -- aud
  'authenticated', -- role
  'seth@audicode.com', -- email
  crypt('Rafikki1F1ddl3ww', gen_salt('bf')), -- encrypted_password
  now(), -- email_confirmed_at
  now(), -- last_sign_in_at
  '{"provider": "email", "providers": ["email"]}', -- raw_app_meta_data
  '{"role": "admin"}', -- raw_user_meta_data
  now(), -- created_at
  now() -- updated_at
);

-- Insert admin user into public.users table
INSERT INTO public.users (id, username, email, role)
SELECT 
  id, 
  'admin', -- username
  email,
  'admin' -- role
FROM auth.users 
WHERE email = 'seth@audicode.com';