# Quick Fix: Browser Cache Issue

## Problem
The browser is showing 404 errors for CSS and JS files because it's caching old HTML with incorrect paths.

## Solution: Hard Refresh the Browser

### On Chrome/Edge (Mac):
```
⌘ + Shift + R
```
or
```
Cmd + Shift + Delete → Clear browsing data → Cached images and files
```

### On Chrome/Edge (Windows/Linux):
```
Ctrl + Shift + R
```
or
```
Ctrl + F5
```

### On Firefox:
```
Ctrl + Shift + R  (Windows/Linux)
⌘ + Shift + R     (Mac)
```

### On Safari:
```
⌘ + Option + E  (Clear cache)
Then: ⌘ + R      (Reload)
```

## Alternative: Open in Incognito/Private Mode
1. Open a new incognito/private window
2. Navigate to `http://localhost:8000`
3. Test the pages

## Verification
After hard refresh, check the browser's Network tab (F12 → Network):
- `/css/styles.css` should return **200 OK** (not 404)
- `/js/script.js` should return **200 OK** (not 404)
- `/assets/posters/*.png` should return **200 OK**

## Files Are Correct
All HTML files already have the correct paths:
- ✅ `pages/product-lord-ganesha.html` → `<link rel="stylesheet" href="../css/styles.css">`
- ✅ `pages/cart.html` → `<link rel="stylesheet" href="../css/styles.css">`
- ✅ `pages/checkout.html` → `<link rel="stylesheet" href="../css/styles.css">`
- ✅ `pages/payment.html` → `<link rel="stylesheet" href="../css/styles.css">`

The issue is **browser cache only**.
