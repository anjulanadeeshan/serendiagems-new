-- Create a table for FAQs
create table if not exists faqs (
  id uuid default gen_random_uuid() primary key,
  question text not null,
  answer text not null,
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);


-- Insert default FAQs from the homepage
insert into faqs (question, answer, display_order)
values 
  ('Are your gemstones natural and treated?', 'All our gemstones are 100% natural. We clearly disclose any treatments. The majority of our collection consists of unheated and untreated stones, directly sourced from mines.', 1),
  ('Do you provide certification?', 'Yes, every gemstone comes with a certificate of authenticity from reputable gemological laboratories. We ensure transparency in every purchase.', 2),
  ('What is your return policy?', 'We offer a 30-day money-back guarantee. If you are not completely satisfied with your purchase, you can return it for a full refund or exchange, provided it is in its original condition.', 3),
  ('Do you ship internationally?', 'Yes, we offer secure, insured worldwide shipping. Shipping times vary by location, but we strive to deliver your precious gems as safely and quickly as possible.', 4),
  ('Can I request a custom jewelry design?', 'Absolutely! We specialize in bespoke jewelry design. Our master craftsmen can create unique pieces around the gemstone of your choice. Contact us to discuss your vision.', 5),
  ('How do I care for my gemstones?', 'Store your gemstones separately in soft pouches, clean them with mild soap and water, and avoid exposure to harsh chemicals. We provide detailed care instructions with every purchase.', 6)
on conflict do nothing;
