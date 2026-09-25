import React from 'react';
export default function ArchitectureVisual() {
  const nodes = [
    { x: 30, y: 75, label: 'CLIENT', sub: 'Web / Mobile' },
    { x: 160, y: 160, label: 'INTELLIGENCE', sub: 'AI Orchestration' },
    { x: 310, y: 80, label: 'PLATFORM', sub: 'Cloud Services' },
    { x: 325, y: 235, label: 'DATA LAYER', sub: 'Secure & Scalable' }
  ];
  return <div className="arch-visual" aria-label="Abstract software architecture diagram">
    <div className="visual-top"><span><i className="status-dot" /> SYSTEM ARCHITECTURE / LIVE</span><span>GN-2026.04</span></div>
    <svg viewBox="0 0 390 300" role="img">
      <defs><filter id="softGlow"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <path d="M75 95 L190 180 L335 100 M190 180 L340 255 M190 180 L75 240" className="arch-line" />
      <path d="M75 95 L190 180 L335 100" className="arch-dash" />
      {nodes.map((n) => <g key={n.label} transform={`translate(${n.x},${n.y})`}><rect width="105" height="54" rx="2" className="node-box"/><circle cx="12" cy="12" r="3" className="node-dot"/><text x="21" y="15" className="node-label">{n.label}</text><text x="12" y="35" className="node-sub">{n.sub}</text></g>)}
      <circle cx="190" cy="180" r="40" className="core-ring" filter="url(#softGlow)"/><circle cx="190" cy="180" r="29" className="core"/><text x="190" y="176" textAnchor="middle" className="core-g">G</text><text x="190" y="191" textAnchor="middle" className="core-text">GRITZNOVA</text>
    </svg>
    <div className="visual-metrics"><span><b>18.4K</b><small>REQUESTS</small></span><span><b>99.98%</b><small>UPTIME</small></span><span><b>42ms</b><small>LATENCY</small></span></div>
    <div className="visual-bottom"><span>● EVENT STREAM ACTIVE</span><span>● MULTI-REGION READY</span></div>
  </div>;
}
