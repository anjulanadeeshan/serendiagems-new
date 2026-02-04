-- 1. Updates for the 'orders' table to match Checkout Form
-- We need to store the detailed address components and the alternative phone number.

ALTER TABLE public.orders 
ADD COLUMN IF NOT EXISTS alt_phone text,
ADD COLUMN IF NOT EXISTS city text,
ADD COLUMN IF NOT EXISTS zip_code text,
ADD COLUMN IF NOT EXISTS country text; -- Included in case you enable the country field later

-- Note: 'shipping_address' can be used to store the street/line 1 address, or we can rename it for clarity (optional)
-- ALTER TABLE public.orders RENAME COLUMN shipping_address TO address_line1;


-- 2. Updates for the 'order_items' table
-- Cart items have 'weight' and 'cut' properties which should be preserved in the order history.

ALTER TABLE public.order_items
ADD COLUMN IF NOT EXISTS weight text,
ADD COLUMN IF NOT EXISTS cut text;
