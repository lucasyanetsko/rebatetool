# Widget Deployment Guide

## 🎯 Overview

This project includes a **production-ready embeddable widget** that can be deployed to any website. The widget is built as a standalone JavaScript file that includes all dependencies.

## 📦 What's Included

- **Main Demo Site**: Full React SPA with routing (Home, Analytics, Widget Demo)
- **Embeddable Widget**: Standalone JavaScript bundle that works anywhere
- **Test Page**: Live examples showing widget integration

## 🚀 Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier works great!)
- Git installed locally

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Add embeddable widget functionality"

# Create GitHub repo and push
# (Follow GitHub's instructions to create a new repository)
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build:all`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Click **"Deploy"**

### Step 3: Verify Deployment

After deployment completes, you'll get a URL like: `https://your-project.vercel.app`

Test these URLs:
- Main site: `https://your-project.vercel.app/`
- Widget embed demo: `https://your-project.vercel.app/embed`
- White-label examples: `https://your-project.vercel.app/white-label-demo.html`
- Widget file (direct): `https://your-project.vercel.app/widget.iife.js`

## 📝 Using the Widget

### Basic Integration

Copy this code to any HTML page:

```html
<!-- Add the widget container -->
<div id="rebate-widget"></div>

<!-- Load the widget script -->
<script src="https://YOUR-PROJECT.vercel.app/widget.iife.js"></script>

<!-- Initialize the widget -->
<script>
  RebateLocator.init({
    container: '#rebate-widget',
    mode: 'embedded'
  });
</script>
```

### Configuration Options

```javascript
RebateLocator.init({
  // Required
  container: '#rebate-widget',      // CSS selector or DOM element
  
  // Optional
  mode: 'embedded',                 // 'embedded' or 'standalone'
  category: 'HVAC',                 // Pre-select a category
  primaryColor: '#0284c7',          // Custom brand color
  productSku: 'HVAC-HP-2024',      // For product pages
  autoPopulateZip: true,            // Auto-detect ZIP (future)
  showFilters: true,                // Show category filters
  enableAnalytics: true             // Enable tracking
});
```

### Auto-Initialize (No JavaScript Required)

```html
<div 
  data-rebate-locator
  data-mode="embedded"
  data-category="HVAC"
  data-primary-color="#8b5cf6"
></div>
```

## 🎨 Customization Examples

### Product Page Integration
```html
<div id="product-rebates"></div>
<script>
  RebateLocator.init({
    container: '#product-rebates',
    mode: 'embedded',
    category: 'HVAC',
    productSku: 'HVAC-HP-2024'
  });
</script>
```

### Category Page Integration
```html
<div id="category-rebates"></div>
<script>
  RebateLocator.init({
    container: '#category-rebates',
    mode: 'embedded',
    category: 'Kitchen Appliances'
  });
</script>
```

### Standalone Page (Full Experience)
```html
<div id="rebate-finder"></div>
<script>
  RebateLocator.init({
    container: '#rebate-finder',
    mode: 'standalone',
    showFilters: true
  });
</script>
```

### Custom Branding
```html
<div id="branded-widget"></div>
<script>
  RebateLocator.init({
    container: '#branded-widget',
    primaryColor: '#8b5cf6',  // Purple to match brand
    mode: 'embedded'
  });
</script>
```

## 🔧 Local Development

### Building the Widget

```bash
# Build widget only
npm run build:widget

# Build everything (main site + widget)
npm run build:all

# Development server
npm run dev
```

The widget will be built to `dist-widget/` directory.

### Testing Widget Locally

1. Build the widget: `npm run build:widget`
2. Copy to public: `npm run build:copy-widget`
3. Start dev server: `npm run dev`
4. Visit: `http://localhost:5173/white-label-demo.html`

## 📋 Widget API Reference

### Global Object
```javascript
window.RebateLocator
```

### Methods

#### `init(config)`
Initializes a new widget instance.

**Parameters:**
- `config` (Object): Configuration options

**Returns:** Widget instance with control methods

**Example:**
```javascript
const widget = RebateLocator.init({
  container: '#my-widget'
});
```

#### `destroy()`
Removes the widget from the page.

```javascript
const widget = RebateLocator.init({ container: '#widget' });
// Later...
widget.destroy();
```

### Properties

#### `version`
Returns the widget version.

```javascript
console.log(RebateLocator.version); // "1.0.0"
```

## 🎯 Demo for RFP Presentation

### Show Real Working Code

1. Navigate to `/embed` page on your deployed site
2. Show the embed code with your actual Vercel URL
3. Click "View live embed examples" to show test page
4. Show multiple integration scenarios

### Live Demo

1. Open CodePen, JSFiddle, or create a simple HTML file
2. Paste the embed code from your site
3. Run it - the widget appears and works!
4. Demonstrate:
   - Searching by ZIP code
   - Filtering by category
   - Viewing rebate details
   - Responsive design on mobile

### Key Selling Points

✅ **Copy-paste integration** - No complex setup  
✅ **Framework agnostic** - Works with any CMS  
✅ **Self-contained** - All dependencies bundled  
✅ **Responsive** - Works on all devices  
✅ **Customizable** - Brand colors, categories  
✅ **Production-ready** - Minified, optimized  
✅ **Multiple modes** - Product, category, standalone  

## 🔒 Security & Performance

- **Bundle Size**: ~205KB (64KB gzipped)
- **Dependencies**: All bundled (React, Lucide icons)
- **Browser Support**: Modern browsers (ES6+)
- **No external dependencies** at runtime
- **No tracking or analytics** unless explicitly enabled

## 📚 Additional Resources

- **Main Demo**: `/` - Homepage with full feature set
- **Analytics**: `/analytics` - Dashboard with metrics
- **Widget Demos**: `/embed` - Integration examples
- **White-Label Examples**: `/white-label-demo.html` - 7 brand customization demos

## 🤝 Support

For integration support or questions:
- Check `/embed` page for examples
- View source of `/white-label-demo.html`
- Review widget configuration options above

## 📄 File Structure

```
dist/                          # Main site build
├── assets/                   # CSS, JS, images
└── index.html               # Entry point

public/                       # Static files
├── fonts/                   # LG EI fonts
├── white-label-demo.html    # White-label examples
├── widget.iife.js           # Widget bundle
└── widget.css               # Widget styles

dist-widget/                 # Widget build (separate)
├── widget.iife.js           # Standalone bundle
├── widget.css               # Styles
└── fonts/                   # Font files
```

## ✅ Deployment Checklist

- [ ] Build main site: `npm run build`
- [ ] Build widget: `npm run build:widget`
- [ ] Copy widget files: `npm run build:copy-widget`
- [ ] Or run all: `npm run build:all`
- [ ] Test locally at `/white-label-demo.html`
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Verify all URLs work
- [ ] Update embed code examples with your URL
- [ ] Test embed code in external site

---

**Note**: The widget is fully functional and production-ready. After deploying to Vercel, simply replace `YOUR-PROJECT.vercel.app` with your actual Vercel URL in examples and documentation.

