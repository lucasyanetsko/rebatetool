// Mock rebate data
export const rebates = [
  {
    id: 1,
    title: "Energy Star Heat Pump Rebate",
    amount: "$2,000",
    category: "HVAC",
    description: "Federal tax credit for qualifying heat pump installations",
    zipCodes: ["10001", "10002", "10003", "90210", "90211", "60601", "60602"],
    provider: "Federal IRA Program",
    expiryDate: "2032-12-31",
    link: "https://www.energy.gov/",
    requirements: "ENERGY STAR certified heat pump with HSPF2 ≥ 7.8"
  },
  {
    id: 2,
    title: "ConEd Smart Thermostat Rebate",
    amount: "$100",
    category: "Smart Home",
    description: "Rebate for purchasing and installing a smart thermostat",
    zipCodes: ["10001", "10002", "10003", "10004", "10005"],
    provider: "Con Edison",
    expiryDate: "2025-12-31",
    link: "https://www.coned.com/",
    requirements: "Must be ConEd customer, WiFi-enabled smart thermostat"
  },
  {
    id: 3,
    title: "Water Heater Efficiency Rebate",
    amount: "$1,800",
    category: "Water Heating",
    description: "Rebate for ENERGY STAR certified electric heat pump water heaters",
    zipCodes: ["10001", "10002", "90210", "90211", "90212", "60601"],
    provider: "Federal IRA Program",
    expiryDate: "2032-12-31",
    link: "https://www.energy.gov/",
    requirements: "UEF ≥ 3.3 for ≥ 55 gallons"
  },
  {
    id: 4,
    title: "SoCal Edison HVAC Rebate",
    amount: "$3,500",
    category: "HVAC",
    description: "Central air conditioning system replacement rebate",
    zipCodes: ["90210", "90211", "90212", "90213", "91101", "91102"],
    provider: "Southern California Edison",
    expiryDate: "2026-06-30",
    link: "https://www.sce.com/",
    requirements: "SEER2 ≥ 16, installed by licensed contractor"
  },
  {
    id: 5,
    title: "Energy Efficient Appliance Rebate",
    amount: "$840",
    category: "Kitchen Appliances",
    description: "State rebate for ENERGY STAR refrigerators and dishwashers",
    zipCodes: ["60601", "60602", "60603", "60604"],
    provider: "ComEd Illinois",
    expiryDate: "2025-12-31",
    link: "https://www.comed.com/",
    requirements: "ENERGY STAR certified appliances purchased from participating retailers"
  },
  {
    id: 6,
    title: "Induction Cooktop Rebate",
    amount: "$840",
    category: "Kitchen Appliances",
    description: "Federal rebate for electric induction ranges and cooktops",
    zipCodes: ["10001", "10002", "90210", "60601", "94102", "94103"],
    provider: "Federal IRA Program",
    expiryDate: "2032-12-31",
    link: "https://www.energy.gov/",
    requirements: "Electric induction cooktop or range"
  },
  {
    id: 7,
    title: "Smart AC Controller Rebate",
    amount: "$75",
    category: "Smart Home",
    description: "Rebate for smart air conditioner controllers",
    zipCodes: ["10001", "10002", "10003"],
    provider: "Con Edison",
    expiryDate: "2025-09-30",
    link: "https://www.coned.com/",
    requirements: "Compatible with existing central AC system"
  },
  {
    id: 8,
    title: "Ductless Mini-Split System Rebate",
    amount: "$1,000",
    category: "HVAC",
    description: "Rebate for ductless heat pump systems",
    zipCodes: ["94102", "94103", "94104", "94105"],
    provider: "PG&E California",
    expiryDate: "2026-12-31",
    link: "https://www.pge.com/",
    requirements: "ENERGY STAR certified ductless mini-split, SEER2 ≥ 16"
  },
  {
    id: 9,
    title: "Clothes Dryer Heat Pump Rebate",
    amount: "$840",
    category: "Laundry",
    description: "Federal rebate for electric heat pump clothes dryers",
    zipCodes: ["10001", "60601", "90210", "94102"],
    provider: "Federal IRA Program",
    expiryDate: "2032-12-31",
    link: "https://www.energy.gov/",
    requirements: "ENERGY STAR certified heat pump dryer"
  },
  {
    id: 10,
    title: "Weatherization and Insulation Rebate",
    amount: "$1,600",
    category: "Home Efficiency",
    description: "Rebate for home weatherization and insulation improvements",
    zipCodes: ["10001", "10002", "60601", "90210", "94102"],
    provider: "Federal IRA Program",
    expiryDate: "2032-12-31",
    link: "https://www.energy.gov/",
    requirements: "Professional installation, qualified insulation materials"
  }
];

// Mock analytics data
export const analyticsData = {
  overview: {
    totalVisitors: 45823,
    totalSearches: 32456,
    totalClicks: 18923,
    conversionRate: 58.3,
    avgSessionDuration: "3:42",
    bounceRate: 23.4
  },
  trendsData: [
    { date: "Sep 1", visitors: 1205, searches: 892, clicks: 524, conversions: 312 },
    { date: "Sep 8", visitors: 1342, searches: 978, clicks: 587, conversions: 345 },
    { date: "Sep 15", visitors: 1489, searches: 1123, clicks: 678, conversions: 401 },
    { date: "Sep 22", visitors: 1678, searches: 1289, clicks: 789, conversions: 478 },
    { date: "Sep 29", visitors: 1823, searches: 1456, clicks: 892, conversions: 567 },
    { date: "Oct 6", visitors: 1956, searches: 1589, clicks: 978, conversions: 623 },
    { date: "Oct 13", visitors: 2134, searches: 1723, clicks: 1089, conversions: 701 },
  ],
  topCategories: [
    { category: "HVAC", searches: 12456, clicks: 7823, conversion: 62.8 },
    { category: "Water Heating", searches: 8923, clicks: 5234, conversion: 58.6 },
    { category: "Kitchen Appliances", searches: 6782, clicks: 3945, conversion: 58.2 },
    { category: "Smart Home", searches: 4567, clicks: 2678, conversion: 58.6 },
    { category: "Laundry", searches: 3234, clicks: 1823, conversion: 56.4 },
    { category: "Home Efficiency", searches: 2891, clicks: 1567, conversion: 54.2 },
  ],
  geographicData: [
    { state: "California", searches: 8923, clicks: 5234, lat: 36.7783, lng: -119.4179 },
    { state: "New York", searches: 7456, clicks: 4523, lat: 40.7128, lng: -74.0060 },
    { state: "Illinois", searches: 5678, clicks: 3345, lat: 40.6331, lng: -89.3985 },
    { state: "Texas", searches: 4892, clicks: 2789, lat: 31.9686, lng: -99.9018 },
    { state: "Florida", searches: 3456, clicks: 2012, lat: 27.9944, lng: -81.7603 },
  ],
  topZipCodes: [
    { zip: "10001", city: "New York, NY", searches: 2345, conversions: 1456 },
    { zip: "90210", city: "Beverly Hills, CA", searches: 2123, conversions: 1323 },
    { zip: "60601", city: "Chicago, IL", searches: 1892, conversions: 1145 },
    { zip: "94102", city: "San Francisco, CA", searches: 1678, conversions: 1012 },
    { zip: "10002", city: "New York, NY", searches: 1456, conversions: 892 },
  ],
  funnelData: [
    { stage: "Tool Visitors", count: 45823, percentage: 100 },
    { stage: "Performed Search", count: 32456, percentage: 70.8 },
    { stage: "Clicked Rebate", count: 18923, percentage: 58.3 },
    { stage: "Downloaded Form", count: 15234, percentage: 80.5 },
    { stage: "Outbound Click", count: 12456, percentage: 81.8 },
  ],
  deviceData: [
    { device: "Desktop", count: 18329, percentage: 40 },
    { device: "Mobile", count: 22911, percentage: 50 },
    { device: "Tablet", count: 4583, percentage: 10 },
  ],
  topRebates: [
    { name: "Energy Star Heat Pump", clicks: 5678, conversions: 3456, value: "$2,000" },
    { name: "SoCal Edison HVAC", clicks: 4523, conversions: 2789, value: "$3,500" },
    { name: "Water Heater Efficiency", clicks: 3892, conversions: 2345, value: "$1,800" },
    { name: "Induction Cooktop", clicks: 2456, conversions: 1567, value: "$840" },
    { name: "Smart Thermostat", clicks: 2123, conversions: 1234, value: "$100" },
  ],
  channelData: [
    { channel: "Organic Search", visitors: 18329, percentage: 40, conversions: 7823 },
    { channel: "Direct", visitors: 13747, percentage: 30, conversions: 5234 },
    { channel: "Referral", visitors: 9165, percentage: 20, conversions: 3456 },
    { channel: "Paid Search", visitors: 4582, percentage: 10, conversions: 1943 },
  ],
  providerData: [
    { provider: "Federal IRA Program", searches: 15234, clicks: 8923, conversions: 5234 },
    { provider: "Southern California Edison", searches: 8456, clicks: 4892, conversions: 2789 },
    { provider: "Con Edison", searches: 6782, clicks: 3945, conversions: 2345 },
    { provider: "PG&E California", searches: 4523, clicks: 2678, conversions: 1567 },
    { provider: "ComEd Illinois", searches: 3892, clicks: 2123, conversions: 1234 },
  ]
};

