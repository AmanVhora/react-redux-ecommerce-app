import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectProductById } from "./productsSlice"

export const SingleProduct = () => {
  const { productId } = useParams()
  const product = useSelector(state => selectProductById(state, productId))

  return (
    <div className="card mt-5 p-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-text card-price mt-3">$ {product.price}</p>
            <p className="mt-2"><span className="fs-3 border text-secondary border-secondary rounded-1 p-2">{product.category}</span></p>
            <p className="card-text fs-5">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
