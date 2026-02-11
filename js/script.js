// ============================================
// Design Hub - E-commerce JavaScript
// Core Functionality & State Management
// ============================================

// ============================================
// PRODUCT DATA
// ============================================
const products = [
  // Spiritual Category
  {
    id: 1,
    name: "Lord Ganesha - Wisdom & New Beginnings",
    slug: "lord-ganesha",
    category: "Spiritual",
    price: 1999,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 127,
    inStock: true,
    stock: 15,
    image: "/assets/posters/poster_lord_ganesha_1770750300909.png",
    images: [
      "/assets/posters/poster_lord_ganesha_1770750300909.png",
      "/assets/posters/poster_lord_ganesha_1770750300909.png",
      "/assets/posters/poster_lord_ganesha_1770750300909.png",
      "/assets/posters/poster_lord_ganesha_1770750300909.png"
    ],
    description: "Premium metal poster featuring Lord Ganesha in a modern artistic interpretation with vibrant oranges, golds, and purples. Sacred geometry patterns and lotus flowers create a contemporary minimalist style while honoring traditional elements.",
    features: [
      "High-quality metal print with vibrant colors",
      "Ready to hang with magnetic mounting system",
      "Scratch and fade resistant coating",
      "Size: 18 x 24 inches",
      "Made in India with premium materials"
    ],
    tags: ["ganesha", "spiritual", "hindu", "wisdom", "meditation"]
  },
  {
    id: 2,
    name: "Cosmic Shiva - The Destroyer & Transformer",
    slug: "cosmic-shiva",
    category: "Spiritual",
    price: 2299,
    originalPrice: 2799,
    rating: 4.9,
    reviews: 156,
    inStock: true,
    stock: 12,
    image: "/assets/posters/poster_lord_shiva_1770750319627.png",
    images: [
      "/assets/posters/poster_lord_shiva_1770750319627.png",
      "/assets/posters/poster_lord_shiva_1770750319627.png",
      "/assets/posters/poster_lord_shiva_1770750319627.png",
      "/assets/posters/poster_lord_shiva_1770750319627.png"
    ],
    description: "Mesmerizing cosmic interpretation of Lord Shiva in deep meditation. Features swirling galaxies, glowing third eye, and sacred geometry in stunning blues, purples, and electric cyan colors.",
    features: [
      "Premium metal print with cosmic design",
      "Magnetic mounting system included",
      "UV-resistant and waterproof coating",
      "Size: 18 x 24 inches",
      "Limited edition design"
    ],
    tags: ["shiva", "spiritual", "cosmic", "meditation", "hindu"]
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
    inStock: true,
    stock: 18,
    image: "/assets/posters/poster_lord_krishna_1770750335397.png",
    images: [
      "/assets/posters/poster_lord_krishna_1770750335397.png",
      "/assets/posters/poster_lord_krishna_1770750335397.png",
      "/assets/posters/poster_lord_krishna_1770750335397.png",
      "/assets/posters/poster_lord_krishna_1770750335397.png"
    ],
    description: "Enchanting portrayal of Lord Krishna playing the flute in a moonlit forest. Rich blues, golds, and emerald greens create a mystical atmosphere with glowing fireflies and divine presence.",
    features: [
      "Museum-quality metal print",
      "Easy magnetic wall mounting",
      "Fade-resistant premium coating",
      "Size: 18 x 24 inches",
      "Handcrafted in India"
    ],
    tags: ["krishna", "spiritual", "flute", "divine", "hindu"]
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
    inStock: true,
    stock: 8,
    image: "/assets/posters/poster_goddess_durga_1770750353530.png",
    images: [
      "/assets/posters/poster_goddess_durga_1770750353530.png",
      "/assets/posters/poster_goddess_durga_1770750353530.png",
      "/assets/posters/poster_goddess_durga_1770750353530.png",
      "/assets/posters/poster_goddess_durga_1770750353530.png"
    ],
    description: "Powerful depiction of Goddess Durga riding her majestic lion with ten arms wielding divine weapons. Vibrant reds, golds, and magentas with dramatic lighting create an empowering presence.",
    features: [
      "Premium metal construction",
      "Magnetic mounting hardware",
      "Scratch-proof surface coating",
      "Size: 18 x 24 inches",
      "Bestseller design"
    ],
    tags: ["durga", "goddess", "power", "spiritual", "hindu"]
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
    inStock: true,
    stock: 20,
    image: "/assets/posters/poster_lord_hanuman_1770750369439.png",
    images: [
      "/assets/posters/poster_lord_hanuman_1770750369439.png",
      "/assets/posters/poster_lord_hanuman_1770750369439.png",
      "/assets/posters/poster_lord_hanuman_1770750369439.png",
      "/assets/posters/poster_lord_hanuman_1770750369439.png"
    ],
    description: "Heroic portrayal of Lord Hanuman carrying the mountain of medicinal herbs. Bold oranges, reds, and golds against a sunrise background showcase strength and unwavering devotion.",
    features: [
      "High-definition metal print",
      "Magnetic wall mounting system",
      "Weather-resistant coating",
      "Size: 18 x 24 inches",
      "Premium quality guaranteed"
    ],
    tags: ["hanuman", "strength", "devotion", "spiritual", "hindu"]
  },
  // Anime Category
  {
    id: 6,
    name: "Naruto Uzumaki - Rasengan Power",
    slug: "naruto-rasengan",
    category: "Anime",
    price: 1799,
    originalPrice: 2299,
    rating: 4.9,
    reviews: 287,
    inStock: true,
    stock: 25,
    image: "/assets/posters/poster_naruto_1770750385891.png",
    images: [
      "/assets/posters/poster_naruto_1770750385891.png",
      "/assets/posters/poster_naruto_1770750385891.png",
      "/assets/posters/poster_naruto_1770750385891.png",
      "/assets/posters/poster_naruto_1770750385891.png"
    ],
    description: "Dynamic action shot of Naruto performing his signature Rasengan jutsu. Vibrant oranges and blues with dramatic speed lines capture the energy and determination of the beloved ninja.",
    features: [
      "Premium anime metal poster",
      "Magnetic mounting included",
      "Vibrant color reproduction",
      "Size: 18 x 24 inches",
      "Officially inspired design"
    ],
    tags: ["naruto", "anime", "ninja", "rasengan", "action"]
  }
];

// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
  cart: JSON.parse(localStorage.getItem('designhub_cart')) || [],
  filters: {
    category: 'all',
    priceRange: [0, 3000],
    inStock: false,
    minRating: 0
  },
  sort: 'relevance',
  searchQuery: ''
};

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = state.cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showNotification(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  renderCartPage();
}

function updateCartQuantity(productId, quantity) {
  const item = state.cart.find(item => item.id === productId);
  if (item) {
    item.quantity = Math.max(1, quantity);
    saveCart();
    updateCartUI();
    renderCartPage();
  }
}

function getCartTotal() {
  return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
  return state.cart.reduce((count, item) => count + item.quantity, 0);
}

function saveCart() {
  localStorage.setItem('designhub_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const cartBadge = document.querySelector('.btn-icon .badge');
  if (cartBadge) {
    const count = getCartCount();
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? 'block' : 'none';
  }
}

// ============================================
// FILTER & SORT FUNCTIONS
// ============================================
function applyFilters() {
  let filtered = [...products];

  // Category filter
  if (state.filters.category !== 'all') {
    filtered = filtered.filter(p => p.category === state.filters.category);
  }

  // Price range filter
  filtered = filtered.filter(p =>
    p.price >= state.filters.priceRange[0] &&
    p.price <= state.filters.priceRange[1]
  );

  // In stock filter
  if (state.filters.inStock) {
    filtered = filtered.filter(p => p.inStock);
  }

  // Rating filter
  if (state.filters.minRating > 0) {
    filtered = filtered.filter(p => p.rating >= state.filters.minRating);
  }

  // Search query
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.tags.some(tag => tag.includes(query))
    );
  }

  return filtered;
}

function sortProducts(products) {
  const sorted = [...products];

  switch (state.sort) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating-asc':
      return sorted.sort((a, b) => a.rating - b.rating);
    case 'rating-desc':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'relevance':
    default:
      return sorted;
  }
}

function getFilteredAndSortedProducts() {
  const filtered = applyFilters();
  return sortProducts(filtered);
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderProductCard(product) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return `
    <div class="card" data-product-id="${product.id}">
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${discount > 0 ? `<div class="card-badge">${discount}% OFF</div>` : ''}
      </div>
      <div class="card-content">
        <h3 class="card-title">${product.name}</h3>
        <div class="card-price">
          <span class="price-current">From Rs. ${product.price.toLocaleString('en-IN')}.00</span>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary" onclick="addToCart(${product.id})">
            Add to wall
          </button>
          <button class="btn btn-outline" onclick="window.location.href='/pages/product-${product.slug}.html'">
            View Details
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '';

  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  if (hasHalfStar) {
    stars += '☆';
  }
  while (stars.length < 5) {
    stars += '☆';
  }

  return stars;
}

function renderProductGrid() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;

  const products = getFilteredAndSortedProducts();

  if (products.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
        <h3>No products found</h3>
        <p style="color: var(--color-text-secondary);">Try adjusting your filters</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = products.map(renderProductCard).join('');
}

function renderCartPage() {
  const cartContainer = document.getElementById('cart-items');
  const cartSummary = document.getElementById('cart-summary');

  if (!cartContainer) return;

  if (state.cart.length === 0) {
    cartContainer.innerHTML = `
      <div style="text-align: center; padding: 4rem;">
        <h2>Your cart is empty</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: 2rem;">Add some amazing posters to get started!</p>
        <a href="/index.html" class="btn btn-primary">Continue Shopping</a>
      </div>
    `;
    if (cartSummary) cartSummary.style.display = 'none';
    return;
  }

  cartContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-product-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</p>
      </div>
      <div class="cart-item-quantity">
        <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
        <input type="number" value="${item.quantity}" min="1" onchange="updateCartQuantity(${item.id}, parseInt(this.value))">
        <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
      </div>
      <div class="cart-item-total">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
    </div>
  `).join('');

  if (cartSummary) {
    const subtotal = getCartTotal();
    const shipping = subtotal > 2000 ? 0 : 99;
    const total = subtotal + shipping;

    cartSummary.innerHTML = `
      <h3>Order Summary</h3>
      <div class="summary-row">
        <span>Subtotal</span>
        <span>₹${subtotal.toLocaleString('en-IN')}</span>
      </div>
      <div class="summary-row">
        <span>Shipping</span>
        <span>${shipping === 0 ? 'FREE' : '₹' + shipping}</span>
      </div>
      <div class="summary-row total">
        <span>Total</span>
        <span>₹${total.toLocaleString('en-IN')}</span>
      </div>
      <button class="btn btn-primary" onclick="window.location.href='/pages/checkout.html'" style="width: 100%; margin-top: 1rem;">
        Proceed to Checkout
      </button>
    `;
  }
}

// ============================================
// SPOTLIGHT SEARCH
// ============================================
function initSpotlightSearch() {
  const spotlight = document.getElementById('spotlight-modal');
  const backdrop = document.getElementById('spotlight-backdrop');
  const input = document.getElementById('spotlight-input');
  const results = document.getElementById('spotlight-results');

  if (!spotlight) return;

  // Open with CMD+K or CTRL+K
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSpotlight();
    }
    if (e.key === 'Escape') {
      closeSpotlight();
    }
  });

  // Close on backdrop click
  backdrop?.addEventListener('click', closeSpotlight);

  // Search input
  input?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (!query) {
      results.innerHTML = '<p style="padding: 1rem; color: var(--color-text-tertiary);">Start typing to search...</p>';
      return;
    }

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.tags.some(tag => tag.includes(query))
    );

    if (filtered.length === 0) {
      results.innerHTML = '<p style="padding: 1rem; color: var(--color-text-tertiary);">No results found</p>';
      return;
    }

    results.innerHTML = filtered.map(p => `
      <div class="spotlight-item" onclick="window.location.href='${window.location.pathname.includes('/pages/') ? '' : 'pages/'}product-${p.slug}.html'">
        <img src="${window.location.pathname.includes('/pages/') ? '../' : ''}${p.image.startsWith('assets/') ? p.image : 'assets/posters/' + p.image}" alt="${p.name}" class="spotlight-item-image">
        <div class="spotlight-item-info">
          <div class="spotlight-item-title">${p.name}</div>
          <div class="spotlight-item-category">${p.category} • ₹${p.price.toLocaleString('en-IN')}</div>
        </div>
      </div>
    `).join('');
  });
}

function openSpotlight() {
  const spotlight = document.getElementById('spotlight-modal');
  const backdrop = document.getElementById('spotlight-backdrop');
  const input = document.getElementById('spotlight-input');

  spotlight?.classList.add('active');
  backdrop?.classList.add('active');
  input?.focus();
}

function closeSpotlight() {
  const spotlight = document.getElementById('spotlight-modal');
  const backdrop = document.getElementById('spotlight-backdrop');
  const input = document.getElementById('spotlight-input');

  spotlight?.classList.remove('active');
  backdrop?.classList.remove('active');
  if (input) input.value = '';
}

// ============================================
// FILTER UI HANDLERS
// ============================================
function initFilters() {
  // Category filters
  document.querySelectorAll('[data-filter-category]').forEach(el => {
    el.addEventListener('change', (e) => {
      if (e.target.checked) {
        state.filters.category = e.target.dataset.filterCategory;
      }
      renderProductGrid();
    });
  });

  // Price range
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');

  if (priceMin && priceMax) {
    priceMin.addEventListener('input', (e) => {
      state.filters.priceRange[0] = parseInt(e.target.value);
      document.getElementById('price-min-value').textContent = `₹${e.target.value}`;
      renderProductGrid();
    });

    priceMax.addEventListener('input', (e) => {
      state.filters.priceRange[1] = parseInt(e.target.value);
      document.getElementById('price-max-value').textContent = `₹${e.target.value}`;
      renderProductGrid();
    });
  }

  // In stock filter
  const inStockFilter = document.getElementById('filter-in-stock');
  if (inStockFilter) {
    inStockFilter.addEventListener('change', (e) => {
      state.filters.inStock = e.target.checked;
      renderProductGrid();
    });
  }

  // Rating filter
  const ratingFilter = document.getElementById('filter-rating');
  if (ratingFilter) {
    ratingFilter.addEventListener('change', (e) => {
      state.filters.minRating = parseFloat(e.target.value);
      renderProductGrid();
    });
  }

  // Sort
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      renderProductGrid();
    });
  }
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--color-bg-elevated);
    color: var(--color-text-primary);
    padding: 1rem 1.5rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-xl);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('active');
  });
}

// ============================================
// PINCODE CHECKER
// ============================================
function checkPincode() {
  const input = document.getElementById('pincode-input');
  const result = document.getElementById('pincode-result');

  if (!input || !result) return;

  const pincode = input.value;

  if (pincode.length !== 6) {
    result.innerHTML = '<p style="color: var(--color-error);">Please enter a valid 6-digit pincode</p>';
    return;
  }

  // Simulate API call
  setTimeout(() => {
    const available = Math.random() > 0.2; // 80% availability

    if (available) {
      result.innerHTML = `
        <p style="color: var(--color-success);">
          ✓ Delivery available to ${pincode}<br>
          Expected delivery: 3-5 business days
        </p>
      `;
    } else {
      result.innerHTML = `
        <p style="color: var(--color-error);">
          ✗ Sorry, we don't deliver to ${pincode} yet
        </p>
      `;
    }
  }, 500);
}

// ============================================
// PRODUCT PAGE GALLERY
// ============================================
function initProductGallery() {
  const thumbnails = document.querySelectorAll('.gallery-thumb');
  const mainImage = document.querySelector('.gallery-main img');

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImage.src = thumb.querySelector('img').src;
    });
  });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize cart UI
  updateCartUI();

  // Initialize spotlight search
  initSpotlightSearch();

  // Initialize filters
  initFilters();

  // Initialize mobile menu
  initMobileMenu();

  // Render product grid if on home page
  if (document.getElementById('products-grid')) {
    renderProductGrid();
  }

  // Render cart if on cart page
  if (document.getElementById('cart-items')) {
    renderCartPage();
  }

  // Initialize product gallery if on product page
  if (document.querySelector('.gallery-main')) {
    initProductGallery();
  }

  console.log('Design Hub initialized ✨');
});

// ============================================
// EXPORT FOR USE IN HTML
// ============================================
window.DesignHub = {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  checkPincode,
  openSpotlight,
  closeSpotlight,
  products
};
