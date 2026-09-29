import React from 'react';

export default function DashboardVisual({ product }) {
  const barsByProduct = {
    novainsight: [42, 54, 46, 67, 62, 75, 69, 82, 77, 91],
    noveinvent: [68, 52, 74, 61, 83, 72, 88, 79, 94, 86],
    gritzarv: [38, 61, 48, 76, 58, 84, 71, 89, 80, 96],
    propgritz: [45, 63, 55, 72, 68, 81, 76, 88, 83, 94]
  };

  const defaultProduct = {
    id: 'novainsight',
    color: '#3B82F6',
    title: 'NovaInsight',
    tag: 'BUSINESS INTELLIGENCE & ANALYTICS',
    dashboard: {
      label: 'Business intelligence',
      metric1: '24,890',
      metric1Label: 'ACTIVE SIGNALS',
      metric1Change: '+18.4%',
      metric2: '92.8',
      metric2Label: 'OPERATIONAL SCORE',
      metric2Change: '+6.2%',
      updated: 'Just now',
      status: 'Real-time'
    },
    features: [
      'Real-time dashboards',
      'Business KPIs',
      'Automated reports'
    ]
  };

  const active = product || defaultProduct;
  const dashboard = active.dashboard || defaultProduct.dashboard;
  const bars =
    barsByProduct[active.id] || barsByProduct.novainsight;

  return (
    <div
      className="dashboard"
      style={{
        '--product-color': active.color || '#3B82F6'
      }}
    >
      {/* Header */}
      <div className="dash-head">
        <div>
          <span
            className="eyebrow"
            style={{ color: active.color }}
          >
            LIVE PRODUCT VIEW
          </span>

          <h3>{active.title}</h3>

          <p>{dashboard.label}</p>
        </div>

        <span
          className="dots"
          style={{ color: active.color }}
        >
          •••
        </span>
      </div>

      {/* Chart */}
      <div className="chart">
        <div className="grid-lines" />

        {bars.map((h, i) => (
          <div
            className="bar"
            key={i}
            style={{
              height: `${h}%`,
              background: active.color
            }}
          />
        ))}

        <div
          className="trend-line"
          style={{
            borderColor: active.color
          }}
        />
      </div>

      {/* Statistics */}
      <div className="dash-stats">
        <span>
          <small>{dashboard.metric1Label}</small>

          <b>{dashboard.metric1}</b>

          <em style={{ color: active.color }}>
            {dashboard.metric1Change}
          </em>
        </span>

        <span>
          <small>{dashboard.metric2Label}</small>

          <b>{dashboard.metric2}</b>

          <em style={{ color: active.color }}>
            {dashboard.metric2Change}
          </em>
        </span>

        <span>
          <small>LAST UPDATED</small>

          <b>{dashboard.updated}</b>

          <em style={{ color: active.color }}>
            {dashboard.status}
          </em>
        </span>
      </div>

      {/* Product Features */}
      <div className="dash-tags">
        {active.features?.slice(0, 3).map((feature) => (
          <span key={feature}>
            <strong style={{ color: '#22C55E' }}>
              ✓
            </strong>{' '}
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}
