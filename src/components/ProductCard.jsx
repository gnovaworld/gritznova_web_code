import { ArrowUpRight } from "lucide-react";
export default function ProductCard({product}){
  return <article className="product-card"><span className="product-tag">{product.tag}</span>
    <h3>{product.title}</h3><p>{product.text}</p><a href="#contact">View product <ArrowUpRight size={15}/></a>
  </article>;
}