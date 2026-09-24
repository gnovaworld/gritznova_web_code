import SectionLabel from "../components/SectionLabel";
import ProcessTimeline from "../components/ProcessTimeline";
import { methodology } from "../data/methodology";
export default function Methodology(){
 return <section id="process" className="section light"><SectionLabel>OUR METHODOLOGY</SectionLabel>
  <div className="section-title"><h2>From idea to impact.</h2><p>A clear, collaborative process that turns ambiguity into a product your team can confidently operate.</p></div>
  <ProcessTimeline items={methodology}/>
 </section>;
}
