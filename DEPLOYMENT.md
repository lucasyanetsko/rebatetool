# Deployment Guide

## Quick Start

### Local Development

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to `http://localhost:5173`

### Production Build

1. **Build for Production**
```bash
npm run build
```

2. **Preview Production Build**
```bash
npm run preview
```

3. **Deploy**
Upload the `dist/` folder to your hosting service

---

## Hosting Options

### Option 1: Vercel (Recommended for Demo)
**Fastest deployment - Perfect for presentations**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd /tmp/rebate-locator-demo
vercel
```

3. Follow prompts:
   - Create new project: Yes
   - Project name: rebate-locator-demo
   - Deploy: Yes

**Result**: Live URL in ~30 seconds (e.g., `rebate-locator-demo.vercel.app`)

### Option 2: Netlify
**Great for continuous deployment**

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

3. Or use Netlify Drop:
   - Build: `npm run build`
   - Visit: https://app.netlify.com/drop
   - Drag & drop the `dist/` folder

### Option 3: GitHub Pages
**Free hosting from GitHub**

1. Install gh-pages:
```bash
npm install -g gh-pages
```

2. Add to package.json:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Update vite.config.js:
```javascript
export default defineConfig({
  base: '/rebate-locator-demo/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: AWS S3 + CloudFront
**Enterprise hosting**

1. Build:
```bash
npm run build
```

2. Upload to S3:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

3. Invalidate CloudFront cache:
```bash
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Option 5: Docker
**Containerized deployment**

1. Create `Dockerfile`:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. Build image:
```bash
docker build -t rebate-locator-demo .
```

3. Run container:
```bash
docker run -p 80:80 rebate-locator-demo
```

---

## Pre-Presentation Checklist

### 24 Hours Before
- [ ] Deploy to production hosting
- [ ] Test all pages and navigation
- [ ] Verify all charts and visualizations load
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile device
- [ ] Check load times
- [ ] Take screenshots as backup

### 1 Hour Before
- [ ] Clear browser cache
- [ ] Test live URL on presentation computer
- [ ] Test on presentation screen/projector
- [ ] Verify internet connectivity
- [ ] Have backup localhost version running
- [ ] Print presentation guide

### During Setup
- [ ] Zoom browser to 125% for visibility
- [ ] Open all tabs you'll need
- [ ] Close unnecessary applications
- [ ] Disable notifications
- [ ] Full screen browser
- [ ] Test audio if applicable

---

## Environment Variables (Production)

For production deployment with real backend:

```env
# API Configuration
VITE_API_BASE_URL=https://api.lg.com/rebates
VITE_API_KEY=your_api_key_here

# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_AUTH=true

# Apigee
VITE_APIGEE_BASE_URL=https://apigee.lg.com
VITE_AKENEO_PIM_URL=https://pim.lg.com
```

Create `.env.production` file with these values.

---

## Performance Optimization

### Before Deploying

1. **Optimize Images** (if you add any):
```bash
npm install -D vite-plugin-imagemin
```

2. **Enable Compression**:
Most hosting providers (Vercel, Netlify) do this automatically.

3. **Analyze Bundle Size**:
```bash
npm run build -- --mode analyze
```

### CDN Configuration

For production, ensure:
- Static assets cached for 1 year
- HTML cached for 5 minutes
- Gzip/Brotli compression enabled
- HTTP/2 enabled

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Classes Not Working
```bash
# Rebuild with cache cleared
rm -rf .vite
npm run build
```

### Charts Not Rendering
- Check console for errors
- Verify Recharts is installed: `npm list recharts`
- Clear browser cache

---

## Sharing for Review

### Quick Share Options

1. **Local Network Share** (for testing on devices):
```bash
npm run dev -- --host
```
Access via your local IP: `http://192.168.1.X:5173`

2. **Temporary Tunnel** (ngrok):
```bash
npm install -g ngrok
npm run dev
# In another terminal:
ngrok http 5173
```
Share the ngrok URL (expires after session)

3. **Vercel Preview** (best for stakeholders):
```bash
vercel
```
Get permanent URL to share

---

## Making Changes Before Demo

### Update Mock Data
Edit `/src/data/mockData.js`

### Change Colors/Theme
Edit `/tailwind.config.js` - change primary color values

### Modify Content
- Rebate Tool: `/src/components/RebateLocator.jsx`
- Analytics: `/src/components/AnalyticsDashboard.jsx`
- Embed Demo: `/src/components/EmbedDemo.jsx`
- Homepage: `/src/App.jsx` - `HomePage` component

### Quick Styling Updates
All components use Tailwind CSS classes. Common changes:
- Colors: `bg-primary-600` → `bg-blue-600`
- Spacing: `p-6` → `p-8`
- Text size: `text-xl` → `text-2xl`

---

## Production Readiness Checklist

For converting this demo to production:

### Backend Development
- [ ] Create REST API for rebate search
- [ ] Integrate with Akeneo PIM via Apigee
- [ ] Set up PostgreSQL/MongoDB database
- [ ] Implement authentication & authorization
- [ ] Add rate limiting & caching
- [ ] Set up error tracking (Sentry)

### Data & Analytics
- [ ] Configure Google Analytics 4
- [ ] Set up BigQuery data warehouse
- [ ] Create data pipeline (ETL)
- [ ] Build scheduled reporting system
- [ ] Implement role-based access control

### Widget Distribution
- [ ] Build standalone widget bundle
- [ ] Deploy to CDN
- [ ] Create initialization script
- [ ] Write integration documentation
- [ ] Create CMS plugins

### Testing
- [ ] Unit tests (Jest + React Testing Library)
- [ ] Integration tests
- [ ] E2E tests (Playwright/Cypress)
- [ ] Accessibility audit (axe-core)
- [ ] Performance testing (Lighthouse)
- [ ] Security audit

### DevOps
- [ ] Set up CI/CD pipeline
- [ ] Configure staging environment
- [ ] Set up monitoring (Datadog/New Relic)
- [ ] Create disaster recovery plan
- [ ] Document runbooks

---

## Support

### Demo Issues
For issues with this demo:
1. Check console for errors (F12)
2. Verify Node.js version (18+)
3. Clear cache and rebuild
4. Check this guide's troubleshooting section

### Production Questions
For production implementation:
- Architecture questions → See `TECHNICAL_ARCHITECTURE.md`
- Integration details → See README.md
- Presentation tips → See `PRESENTATION_GUIDE.md`

---

## Quick Deploy for Presentation

**Fastest path to a live demo URL:**

```bash
# From the project directory
npm install -g vercel
vercel --prod
```

Share the URL you receive. Done! ✨

---

**Pro Tip**: Deploy at least 2 hours before your presentation to have time to test and troubleshoot if needed.

