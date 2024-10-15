import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY)

export default function devServerMiddleware(req, res, next) {
  if (req.url === '/api/create-test-user' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      const { email, password, username, role } = JSON.parse(body);
      try {
        // Directly insert the user into the users table
        const { data, error } = await supabase
          .from('users')
          .insert([{ email, username, role }])
          .select()
          .single();

        if (error) throw error;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, user: data }));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  } else {
    next();
  }
}