-- Create new 'fine-gems' category if it doesn't exist
insert into categories (name, slug, image_url)
values ('Fine Gems', 'fine-gems', 'https://res.cloudinary.com/di5fn6j5p/image/upload/v1709735999/fine-gems_placeholder.jpg')
on conflict (slug) do nothing;
