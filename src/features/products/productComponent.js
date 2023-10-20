import { Link } from "react-router-dom"

export const ProductComponent = ({ product }) => {
  return (
    <div className="card mb-4 me-4" style={{width: "18rem"}}>
      <img src={product.image} className="card-img-top img-fluid p-4" alt="..." style={{width: "18rem", minHeight: '18rem', maxHeight: '18rem'}} />
      <div className="card-body">
        <h5 className="card-title truncate-title-text">{product.title}</h5>
        <h5 className="card-title mt-3">$ {product.price}</h5>
        <p className="card-text fs-5">{product.category}</p>
        <p className="card-text truncate-desc-text">{product.description}</p>
        <Link to={`/products/${product.id}`} className="btn btn-primary">Show Product</Link>
      </div>
    </div>
  )
}
