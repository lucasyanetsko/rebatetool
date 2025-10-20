import { useState } from 'react';
import { Search, MapPin, Tag, ExternalLink, Filter } from 'lucide-react';
import { rebates } from '../data/mockData';

const RebateLocator = ({ embedded = false, initialCategory = 'All' }) => {
  const [zipCode, setZipCode] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const categories = ['All', 'HVAC', 'Water Heating', 'Kitchen Appliances', 'Smart Home', 'Laundry', 'Home Efficiency'];

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);
    
    let filtered = rebates.filter(rebate => 
      rebate.zipCodes.includes(zipCode)
    );

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(rebate => rebate.category === selectedCategory);
    }

    setResults(filtered);
  };

  return (
    <div className={`${embedded ? 'max-w-2xl' : 'max-w-6xl'} mx-auto ${embedded ? 'p-4' : 'p-8'}`}>
      {!embedded && (
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 font-headline">
            Find Your Rebates
          </h1>
          <p className="text-lg text-gray-600">
            Discover available rebates for energy-efficient home appliances and HVAC systems
          </p>
        </div>
      )}

      {/* Search Form */}
      <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* ZIP Code Input */}
          <div>
            <label 
              htmlFor="zipCode" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              ZIP Code
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
              <input
                id="zipCode"
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter ZIP code"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                maxLength="5"
                pattern="[0-9]{5}"
                required
                aria-label="Enter your ZIP code to find rebates"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Try: 10001, 90210, 60601, 94102
            </p>
          </div>

          {/* Category Filter */}
          <div>
            <label 
              htmlFor="category" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Product Category
            </label>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none bg-white"
                aria-label="Filter by product category"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label="Search for rebates"
        >
          <Search className="w-5 h-5" aria-hidden="true" />
          Search Rebates
        </button>
      </form>

      {/* Results */}
      {hasSearched && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 font-headline">
              {results.length > 0 ? (
                <>Found {results.length} rebate{results.length !== 1 ? 's' : ''}</>
              ) : (
                'No rebates found'
              )}
            </h2>
            {results.length > 0 && (
              <span className="text-sm text-gray-500">
                ZIP: {zipCode}
                {selectedCategory !== 'All' && ` • ${selectedCategory}`}
              </span>
            )}
          </div>

          {results.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-2">
                No rebates available for ZIP code {zipCode}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
              <p className="text-sm text-gray-500">
                Try a different ZIP code or category, or check back later for new programs.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {results.map((rebate) => (
                <div
                  key={rebate.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                          <Tag className="w-4 h-4 inline mr-1" aria-hidden="true" />
                          {rebate.category}
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-lg font-bold">
                          {rebate.amount}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-headline">
                        {rebate.title}
                      </h3>

                      <p className="text-gray-600 mb-3">
                        {rebate.description}
                      </p>

                      <div className="space-y-2 text-sm text-gray-600">
                        <p>
                          <strong className="text-gray-900">Provider:</strong> {rebate.provider}
                        </p>
                        <p>
                          <strong className="text-gray-900">Requirements:</strong> {rebate.requirements}
                        </p>
                        <p>
                          <strong className="text-gray-900">Expires:</strong>{' '}
                          {new Date(rebate.expiryDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="md:text-right">
                      <a
                        href={rebate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        aria-label={`Learn more about ${rebate.title} (opens in new window)`}
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Info Section */}
      {!hasSearched && !embedded && (
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
            <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-headline">Easy Search</h3>
            <p className="text-gray-600 text-sm">
              Simply enter your ZIP code and product category to find available rebates in your area.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Tag className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-headline">Save Money</h3>
            <p className="text-gray-600 text-sm">
              Access thousands of dollars in rebates for energy-efficient appliances and systems.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-headline">Local Programs</h3>
            <p className="text-gray-600 text-sm">
              Find federal, state, and local utility rebates specific to your location.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RebateLocator;

