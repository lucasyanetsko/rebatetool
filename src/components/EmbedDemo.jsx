import { useState } from 'react';
import { Code, Copy, Check } from 'lucide-react';
import RebateLocator from './RebateLocator';

const EmbedDemo = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('light');

  // Use actual hosted URL (will be your Vercel URL after deployment)
  const widgetUrl = window.location.origin + '/widget.iife.js';
  const widgetCssUrl = window.location.origin + '/widget.css';
  
  const embedCode = `<!-- Everblue Catalyst Widget -->
<link rel="stylesheet" href="${widgetCssUrl}">
<div id="rebate-locator-widget"></div>
<script src="${widgetUrl}"></script>
<script>
  RebateLocator.init({
    container: '#rebate-locator-widget',
    mode: 'embedded',
    primaryColor: '#A50034'
  });
</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 font-headline">
          Embeddable Widget Demo
        </h1>
        <p className="text-2xl text-gray-600 mb-6">
          White-label rebate locator that seamlessly integrates into any website
        </p>
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 flex items-start gap-4">
          <span className="text-3xl">✅</span>
          <div>
            <p className="font-semibold text-green-900 mb-2 text-xl">
              This is a REAL, working embeddable widget with white-label customization!
            </p>
            <p className="text-green-800 text-lg">
              The code shown below is production-ready and can be copied to any website.{' '}
              <a 
                href="/white-label-demo.html" 
                target="_blank"
                className="underline font-semibold hover:text-green-900"
              >
                View live white-label examples →
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2 font-headline">Easy Integration</h3>
          <p className="text-sm text-gray-600">
            Simple script tag integration. Works with any CMS including Contentstack, Umbraco, WordPress, and Drupal.
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2 font-headline">White-Label Customization</h3>
          <p className="text-sm text-gray-600">
            Full white-label support. Customize colors, fonts, button styles, and inject custom CSS to match any brand identity.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2 font-headline">Responsive Design</h3>
          <p className="text-sm text-gray-600">
            Mobile-first design that works perfectly on all devices and screen sizes.
          </p>
        </div>
      </div>

      {/* Integration Options */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-headline">
          Integration Code
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Theme
          </label>
          <select
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            aria-label="Select widget theme"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        <div className="relative">
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
            <code>{embedCode}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={copied ? "Code copied" : "Copy code to clipboard"}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" aria-hidden="true" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" aria-hidden="true" />
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Live Preview */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <Code className="w-6 h-6 text-primary-600" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-gray-900 font-headline">
            Live Preview
          </h2>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 border-2 border-dashed border-gray-300">
          <div className="bg-white rounded-lg shadow-md">
            <RebateLocator embedded={true} />
          </div>
        </div>
      </div>

      {/* Implementation Examples */}
      <div className="mt-8 space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 font-headline">
          Implementation Examples
        </h2>

        {/* Product Page Integration */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 font-headline">
            1. Product Page Integration
          </h3>
          <p className="text-gray-600 mb-4">
            Automatically show relevant rebates on specific product pages. The widget appears contextually on product detail pages to show applicable rebates for that specific product.
          </p>
          
          {/* Code Example */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Integration Code:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`<!-- Load widget styles -->
<link rel="stylesheet" href="${widgetCssUrl}">

<!-- Product Card (your existing product page HTML) -->
<div style="background: white; border-radius: 8px; padding: 24px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
  <div style="display: flex; gap: 16px; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #e5e7eb;">
    <div style="background: #e5e7eb; width: 96px; height: 96px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #9ca3af; font-size: 12px;">
      Product Image
    </div>
    <div>
      <h3 style="font-size: 18px; font-weight: bold; color: #111827; margin-bottom: 4px;">LG Heat Pump HVAC System</h3>
      <p style="font-size: 14px; color: #6b7280; margin-bottom: 8px;">Model: HVAC-HP-2024</p>
      <p style="font-size: 24px; font-weight: bold; color: #A50034;">$8,999</p>
    </div>
  </div>
  <p style="font-size: 14px; color: #6b7280; font-style: italic;">💡 Check available rebates below ↓</p>
</div>

<!-- Widget container -->
<div id="rebate-widget"></div>

<!-- Load widget script -->
<script src="${widgetUrl}"></script>

<!-- Initialize widget -->
<script>
  RebateLocator.init({
    container: '#rebate-widget',
    mode: 'embedded',
    category: 'HVAC',
    primaryColor: '#A50034'
  });
</script>`}</code>
            </pre>
          </div>

          {/* Live Preview */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Live Preview:</h4>
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
              {/* Product Page Context */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div className="bg-gray-200 w-24 h-24 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                    Product Image
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-gray-900 mb-1 font-headline">LG Heat Pump HVAC System</h5>
                    <p className="text-sm text-gray-600 mb-2">Model: HVAC-HP-2024</p>
                    <p className="text-2xl font-bold text-primary-600">$8,999</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 italic">
                  💡 Check available rebates below ↓
                </p>
              </div>
              {/* Widget */}
              <div className="bg-white rounded-lg shadow-md">
                <RebateLocator embedded={true} initialCategory="HVAC" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Page Integration */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 font-headline">
            2. Category Page Integration
          </h3>
          <p className="text-gray-600 mb-4">
            Show category-specific rebates on product listing pages. Perfect for category landing pages where customers are browsing multiple products.
          </p>
          
          {/* Code Example */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Integration Code:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`<!-- Load widget styles -->
<link rel="stylesheet" href="${widgetCssUrl}">

<!-- Category Page Header (your existing category page HTML) -->
<div style="background: white; border-radius: 8px; padding: 24px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
  <h2 style="font-size: 24px; font-weight: bold; color: #111827; margin-bottom: 16px;">HVAC Systems</h2>
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 16px;">
    <div style="background: #f3f4f6; border-radius: 8px; padding: 16px; text-align: center;">
      <div style="background: #e5e7eb; width: 100%; height: 80px; border-radius: 4px; margin-bottom: 8px;"></div>
      <p style="font-size: 12px; font-weight: 600;">Heat Pump</p>
    </div>
    <div style="background: #f3f4f6; border-radius: 8px; padding: 16px; text-align: center;">
      <div style="background: #e5e7eb; width: 100%; height: 80px; border-radius: 4px; margin-bottom: 8px;"></div>
      <p style="font-size: 12px; font-weight: 600;">Air Handler</p>
    </div>
    <div style="background: #f3f4f6; border-radius: 8px; padding: 16px; text-align: center;">
      <div style="background: #e5e7eb; width: 100%; height: 80px; border-radius: 4px; margin-bottom: 8px;"></div>
      <p style="font-size: 12px; font-weight: 600;">Furnace</p>
    </div>
  </div>
  <p style="font-size: 14px; color: #6b7280; font-style: italic;">💡 Available rebates for HVAC products ↓</p>
</div>

<!-- Widget container -->
<div id="rebate-widget"></div>

<!-- Load widget script -->
<script src="${widgetUrl}"></script>

<!-- Initialize widget -->
<script>
  RebateLocator.init({
    container: '#rebate-widget',
    mode: 'embedded',
    category: 'HVAC',
    primaryColor: '#A50034'
  });
</script>`}</code>
            </pre>
          </div>

          {/* Live Preview */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Live Preview:</h4>
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
              {/* Category Page Context */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <h5 className="text-2xl font-bold text-gray-900 mb-3 font-headline">HVAC Systems</h5>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="bg-gray-200 w-full h-20 rounded mb-2"></div>
                    <p className="text-xs font-semibold">Heat Pump</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="bg-gray-200 w-full h-20 rounded mb-2"></div>
                    <p className="text-xs font-semibold">Central AC</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="bg-gray-200 w-full h-20 rounded mb-2"></div>
                    <p className="text-xs font-semibold">Furnace</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  💰 Available rebates for HVAC products ↓
                </p>
              </div>
              {/* Widget */}
              <div className="bg-white rounded-lg shadow-md">
                <RebateLocator embedded={true} initialCategory="HVAC" />
              </div>
            </div>
          </div>
        </div>

        {/* Standalone Page */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 font-headline">
            3. Standalone Rebate Finder Page
          </h3>
          <p className="text-gray-600 mb-4">
            Full-featured rebate finder for dedicated rebate pages. Provides the complete experience with all features and branding.
          </p>
          
          {/* Code Example */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Integration Code:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`<!-- Load widget styles -->
<link rel="stylesheet" href="${widgetCssUrl}">

<!-- Page Header (optional) -->
<div style="background: white; border-radius: 8px; padding: 24px; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center;">
  <h1 style="font-size: 32px; font-weight: bold; color: #111827; margin-bottom: 8px;">Find Your Rebates</h1>
  <p style="font-size: 18px; color: #6b7280;">Discover federal, state, and local rebates for energy-efficient products</p>
</div>

<!-- Widget container -->
<div id="rebate-widget"></div>

<!-- Load widget script -->
<script src="${widgetUrl}"></script>

<!-- Initialize widget -->
<script>
  RebateLocator.init({
    container: '#rebate-widget',
    mode: 'embedded',
    primaryColor: '#A50034'
  });
</script>`}</code>
            </pre>
          </div>

          {/* Live Preview */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Live Preview:</h4>
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
              {/* Standalone Widget - Full Version */}
              <div className="bg-white rounded-lg shadow-md">
                <RebateLocator embedded={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Support */}
      <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-3 font-headline">
          Technical Support
        </h2>
        <p className="mb-6 text-primary-100">
          Our team has extensive experience integrating with your tech stack:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Akeneo PIM</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Contentstack CMS</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Umbraco CMS</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Bynder DAM</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Apigee</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Google Analytics 4</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">MCAE / Pardot</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Salesforce</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbedDemo;

