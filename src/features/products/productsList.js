import { useSelector } from "react-redux";
import { ProductComponent } from "./productComponent"
import { selectAllProducts } from "./productsSlice";

export const ProductsList = () => {
  const products = useSelector(selectAllProducts)
  
  const renderedProducts = products.map(product => (
    <div key={product.id}><ProductComponent product={product} /></div>
  ))

  return (
    <div>
      <h2>Products List</h2>
      <div className="d-flex flex-wrap">{renderedProducts}</div>
    </div>
  )
}
