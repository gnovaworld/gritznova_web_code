import SectionLabel from "../components/SectionLabel";
import TechnologyBadge from "../components/TechnologyBadge";
import { technologies } from "../data/technologies";
export default function Technology(){
 return <section id="technology" className="section light"><SectionLabel>OUR TOOLKIT</SectionLabel>
  <div className="section-title"><h2>Modern technology. Practical engineering.</h2><p>We choose the right tools for the problem — balancing velocity today with maintainability tomorrow.</p></div>
  <div className="tech-grid">{technologies.map(t=><TechnologyBadge key={t} name={t}/>)}</div>
  <div className="tech-feature"><div><SectionLabel>ARCHITECTURE</SectionLabel><h3>Designed for today. Ready for tomorrow.</h3><p>Cloud-native foundations, API-first thinking, secure data layers and automation keep products ready to evolve.</p></div>
   <div className="architecture"><div className="arch-node">WEB / MOBILE</div><div className="arch-line"/><div className="arch-node red">AI / API</div><div className="arch-line"/><div className="arch-node">CLOUD DATA</div></div>
  </div>
 </section>;
}
