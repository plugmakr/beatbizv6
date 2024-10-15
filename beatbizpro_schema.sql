-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('admin', 'member')),
    profile_picture TEXT
);

-- Projects table
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    name TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL CHECK (status IN ('Planning', 'In Progress', 'Review', 'Completed')),
    deadline DATE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Clients table
CREATE TABLE clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    location TEXT,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Financial transactions table
CREATE TABLE financial_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    description TEXT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('income', 'expense')),
    date DATE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Beats table
CREATE TABLE beats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    title TEXT NOT NULL,
    genre TEXT,
    bpm INTEGER,
    key TEXT,
    price DECIMAL(10, 2),
    file_url TEXT,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Collaborations table
CREATE TABLE collaborations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    collaborator_id UUID REFERENCES users(id) ON DELETE CASCADE,
    role TEXT
);

-- Marketing campaigns table
CREATE TABLE marketing_campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    name TEXT NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE,
    status TEXT NOT NULL CHECK (status IN ('Draft', 'Scheduled', 'Active', 'Completed')),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Analytics table
CREATE TABLE analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    metric_name TEXT NOT NULL,
    metric_value DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Social media posts table
CREATE TABLE social_media_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    content TEXT NOT NULL,
    platform TEXT NOT NULL,
    scheduled_time TIMESTAMP WITH TIME ZONE,
    status TEXT NOT NULL CHECK (status IN ('Draft', 'Scheduled', 'Posted')),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Funnels table
CREATE TABLE funnels (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    name TEXT NOT NULL,
    description TEXT,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Funnel steps table
CREATE TABLE funnel_steps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    funnel_id UUID REFERENCES funnels(id) ON DELETE CASCADE,
    step_number INTEGER NOT NULL,
    step_type TEXT NOT NULL,
    content TEXT,
    url TEXT
);

-- Sound library table
CREATE TABLE sound_library (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('sample', 'preset', 'loop')),
    genre TEXT,
    file_url TEXT,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Website templates table
CREATE TABLE website_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    name TEXT NOT NULL,
    description TEXT,
    template_data JSONB
);

-- User websites table
CREATE TABLE user_websites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    template_id UUID REFERENCES website_templates(id),
    custom_domain TEXT,
    website_data JSONB
);

-- Create RLS Policies

-- Users table policy
CREATE POLICY "Users can only access their own data" ON users
    USING (auth.uid() = id);

-- Projects table policy
CREATE POLICY "Users can only access their own projects" ON projects
    USING (auth.uid() = user_id);

-- Clients table policy
CREATE POLICY "Users can only access their own clients" ON clients
    USING (auth.uid() = user_id);

-- Financial transactions table policy
CREATE POLICY "Users can only access their own financial transactions" ON financial_transactions
    USING (auth.uid() = user_id);

-- Beats table policy
CREATE POLICY "Users can only access their own beats" ON beats
    USING (auth.uid() = user_id);

-- Collaborations table policy
CREATE POLICY "Users can access collaborations they're part of" ON collaborations
    USING (auth.uid() IN (SELECT user_id FROM projects WHERE id = project_id) OR auth.uid() = collaborator_id);

-- Marketing campaigns table policy
CREATE POLICY "Users can only access their own marketing campaigns" ON marketing_campaigns
    USING (auth.uid() = user_id);

-- Analytics table policy
CREATE POLICY "Users can only access their own analytics" ON analytics
    USING (auth.uid() = user_id);

-- Social media posts table policy
CREATE POLICY "Users can only access their own social media posts" ON social_media_posts
    USING (auth.uid() = user_id);

-- Funnels table policy
CREATE POLICY "Users can only access their own funnels" ON funnels
    USING (auth.uid() = user_id);

-- Funnel steps table policy
CREATE POLICY "Users can access funnel steps for their funnels" ON funnel_steps
    USING (auth.uid() IN (SELECT user_id FROM funnels WHERE id = funnel_id));

-- Sound library table policy
CREATE POLICY "Users can only access their own sound library" ON sound_library
    USING (auth.uid() = user_id);

-- Website templates table policy (allow read for all, restrict write to admins)
CREATE POLICY "Anyone can read website templates" ON website_templates
    FOR SELECT USING (true);

-- User websites table policy
CREATE POLICY "Users can only access their own websites" ON user_websites
    USING (auth.uid() = user_id);

-- Enable Row Level Security on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE beats ENABLE ROW LEVEL SECURITY;
ALTER TABLE collaborations ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketing_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_media_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE funnels ENABLE ROW LEVEL SECURITY;
ALTER TABLE funnel_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE sound_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_websites ENABLE ROW LEVEL SECURITY;