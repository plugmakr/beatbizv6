import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { mockAuthService } from '../services/mockAuthService';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.error('Supabase URL or Anon Key is missing. Please check your environment variables.');
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Login component mounted');
    console.log('Supabase URL:', supabaseUrl);
    console.log('Supabase Anon Key:', supabaseAnonKey ? 'Set' : 'Not set');
    console.log('Use Mock Auth:', import.meta.env.VITE_USE_MOCK_AUTH);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      console.log('Attempting login...');
      let result;
      if (import.meta.env.VITE_USE_MOCK_AUTH === 'true') {
        console.log('Using mock auth service');
        result = await mockAuthService.signIn(email, password);
      } else {
        console.log('Using Supabase auth');
        if (!supabase) {
          throw new Error('Supabase client is not initialized. Check your environment variables.');
        }
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });
        if (authError) throw authError;
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('role')
          .eq('id', authData.user.id)
          .single();
        if (userError) throw userError;
        result = { user: userData, error: null };
      }

      console.log('Login result:', result);

      if (result.error) throw result.error;
      if (result.user) {
        if (result.user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/member');
        }
      } else {
        throw new Error('User data not found');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.message || 'An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-10 rounded-lg shadow-2xl backdrop-blur-sm transition-all duration-300 hover:bg-opacity-20 hover:border hover:border-white">
          <h2 className="text-3xl font-extrabold text-center text-white">Login to BeatBiz Pro</h2>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
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
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              Sign In
            </button>
          </form>
          {error && <p className="mt-2 text-center text-sm text-red-300">{error}</p>}
          <div className="text-center space-y-2">
            <Link to="/forgot-password" className="text-sm text-white hover:text-indigo-200">Forgot your password?</Link>
            <p className="text-sm text-white">
              Don't have an account? <Link to="/register" className="text-indigo-300 hover:text-indigo-200">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;