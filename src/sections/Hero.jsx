import { BrainCircuit, Cloud, Globe, Database } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import CTAButton from "../components/CTAButton";

export default function Hero(){
 return <section id="home" className="hero">
  <div className="hero-grid"/>
  <div className="hero-content">
   <SectionLabel>SOFTWARE • AI • CLOUD • ENGINEERING</SectionLabel>
   <h1>Build.<br/><em>Automate.</em><br/>Scale.</h1>
   <p>GRITZNOVA helps startups, growing businesses, and enterprises design, develop, modernize, and operate reliable digital products — from custom applications and cloud platforms to AI-powered automation and intelligent agents.</p>
   <div className="hero-actions"><CTAButton>Explore Our Solutions</CTAButton><CTAButton outline href="#contact">Talk to Our Team</CTAButton></div>
   <div className="hero-stats"><div><b>8+</b><span>Years combined expertise</span></div><div><b>AI</b><span>Intelligent systems</span></div><div><b>∞</b><span>Built to scale</span></div></div>
  </div>
  <div className="hero-orbit"><div className="orbit orbit-a"/><div className="orbit orbit-b"/>
   <div className="core"><BrainCircuit size={55}/><span>GRITZ<br/>NOVA</span></div>
   <span className="float-chip chip-one"><Globe size={12}/> WEB / MOBILE</span>
   <span className="float-chip chip-two"><Cloud size={12}/> CLOUD SERVICES</span>
   <span className="float-chip chip-three"><Database size={12}/> SECURE DATA</span>
  </div>
 </section>;
}
