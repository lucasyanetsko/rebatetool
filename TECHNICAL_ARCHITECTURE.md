# Technical Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User-Facing Layer                         │
├─────────────────────────────────────────────────────────────┤
│  LG Websites (Contentstack, Umbraco, WordPress, Drupal)     │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Product Page │  │Category Page │  │ Rebate Page  │     │
│  │  + Widget    │  │  + Widget    │  │ Standalone   │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Widget & Frontend Layer                    │
├─────────────────────────────────────────────────────────────┤
│  • React-based embeddable widget (CDN-distributed)          │
│  • White-label with customizable CSS                        │
│  • Event tracking & analytics instrumentation               │
│  • Responsive, WCAG 2.2 AA compliant                        │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Gateway                             │
├─────────────────────────────────────────────────────────────┤
│  • Apigee API Management                                     │
│  • Authentication & Authorization                            │
│  • Rate limiting & caching                                   │
│  • Request routing                                           │
└─────────────────────────────────────────────────────────────┘
                            │
                ┌───────────┴───────────┐
                ▼                       ▼
┌───────────────────────┐    ┌──────────────────────┐
│  Rebate Service API   │    │   Product Data API   │
├───────────────────────┤    ├──────────────────────┤
│ • Rebate search       │    │ • Akeneo PIM         │
│ • Filtering logic     │    │ • Product catalog    │
│ • Provider data       │    │ • SKU information    │
│ • Eligibility rules   │    │ • Asset links (DAM)  │
└───────────────────────┘    └──────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────────────────────┐
│                    Data Collection Layer                     │
├─────────────────────────────────────────────────────────────┤
│  • Google Tag Manager                                        │
│  • Google Analytics 4                                        │
│  • Custom event tracking                                     │
│  • Real-time streaming to data warehouse                    │
└─────────────────────────────────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────────────────────┐
│                   Analytics Data Warehouse                   │
├─────────────────────────────────────────────────────────────┤
│  • Google BigQuery / Snowflake                              │
│  • Raw event data                                            │
│  • Aggregated metrics                                        │
│  • Historical trends                                         │
│  • Geographic data                                           │
└─────────────────────────────────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────────────────────┐
│              Analytics & Reporting Layer                     │
├─────────────────────────────────────────────────────────────┤
│  • Real-time dashboards (≤15 min latency)                   │
│  • Role-based access control                                 │
│  • Scheduled reports (email delivery)                       │
│  • Custom report builder                                     │
│  • Data export (CSV, Excel, PDF)                            │
└─────────────────────────────────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────────────────────┐
│                    Integration Layer                         │
├─────────────────────────────────────────────────────────────┤
│  • Salesforce Marketing Cloud (MCAE/Pardot)                 │
│  • Marketing campaign attribution                            │
│  • Lead generation & nurturing                               │
│  • Customer journey tracking                                 │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM

### Backend (Production)
- **API Gateway**: Apigee
- **Backend Language**: Node.js / Python (flexible)
- **API Framework**: Express.js / FastAPI
- **Database**: PostgreSQL / MongoDB
- **Cache**: Redis
- **Search**: Elasticsearch (optional)

### Data & Analytics
- **Data Warehouse**: Google BigQuery / Snowflake
- **Event Streaming**: Google Tag Manager
- **Analytics**: Google Analytics 4
- **BI Tools**: Looker / Tableau / Custom Dashboard

### Integration
- **PIM**: Akeneo (via Apigee)
- **DAM**: Bynder
- **CRM**: Salesforce (all clouds)
- **Marketing**: MCAE / Pardot
- **CMS**: Contentstack, Umbraco, WordPress, Drupal

### Infrastructure
- **Hosting**: AWS / Google Cloud / Azure
- **CDN**: CloudFlare / AWS CloudFront
- **CI/CD**: GitHub Actions / Jenkins
- **Monitoring**: Datadog / New Relic
- **Error Tracking**: Sentry

## Data Flow

### 1. Rebate Search Flow

```
User enters ZIP + Category
        ↓
Widget sends request to API Gateway
        ↓
Apigee authenticates & routes request
        ↓
Rebate Service queries database
        ↓
Filters by ZIP, category, eligibility
        ↓
Returns matching rebates
        ↓
Widget displays results
        ↓
User clicks rebate
        ↓
Event tracked to GA4 & Data Warehouse
```

### 2. Product Page Integration Flow

```
User visits product page (SKU: HVAC-HP-2024)
        ↓
Widget script initializes
        ↓
Widget reads product SKU from page
        ↓
API call: Get product data (Akeneo via Apigee)
        ↓
API call: Get rebates for product category + user ZIP
        ↓
Widget auto-populates with relevant rebates
        ↓
User sees rebates without manual search
```

### 3. Analytics Flow

```
User interaction (search, click, view)
        ↓
Event captured by GTM
        ↓
Sent to GA4 for real-time processing
        ↓
Streamed to BigQuery/Snowflake
        ↓
Data transformed & aggregated
        ↓
Dashboard queries data warehouse
        ↓
Real-time metrics displayed
        ↓
Scheduled reports generated & emailed
```

## Widget Integration Modes

### Mode 1: Product Page Integration
```javascript
// Automatically shows rebates for specific product
RebateLocator.init({
  container: '#rebate-widget',
  mode: 'product',
  productSku: 'HVAC-HP-2024', // From page context or Akeneo
  autoPopulateZip: true,       // Detect from user location
  theme: 'lg-brand'
});
```

### Mode 2: Category Page Integration
```javascript
// Shows all rebates for product category
RebateLocator.init({
  container: '#rebate-widget',
  mode: 'category',
  category: 'HVAC',
  showAllResults: true,
  enableFiltering: true
});
```

### Mode 3: Standalone Rebate Finder
```javascript
// Full-featured rebate finder
RebateLocator.init({
  container: '#rebate-widget',
  mode: 'standalone',
  showFilters: true,
  showSearch: true,
  enableAnalytics: true
});
```

## Data Models

### Rebate Entity
```typescript
interface Rebate {
  id: string;
  title: string;
  amount: string;
  category: string;
  description: string;
  provider: string;
  providerType: 'federal' | 'state' | 'utility' | 'local';
  requirements: string;
  eligibility: {
    zipCodes: string[];
    states: string[];
    utilityProviders: string[];
  };
  productTypes: string[];
  expiryDate: Date;
  applicationUrl: string;
  metadata: {
    createdAt: Date;
    updatedAt: Date;
    status: 'active' | 'expired' | 'upcoming';
  };
}
```

### Analytics Event
```typescript
interface AnalyticsEvent {
  eventId: string;
  timestamp: Date;
  eventType: 'search' | 'view' | 'click' | 'conversion';
  userId?: string;
  sessionId: string;
  data: {
    zipCode?: string;
    category?: string;
    rebateId?: string;
    searchQuery?: string;
    referrer?: string;
    device: 'desktop' | 'mobile' | 'tablet';
    page: string;
  };
  metadata: {
    userAgent: string;
    ip: string;
    location: {
      city: string;
      state: string;
      country: string;
    };
  };
}
```

## API Endpoints

### Rebate Search API
```
GET /api/v1/rebates/search
Query Parameters:
  - zipCode: string (required)
  - category: string (optional)
  - provider: string (optional)
  - minAmount: number (optional)
  - limit: number (default: 20)
  - offset: number (default: 0)

Response:
{
  results: Rebate[],
  total: number,
  page: number,
  hasMore: boolean
}
```

### Product Integration API
```
GET /api/v1/rebates/product/{sku}
Query Parameters:
  - zipCode: string (required)

Response:
{
  product: {
    sku: string,
    name: string,
    category: string
  },
  rebates: Rebate[],
  savings: number
}
```

### Analytics API
```
POST /api/v1/analytics/event
Body:
{
  eventType: string,
  data: object,
  timestamp: string
}

Response:
{
  eventId: string,
  status: 'tracked'
}
```

## Security

### Authentication
- API key authentication for widget
- OAuth 2.0 for admin dashboard
- JWT tokens for session management
- Role-based access control (RBAC)

### Data Protection
- HTTPS/TLS encryption in transit
- Encryption at rest for sensitive data
- PII anonymization in analytics
- GDPR/CCPA compliance

### Rate Limiting
- 1000 requests/minute per API key
- DDoS protection via Apigee
- CDN caching for widget assets

## Performance

### Optimization Strategies
- **CDN Distribution**: Widget hosted on global CDN
- **Lazy Loading**: Components load on demand
- **Code Splitting**: Reduce initial bundle size
- **Caching**: API responses cached (Redis)
- **Compression**: Gzip/Brotli compression
- **Image Optimization**: WebP format, lazy loading

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- API Response Time: < 200ms (p95)
- Widget Load Time: < 1s
- Dashboard Load Time: < 2s

## Scalability

### Horizontal Scaling
- Containerized microservices (Docker/Kubernetes)
- Auto-scaling based on traffic
- Load balancing across instances
- Stateless API design

### Data Scaling
- Database sharding by region
- Read replicas for analytics queries
- Partitioned tables in data warehouse
- Archival strategy for old data

## Monitoring & Observability

### Metrics
- API latency & error rates
- Widget load times
- Search success rates
- Conversion rates
- Database query performance

### Logging
- Centralized log aggregation
- Structured JSON logging
- Log levels: ERROR, WARN, INFO, DEBUG
- Retention: 30 days active, 1 year archive

### Alerting
- Critical: API downtime, data pipeline failure
- Warning: High error rates, slow queries
- Info: Deployment notifications

## Deployment

### CI/CD Pipeline
```
Code Push
  ↓
Run Tests (Unit, Integration, E2E)
  ↓
Lint & Type Check
  ↓
Build Production Bundle
  ↓
Deploy to Staging
  ↓
Run Smoke Tests
  ↓
Deploy to Production (Blue-Green)
  ↓
Monitor & Validate
```

### Environments
- **Development**: Local development
- **Staging**: Pre-production testing
- **Production**: Live environment
- **DR**: Disaster recovery site

## Disaster Recovery

### Backup Strategy
- Database: Daily full backup, hourly incremental
- Data Warehouse: Continuous backup
- Configuration: Version controlled

### Recovery Objectives
- RTO (Recovery Time Objective): < 1 hour
- RPO (Recovery Point Objective): < 15 minutes

## Compliance

### WCAG 2.2 AA
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Color contrast ratios ≥ 4.5:1
- Focus indicators
- Alt text for images
- Skip navigation links

### Data Privacy
- GDPR compliant
- CCPA compliant
- Privacy policy integration
- Cookie consent management
- Data retention policies
- Right to deletion support

## Future Enhancements

### Phase 2 Features
- Multi-language support (i18n)
- AI-powered rebate recommendations
- Predictive analytics
- Mobile app (iOS/Android)
- Voice search integration
- Chatbot assistance

### Advanced Analytics
- Machine learning for user segmentation
- Predictive rebate expiry alerts
- A/B testing framework
- Customer lifetime value analysis

### Integration Expansions
- Smart home device integration
- Retailer POS integration
- Contractor network integration
- Social media sharing

---

## Support & Maintenance

### Support Tiers
- **L1**: Basic troubleshooting (24/7)
- **L2**: Technical support (9am-5pm EST)
- **L3**: Engineering escalation (on-call)

### Maintenance Windows
- Scheduled: Sundays 2am-4am EST
- Emergency: As needed with notification

### SLA Commitments
- Uptime: 99.9% (43 minutes downtime/month)
- Response Time: Critical < 1 hour, High < 4 hours
- Resolution Time: Critical < 4 hours, High < 24 hours

---

This architecture is designed for enterprise-scale deployment with LG Electronics, ensuring reliability, performance, and seamless integration with existing systems.

