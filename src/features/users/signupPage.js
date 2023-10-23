import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { userRegister } from "./usersSlice"
import { useNavigate } from "react-router-dom"

export const SignupPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    console.log(data);
    dispatch(userRegister(data))
    navigate('/')
  }

  return (
    <div className="container w-75">
      <h2 className="mb-3">Signup</h2>
      <div>
        <form className="row g-3" onSubmit={handleSubmit(submitForm)}>
          <div className="col-md-6">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" {...register('username')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" {...register('email')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input type="text" className="form-control" id="firstName" {...register('name.firstname')} required />
          </div>
          
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input type="text" className="form-control" id="lastName" {...register('name.lastname')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" {...register('address.city')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="street" className="form-label">Street</label>
            <input type="text" className="form-control" id="street" {...register('address.street')} required />
          </div>

          <div className="col-md-3">
            <label htmlFor="number" className="form-label">Number</label>
            <input type="number" className="form-control" id="number" {...register('address.number')} required />
          </div>

          <div className="col-md-3">
            <label htmlFor="inputZip" className="form-label">Zipcode</label>
            <input type="number" className="form-control" id="inputZip" {...register('address.zipcode', { minLength: 6, maxLength: 6 })} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="phoneNo" className="form-label">Phone no</label>
            <input type="text" className="form-control" id="phoneNo" {...register('address.phone', { minLength: 10, maxLength: 10 })} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="latitude" className="form-label">Latitude</label>
            <input type="text" className="form-control" id="latitude" {...register('address.geolocation.lat')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="longitude" className="form-label">Longitude</label>
            <input type="text" className="form-control" id="longitude" {...register('address.geolocation.long')} required />
          </div>

          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" {...register('password')} required />
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}
