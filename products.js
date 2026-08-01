const storeConfig = {
    name: "Bazeline",
    address: "Daulatpur, Khulna, Bangladesh",
    phone: "+8801700000000",
    email: "support@bazeline.com",
    socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        tiktok: "https://tiktok.com"
    }
};

const products = [
    {
        id: 1,
        name: "Classic Oxford White Shirt",
        category: "Shirts",
        price: 1850,
        oldPrice: 2200,
        discount: "16% OFF",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
        hoverImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
        description: "Premium quality cotton Oxford white shirt designed for formal and casual wear. Comfortable fit and breathable fabric."
    },
    {
        id: 2,
        name: "Casual Linen Sky Blue Shirt",
        category: "Shirts",
        price: 1650,
        oldPrice: 1950,
        discount: "15% OFF",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
        hoverImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
        description: "Lightweight sky blue linen shirt, perfect for summer outings and casual hangouts."
    },
    {
        id: 3,
        name: "Slim Fit Formal Black Pant",
        category: "Pants",
        price: 2400,
        oldPrice: 2900,
        discount: "17% OFF",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
        hoverImage: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=600",
        description: "Elegant slim-fit black formal trousers tailored for office wear and formal events."
    },
    {
        id: 4,
        name: "Casual Chino Pant - Khaki",
        category: "Pants",
        price: 2100,
        oldPrice: 2500,
        discount: "16% OFF",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=600",
        hoverImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
        description: "Comfortable stretchable khaki chino pants suitable for everyday casual styling."
    },
    {
        id: 5,
        name: "Classic Black Kurta",
        category: "Kurtas",
        price: 1950,
        oldPrice: 2500,
        discount: "22% OFF",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
        hoverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
        description: "Traditional yet modern black festive kurta crafted with fine fabric for special occasions."
    },
    {
        id: 6,
        name: "Minimalist Black T-Shirt",
        category: "T-Shirts",
        price: 850,
        oldPrice: 1100,
        discount: "23% OFF",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600",
        hoverImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
        description: "Soft cotton minimalist black t-shirt offering maximum comfort and durability."
    },
    {
        id: 7,
        name: "Executive Formal Navy Blue Suit Pant",
        category: "Pants",
        price: 2650,
        oldPrice: 3200,
        discount: "17% OFF",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600",
        hoverImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
        description: "Premium navy blue trousers crafted for a sharp, executive corporate look."
    },
    {
        id: 8,
        name: "Traditional Designer Festive Panjabi",
        category: "Kurtas",
        price: 2850,
        oldPrice: 3500,
        discount: "19% OFF",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
        hoverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
        description: "Exquisite festive designer panjabi for men, combining traditional aesthetics with modern comfort."
    },
    {
        id: 9,
        name: "Classic Urban Polo Shirt - Grey",
        category: "T-Shirts",
        price: 1250,
        oldPrice: 1600,
        discount: "22% OFF",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600",
        hoverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600",
        description: "Stylish urban polo shirt designed for casual smart-casual everyday wear."
    },
    {
        id: 10,
        name: "Checkered Flannel Casual Shirt",
        category: "Shirts",
        price: 1950,
        oldPrice: 2400,
        discount: "18% OFF",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600",
        hoverImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
        description: "Warm and cozy checkered flannel shirt, ideal for winter and stylish street style."
    }
];
