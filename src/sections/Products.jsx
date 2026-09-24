import SectionLabel from "../components/SectionLabel";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
export default function Products(){
 return <section className="section light" id="products"><SectionLabel>OUR PRODUCTS</SectionLabel>
  <div className="section-title"><h2>Products built for real-world operations.</h2><p>Focused technology products designed to turn complex operational work into a clearer, faster advantage.</p></div>
  <div className="product-grid">{products.map(p=><ProductCard key={p.title} product={p}/>)}</div>
 </section>;
}
