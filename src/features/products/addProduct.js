import { useDispatch } from "react-redux"
import { addNewProduct } from "./productsSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const AddProductForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onPriceChanged = (e) => setPrice(e.target.value)
  const onCategoryChanged = (e) => setCategory(e.target.value)
  const onDescriptionChanged = (e) => setDescription(e.target.value)
  const onImageChanged = (e) => setImage(e.target.value)

  const canSave = [title, price, category, description, image].every(Boolean)

  const onProductAddClicked = async () => {
    if (canSave) {
      try {
        await dispatch(addNewProduct({ title, price, category, description, image})).unwrap()
        navigate('/')
      } catch (error) {
        console.error('Failed to add product: ', error)
      }
    }
  }

  return (
    <div className="container w-75 mt-5">
      <form>
        <fieldset className="border border-2 rounded-3 px-4 pt-2 pb-3">
          <legend className="float-none w-auto px-2">Add Product:</legend>
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
              <input className="form-control" type="file" id="formFile" value={image} onChange={onImageChanged} />
            </div>
            <div className="col-12">
              <button type="button" className="btn btn-primary" onClick={onProductAddClicked} disabled={!canSave}>Add</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
