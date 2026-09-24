import SectionLabel from "../components/SectionLabel";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
export default function Services(){
 return <section id="services" className="section dark"><SectionLabel>HOW WE HELP</SectionLabel>
  <div className="section-title"><h2>Engineering from idea to production.</h2><p>From strategy to shipping and ongoing support, our engineering teams can work alongside your business at every stage.</p></div>
  <div className="cards service-grid">{services.map((s,i)=><ServiceCard key={s.title} service={s} index={i}/>)}</div>
 </section>;
}
