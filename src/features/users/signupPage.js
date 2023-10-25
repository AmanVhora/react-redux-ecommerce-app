import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { userLogin, userRegister } from "./usersSlice"
import { useNavigate } from "react-router-dom"

export const SignupPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    dispatch(userRegister(data))
    const username = data.username
    const password = data.password
    const loginData = { username, password }
    dispatch(userLogin(loginData))
    navigate('/profile')
  }

  return (
    <div className="container w-75">
      <h2 className="mb-3">Signup</h2>
      <div>
        <form className="row g-3" onSubmit={handleSubmit(submitForm)}>
          <div className="col-md-6">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" autoComplete="username" {...register('username')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" autoComplete="email" {...register('email')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input type="text" className="form-control" id="firstName" autoComplete="firstname" {...register('name.firstname')} required />
          </div>
          
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input type="text" className="form-control" id="lastName" autoComplete="lastname" {...register('name.lastname')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" autoComplete="city" {...register('address.city')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="street" className="form-label">Street</label>
            <input type="text" className="form-control" id="street" autoComplete="street" {...register('address.street')} required />
          </div>

          <div className="col-md-3">
            <label htmlFor="number" className="form-label">Number</label>
            <input type="number" className="form-control" id="number" autoComplete="number" {...register('address.number')} required />
          </div>

          <div className="col-md-3">
            <label htmlFor="inputZip" className="form-label">Zipcode</label>
            <input type="number" className="form-control" id="inputZip" autoComplete="zipcode" {...register('address.zipcode')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="phoneNo" className="form-label">Phone no</label>
            <input type="text" className="form-control" id="phoneNo" autoComplete="phone" {...register('address.phone')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="latitude" className="form-label">Latitude</label>
            <input type="text" className="form-control" id="latitude" autoComplete="lat" {...register('address.geolocation.lat')} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="longitude" className="form-label">Longitude</label>
            <input type="text" className="form-control" id="longitude" autoComplete="long" {...register('address.geolocation.long')} required />
          </div>

          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" autoComplete="password" {...register('password')} required />
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}
