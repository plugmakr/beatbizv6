import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      let result;
      if (import.meta.env.DEV) {
        // Use development endpoint for creating test users
        const response = await fetch('/api/create-test-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, username, role: 'member' }),
        });
        result = await response.json();
        if (!response.ok) throw new Error(result.error);
      } else {
        // Use Supabase auth for production
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { username }
          }
        });
        if (error) throw error;
        result = { user: data.user };
      }
      
      if (result.user) {
        navigate('/login');
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-10 rounded-lg shadow-2xl backdrop-blur-sm transition-all duration-300 hover:bg-opacity-20 hover:border hover:border-white">
          <h2 className="text-3xl font-extrabold text-center text-white">Create an Account</h2>
          <form onSubmit={handleRegister} className="mt-8 space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="input-purple w-full px-3 py-2"
                placeholder="Username"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-purple w-full px-3 py-2"
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-purple w-full px-3 py-2"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>
          {error && <p className="mt-2 text-center text-sm text-red-300">{error}</p>}
          <div className="text-center">
            <p className="text-sm text-white">
              Already have an account? <Link to="/login" className="text-indigo-300 hover:text-indigo-200">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;