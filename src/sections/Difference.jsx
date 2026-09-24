import { ShieldCheck, Workflow, Sparkles, Layers, Eye, Headphones } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
export default function Difference(){
 const points=[
  [ShieldCheck,"Engineering First","Solutions designed with maintainability, scalability, security, and performance in mind."],
  [Layers,"Business Focused","Technology decisions connected to real business objectives and measurable outcomes."],
  [Workflow,"Scalable Architecture","Systems designed to support growth in users, data, traffic, and functionality."],
  [Sparkles,"AI Ready","Identify practical opportunities to introduce AI and automation without chasing hype."],
  [Eye,"Transparent Delivery","Clear communication, milestones, and visibility throughout development."],
  [Headphones,"Long-Term Support","Our relationship continues beyond product launch with responsive technical partnership."]
 ];
 return <section id="about" className="section about"><div><SectionLabel>THE GRITZNOVA DIFFERENCE</SectionLabel>
  <div className="section-title"><h2>Technology partner for the long run.</h2><p>GRITZNOVA is a Bangalore-based software engineering and technology company focused on building reliable digital products, cloud platforms, AI solutions, and business automation systems.</p></div>
  <div className="about-points">{points.map(([Icon,title,text])=><div key={title}><Icon/><span><b>{title}</b><small>{text}</small></span></div>)}</div></div>
  <div className="about-visual"><div className="red-square"/><div className="about-number">8<span>+</span></div><p>Years combined expertise • Indian & international client serving</p></div>
 </section>;
}
