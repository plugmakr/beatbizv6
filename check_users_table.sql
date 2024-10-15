-- Check the structure of the users table
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'users';

-- Check existing policies on the users table
SELECT *
FROM pg_policies
WHERE tablename = 'users';