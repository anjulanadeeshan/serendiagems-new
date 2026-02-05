-- Create a table for legal pages (Privacy Policy, Terms of Service, etc.)
create table if not exists legal_pages (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  content text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on Row Level Security
alter table legal_pages enable row level security;

-- Create policies (assuming public read, admin write)
-- Allow everyone to read
create policy "Allow public read access"
  on legal_pages for select
  using (true);

-- Allow authenticated users (admins) to insert/update/delete
-- Adjust this policy based on your actual auth setup. 
-- For now allowing all authenticated users or just public for simplicity if auth is not fully set up, 
-- but ideally should be restrict to admin role.
create policy "Allow authenticated insert"
  on legal_pages for insert
  with check (auth.role() = 'authenticated');

create policy "Allow authenticated update"
  on legal_pages for update
  using (auth.role() = 'authenticated');

create policy "Allow authenticated delete"
  on legal_pages for delete
  using (auth.role() = 'authenticated');

-- Insert default rows if they don't exist
insert into legal_pages (slug, title, content)
values 
  ('privacy-policy', 'Privacy Policy', '<h2>Privacy Policy</h2><p>Coming soon...</p>'),
  ('terms-of-service', 'Terms of Service', '<h2>Terms of Service</h2><p>Coming soon...</p>')
on conflict (slug) do nothing;
