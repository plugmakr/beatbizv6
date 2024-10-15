-- Check existing RLS policies on the users table
SELECT *
FROM pg_policies
WHERE tablename = 'users';