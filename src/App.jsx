import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Search, Code, FileText } from 'lucide-react';
import RebateLocator from './components/RebateLocator';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import EmbedDemo from './components/EmbedDemo';
import './index.css';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: 'Rebate Finder', icon: Search },
    { path: '/analytics', label: 'Analytics', icon: LayoutDashboard },
    { path: '/embed', label: 'Widget Demo', icon: Code },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary-600 p-2 rounded-lg">
              <FileText className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 font-headline">
                Everblue Catalyst
              </h1>
              <p className="text-xs text-gray-500">
                Rebate Intelligence Platform
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    isActive(item.path)
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold mb-6 font-headline">
            Rebate Intelligence That Converts
          </h1>
          <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Everblue Catalyst delivers location-aware rebate discovery with enterprise analytics. 
            Track engagement, optimize conversions, and prove ROI—all while keeping customers on your site.
          </p>
          
          {/* Feature Badges */}
          <div className="flex flex-wrap gap-6 justify-center mb-10 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Code className="w-5 h-5 text-primary-100" aria-hidden="true" />
              <span className="text-sm font-semibold">Deploy in 3 Lines of Code</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <FileText className="w-5 h-5 text-primary-100" aria-hidden="true" />
              <span className="text-sm font-semibold">White-Label Ready</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <LayoutDashboard className="w-5 h-5 text-primary-100" aria-hidden="true" />
              <span className="text-sm font-semibold">Real-Time Analytics</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link
              to="/embed"
              className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700 text-lg"
            >
              View Live Demo →
            </Link>
            <Link
              to="/analytics"
              className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700 text-lg"
            >
              See Analytics →
            </Link>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 font-headline">
            Platform Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-headline">
                Smart Rebate Discovery
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ZIP code-based search</li>
                <li>• Product category filtering</li>
                <li>• Federal, state, and utility rebates</li>
                <li>• Real-time rebate availability</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LayoutDashboard className="w-6 h-6 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-headline">
                Advanced Analytics
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time dashboards</li>
                <li>• Conversion funnel tracking</li>
                <li>• Geographic heatmaps</li>
                <li>• Scheduled reporting</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-headline">
                Enterprise Integration
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• White-label embeddable widget</li>
                <li>• Akeneo PIM integration via Apigee</li>
                <li>• CMS compatibility (all major platforms)</li>
                <li>• WCAG 2.2 AA compliant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-16">
        <RebateLocator />
      </div>

      {/* Technical Specifications */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center font-headline">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-400 font-headline">
                Platform Integrations
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>✓ Akeneo PIM (via Apigee API)</p>
                <p>✓ Bynder DAM</p>
                <p>✓ Salesforce (Sales, Service, Marketing, Experience Cloud)</p>
                <p>✓ Contentstack & Umbraco CMS</p>
                <p>✓ Google Analytics 4 & Tag Manager</p>
                <p>✓ MCAE / Pardot</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-400 font-headline">
                Data & Analytics
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>✓ Real-time analytics (≤15 min latency)</p>
                <p>✓ BigQuery / Snowflake data warehouse</p>
                <p>✓ Role-based access control</p>
                <p>✓ Custom report generation</p>
                <p>✓ Geographic heatmap analysis</p>
                <p>✓ 95%+ data accuracy guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="mb-2">
            <strong className="text-white">Everblue Catalyst</strong> - Enterprise Rebate Intelligence Platform
          </p>
          <p className="text-sm text-gray-400">
            Demo for LG Electronics Home Appliances & HVAC Division • WCAG 2.2 AA Compliant
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Built with React, Tailwind CSS, and Recharts
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/embed" element={<EmbedDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
