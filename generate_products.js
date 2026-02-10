// Script to generate product detail pages
const fs = require('fs');
const path = require('path');

const products = [
  {
    id: 2,
    name: "Cosmic Shiva - The Destroyer & Transformer",
    slug: "cosmic-shiva",
    category: "Spiritual",
    price: 2299,
    originalPrice: 2799,
    rating: 4.9,
    reviews: 156,
    image: "poster_lord_shiva_1770750319627.png",
    description: "Mesmerizing cosmic interpretation of Lord Shiva in deep meditation. Features swirling galaxies, glowing third eye, and sacred geometry in stunning blues, purples, and electric cyan colors.",
    longDescription: "Lord Shiva, the supreme deity of transformation and meditation, is portrayed in this breathtaking cosmic artwork. The design merges ancient spirituality with modern cosmic aesthetics, featuring Shiva in his meditative form surrounded by swirling galaxies and celestial energy. The glowing third eye symbolizes divine wisdom and inner vision, while the intricate sacred geometry patterns represent the mathematical perfection of the universe.",
    features: [
      "Premium metal print with cosmic design",
      "Magnetic mounting system included",
      "UV-resistant and waterproof coating",
      "Size: 18 x 24 inches",
      "Limited edition design"
    ],
    reviewsData: [
      { name: "Arjun Patel", rating: 5, date: "1 week ago", text: "Absolutely mesmerizing! The cosmic theme is perfectly executed. The colors are vibrant and the detail is incredible. It's become the centerpiece of my meditation room." },
      { name: "Meera Singh", rating: 5, date: "2 weeks ago", text: "This is art at its finest. The way they've blended traditional Shiva imagery with modern cosmic elements is genius. Quality is top-notch!" },
      { name: "Vikram Reddy", rating: 4.5, date: "3 weeks ago", text: "Beautiful poster with amazing colors. The metal finish gives it a premium look. Slightly pricey but worth every rupee." }
    ]
  },
  {
    id: 3,
    name: "Lord Krishna - The Divine Flutist",
    slug: "lord-krishna",
    category: "Spiritual",
    price: 1999,
    originalPrice: 2499,
    rating: 4.7,
    reviews: 98,
    image: "poster_lord_krishna_1770750335397.png",
    description: "Enchanting portrayal of Lord Krishna playing the flute in a moonlit forest. Rich blues, golds, and emerald greens create a mystical atmosphere with glowing fireflies and divine presence.",
    longDescription: "Lord Krishna, the divine flutist and embodiment of love and joy, is captured in this enchanting artwork. Set in a moonlit forest with glowing fireflies, the piece evokes the magical nights of Vrindavan where Krishna's flute music would mesmerize all of creation. The rich color palette of blues, golds, and emerald greens creates a mystical atmosphere that transports you to a realm of divine beauty and serenity.",
    features: [
      "Museum-quality metal print",
      "Easy magnetic wall mounting",
      "Fade-resistant premium coating",
      "Size: 18 x 24 inches",
      "Handcrafted in India"
    ],
    reviewsData: [
      { name: "Lakshmi Iyer", rating: 5, date: "5 days ago", text: "The colors are so soothing and beautiful. Perfect for my pooja room. The quality exceeded my expectations!" },
      { name: "Rahul Sharma", rating: 4.5, date: "2 weeks ago", text: "Lovely artwork with great attention to detail. The moonlit forest setting is magical. Highly recommended!" },
      { name: "Divya Nair", rating: 4.5, date: "1 month ago", text: "Beautiful representation of Krishna. The metal finish adds a modern touch while keeping the spiritual essence intact." }
    ]
  },
  {
    id: 4,
    name: "Goddess Durga - Divine Power",
    slug: "goddess-durga",
    category: "Spiritual",
    price: 2499,
    originalPrice: 2999,
    rating: 5.0,
    reviews: 203,
    image: "poster_goddess_durga_1770750353530.png",
    description: "Powerful depiction of Goddess Durga riding her majestic lion with ten arms wielding divine weapons. Vibrant reds, golds, and magentas with dramatic lighting create an empowering presence.",
    longDescription: "Goddess Durga, the embodiment of Shakti and divine feminine power, is magnificently portrayed in this powerful artwork. Riding her majestic lion with ten arms wielding divine weapons, she represents the triumph of good over evil. The vibrant reds, golds, and magentas combined with dramatic lighting create an empowering presence that inspires strength and courage. This piece celebrates the divine feminine energy that protects and nurtures the universe.",
    features: [
      "Premium metal construction",
      "Magnetic mounting hardware",
      "Scratch-proof surface coating",
      "Size: 18 x 24 inches",
      "Bestseller design"
    ],
    reviewsData: [
      { name: "Anjali Gupta", rating: 5, date: "3 days ago", text: "Absolutely stunning! The power and grace of Maa Durga is perfectly captured. This is my favorite purchase ever!" },
      { name: "Sanjay Kumar", rating: 5, date: "1 week ago", text: "Incredible quality and the colors are so vibrant! Bought it for Navratri and everyone who visits compliments it." },
      { name: "Priya Desai", rating: 5, date: "2 weeks ago", text: "The best Durga artwork I've seen. The detail in each weapon and the lion is amazing. Worth every penny!" }
    ]
  },
  {
    id: 5,
    name: "Lord Hanuman - Strength & Devotion",
    slug: "lord-hanuman",
    category: "Spiritual",
    price: 1999,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 142,
    image: "poster_lord_hanuman_1770750369439.png",
    description: "Heroic portrayal of Lord Hanuman carrying the mountain of medicinal herbs. Bold oranges, reds, and golds against a sunrise background showcase strength and unwavering devotion.",
    longDescription: "Lord Hanuman, the epitome of strength, devotion, and selfless service, is heroically depicted carrying the Sanjeevani mountain. This iconic moment from the Ramayana showcases Hanuman's unwavering dedication to Lord Rama. The bold oranges, reds, and golds against a dramatic sunrise background symbolize hope, power, and divine intervention. This artwork serves as a daily reminder of the strength that comes from devotion and the power of faith.",
    features: [
      "High-definition metal print",
      "Magnetic wall mounting system",
      "Weather-resistant coating",
      "Size: 18 x 24 inches",
      "Premium quality guaranteed"
    ],
    reviewsData: [
      { name: "Ramesh Yadav", rating: 5, date: "4 days ago", text: "Jai Hanuman! This poster radiates positive energy. The colors are bold and inspiring. Excellent quality!" },
      { name: "Kavita Joshi", rating: 5, date: "1 week ago", text: "Perfect for my son's room. The heroic depiction motivates him every day. Great quality and fast delivery!" },
      { name: "Aditya Verma", rating: 4.5, date: "3 weeks ago", text: "Beautiful artwork with powerful imagery. The metal finish is premium. Slightly expensive but worth it." }
    ]
  },
  {
    id: 6,
    name: "Naruto Uzumaki - Rasengan Power",
    slug: "naruto-rasengan",
    category: "Anime",
    price: 1799,
    originalPrice: 2299,
    rating: 4.9,
    reviews: 287,
    image: "poster_naruto_1770750385891.png",
    description: "Dynamic action shot of Naruto performing his signature Rasengan jutsu. Vibrant oranges and blues with dramatic speed lines capture the energy and determination of the beloved ninja.",
    longDescription: "Naruto Uzumaki, the beloved ninja who never gives up, is captured in this dynamic action shot performing his signature Rasengan jutsu. The vibrant oranges and blues with dramatic speed lines perfectly capture the explosive energy and unwavering determination that define Naruto's character. This artwork celebrates the journey from underdog to hero, embodying the series' core message: never give up on your dreams.",
    features: [
      "Premium anime metal poster",
      "Magnetic mounting included",
      "Vibrant color reproduction",
      "Size: 18 x 24 inches",
      "Officially inspired design"
    ],
    reviewsData: [
      { name: "Rohan Mehta", rating: 5, date: "2 days ago", text: "Dattebayo! This is exactly what I wanted. The Rasengan looks so dynamic and the colors pop! Best anime poster I own." },
      { name: "Sneha Kapoor", rating: 5, date: "1 week ago", text: "Bought this for my brother's birthday and he absolutely loves it! The quality is amazing and it looks so cool on his wall." },
      { name: "Karthik Rao", rating: 4.5, date: "2 weeks ago", text: "Great poster for any Naruto fan. The action pose is perfect and the metal finish makes it look premium. Believe it!" }
    ]
  }
];

// HTML template function
function generateProductHTML(product) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '☆' : '');
  
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${product.description}">
    <title>${product.name} | Design Hub</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="../css/styles.css">

    <style>
        .product-container { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-12); margin-bottom: var(--space-16); }
        .size-options { display: flex; gap: var(--space-3); margin-bottom: var(--space-6); }
        .size-option { padding: var(--space-3) var(--space-5); border: 2px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; transition: all var(--transition-fast); font-weight: 600; }
        .size-option:hover, .size-option.active { border-color: var(--color-accent-primary); background: var(--color-bg-elevated); }
        .quantity-selector { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-6); }
        .quantity-selector button { width: 40px; height: 40px; border: none; background: var(--color-bg-elevated); color: var(--color-text-primary); border-radius: var(--radius-md); cursor: pointer; font-size: var(--text-lg); font-weight: 700; transition: all var(--transition-fast); }
        .quantity-selector button:hover { background: var(--color-accent-primary); color: var(--color-text-inverse); }
        .quantity-selector input { width: 60px; text-align: center; padding: var(--space-3); background: var(--color-bg-elevated); border: 1px solid var(--color-border); border-radius: var(--radius-md); color: var(--color-text-primary); font-weight: 600; }
        .pincode-checker { display: flex; gap: var(--space-3); margin-bottom: var(--space-6); }
        .pincode-checker input { flex: 1; }
        .features-list { list-style: none; margin: var(--space-6) 0; }
        .features-list li { padding: var(--space-3) 0; border-bottom: 1px solid var(--color-border); color: var(--color-text-secondary); display: flex; align-items: center; gap: var(--space-3); }
        .features-list li:before { content: "✓"; color: var(--color-accent-primary); font-weight: 700; }
        .review-item { padding: var(--space-5); background: var(--color-bg-secondary); border: 1px solid var(--color-border); border-radius: var(--radius-lg); margin-bottom: var(--space-4); }
        .review-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-3); }
        .reviewer-name { font-weight: 600; color: var(--color-text-primary); }
        .review-date { font-size: var(--text-sm); color: var(--color-text-tertiary); }
        @media (max-width: 768px) { .product-container { grid-template-columns: 1fr; gap: var(--space-8); } }
    </style>
</head>

<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="../index.html" class="logo">Design Hub</a>
                <div class="search-container">
                    <span class="search-icon">🔍</span>
                    <input type="text" class="search-input" placeholder="Search posters... (⌘K)" onclick="openSpotlight()" readonly>
                </div>
                <nav class="nav">
                    <ul class="nav-links">
                        <li><a href="../index.html" class="nav-link">Home</a></li>
                        <li><a href="../index.html#featured" class="nav-link">Shop</a></li>
                    </ul>
                    <div class="nav-actions">
                        <button class="btn-icon" onclick="openSpotlight()" aria-label="Search">🔍</button>
                        <button class="btn-icon" onclick="window.location.href='cart.html'" aria-label="Cart">
                            🛒
                            <span class="badge" style="display: none;">0</span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <!-- Breadcrumb -->
    <div class="container" style="padding-top: var(--space-8);">
        <nav style="font-size: var(--text-sm); color: var(--color-text-secondary);">
            <a href="../index.html" style="color: var(--color-text-secondary);">Home</a> /
            <a href="../index.html#${product.category.toLowerCase()}" style="color: var(--color-text-secondary);">${product.category}</a> /
            <span style="color: var(--color-text-primary);">${product.name.split(' - ')[0]}</span>
        </nav>
    </div>

    <!-- Product Details -->
    <main class="container" style="padding: var(--space-8) var(--space-6);">
        <div class="product-container">
            <!-- Product Gallery -->
            <div class="product-gallery">
                <div class="gallery-main">
                    <img src="../assets/posters/${product.image}" alt="${product.name}" id="main-image">
                </div>
                <div class="gallery-thumbnails">
                    ${[1,2,3,4].map((i, idx) => `
                    <div class="gallery-thumb ${idx === 0 ? 'active' : ''}">
                        <img src="../assets/posters/${product.image}" alt="View ${i}">
                    </div>`).join('')}
                </div>
            </div>

            <!-- Product Info -->
            <div>
                <div style="display: inline-block; background: var(--color-bg-elevated); padding: var(--space-2) var(--space-4); border-radius: var(--radius-md); margin-bottom: var(--space-4);">
                    <span style="color: var(--color-accent-primary); font-weight: 600; font-size: var(--text-sm); text-transform: uppercase; letter-spacing: 0.5px;">${product.category} Collection</span>
                </div>

                <h1 style="font-size: var(--text-4xl); margin-bottom: var(--space-4);">${product.name}</h1>

                <div style="display: flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-6);">
                    <div class="card-rating">
                        <div class="stars" style="font-size: var(--text-xl);">${stars}</div>
                        <span style="color: var(--color-text-secondary);">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <span style="color: var(--color-success); font-weight: 600;">✓ In Stock</span>
                </div>

                <div style="display: flex; align-items: baseline; gap: var(--space-4); margin-bottom: var(--space-8);">
                    <span style="font-size: var(--text-5xl); font-weight: 700; color: var(--color-text-primary);">₹${product.price.toLocaleString('en-IN')}</span>
                    <span style="font-size: var(--text-2xl); color: var(--color-text-tertiary); text-decoration: line-through;">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                    <span style="background: var(--color-accent-secondary); color: white; padding: var(--space-2) var(--space-4); border-radius: var(--radius-md); font-weight: 700;">${discount}% OFF</span>
                </div>

                <p style="color: var(--color-text-secondary); line-height: 1.8; margin-bottom: var(--space-8);">${product.description}</p>

                <!-- Size Selection -->
                <div style="margin-bottom: var(--space-6);">
                    <label style="display: block; font-weight: 600; margin-bottom: var(--space-3);">Select Size:</label>
                    <div class="size-options">
                        <div class="size-option active">18 x 24"</div>
                        <div class="size-option">24 x 36"</div>
                        <div class="size-option">30 x 40"</div>
                        <div class="size-option">36 x 48"</div>
                    </div>
                </div>

                <!-- Quantity -->
                <div style="margin-bottom: var(--space-6);">
                    <label style="display: block; font-weight: 600; margin-bottom: var(--space-3);">Quantity:</label>
                    <div class="quantity-selector">
                        <button onclick="decrementQty()">−</button>
                        <input type="number" id="product-qty" value="1" min="1" max="10" readonly>
                        <button onclick="incrementQty()">+</button>
                    </div>
                </div>

                <!-- Pincode Checker -->
                <div style="margin-bottom: var(--space-8);">
                    <label style="display: block; font-weight: 600; margin-bottom: var(--space-3);">Check Delivery:</label>
                    <div class="pincode-checker">
                        <input type="text" class="input" id="pincode-input" placeholder="Enter pincode" maxlength="6">
                        <button class="btn btn-secondary" onclick="checkPincode()">Check</button>
                    </div>
                    <div id="pincode-result"></div>
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: var(--space-4); margin-bottom: var(--space-8);">
                    <button class="btn btn-primary" style="flex: 1; padding: var(--space-4);" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="btn btn-outline" style="flex: 1; padding: var(--space-4);" onclick="buyNow()">Buy Now</button>
                </div>

                <!-- Features -->
                <div style="background: var(--color-bg-secondary); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-6);">
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-4);">Product Features</h3>
                    <ul class="features-list">
                        ${product.features.map(f => `<li>${f}</li>`).join('\n                        ')}
                    </ul>
                </div>
            </div>
        </div>

        <!-- Description & Reviews Tabs -->
        <div style="margin-top: var(--space-16);">
            <div style="display: flex; gap: var(--space-6); border-bottom: 2px solid var(--color-border); margin-bottom: var(--space-8);">
                <button class="tab-btn active" onclick="showTab('description')" style="padding: var(--space-4) var(--space-6); background: none; border: none; color: var(--color-text-secondary); font-weight: 600; cursor: pointer; border-bottom: 3px solid transparent; transition: all var(--transition-fast);">Description</button>
                <button class="tab-btn" onclick="showTab('reviews')" style="padding: var(--space-4) var(--space-6); background: none; border: none; color: var(--color-text-secondary); font-weight: 600; cursor: pointer; border-bottom: 3px solid transparent; transition: all var(--transition-fast);">Reviews (${product.reviews})</button>
            </div>

            <!-- Description Tab -->
            <div id="description-tab" class="tab-content">
                <h2 style="font-size: var(--text-3xl); margin-bottom: var(--space-6);">About This Poster</h2>
                <p style="color: var(--color-text-secondary); line-height: 1.8; margin-bottom: var(--space-6);">${product.longDescription}</p>
                <h3 style="font-size: var(--text-2xl); margin-bottom: var(--space-4);">Why Choose Metal Posters?</h3>
                <p style="color: var(--color-text-secondary); line-height: 1.8;">Our metal posters offer superior durability and visual impact compared to traditional paper prints. The metal surface enhances color vibrancy and provides a unique, premium finish that elevates any space. The magnetic mounting system makes installation effortless – no drilling, no damage to walls, and easy to reposition whenever you desire.</p>
            </div>

            <!-- Reviews Tab -->
            <div id="reviews-tab" class="tab-content" style="display: none;">
                <h2 style="font-size: var(--text-3xl); margin-bottom: var(--space-6);">Customer Reviews</h2>
                ${product.reviewsData.map(review => `
                <div class="review-item">
                    <div class="review-header">
                        <div>
                            <div class="reviewer-name">${review.name}</div>
                            <div class="stars" style="color: var(--color-accent-primary); margin-top: var(--space-1);">${'★'.repeat(Math.floor(review.rating))}${review.rating % 1 >= 0.5 ? '☆' : ''}</div>
                        </div>
                        <div class="review-date">${review.date}</div>
                    </div>
                    <p style="color: var(--color-text-secondary); line-height: 1.6;">${review.text}</p>
                </div>`).join('\n                ')}
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer style="background: var(--color-bg-tertiary); padding: var(--space-12) 0; margin-top: var(--space-16); border-top: 1px solid var(--color-border);">
        <div class="container text-center">
            <p style="color: var(--color-text-tertiary); font-size: var(--text-sm);">© 2026 Design Hub. All rights reserved. Made with ❤️ in India.</p>
        </div>
    </footer>

    <!-- Spotlight Search Modal -->
    <div class="spotlight-backdrop" id="spotlight-backdrop"></div>
    <div class="spotlight-modal" id="spotlight-modal">
        <div class="spotlight-search">
            <input type="text" class="spotlight-input" id="spotlight-input" placeholder="Search products..." autocomplete="off">
        </div>
        <div class="spotlight-results" id="spotlight-results">
            <p style="padding: 1rem; color: var(--color-text-tertiary);">Start typing to search...</p>
        </div>
    </div>

    <!-- Scripts -->
    <script src="../js/script.js"></script>
    <script>
        let quantity = 1;
        function incrementQty() { if (quantity < 10) { quantity++; document.getElementById('product-qty').value = quantity; } }
        function decrementQty() { if (quantity > 1) { quantity--; document.getElementById('product-qty').value = quantity; } }
        function buyNow() { addToCart(${product.id}); setTimeout(() => { window.location.href = 'cart.html'; }, 500); }
        function showTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
            document.querySelectorAll('.tab-btn').forEach(btn => { btn.style.borderBottomColor = 'transparent'; btn.style.color = 'var(--color-text-secondary)'; });
            document.getElementById(tabName + '-tab').style.display = 'block';
            event.target.style.borderBottomColor = 'var(--color-accent-primary)';
            event.target.style.color = 'var(--color-text-primary)';
        }
        document.querySelectorAll('.size-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
            });
        });
    </script>
</body>
</html>`;
}

// Generate all product pages
products.forEach(product => {
  const html = generateProductHTML(product);
  const filename = path.join(__dirname, 'pages', `product-${product.slug}.html`);
  fs.writeFileSync(filename, html, 'utf8');
  console.log(`✓ Created ${filename}`);
});

console.log('\n✅ All product pages generated successfully!');
