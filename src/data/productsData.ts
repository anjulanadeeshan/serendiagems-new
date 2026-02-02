export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    weight: string;
    origin: string;
    shape: string;
    treatment: string;
    clarity?: string;
    color?: string;
    cut: string;
    badge?: string | null;
    badgeColor?: string;
    images: string[];
    category?: string;
}

export const productsData: Record<string, Product> = {
    "1": {
        id: "1",
        name: "Royal Blue Ceylon Sapphire",
        price: 4250,
        description:
            "An exceptional 2.14 carat oval cut sapphire featuring the coveted 'Royal Blue' hue. Sourced ethically from the mines of Ratnapura, Sri Lanka. This stone exhibits excellent clarity and brilliance, perfect for a custom engagement ring or investment piece.",
        weight: "2.14 Carats",
        origin: "Sri Lanka (Ceylon)",
        shape: "Oval Mixed Cut",
        treatment: "Heat Only",
        clarity: "VVS1 - Eye Clean",
        color: "Royal Blue",
        cut: "Cushion Cut",
        badge: "New Arrival",
        badgeColor: "bg-[#1152d4]/90",
        category: "Blue Sapphire",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA1sJnNhNtfLbXBhElgbgR17gaY_3_0-7DJ2p_fK8ws1QYJh4UoTEJECmQj_v0zTKF-pEMLGrisuXDapcH5yIyTWLethnxehIrp3inS-Z_zjeSkHDqLPCFwNTgaplcDq30J12aWfa8uLIqJx-o66ny9wWHF4lAxaAKyVQF0LEw3cIV7nQdhWEwUzOWgcmlO9IIfkjGHJGqElo9Q1aHBkpkSgX6scVfZiIif1hgiP78ccTOwQYuh1lfDrL3V1sc1bRLLvOCwU0T7pdhf",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAReCZfFTL2LhS4iRr9s1ms2j5zVq0wmarkAb_Tl90KMaufmN6s1RqNVnowfO7IFEfAwBPFpjc_AG-XnwXEtAjulRrphJsWMPM9-2AoklyM2FB2WndxiVhShxv5YPdwUN_QafCViT-24W6Hlv43JEsGB1aXn945xwFnSJMeh8r-4M6M60nQsljLLR8GY3Q-oBVuq5SPA4oH7N7uJHeoi1iciYkWuBnOhPrmPqLQZPAVLI99goCQlNGEUF_9cYrEy7-rL6PG-Rz_-ucV",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDEGUsWy2nWK546AK1RhkXq2KfjX4-y4MrumAkgdbD3ODV-Sx7jKLH4B0NK5TMgNVk6_W3gyoFvLPGsE7UHIExpUpbI0FQYXpEYf42gY82L-XjvLx0AwHZA0-cGjPJhwlLexCkhqTf1P73C-7H4yDbibEAi0ymLPfgTB_x9zmNigKqITJEM7dNWbPdM2Nm63QiryHcnv94cAeu66OQAQYNC1rplyIOQ98frSkMAovvWz6VhU9oLX0lUmo5ZVb0Ptpn5DqH_r4cSVc5e",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCOXlwSROq3tHlSoOQ16ixLTGzh2sXKqt5vuaKUsjEEwCr-YXc1rZMPShgFlicA933U_bQMwo-LmtOnIplAb-ERr8LGTaL-42SY7rHr8LMNnOdQw6SvSsOfP-z3kcXJL8vOIIWQGU-B3amMAA2Xu4zqe1ZhYGdNloXEK0XfEdOS7hI1nm3_cGNSWPja4251OowDDklCxWjrZccAYDj2813ILay9mYyaanPm9uyrGk6bmBdUTzGnGZMUh0h5YmpETGK7zzboL2Pf3sI4",
        ],
    },
    "2": {
        id: "2",
        name: "Vivid Pink Sapphire",
        price: 3100,
        description:
            "A stunning 1.85 carat pink sapphire with exceptional vivid color saturation. This elegant oval cut gemstone showcases the finest pink hues found in Ceylon sapphires. Heat-treated to enhance its natural beauty while maintaining its authentic character.",
        weight: "1.85 Carats",
        origin: "Sri Lanka (Ceylon)",
        shape: "Oval Cut",
        treatment: "Heated",
        clarity: "VS - Very Good",
        color: "Vivid Pink",
        cut: "Oval Cut",
        badge: null,
        category: "Pink Sapphire",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD5sfdfJiltsSqtGvE9joOFi4Dh_od0RuJU6B2YlKJWzE24608OQFnYC_BW5-4PeSbYKzHqyPAZvo9Q6i1Bwdw7eTLPrU973Syhh2iu932oStYs4uHeibPy7Qfv4LCeSxD3LIc9va-FsHT9PXvY1rAplQdiEBowEcE9ty_sKqAVsMCb6ND8cF10rjN7rgFZbX0Foz_78aHYiTFnengd5ERiZHitV3ZREe4778XuFs9zaNlMDiBcZVQZsmxLtWpbKctj02Uz_eSnhorw",
        ],
    },
    "3": {
        id: "3",
        name: "Burma Ruby",
        price: 8500,
        description:
            "An extraordinary 1.50 carat round Burmese ruby displaying the legendary 'pigeon blood' red color. This natural, unheated ruby is exceptionally rare and represents the pinnacle of ruby quality. A true collector's gemstone with impeccable provenance.",
        weight: "1.50 Carats",
        origin: "Myanmar (Burma)",
        shape: "Round Brilliant Cut",
        treatment: "Natural",
        clarity: "VVS - Excellent",
        color: "Pigeon Blood Red",
        cut: "Round Cut",
        badge: "Rare Find",
        badgeColor: "bg-rose-600/90",
        category: "Ruby",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCVxs5ull0jDUMHtPnuxvBBjewTLf1Fj-FSviqCeiDqrZCcXaLqQR4LcHdpi0R2eOAO_x8_GOmxRI6_3iAE3Obap4miXdRap9rK3MBtH6mZ5Fwk6YH-qjb6AWLzkhCv_YESy_jsR7NFAR7e1kMc4cgaqHZk2UpXyxI42oK3LkkR352jAYO8alT_luQWyRGCp0FKSBumZiBylVB4f81iyfZTX4ZFhJOoXUxPsEWVorUqcngLKO5cQN8RD7258SVUo4y6jiNlBCyyoabn",
        ],
    },
    "4": {
        id: "4",
        name: "Canary Yellow Sapphire",
        price: 5900,
        description:
            "A magnificent 3.05 carat yellow sapphire with a captivating canary yellow hue. The emerald cut showcases the stone's exceptional clarity and vibrant color. This natural, unheated sapphire is perfect for statement jewelry or as an astrological gemstone.",
        weight: "3.05 Carats",
        origin: "Sri Lanka (Ceylon)",
        shape: "Emerald Cut",
        treatment: "Natural",
        clarity: "VS1 - Eye Clean",
        color: "Canary Yellow",
        cut: "Emerald Cut",
        badge: null,
        category: "Yellow Sapphire",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDjv6ImtDP-t7kDwju13E6IKkZ3jfeUtcL5rid5QQQgimdNGkQCG6wv9oZLClEvmKbCU_T1Zel9qRbKyj15vY_k_v6jQbeNpZQVbE9hU1BuznXomNMYQO13jgNJM9EiTt_i9lHSmv59kekCixfa2VbCkppsDxhrnGiFtJsnkUpXrE8RHYblfJ0pXN9xf_J2b_VwZk8IAt8qi1kAlheafHCLxOexYP8Ftk949Ftx4RHItdmLulfFmdS-DDSLNYZyMYYIrSDlu1oSpgeq",
        ],
    },
    "5": {
        id: "5",
        name: "Peacock Teal Sapphire",
        price: 2800,
        description:
            "A mesmerizing 1.95 carat teal sapphire showcasing a unique peacock-inspired color blend of blue and green. The radiant cut enhances the stone's exceptional brilliance and color play. Heat-treated to bring out its captivating hues.",
        weight: "1.95 Carats",
        origin: "Sri Lanka (Ceylon)",
        shape: "Radiant Cut",
        treatment: "Heated",
        clarity: "VS - Very Good",
        color: "Peacock Teal",
        cut: "Radiant Cut",
        badge: null,
        category: "Teal Sapphire",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAEzPVAdFo6FpL8C7hF0agP2j7io8_1pE8ky1bEIsj79zqLE_75fQfU0ojTu7VUnzzEwK-iWt26ZlOPIUGc2Mw6xqRyFgAKnal2j-vK-PmKV4EZ4CGW1VsvNg3h2COYKMzOz4-_UK3tZhDgbO7yGqUWA80Fh-BmlKUjI1VMr3IF19KNbCT6Uh39TlkAVgnQtfifgs8ZWiQHXY507J7Mr9-V-_k8MLc1mR-P7YAS3r1L2QxA01ah9gA94-LPzBI_gYHiLeidQh0XfBAp",
        ],
    },
    "6": {
        id: "6",
        name: "Lavender Spinel",
        price: 1950,
        description:
            "A delightful 2.50 carat lavender spinel with excellent transparency and a soft, romantic color. The cushion cut perfectly complements the stone's gentle hue. This natural, untreated spinel is a rare and beautiful alternative to traditional gemstones.",
        weight: "2.50 Carats",
        origin: "Sri Lanka (Ceylon)",
        shape: "Cushion Cut",
        treatment: "Natural",
        clarity: "VVS - Excellent",
        color: "Lavender",
        cut: "Cushion Cut",
        badge: null,
        category: "Spinel",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBmzxa1cH3xwJRwDYpDU-w-6f3z1zo5cxDe79b47UwIA3rN409Z5U8Jc6KeGCjnK3KNdKo_MdM27hzNtJFUV11AvGFWL-1U27J3uV-dV2PSPd8oIAFhoc8TvppX_q97uZWiKzL7e43XvLN986-kroeWk__ibiVMJNPDx1wkIDyJKYh2UIrnUKJMZSeFCCkJji1veENwiRJRqgbLcgg_0ckHpluFJowsomCZKQT6EmyaQViNIE9VkBtvvDIDDtYOPHuI29nhipY2Vji7",
        ],
    },
};

// Helper function to get all products as an array
export const getAllProducts = (): Product[] => {
    return Object.values(productsData);
};

// Helper function to get a product by ID
export const getProductById = (id: string): Product | undefined => {
    return productsData[id];
};

// Helper function to get similar products (same category, excluding current product)
export const getSimilarProducts = (productId: string, limit: number = 4): Product[] => {
    const currentProduct = productsData[productId];
    if (!currentProduct) return [];

    const allProducts = getAllProducts();
    const similarProducts = allProducts.filter(
        (product) =>
            product.id !== productId &&
            (product.category === currentProduct.category ||
                product.treatment === currentProduct.treatment)
    );

    return similarProducts.slice(0, limit);
};
