import React from 'react';

export default function ArchitectureVisual() {
  const nodes = [
    { x: 8  , y: 18, label: 'CLIENT', sub: 'Web / Mobile' },
      { x: 237 , y: 18, label: 'PLATFORM', sub: 'Cloud Services' },
      { x: 8, y: 220, label: 'INTELLIGENCE', sub: 'AI Orchestration' },

      { x: 237, y: 220, label: 'DATA LAYER', sub: 'Secure & Scalable' }
  ];

  return (
    <div
      className="arch-visual"
      aria-label="Abstract software architecture diagram"
    >
      <div className="visual-top">
        <span>
          <i className="status-dot" /> SYSTEM ARCHITECTURE / LIVE
        </span>
        <span>GN-2026.04</span>
      </div>

      <svg viewBox="0 0 390 300" role="img">
        <defs>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

      <path
  d="
    M68 80
    L190 180
    L297 80

    M190 180
    L68 251

    M190 180
    L297 251
  "
  className="arch-line"
/>

        <path
          d="M67 90 L190 180 L312 90"
          className="arch-dash"
        />

        {/* Architecture Nodes */}
        {nodes.map((n) => (
          <g
            key={n.label}
            transform={`translate(${n.x},${n.y})`}
          >
                <rect
  width={n.label === 'INTELLIGENCE' ? '145' : '120'}
  height={n.label === 'INTELLIGENCE' ? '72' : '62'}
  rx="10"
  ry="10"
  className="node-box"
/>

            <circle
              cx="13"
              cy="14"
              r="3"
              className="node-dot"
            />

            <text
              x="23"
              y="18"
              className="node-label"
            >
              {n.label}
            </text>

            <text
              x="13"
              y="42"
              className="node-sub"
            >
              {n.sub}
            </text>
          </g>
        ))}

        {/* Center GRITZNOVA Core */}
        <circle
          cx="190"
          cy="180"
          r="40"
          className="core-ring"
          filter="url(#softGlow)"
        />

        <circle
          cx="190"
          cy="180"
          r="29"
          className="core"
        />

        <text
          x="190"
          y="176"
          textAnchor="middle"
          className="core-g"
        >
          GN
        </text>

        <text
          x="190"
          y="191"
          textAnchor="middle"
          className="core-text"
        >
          AI Solutions
        </text>
      </svg>

      <div className="visual-metrics">
        <span>
          <b>18.4K</b>
          <small>REQUESTS</small>
        </span>

        <span>
          <b>99.98%</b>
          <small>UPTIME</small>
        </span>

        <span>
          <b>42ms</b>
          <small>LATENCY</small>
        </span>
      </div>

      <div className="visual-bottom">
        <span>● EVENT STREAM ACTIVE</span>
        <span>● MULTI-REGION READY</span>
      </div>
    </div>
  );
}