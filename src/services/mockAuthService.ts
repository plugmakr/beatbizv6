interface User {
  id: string;
  email: string;
  username: string;
  role: 'admin' | 'member';
}

class MockAuthService {
  private users: User[] = [
    { id: '1', email: 'admin@example.com', username: 'admin', role: 'admin' },
    { id: '2', email: 'member@example.com', username: 'member', role: 'member' },
  ];

  async signUp(email: string, password: string, username: string): Promise<{ user: User | null; error: string | null }> {
    const existingUser = this.users.find(u => u.email === email);
    if (existingUser) {
      return { user: null, error: 'User already exists' };
    }
    const newUser: User = { id: String(this.users.length + 1), email, username, role: 'member' };
    this.users.push(newUser);
    return { user: newUser, error: null };
  }

  async signIn(email: string, password: string): Promise<{ user: User | null; error: string | null }> {
    const user = this.users.find(u => u.email === email);
    if (!user) {
      return { user: null, error: 'Invalid credentials' };
    }
    return { user, error: null };
  }

  async getUser(id: string): Promise<User | null> {
    return this.users.find(u => u.id === id) || null;
  }
}

export const mockAuthService = new MockAuthService();