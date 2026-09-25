import React from 'react';
export default function DashboardVisual() {
  const bars = [42,54,46,67,62,75,69,82,77,91];
  return <div className="dashboard"><div className="dash-head"><div><span className="eyebrow">LIVE PRODUCT VIEW</span><h3>NovaInsight</h3><p>Business intelligence</p></div><span className="dots">•••</span></div><div className="chart"><div className="grid-lines" />{bars.map((h,i)=><div className="bar" key={i} style={{height:`${h}%`}}/>)}<div className="trend-line"/></div><div className="dash-stats"><span><small>ACTIVE SIGNALS</small><b>24,890</b><em>+18.4%</em></span><span><small>OPERATIONAL SCORE</small><b>92.8</b><em>+6.2%</em></span><span><small>LAST UPDATED</small><b>Just now</b><em>Real-time</em></span></div><div className="dash-tags"><span>✓ Inventory tracking</span><span>✓ Stock alerts</span><span>✓ Product management</span></div></div>;
}
