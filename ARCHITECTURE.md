# Design Hub - Project Architecture

## 📐 Folder Structure

```
scalex/
│
├── index.html                 # Main entry point - Home page
├── README.md                  # Project documentation
├── ARCHITECTURE.md            # This file - Architecture details
│
├── css/                       # Stylesheets
│   └── styles.css            # Complete design system and all styles
│
├── js/                        # JavaScript files
│   └── script.js             # Core application logic
│
├── pages/                     # HTML pages
│   ├── cart.html             # Shopping cart page
│   ├── checkout.html         # Checkout with address form
│   ├── payment.html          # Payment methods page
│   └── product-lord-ganesha.html  # Product detail page template
│
└── assets/                    # Static assets
    └── posters/              # Product images
        ├── poster_lord_ganesha_1770750300909.png
        ├── poster_lord_shiva_1770750319627.png
        ├── poster_lord_krishna_1770750335397.png
        ├── poster_goddess_durga_1770750353530.png
        ├── poster_lord_hanuman_1770750369439.png
        └── poster_naruto_1770750385891.png
```

## 🏗️ Architecture Overview

### Frontend-Only Prototype
This is a **client-side only** prototype with no backend. All data and state management happens in the browser.

### Technology Stack
- **HTML5**: Semantic markup
- **CSS3**: Vanilla CSS with CSS custom properties (no frameworks)
- **JavaScript**: ES6+ vanilla JavaScript (no frameworks)
- **Storage**: localStorage for cart persistence

## 📄 File Responsibilities

### `index.html` - Home Page
- **Purpose**: Main landing page with product catalog
- **Features**:
  - Hero section
  - Product grid (3 columns)
  - Filters sidebar (category, price, stock, rating)
  - Sorting options
  - Spotlight search modal
  - Responsive navigation

### `css/styles.css` - Design System
- **Purpose**: Complete styling and design system
- **Contains**:
  - CSS custom properties (colors, spacing, typography)
  - Reset and base styles
  - Component styles (buttons, cards, inputs)
  - Layout utilities (grid, container)
  - Responsive breakpoints
  - Animations and transitions

### `js/script.js` - Application Logic
- **Purpose**: All JavaScript functionality
- **Modules** (logically separated):
  1. **Product Data**: Hardcoded product catalog
  2. **Cart Management**: Add, remove, update cart items
  3. **UI Rendering**: Dynamic content rendering
  4. **Search & Filter**: Product filtering and sorting
  5. **Utilities**: Helper functions, notifications
  6. **Event Handlers**: User interactions

### `pages/cart.html` - Shopping Cart
- **Purpose**: Display cart items and summary
- **Features**:
  - Cart item list with images
  - Quantity controls
  - Remove item functionality
  - Order summary with totals
  - Proceed to checkout button

### `pages/checkout.html` - Checkout Form
- **Purpose**: Collect delivery information
- **Features**:
  - Contact information (email, phone)
  - Delivery address form
  - Guest checkout option
  - Discount code input
  - Order summary sidebar

### `pages/payment.html` - Payment Methods
- **Purpose**: Payment method selection
- **Features**:
  - UPI payment
  - Credit/Debit cards
  - Net banking
  - EMI options
  - Digital wallets
  - Cash on delivery
  - Payment simulation

### `pages/product-lord-ganesha.html` - Product Detail
- **Purpose**: Template for product pages
- **Features**:
  - Image gallery with thumbnails
  - Product information
  - Size selection
  - Quantity selector
  - Pincode checker
  - Add to cart / Buy now
  - Product description tabs
  - Customer reviews

## 🔄 Data Flow

```
User Action → Event Handler → State Update → UI Re-render
                                    ↓
                              localStorage
```

### Example: Adding to Cart
1. User clicks "Add to Cart" button
2. `addToCart(productId)` function called
3. Product data retrieved from `products` array
4. Cart updated in memory
5. Cart saved to `localStorage`
6. Cart badge updated in UI
7. Notification shown to user

## 💾 State Management

### localStorage Schema
```javascript
{
  "designhub_cart": [
    {
      "id": 1,
      "name": "Lord Ganesha - Wisdom & New Beginnings",
      "price": 1999,
      "image": "assets/posters/poster_lord_ganesha_1770750300909.png",
      "quantity": 2
    }
  ]
}
```

### In-Memory State
- `products` array: All product data
- Cart operations use localStorage as source of truth

## 🎨 Design System

### Color Palette
```css
--color-bg-primary: #0a0a0a        /* Main background */
--color-bg-secondary: #1a1a1a      /* Cards, sections */
--color-bg-elevated: #2a2a2a       /* Hover states */
--color-accent-primary: #D4AF37    /* Gold - primary actions */
--color-accent-secondary: #FF6B6B  /* Coral - highlights */
```

### Typography Scale
```css
--text-xs: 0.75rem    /* 12px */
--text-sm: 0.875rem   /* 14px */
--text-base: 1rem     /* 16px */
--text-lg: 1.125rem   /* 18px */
--text-xl: 1.25rem    /* 20px */
--text-2xl: 1.5rem    /* 24px */
--text-3xl: 1.875rem  /* 30px */
--text-4xl: 2.25rem   /* 36px */
--text-5xl: 3rem      /* 48px */
```

### Spacing Scale (8px base)
```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
```

## 🔌 Key JavaScript APIs

### Cart Functions
```javascript
addToCart(productId)                    // Add product to cart
removeFromCart(productId)               // Remove product from cart
updateCartQuantity(productId, quantity) // Update item quantity
getCartTotal()                          // Calculate total price
getCartCount()                          // Get total items
```

### UI Functions
```javascript
renderProductGrid(products)   // Render product cards
renderCartPage()              // Render cart page
updateCartBadge()             // Update cart count badge
showNotification(msg, type)   // Show toast notification
```

### Search & Filter
```javascript
openSpotlight()               // Open search modal
closeSpotlight()              // Close search modal
filterProducts()              // Apply filters
sortProducts(products, sort)  // Sort products
```

### Utilities
```javascript
checkPincode()                // Validate delivery pincode
formatPrice(price)            // Format price with currency
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Adaptations
- Single column product grid
- Hamburger menu
- Stacked layout for product details
- Touch-optimized controls

## 🚀 Initialization & Setup

### Method 1: Direct File Access
```bash
# Simply open index.html in browser
open index.html
```

### Method 2: Local Server (Recommended)
```bash
# Using Python
cd /Users/aagarwal/Documents/scalex
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

### Method 3: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 🔮 Future Architecture Improvements

### Recommended Enhancements
1. **Modularize JavaScript**: Split `script.js` into modules
   ```
   js/
   ├── main.js
   ├── modules/
   │   ├── cart.js
   │   ├── products.js
   │   ├── ui.js
   │   └── utils.js
   ```

2. **Component-Based CSS**: Use BEM or similar methodology
3. **Build Process**: Add bundler (Vite, Webpack) for optimization
4. **TypeScript**: Add type safety
5. **Testing**: Unit tests for cart logic
6. **Backend Integration**: REST API for products, orders
7. **State Management**: Consider Redux or similar for complex state

### Production Considerations
- Minify CSS and JavaScript
- Optimize images (WebP format)
- Add service worker for offline support
- Implement lazy loading for images
- Add analytics tracking
- SEO optimization
- Accessibility improvements (ARIA labels)

## 📊 Performance Considerations

### Current Optimizations
- CSS custom properties for theme consistency
- Event delegation for dynamic elements
- localStorage for cart persistence
- Debounced search input

### Potential Improvements
- Image lazy loading
- Code splitting
- CSS purging (remove unused styles)
- Asset compression
- CDN for static assets

---

**Last Updated**: 2026-02-11
