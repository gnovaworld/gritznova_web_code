import SectionLabel from "../components/SectionLabel";
export default function Capabilities(){
 const items=["Custom Digital Products","AI-Powered Systems","Cloud Platforms","Business Automation","Enterprise Modernization","Integrated Ecosystems"];
 return <section className="section dark" id="capabilities"><SectionLabel>CAPABILITIES</SectionLabel>
  <div className="section-title"><h2>What we build</h2><p>Practical technology systems that connect ambitious business goals to dependable execution.</p></div>
  <div className="cap-grid">{items.map((x,i)=><div className="cap-item" key={x}><span>0{i+1}</span><h3>{x}</h3></div>)}</div>
 </section>;
}
