import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editProduct, selectProductById } from "./productsSlice"
import { Link, useParams } from "react-router-dom"

export const EditProductForm = () => {
  const dispatch = useDispatch()
  const { productId } = useParams()
  const product = useSelector(state => selectProductById(state, productId))

  const [title, setTitle] = useState(product.title)
  const [price, setPrice] = useState(product.price)
  const [category, setCategory] = useState(product.category)
  const [description, setDescription] = useState(product.description)
  const [image, setImage] = useState(product.image)

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onPriceChanged = (e) => setPrice(e.target.value)
  const onCategoryChanged = (e) => setCategory(e.target.value)
  const onDescriptionChanged = (e) => setDescription(e.target.value)
  const onImageChanged = (e) => setImage(e.target.value)

  const canSave = [title, price, category, description, image].every(Boolean)

  const onProductUpdateClicked = async () => {
    if (canSave) {
      try {
        await dispatch(editProduct({ id: productId, title, price, category, description, image })).unwrap()
      } catch (error) {
        console.error('Failed to edit product: ', error)
      }
    }
  }

  return (
    <div className="container w-75 mt-5">
      <form>
        <fieldset className="border border-2 rounded-3 px-4 pt-2 pb-3">
          <legend className="float-none w-auto px-2">Edit Product:</legend>
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" value={title} onChange={onTitleChanged} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPrice" className="form-label">Price</label>
              <input type="number" className="form-control" id="inputPrice" value={price} onChange={onPriceChanged} />
            </div>
            <div className="col-md-6">
              <label htmlFor="category" className="form-label">Category</label>
              <input type="text" className="form-control" id="category" value={category} onChange={onCategoryChanged} />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea type="text" className="form-control" id="description" value={description} onChange={onDescriptionChanged} />
            </div>
            <div className="col-12">
              <label htmlFor="formFile" className="form-label">Image</label>
              <input className="form-control" type="file" id="formFile" onChange={onImageChanged} />
            </div>
            <div className="col-12">
              <Link to={`/products/${productId}`} type="submit" className="btn btn-primary" onClick={onProductUpdateClicked} disabled={!canSave}>Update</Link>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
