document.addEventListener("DOMContentLoaded", () => {
    // Set the current year in the copyright notice
    const yearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Example product data
    const products = [
        { name: "Classy White Shirt", price: "$20", description: "Elegant yet Comfortable White Shirt for Women ", imageUrl: "https://i.pinimg.com/originals/12/2d/a9/122da9ac8128ed4dc753c819d1014263.jpg" },
        { name: "Chilli Chicken Noodles Pack", price: "$30", description: "Japan’s Instant Classic.", imageUrl: "https://m.media-amazon.com/images/I/81M7gDq2UUL._SL1500_.jpg" },
        { name: "Leather Luxury Deigner Handbag", price: "$40", description: "The woven masterpiece: The Bottega Veneta Sardine." , imageUrl: "https://willieswallets.com/wp-content/uploads/2019/11/Sac-A-Main-Genuine-Leather-Luxury-Handbags-Women-Bags-Designer-Hand-bags-Women-Shoulder-Crossbody-Messenger-7.jpg"},
        { name: "Loose Fit Sweatshirt", price: "$50", description: "Comfortable, Cozy and Warm Street Style Winterwear for Men.", imageUrl:"https://th.bing.com/th/id/OIP.8mINOz4OOapuwzdqGzgRBgHaHZ?w=219&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        { name: "Lays", price: "$25", description: "Experience the bold taste of Lay's Magic Masala Chips." , imageUrl: "https://i5.walmartimages.com/asr/db63f3df-2cd1-4ec9-8f8f-25de3659205f_1.744bbfefd5cd025fa2fbaf25316d5951.jpeg"},
        { name: "IPhone 12 Pro Case", price: "$35", description: "Protect your phone in style with this sleek, ultra-slim phone cover, designed for a perfect fit." , imageUrl: "https://i5.walmartimages.com/asr/1ca85981-3270-4dde-948d-9759e820f971.3324955d8a508709e4c29b508a3d655f.jpeg"},
        { name: "Women's Tarten Plaid Skirt", price: "$45", description: "Add a touch of classic charm to your wardrobe with this chic tartan plaid skirt, perfect for any occasion.", imageUrl: "https://th.bing.com/th/id/OIP.MZyMETNU8FfqWxCQ2mNL-wHaHa?rs=1&pid=ImgDetMain" },
        { name: "LED Pillar Lights", price: "$55", description: "Enhance your décor with these stylish LED pillar lights, designed to provide a warm and inviting glow.", imageUrl: "https://th.bing.com/th/id/OIP.6sq7zZ4Om7EyGLC-kfSdJAAAAA?rs=1&pid=ImgDetMain" },
        { name: "Wireless Earbuds", price: "$60", description: "Compact earbuds with a charging case", imageUrl: "https://1.bp.blogspot.com/-MoSgTxw-ggY/XcAHv1PHRlI/AAAAAAAAAOE/A7meE-4lnwclWoZPKbMFaJoShaaTfDI7ACLcBGAsYHQ/s1600/AAAAA.jpg" },
        { name: "Volleyball", price: "$70", description: "Perfect for both indoor and outdoor play, this durable volleyball is designed to withstand rigorous games.", imageUrl: "https://th.bing.com/th/id/OIP.qEt797YE3W1HXI9QLCm6CAHaE8?rs=1&pid=ImgDetMain" },
        { name: "Women's suit", price: "$80", description: "Elegant and timeless, this traditional Indian suit set features intricate embroidery and premium fabric." , imageUrl: "https://cdn0.weddingwire.in/articles/images/7/0/4/1/img_51407/wedding-suits-for-women-anita-dongre-the-richness-of-gota-patti.jpg"},
        { name: "Cubist Painting", price: "$90", description: "This Cubist masterpiece reimagines traditional subjects through fragmented perspectives and artistic abstraction.", imageUrl: "https://i.pinimg.com/originals/95/0f/f0/950ff0804f25be28e7dcc0e5b7015717.jpg" },
        { name: "Anastasia Bevery Hills Eyeshadow Palatte", price: "$25", description: "Unlock your creativity with the Anastasia Beverly Hills Eyeshadow Palette, featuring a stunning range of richly pigmented shades" , imageUrl: "https://i.pinimg.com/originals/98/83/d4/9883d4fd85ee9563f4bfab1576efe2a6.jpg"},
        { name: "Fragrance", price: "$35", description: "Let the magic of this captivating fragrance envelop you in a world of beauty and elegance." , imageUrl: "https://th.bing.com/th/id/OIP.BIHYgu-hkKdBmxYREZb78AHaLH?&rs=1&pid=ImgDetMain"},
        { name: "Amethyst Exfoliating Body Scrub", price: "$45", description: "Elevate your self-care with the Amethyst Exfoliating Body Scrub, perfect for achieving soft, supple, and glowing skin." , imageUrl: "https://i.pinimg.com/originals/c3/8f/2f/c38f2fdf034938e693b7f1c3267a31eb.jpg"},
        { name: "Headphones", price: "$140", description: " listen to heavy bass or rock & roll, here it is what you need", imageUrl: "https://www.bhphotovideo.com/images/images2500x2500/hp_hph200gs_stereo_gaming_headset_with_1598138.jpg" }
    ];

    function displayProducts() {
        const productGrid = document.querySelector('.product-grid'); // This targets the div where your products will appear
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.imageUrl}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.price}</div>
                    <div class="product-description">${product.description}</div>
                </div>
            `;
            productGrid.appendChild(productCard); // Adds the product card to the page
        });
    }

    displayProducts();

    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const closeBtns = document.querySelectorAll(".close");

    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "block";
    });

    signupBtn.addEventListener("click", () => {
        signupModal.style.display = "block";
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target === loginModal || event.target === signupModal) {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        }
    });
});
