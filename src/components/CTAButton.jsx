import { ArrowUpRight } from "lucide-react";
export default function CTAButton({children,href="#contact",outline=false}){
  return <a className={"btn "+(outline?"ghost":"primary")} href={href}>{children}<ArrowUpRight size={17}/></a>;
}