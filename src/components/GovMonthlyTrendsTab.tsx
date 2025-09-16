import React from "react";

// Simple line chart using SVG for demo only
function MonthlyLineChart() {
  // Demo data for 3 series
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ];
  // Y max=180000
  const ptReg = [135000,137000,138000,140000,142000,145000,150000,155000,150000,152000,153000,160000];
  const recCreate = [12000,12200,12000,11900,12100,12500,13000,12500,12300,12600,12800,13500];
  const emerg = [500,480,510,530,520,540,570,550,540,560,580,600];
  // Scale helpers
  const yMax = 180000, yMin = 0, h = 180, w = 320;
  const x = i => 20 + (i * (w/(months.length-1)));
  const y = v => 30 + h - (v - yMin) * h/(yMax-yMin);

  // Line path generator
  const line = arr => arr.map((v,i) => (i===0?'M':'L') + x(i) + ' ' + y(v)).join(' ');

  return (
    <svg width={w+40} height={h+50}>
      {/* gridlines */}
      {[0,45000,90000,135000,180000].map(yval =>
        <g key={yval}>
          <line x1={20} y1={y(yval)} x2={w+20} y2={y(yval)} stroke="#eee"/>
          <text x={0} y={y(yval)+4} fontSize={10} fill="#b0b0b0">{yval}</text>
        </g>
      )}
      {/* lines */}
      <polyline fill="none" stroke="#6ee7b7" strokeWidth={2}
        points={ptReg.map((v,i) => `${x(i)},${y(v)}`).join(' ')} />
      <polyline fill="none" stroke="#6366f1" strokeWidth={2}
        points={recCreate.map((v,i) => `${x(i)},${y(v)}`).join(' ')} />
      <polyline fill="none" stroke="#fbbf24" strokeWidth={2}
        points={emerg.map((v,i) => `${x(i)},${y(v)}`).join(' ')} />
      {/* points */}
      {ptReg.map((v,i) => <circle key={i} cx={x(i)} cy={y(v)} r={2} fill="#6ee7b7" />)}
      {recCreate.map((v,i) => <circle key={i} cx={x(i)} cy={y(v)} r={2} fill="#6366f1" />)}
      {emerg.map((v,i) => <circle key={i} cx={x(i)} cy={y(v)} r={2} fill="#fbbf24" />)}
      {/* x axis labels */}
      {months.map((m,i) =>
        <text key={m} x={x(i)} y={yMin+h+20} fontSize={10} textAnchor="middle" fill="#b0b0b0">{m}</text>
      )}
    </svg>
  );
}

// Area chart for emergency override patterns
function EmergencyAreaChart() {
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ];
  const emerg = [450,430,470,510,500,530,580,570,550,560,540,600];
  const yMax = 700, h = 120, w = 320;
  const x = i => 20 + (i * (w/(months.length-1)));
  const y = v => 20 + h - (v * h/yMax);

  // Area path
  const area = 'M'+emerg.map((v,i)=>`${x(i)},${y(v)}`).join(' L')
    +` L${x(months.length-1)},${y(0)} L${x(0)},${y(0)} Z`;

  return (
    <svg width={w+40} height={h+40}>
      {/* gridlines */}
      {[0,175,350,525,700].map(yval =>
        <g key={yval}>
          <line x1={20} y1={y(yval)} x2={w+20} y2={y(yval)} stroke="#eee"/>
          <text x={0} y={y(yval)+4} fontSize={10} fill="#b0b0b0">{yval}</text>
        </g>
      )}
      <path d={area} fill="#fbbf24" fillOpacity={0.4} stroke="#fbbf24" strokeWidth={2} />
      {/* x axis labels */}
      {months.map((m,i) =>
        <text key={m} x={x(i)} y={h+30} fontSize={10} textAnchor="middle" fill="#b0b0b0">{m}</text>
      )}
    </svg>
  );
}

export default function GovMonthlyTrendsTab() {
  return (
    <div>
      <div className="bg-white border rounded-xl p-6 mb-6">
        <div className="font-semibold mb-2">Monthly Health System Activity</div>
        <div className="text-gray-500 text-sm mb-3">
          Trends in patient registration, record creation, and emergency access
        </div>
        <MonthlyLineChart />
      </div>
      <div className="bg-white border rounded-xl p-6">
        <div className="font-semibold mb-2">Emergency Override Patterns</div>
        <div className="text-gray-500 text-sm mb-3">
          Monthly emergency access events requiring break-glass protocols
        </div>
        <EmergencyAreaChart />
      </div>
    </div>
  );
}