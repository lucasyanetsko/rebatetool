# 🎨 White-Label Customization Guide

## Overview

The Rebate Locator widget is built for **complete white-label customization**, allowing you to match any brand's visual identity. This guide shows you all available customization options.

## 🚀 Quick Start

### Basic Usage (Default Styling)
```html
<div id="rebate-widget"></div>
<script src="https://your-site.com/widget.iife.js"></script>
<script>
  RebateLocator.init({
    container: '#rebate-widget'
  });
</script>
```

### With Brand Customization
```html
<script>
  RebateLocator.init({
    container: '#rebate-widget',
    primaryColor: '#8b5cf6',    // Your brand color
    buttonStyle: 'rounded',      // Match your button style
    mode: 'embedded'            // Integration mode
  });
</script>
```

## 📐 Configuration Options

### Core Options

```javascript
RebateLocator.init({
  // Required
  container: '#rebate-widget',         // CSS selector or DOM element
  
  // Integration Mode
  mode: 'embedded',                    // 'embedded' or 'standalone'
  category: 'HVAC',                    // Pre-select a category
  
  // White-Label Styling
  primaryColor: '#0284c7',             // Main brand color
  buttonStyle: 'default',              // 'default', 'rounded', 'square', 'minimal'
  fontFamily: 'Arial, sans-serif',     // Custom font family
  borderRadius: '8px',                 // Custom border radius
  backgroundColor: '#ffffff',          // Widget background color
  textColor: '#1f2937',               // Text color
  accentColor: '#10b981',             // Accent/secondary color
  
  // Advanced Customization
  customCSS: `
    .rebate-widget-root {
      /* Your custom CSS here */
    }
  `,
  
  // Functionality
  showFilters: true,                   // Show category filters
  enableAnalytics: true,               // Enable tracking
  autoPopulateZip: false,             // Auto-detect ZIP (future)
  productSku: 'HVAC-HP-2024'          // For product pages
});
```

## 🎨 Visual Customization Examples

### Example 1: Match Corporate Blue Brand
```javascript
RebateLocator.init({
  container: '#widget',
  primaryColor: '#2563eb',           // Corporate blue
  buttonStyle: 'default',
  mode: 'embedded'
});
```

**Use Case:** Traditional corporate sites, financial institutions, B2B platforms

---

### Example 2: Modern Tech Startup
```javascript
RebateLocator.init({
  container: '#widget',
  primaryColor: '#8b5cf6',           // Modern purple
  buttonStyle: 'rounded',            // Pill-shaped buttons
  borderRadius: '16px'              // Rounded corners
});
```

**Use Case:** SaaS platforms, tech startups, modern web apps

---

### Example 3: Bold Consumer Brand
```javascript
RebateLocator.init({
  container: '#widget',
  primaryColor: '#dc2626',           // Bold red
  buttonStyle: 'square',             // Sharp, defined buttons
  accentColor: '#ea580c'            // Orange accent
});
```

**Use Case:** Retail sites, consumer brands, high-energy marketing sites

---

### Example 4: Minimal & Clean
```javascript
RebateLocator.init({
  container: '#widget',
  primaryColor: '#1f2937',           // Dark gray/black
  buttonStyle: 'minimal',            // Outlined buttons
  borderRadius: '4px'               // Subtle radius
});
```

**Use Case:** Design agencies, minimal brands, portfolio sites

---

### Example 5: LG Electronics Brand Match
```javascript
RebateLocator.init({
  container: '#widget',
  primaryColor: '#a50034',           // LG Red
  category: 'Kitchen Appliances',
  mode: 'embedded'
});
```

**Use Case:** LG.com, LG partner sites, official branded pages

---

### Example 6: Custom Everything
```javascript
RebateLocator.init({
  container: '#widget',
  primaryColor: '#f59e0b',
  fontFamily: 'Georgia, serif',
  buttonStyle: 'rounded',
  customCSS: `
    .rebate-widget-root {
      font-size: 1.1rem;
    }
    .rebate-widget-root button {
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: 700;
    }
    .rebate-widget-root h1 {
      font-family: 'Playfair Display', serif;
    }
  `
});
```

**Use Case:** Unique brand identities, custom design systems

## 🎯 Button Styles

### Default
Standard button with rounded corners and shadow.
```javascript
buttonStyle: 'default'
```

### Rounded
Pill-shaped buttons with maximum border radius.
```javascript
buttonStyle: 'rounded'
```

### Square
Sharp, defined edges with no border radius.
```javascript
buttonStyle: 'square'
```

### Minimal
Outlined style with no fill or shadow.
```javascript
buttonStyle: 'minimal'
```

## 🔧 Advanced Customization

### Using Custom CSS

For complete control, inject custom CSS:

```javascript
RebateLocator.init({
  container: '#widget',
  customCSS: `
    /* Override widget container */
    .rebate-widget-root {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px;
      border-radius: 20px;
    }
    
    /* Style headings */
    .rebate-widget-root h1,
    .rebate-widget-root h2 {
      font-family: 'Montserrat', sans-serif;
      letter-spacing: -0.5px;
    }
    
    /* Custom button styling */
    .rebate-widget-root button {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border: 2px solid white;
    }
    
    /* Input field styling */
    .rebate-widget-root input,
    .rebate-widget-root select {
      border: 2px solid #e5e7eb;
      border-radius: 8px;
    }
  `
});
```

### CSS Variables

The widget uses CSS variables that you can override:

```css
.rebate-widget-root {
  --primary-color: #0284c7;
  --primary-hover: #0284c7dd;
  --widget-font-family: inherit;
  --widget-border-radius: 8px;
  --widget-bg-color: #ffffff;
  --widget-text-color: #1f2937;
  --widget-accent-color: #10b981;
}
```

## 🌐 Integration Patterns

### Pattern 1: Product Detail Pages
Show rebates specific to a product category:

```javascript
RebateLocator.init({
  container: '#product-rebates',
  category: 'HVAC',
  mode: 'embedded',
  primaryColor: '#0284c7'
});
```

### Pattern 2: Category Landing Pages
Show all rebates for a category:

```javascript
RebateLocator.init({
  container: '#category-rebates',
  category: 'Water Heating',
  mode: 'embedded'
});
```

### Pattern 3: Dedicated Rebate Finder Page
Full-featured standalone tool:

```javascript
RebateLocator.init({
  container: '#rebate-finder',
  mode: 'standalone',
  showFilters: true
});
```

## 📱 Responsive Behavior

The widget is fully responsive and adapts to:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Wide screens (1440px+)

No additional configuration needed!

## 🎭 Demo Pages

### See It In Action
- **White-Label Showcase**: `/white-label-demo.html` - Shows 7 different brand styles with live examples
- **Integration Demos**: `/embed` - Shows product/category/standalone modes

## 💡 Best Practices

### 1. Match Your Site's Color Scheme
```javascript
// Extract primary color from your site
const brandColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--brand-primary')
  .trim();

RebateLocator.init({
  container: '#widget',
  primaryColor: brandColor
});
```

### 2. Keep Consistent Typography
```javascript
RebateLocator.init({
  container: '#widget',
  fontFamily: getComputedStyle(document.body).fontFamily
});
```

### 3. Match Button Styles
Look at your site's buttons and choose the matching style:
- Rounded corners? Use `buttonStyle: 'default'`
- Pill-shaped? Use `buttonStyle: 'rounded'`
- Sharp edges? Use `buttonStyle: 'square'`
- Outlined? Use `buttonStyle: 'minimal'`

### 4. Test Contrast
Ensure text is readable on your chosen background:
```javascript
RebateLocator.init({
  container: '#widget',
  backgroundColor: '#1f2937',  // Dark background
  textColor: '#ffffff',        // White text for contrast
  primaryColor: '#3b82f6'      // Bright blue for visibility
});
```

## 🔄 Dynamic Updates

### Change Styles After Initialization
```javascript
// Initialize widget
const widget = RebateLocator.init({
  container: '#widget'
});

// Later, reinitialize with new styles
widget.destroy();
RebateLocator.init({
  container: '#widget',
  primaryColor: '#8b5cf6'  // New color
});
```

## 📊 Real-World Examples

### Example: E-commerce Site Integration
```html
<div class="product-page">
  <div class="product-details">
    <!-- Product info -->
  </div>
  
  <div class="rebate-section">
    <h3>Available Rebates</h3>
    <div id="product-rebates"></div>
  </div>
</div>

<script>
  RebateLocator.init({
    container: '#product-rebates',
    category: 'HVAC',
    primaryColor: '#059669',  // Match site's green
    buttonStyle: 'rounded',
    mode: 'embedded'
  });
</script>
```

### Example: Utility Company Site
```html
<style>
  .utility-branded-widget {
    background: #f0f9ff;
    padding: 2rem;
    border-radius: 12px;
    border: 2px solid #0ea5e9;
  }
</style>

<div class="utility-branded-widget">
  <div id="rebate-widget"></div>
</div>

<script>
  RebateLocator.init({
    container: '#rebate-widget',
    primaryColor: '#0ea5e9',  // Utility blue
    accentColor: '#10b981',   // Eco green
    mode: 'standalone'
  });
</script>
```

## 🆘 Troubleshooting

### Widget doesn't match my brand
1. Check your `primaryColor` setting
2. Try adding `customCSS` for fine-tuning
3. Use browser dev tools to inspect and identify needed overrides

### Fonts not loading
1. Ensure font-family string is correct
2. Check that fonts are loaded on your page
3. Use fallback fonts: `'YourFont', sans-serif`

### Colors not changing
1. Verify color format is valid CSS (hex, rgb, or named)
2. Check browser console for errors
3. Ensure widget loaded successfully

## 📚 Additional Resources

- **Complete API**: See `WIDGET_DEPLOYMENT.md`
- **Integration Examples**: Visit `/white-label-demo.html`
- **Quick Start**: See `QUICKSTART.md`

---

## 🎉 Summary

The widget supports **complete white-label customization**:

✅ **Colors** - Primary, accent, background, text  
✅ **Typography** - Font families, sizes, weights  
✅ **Buttons** - 4 styles + custom CSS  
✅ **Layout** - Border radius, spacing, backgrounds  
✅ **Custom CSS** - Full control via CSS injection  
✅ **Responsive** - Works on all devices  
✅ **Integration Modes** - Product, category, standalone  

**Your brand. Your style. Our widget.** 🎨

