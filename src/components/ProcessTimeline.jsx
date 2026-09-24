export default function ProcessTimeline({items}){return <div className="process">{items.map((item,i)=>
  <div className="process-item" key={item}><span>0{i+1}</span><h3>{item}</h3><i/></div>)}</div>;}