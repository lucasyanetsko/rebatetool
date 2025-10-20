import React from 'react';
import { createRoot } from 'react-dom/client';
import RebateLocator from './components/RebateLocator';
import './index.css';

// Widget initialization function
window.RebateLocator = {
  init: function(config = {}) {
    const {
      container = '#rebate-widget',
      mode = 'embedded',
      category = 'All',
      productSku: _productSku = null,
      autoPopulateZip: _autoPopulateZip = false,
      showFilters: _showFilters = true,
      enableAnalytics: _enableAnalytics = true,
      primaryColor = '#0284c7',
      apiKey: _apiKey = null,
      theme: _theme = 'light',
      // White-label customization options
      fontFamily = null,
      borderRadius = null,
      backgroundColor = null,
      textColor = null,
      buttonStyle = 'default',  // 'default', 'rounded', 'square', 'minimal'
      accentColor = null,
      customCSS = null
    } = config;

    // Find container element
    const containerElement = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;

    if (!containerElement) {
      console.error(`RebateLocator: Container element "${container}" not found`);
      return null;
    }

    // Apply theme customization if provided
    const styleId = `rebate-widget-custom-${Date.now()}`;
    const style = document.createElement('style');
    style.id = styleId;
    
    let cssVariables = [];
    
    // Primary color customization
    if (primaryColor && primaryColor !== '#0284c7') {
      cssVariables.push(`--primary-color: ${primaryColor};`);
      cssVariables.push(`--primary-hover: ${primaryColor}dd;`);
    }
    
    // Additional white-label customizations
    if (fontFamily) {
      cssVariables.push(`--widget-font-family: ${fontFamily};`);
    }
    
    if (borderRadius) {
      cssVariables.push(`--widget-border-radius: ${borderRadius};`);
    }
    
    if (backgroundColor) {
      cssVariables.push(`--widget-bg-color: ${backgroundColor};`);
    }
    
    if (textColor) {
      cssVariables.push(`--widget-text-color: ${textColor};`);
    }
    
    if (accentColor) {
      cssVariables.push(`--widget-accent-color: ${accentColor};`);
    }
    
    // Build custom CSS
    let customStyles = '';
    if (cssVariables.length > 0) {
      customStyles += `.rebate-widget-root {\n  ${cssVariables.join('\n  ')}\n}\n`;
    }
    
    // Button style variations
    if (buttonStyle !== 'default') {
      const buttonStyles = {
        rounded: `
          .rebate-widget-root button {
            border-radius: 9999px !important;
          }
        `,
        square: `
          .rebate-widget-root button {
            border-radius: 0 !important;
          }
        `,
        minimal: `
          .rebate-widget-root button {
            border-radius: 0 !important;
            box-shadow: none !important;
            border: 2px solid currentColor !important;
          }
        `
      };
      customStyles += buttonStyles[buttonStyle] || '';
    }
    
    // Apply custom CSS if provided
    if (customCSS) {
      customStyles += `\n${customCSS}`;
    }
    
    style.textContent = customStyles;
    if (customStyles) {
      document.head.appendChild(style);
    }

    // Create wrapper div with scoping class
    const wrapper = document.createElement('div');
    wrapper.className = 'rebate-widget-root';
    containerElement.appendChild(wrapper);

    // Initialize React app
    const root = createRoot(wrapper);
    
    // Determine embedded mode based on mode config
    const isEmbedded = mode !== 'standalone';
    const initialCategory = category || 'All';

    root.render(
      <React.StrictMode>
        <RebateLocator 
          embedded={isEmbedded}
          initialCategory={initialCategory}
        />
      </React.StrictMode>
    );

    // Return widget instance with control methods
    return {
      destroy: () => {
        root.unmount();
        wrapper.remove();
        // Remove custom styles
        const styleElement = document.getElementById(styleId);
        if (styleElement) {
          styleElement.remove();
        }
      },
      updateCategory: (newCategory) => {
        // Future enhancement: expose state update methods
        console.log('Update category to:', newCategory);
      },
      getVersion: () => window.RebateLocator.version
    };
  },

  // Version info
  version: '1.0.0'
};

// Auto-initialize if data-auto-init attribute is present
document.addEventListener('DOMContentLoaded', () => {
  const autoInitElements = document.querySelectorAll('[data-rebate-locator]');
  autoInitElements.forEach((element) => {
    const config = {
      container: element,
      mode: element.dataset.mode || 'embedded',
      category: element.dataset.category || 'All',
      primaryColor: element.dataset.primaryColor,
    };
    window.RebateLocator.init(config);
  });
});

console.log('RebateLocator Widget v1.0.0 loaded');

