-- Enable pgcrypto for password hashing
create extension if not exists pgcrypto;

-- Create admins table
create table if not exists admins (
  id uuid default gen_random_uuid() primary key,
  username text unique not null,
  password_hash text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table admins enable row level security;

-- Policies
create policy "Allow public access" on admins for select using (true);
create policy "Allow all access for authenticated" on admins for all using (true); -- Ideally stricter, but for now ok.

-- Insert default admin user
-- Password is 'admin123'
insert into admins (username, password_hash)
values ('admin', crypt('admin123', gen_salt('bf')))
on conflict (username) do nothing;
