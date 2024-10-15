-- Check auth.users table
SELECT id, email, role FROM auth.users WHERE email = 'seth@audicode.com';

-- Check public.users table
SELECT id, email, role FROM public.users WHERE email = 'seth@audicode.com';