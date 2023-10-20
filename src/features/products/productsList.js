import { useSelector } from "react-redux";
import { ProductComponent } from "./productComponent"
import { selectAllProducts } from "./productsSlice";
import { Link } from "react-router-dom"

export const ProductsList = () => {
  const products = useSelector(selectAllProducts)
  
  const renderedProducts = products.map(product => (
    <div key={product.id}><ProductComponent product={product} /></div>
  ))

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h2 className="mb-0">Products List</h2>
        <Link to="/products/new" className="btn btn-primary me-4">Add Product</Link>
      </div>
      <div className="d-flex flex-wrap">{renderedProducts}</div>
    </div>
  )
}
