# Design Hub - E-commerce Prototype

A premium D2C e-commerce prototype for selling metal posters online, featuring spiritual Hindu deities and anime characters.

## 🎨 Features

- **Premium Dark Theme**: Modern design with gold and coral accents
- **Product Catalog**: 10 unique metal poster designs (6 spiritual, 4 anime)
- **Advanced Filtering**: Filter by category, price, stock status, and rating
- **Spotlight Search**: CMD+K quick search functionality
- **Shopping Cart**: Persistent cart with localStorage
- **Complete Checkout Flow**: Address form, discount codes, and guest checkout
- **Payment Integration**: All major Indian payment methods (UPI, Cards, Net Banking, EMI, Wallets, COD)
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 📁 Project Structure

```
scalex/
├── index.html              # Home page with product grid and filters
├── cart.html               # Shopping cart page
├── checkout.html           # Checkout with address form
├── payment.html            # Payment methods page
├── product-lord-ganesha.html  # Sample product detail page
├── styles.css              # Complete design system and styles
├── script.js               # Core JavaScript functionality
├── assets/
│   └── posters/           # Generated poster images
│       ├── poster_lord_ganesha_1770750300909.png
│       ├── poster_lord_shiva_1770750319627.png
│       ├── poster_lord_krishna_1770750335397.png
│       ├── poster_goddess_durga_1770750353530.png
│       ├── poster_lord_hanuman_1770750369439.png
│       └── poster_naruto_1770750385891.png
└── README.md              # This file
```

## 🚀 Quick Start

### Option 1: Direct File Access (Simplest)
1. Open `index.html` directly in your browser:
   ```bash
   open index.html
   # or on Linux: xdg-open index.html
   # or on Windows: start index.html
   ```

### Option 2: Using Python HTTP Server
1. Navigate to the project directory:
   ```bash
   cd /Users/aagarwal/Documents/scalex
   ```

2. Start a local server:
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # OR Python 2
   python -m SimpleHTTPServer 8000
   ```

3. Open your browser and visit:
   ```
   http://localhost:8000
   ```

### Option 3: Using Node.js HTTP Server
1. Install http-server globally (one-time):
   ```bash
   npm install -g http-server
   ```

2. Start the server:
   ```bash
   cd /Users/aagarwal/Documents/scalex
   http-server -p 8000
   ```

3. Open your browser and visit:
   ```
   http://localhost:8000
   ```

### Option 4: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🎯 User Journey

1. **Home Page** (`index.html`)
   - Browse featured products
   - Filter by category, price, stock, rating
   - Sort by price or rating
   - Use spotlight search (CMD+K)

2. **Product Page** (`product-lord-ganesha.html`)
   - View product images and details
   - Select size and quantity
   - Check delivery by pincode
   - Read reviews
   - Add to cart or buy now

3. **Cart Page** (`cart.html`)
   - Review cart items
   - Update quantities
   - See order summary
   - Proceed to checkout

4. **Checkout Page** (`checkout.html`)
   - Enter contact information
   - Fill delivery address
   - Apply discount codes
   - Review order summary

5. **Payment Page** (`payment.html`)
   - Choose payment method
   - Complete purchase

## 🎨 Design System

The prototype uses a comprehensive design system defined in `styles.css`:

- **Colors**: Dark theme with gold (#D4AF37) and coral (#FF6B6B) accents
- **Typography**: Inter (body), Playfair Display (headings)
- **Spacing**: Consistent 8px-based spacing scale
- **Components**: Reusable buttons, cards, inputs, and modals
- **Animations**: Smooth transitions and hover effects

## 💾 Data Management

- **Product Data**: Defined in `script.js` (products array)
- **Cart Storage**: Uses localStorage for persistence
- **State Management**: Simple vanilla JavaScript state management

## 🔧 Key JavaScript Functions

### Cart Management
- `addToCart(productId)` - Add product to cart
- `removeFromCart(productId)` - Remove product from cart
- `updateCartQuantity(productId, quantity)` - Update item quantity
- `getCartTotal()` - Calculate cart total
- `getCartCount()` - Get total items in cart

### UI Rendering
- `renderProductGrid(products)` - Render product cards
- `renderCartPage()` - Render cart page
- `updateCartBadge()` - Update cart count badge

### Search & Filter
- `openSpotlight()` - Open search modal
- `filterProducts()` - Apply filters to products
- `sortProducts(products, sortBy)` - Sort product list

### Utilities
- `showNotification(message, type)` - Show toast notifications
- `checkPincode()` - Validate delivery pincode

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎭 Prototype Limitations

This is a **frontend prototype** with the following limitations:

- No real backend or database
- Payment processing is simulated
- Product data is hardcoded in JavaScript
- No user authentication (guest checkout only)
- No actual email notifications
- Limited to 6 product designs (4 pending due to image generation quota)

## 🔮 Future Enhancements

- Complete remaining 4 anime poster designs
- Add product detail pages for all products
- Implement user authentication
- Add wishlist functionality
- Product reviews and ratings system
- Order tracking
- Admin dashboard
- Backend API integration

## 📄 License

This is a prototype project for demonstration purposes.

## 👨‍💻 Development

Built with:
- HTML5
- CSS3 (Vanilla CSS, no frameworks)
- JavaScript (ES6+, no frameworks)
- Google Fonts (Inter, Playfair Display)

---

**Made with ❤️ in India**
