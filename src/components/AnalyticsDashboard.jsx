import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  Users, Search, MousePointer, TrendingUp, Clock, Activity,
  Download, Filter, Calendar 
} from 'lucide-react';
import { analyticsData } from '../data/mockData';
import USMap from './USMap';

const AnalyticsDashboard = () => {
  const { 
    overview, 
    trendsData, 
    topCategories, 
    geographicData, 
    topZipCodes, 
    funnelData, 
    deviceData, 
    topRebates,
    channelData,
    providerData
  } = analyticsData;

  const COLORS = ['#A50034', '#FD312E', '#d42d5e', '#f17797'];

  // KPI Card Component
  // eslint-disable-next-line no-unused-vars
  const KPICard = ({ title, value, subtitle, icon: Icon, trend, color }) => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        {trend && (
          <div className="flex items-center text-green-600 text-sm font-semibold">
            <TrendingUp className="w-4 h-4 mr-1" aria-hidden="true" />
            {trend}
          </div>
        )}
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-3 font-headline">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600 text-xl">
              Real-time insights into rebate locator performance
            </p>
          </div>
          <div className="flex gap-3">
            <button 
              className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 text-base"
              aria-label="Filter dashboard data"
            >
              <Filter className="w-5 h-5" aria-hidden="true" />
              Filter
            </button>
            <button 
              className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 text-base"
              aria-label="Select date range"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Last 30 Days
            </button>
            <button 
              className="flex items-center gap-2 px-5 py-3 bg-lg-heritage text-white rounded-lg hover:bg-primary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-base font-semibold"
              aria-label="Export dashboard data"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Total Visitors"
          value={overview.totalVisitors.toLocaleString()}
          subtitle="Unique users"
          icon={Users}
          trend="+12.5%"
          color="bg-primary-600"
        />
        <KPICard
          title="Total Searches"
          value={overview.totalSearches.toLocaleString()}
          subtitle={`${overview.avgSessionDuration} avg duration`}
          icon={Search}
          trend="+8.3%"
          color="bg-green-600"
        />
        <KPICard
          title="Total Clicks"
          value={overview.totalClicks.toLocaleString()}
          subtitle="Rebate detail views"
          icon={MousePointer}
          trend="+15.7%"
          color="bg-lg-heritage"
        />
        <KPICard
          title="Conversion Rate"
          value={`${overview.conversionRate}%`}
          subtitle={`${overview.bounceRate}% bounce rate`}
          icon={TrendingUp}
          trend="+3.2%"
          color="bg-purple-600"
        />
      </div>

      {/* Trends Chart */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6 font-headline">
          Engagement Trends
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={trendsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem' 
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="visitors" 
              stroke="#A50034" 
              strokeWidth={2}
              name="Visitors"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="searches" 
              stroke="#FD312E" 
              strokeWidth={2}
              name="Searches"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="clicks" 
              stroke="#d42d5e" 
              strokeWidth={2}
              name="Clicks"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="conversions" 
              stroke="#22c55e" 
              strokeWidth={2}
              name="Conversions"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Category Performance & Device Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Category Performance */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-headline">
            Category Performance
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topCategories}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="category" 
                stroke="#6b7280"
                angle={-45}
                textAnchor="end"
                height={100}
                interval={0}
              />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem' 
                }}
              />
              <Legend />
              <Bar dataKey="clicks" fill="#A50034" name="Clicks" />
              <Bar dataKey="searches" fill="#FD312E" name="Searches" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Device Distribution */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-headline">
            Device Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ device, percentage }) => `${device} ${percentage}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="count"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {deviceData.map((device, index) => (
              <div key={device.device} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-gray-600">{device.device}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {device.count.toLocaleString()} ({device.percentage}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conversion Funnel & Channel Attribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Conversion Funnel */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-headline">
            Conversion Funnel
          </h2>
          <div className="space-y-4">
            {funnelData.map((stage, index) => (
              <div key={stage.stage}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {stage.count.toLocaleString()} ({stage.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-6 rounded-full flex items-center justify-end pr-3 text-white text-xs font-semibold transition-all"
                    style={{
                      width: `${stage.percentage}%`,
                      backgroundColor: COLORS[index % COLORS.length]
                    }}
                  >
                    {stage.percentage > 20 && `${stage.percentage}%`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Attribution */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-headline">
            Channel Attribution
          </h2>
          <div className="space-y-4">
            {channelData.map((channel, index) => (
              <div key={channel.channel}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{channel.channel}</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {channel.visitors.toLocaleString()} visitors ({channel.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-6 rounded-full flex items-center justify-end pr-3 text-white text-xs font-semibold transition-all"
                    style={{
                      width: `${channel.percentage}%`,
                      backgroundColor: COLORS[index % COLORS.length]
                    }}
                  >
                    {channel.percentage}%
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {channel.conversions.toLocaleString()} conversions
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Provider Performance */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6 font-headline">
          Provider Performance
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={providerData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis type="number" stroke="#6b7280" />
            <YAxis 
              dataKey="provider" 
              type="category" 
              stroke="#6b7280"
              width={180}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem' 
              }}
            />
            <Legend />
            <Bar dataKey="searches" fill="#A50034" name="Searches" />
            <Bar dataKey="clicks" fill="#FD312E" name="Clicks" />
            <Bar dataKey="conversions" fill="#22c55e" name="Conversions" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Geographic Heatmap */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6 font-headline">
          Geographic Distribution Heatmap
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Rebate search activity by state. Darker shades indicate higher search volume.
        </p>
        <USMap data={geographicData} />
        
        {/* Data table below map */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {geographicData.map((location) => (
            <div 
              key={location.state}
              className="p-4 bg-gray-50 rounded-lg"
            >
              <p className="font-semibold text-gray-900 mb-2">{location.state}</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-600">
                  <span className="font-medium">Searches:</span> {location.searches.toLocaleString()}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Clicks:</span> {location.clicks.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performing Rebates & Top ZIP Codes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Performing Rebates */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-headline">
            Top Performing Rebates
          </h2>
          <div className="space-y-4">
            {topRebates.map((rebate, index) => (
              <div 
                key={rebate.name} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{rebate.name}</p>
                    <p className="text-sm text-gray-500">
                      {rebate.clicks.toLocaleString()} clicks • {rebate.conversions.toLocaleString()} conversions
                    </p>
                  </div>
                </div>
                <span className="text-lg font-bold text-green-600">{rebate.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top ZIP Codes */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-headline">
            Top ZIP Codes
          </h2>
          <div className="space-y-4">
            {topZipCodes.map((location) => (
              <div 
                key={location.zip} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-semibold text-gray-900">{location.zip}</p>
                  <p className="text-sm text-gray-500">{location.city}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    {location.searches.toLocaleString()} searches
                  </p>
                  <p className="text-sm text-gray-500">
                    {location.conversions.toLocaleString()} conversions
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

