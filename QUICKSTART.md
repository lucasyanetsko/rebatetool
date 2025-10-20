# 🚀 Quick Start Guide

## What You Have Now

✅ A fully functional **React SPA demo site** with:
- Home page with rebate locator
- Analytics dashboard
- Widget integration demos

✅ A **production-ready embeddable widget** that:
- Works on any website
- Is self-contained (all dependencies bundled)
- Supports multiple integration modes
- Is customizable (colors, categories, etc.)

## 🎯 Quick Deploy to Vercel (5 minutes)

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add files
git add .

# Commit
git commit -m "Initial commit with embeddable widget"

# Create a new repository on GitHub.com, then:
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select your repository
5. Vercel will auto-detect settings - **just click "Deploy"**!

That's it! Vercel will:
- Detect it's a Vite project
- Run `npm run build:all` (builds both site and widget)
- Deploy everything

### 3. Test Your Deployment

After deployment (takes ~2 minutes), visit:

- **Main site**: `https://your-project.vercel.app`
- **Widget demo**: `https://your-project.vercel.app/embed`
- **White-label examples**: `https://your-project.vercel.app/white-label-demo.html`

## 🎬 Demo for RFP Presentation

### Option 1: Show the Live Site

1. Navigate to `/embed` on your deployed site
2. Show the embed code (it will have your real URL!)
3. Click "View live embed examples" → Opens test page
4. Show 4 different integration scenarios working live

### Option 2: Live Code Demo

1. Open a new browser tab
2. Go to [CodePen.io](https://codepen.io/pen/)
3. In the HTML panel, paste:

```html
<div id="rebate-widget"></div>
<script src="https://YOUR-PROJECT.vercel.app/widget.iife.js"></script>
<script>
  RebateLocator.init({
    container: '#rebate-widget'
  });
</script>
```

4. Click "Run" - widget appears and works!
5. Show them you can search by ZIP, filter categories, etc.

### Key Points to Emphasize

✅ **"This is production-ready code"** - Not a mockup  
✅ **"Copy-paste integration"** - Show how easy it is  
✅ **"Works anywhere"** - Demonstrate on CodePen  
✅ **"Multiple modes"** - Show product page, category, standalone  
✅ **"Fully customizable"** - Change colors, categories  
✅ **"Responsive"** - Test on mobile

## 📱 Local Development

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build Everything

```bash
# Build both site and widget
npm run build:all

# Or build separately
npm run build         # Main site only
npm run build:widget  # Widget only
```

### Test Widget Locally

1. Build widget: `npm run build:widget`
2. Copy to public: `npm run build:copy-widget`
3. Start dev server: `npm run dev`
4. Visit: `http://localhost:5173/white-label-demo.html`

## 📖 Documentation

- **Deployment Guide**: See `WIDGET_DEPLOYMENT.md` for complete details
- **Presentation Guide**: See `PRESENTATION_GUIDE.md` for RFP tips
- **Project Summary**: See `PROJECT_SUMMARY.md` for architecture

## 🔗 Widget Integration Examples

### Basic Embed
```html
<div id="rebate-widget"></div>
<script src="https://YOUR-URL/widget.iife.js"></script>
<script>
  RebateLocator.init({ container: '#rebate-widget' });
</script>
```

### Product Page (Pre-filtered)
```html
<div id="rebate-widget"></div>
<script src="https://YOUR-URL/widget.iife.js"></script>
<script>
  RebateLocator.init({
    container: '#rebate-widget',
    category: 'HVAC'
  });
</script>
```

### Custom Brand Colors
```html
<div id="rebate-widget"></div>
<script src="https://YOUR-URL/widget.iife.js"></script>
<script>
  RebateLocator.init({
    container: '#rebate-widget',
    primaryColor: '#8b5cf6'  // Your brand color
  });
</script>
```

### Auto-Initialize (No JS)
```html
<div 
  data-rebate-locator
  data-category="Water Heating"
></div>
```

## 🎨 What Makes This Special

### For LG Electronics:
- ✅ Uses official LG EI fonts (Headline + Text)
- ✅ Professional, modern design
- ✅ Responsive on all devices
- ✅ Accessibility compliant (WCAG 2.2 AA)
- ✅ Analytics tracking ready

### Technical Excellence:
- ✅ Modern React 19 + Vite
- ✅ Tailwind CSS for styling
- ✅ TypeScript-ready
- ✅ Production-optimized (~64KB gzipped)
- ✅ Self-contained widget (no external dependencies)

### Integration Flexibility:
- ✅ Works with any CMS (Contentstack, Umbraco, WordPress, etc.)
- ✅ No build process required for integration
- ✅ Multiple modes (embedded, standalone, product, category)
- ✅ Customizable branding
- ✅ Auto-initialization option

## ❓ Troubleshooting

### Widget not loading?
- Check browser console for errors
- Verify script URL is correct
- Ensure container element exists before init

### Fonts not showing?
- Check if fonts are loading from `/fonts/` directory
- Verify CORS headers (should be automatic on Vercel)

### Build fails?
- Run `npm install` to ensure all dependencies
- Check Node version (should be 18+)
- Try deleting `node_modules` and `package-lock.json`, then `npm install`

## 🆘 Need Help?

Check these resources:
1. **WIDGET_DEPLOYMENT.md** - Complete deployment guide
2. **White-label demo** - View source of `/white-label-demo.html` for examples
3. **Demo site** - `/embed` page has integration examples

---

## 🎉 You're Ready!

You now have:
- ✅ A professional demo site
- ✅ A working embeddable widget
- ✅ Multiple integration examples
- ✅ Production-ready code
- ✅ Complete documentation

**Next step**: Deploy to Vercel and show off your work! 🚀

