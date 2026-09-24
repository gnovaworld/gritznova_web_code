import { ArrowUpRight } from "lucide-react";
export default function ServiceCard({service,index}){
  const Icon=service.icon;
  return <article className="card service-card">
    <div className="icon-box"><Icon size={23}/></div><span className="card-no">0{index+1}</span>
    <h3>{service.title}</h3><p>{service.text}</p>
    <a href="#contact">Explore <ArrowUpRight size={15}/></a>
  </article>;
}