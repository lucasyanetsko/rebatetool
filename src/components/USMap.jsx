import { useState } from 'react';

const USMap = ({ data }) => {
  const [hoveredState, setHoveredState] = useState(null);

  // Create a map of state names to data
  const stateDataMap = {};
  data.forEach(item => {
    stateDataMap[item.state] = item;
  });

  // Calculate color intensity based on searches
  const maxSearches = Math.max(...data.map(d => d.searches));
  
  const getStateColor = (stateName) => {
    const stateData = stateDataMap[stateName];
    if (!stateData) return '#e5e7eb'; // Light gray for states with no data
    
    const intensity = stateData.searches / maxSearches;
    // LG Heritage Red with varying opacity
    return `rgba(165, 0, 52, ${0.2 + intensity * 0.8})`;
  };

  const getStateData = (stateName) => {
    return stateDataMap[stateName];
  };

  // US state paths with realistic shapes
  const states = [
    { name: "California", d: "M60,140 L65,120 L70,110 L75,105 L82,100 L88,98 L94,100 L98,105 L100,115 L102,125 L100,135 L95,145 L92,155 L90,165 L88,175 L85,185 L82,195 L78,205 L74,215 L70,220 L66,218 L62,210 L60,200 L58,190 L56,180 L58,170 L60,160 Z" },
    { name: "New York", d: "M770,105 L780,100 L790,102 L800,108 L805,115 L808,122 L806,130 L800,135 L790,138 L780,136 L770,130 L765,120 Z" },
    { name: "Illinois", d: "M580,155 L588,150 L595,152 L600,158 L602,168 L603,178 L602,188 L600,198 L595,208 L590,218 L585,225 L580,228 L575,225 L572,218 L570,208 L570,198 L572,188 L575,178 L578,168 Z" },
    { name: "Texas", d: "M420,240 L445,235 L470,238 L490,245 L505,255 L515,268 L522,285 L525,305 L523,325 L518,345 L510,360 L498,372 L482,378 L465,380 L450,378 L435,372 L422,362 L412,348 L405,330 L402,312 L402,295 L405,278 L410,262 Z" },
    { name: "Florida", d: "M720,310 L728,308 L736,310 L742,315 L746,322 L750,332 L752,345 L753,360 L752,375 L748,388 L743,398 L738,405 L732,408 L728,408 L724,405 L720,398 L718,388 L716,375 L716,360 L718,345 L720,332 Z" },
  ];

  return (
    <div className="relative">
      <svg viewBox="0 0 900 450" className="w-full h-auto bg-gray-50 rounded-lg">
        {/* State paths - all 50 states in light gray as background */}
        {/* West Coast */}
        <path d="M40,180 L45,160 L50,150 L55,200 L50,240 L45,220 Z" fill="#e5e7eb" stroke="#fff" strokeWidth="1" />
        <path d="M55,80 L70,75 L85,82 L90,95 L85,110 L75,115 L60,108 Z" fill="#e5e7eb" stroke="#fff" strokeWidth="1" />
        <path d="M100,60 L130,55 L150,65 L155,80 L145,95 L125,100 L105,90 Z" fill="#e5e7eb" stroke="#fff" strokeWidth="1" />
        
        {/* Mountain States */}
        <path d="M120,110 L150,108 L165,120 L168,145 L160,160 L145,165 L125,155 Z" fill="#e5e7eb" stroke="#fff" strokeWidth="1" />
        <path d="M180,100 L210,98 L225,110 L228,135 L220,150 L195,155 L185,140 Z" fill="#e5e7eb" stroke="#fff" strokeWidth="1" />
        
        {/* Central States */}
        <path d="M450,120 L480,118 L495,130 L498,155 L490,170 L465,175 L455,160 Z" fill="#e5e7eb" stroke="#fff" strokeWidth="1" />
        <path d="M520,180 L545,178 L558,188 L560,210 L550,225 L530,228 L522,215 Z" fill="#e5e7eb" stroke="#fff" strokeWidth="1" />
        
        {/* South */}
        <path d="M550,250 L575,248 L588,258 L590,280 L582,295 L562,298 L552,285 Z" fill="#e5e7eb" stroke="#fff" strokeWidth="1" />
        
        {/* East Coast */}
        <path d="M740,180 L760,178 L772,185 L775,200 L768,212 L750,215 L742,205 Z" fill="#e5e7eb" stroke="#fff" strokeWidth="1" />
        <path d="M730,240 L750,238 L762,245 L765,260 L758,272 L740,275 L732,265 Z" fill="#e5e7eb" stroke="#fff" strokeWidth="1" />
        
        {/* Our featured states with data */}
        {states.map(state => {
          const stateData = getStateData(state.name);
          return (
            <g key={state.name}>
              <path
                d={state.d}
                fill={getStateColor(state.name)}
                stroke="#ffffff"
                strokeWidth="2"
                className="transition-all cursor-pointer hover:opacity-80"
                onMouseEnter={() => setHoveredState(state.name)}
                onMouseLeave={() => setHoveredState(null)}
              />
            </g>
          );
        })}

        {/* State labels */}
        {states.map(state => {
          const centers = {
            "California": { x: 78, y: 160 },
            "New York": { x: 788, y: 120 },
            "Illinois": { x: 588, y: 195 },
            "Texas": { x: 465, y: 310 },
            "Florida": { x: 735, y: 358 }
          };
          
          const stateData = getStateData(state.name);
          const center = centers[state.name];
          
          return stateData ? (
            <text
              key={`label-${state.name}`}
              x={center.x}
              y={center.y}
              textAnchor="middle"
              className="text-xs font-bold pointer-events-none"
              fill="#ffffff"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
            >
              {stateData.searches.toLocaleString()}
            </text>
          ) : null;
        })}
      </svg>

      {/* Tooltip */}
      {hoveredState && stateDataMap[hoveredState] && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200 min-w-[200px]">
          <h4 className="font-bold text-gray-900 mb-2">{hoveredState}</h4>
          <div className="space-y-1 text-sm">
            <p className="text-gray-600">
              <span className="font-semibold">Searches:</span>{' '}
              {stateDataMap[hoveredState].searches.toLocaleString()}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Clicks:</span>{' '}
              {stateDataMap[hoveredState].clicks.toLocaleString()}
            </p>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="text-sm text-gray-600">Low</span>
        <div className="flex h-4 w-64 rounded overflow-hidden">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
            <div
              key={i}
              className="flex-1"
              style={{
                backgroundColor: `rgba(165, 0, 52, ${0.2 + (i / 9) * 0.8})`
              }}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">High</span>
      </div>
    </div>
  );
};

export default USMap;

