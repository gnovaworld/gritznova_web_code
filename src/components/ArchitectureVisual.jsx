import React from 'react';

export default function ArchitectureVisual() {
  const nodes = [
    { x: 15, y: 62, label: 'CLIENT', sub: 'Web / Mobile' },
    { x: 102, y: 225, label: 'INTELLIGENCE', sub: 'AI Orchestration' },
    { x: 260, y: 62, label: 'PLATFORM', sub: 'Cloud Services' },
    { x: 265, y: 235, label: 'DATA LAYER', sub: 'Secure & Scalable' }
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

        {/* Main architecture connections */}
        <path
          d="
            M67 90
            L190 180
            L312 90

            M190 180
            L164 225

            M190 180
            L320 235
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
              width="120"
              height="62"
              rx="4"
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
          G
        </text>

        <text
          x="190"
          y="191"
          textAnchor="middle"
          className="core-text"
        >
          GRITZNOVA
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