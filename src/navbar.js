import { useDispatch, useSelector } from "react-redux"
import { userLoggedIn, userLogout } from "./features/users/usersSlice"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isUserLoggedIn = useSelector(userLoggedIn)
  
  let loginOrLogout
  let profilePath
  
  const handleLogout = () => {
    dispatch(userLogout())
    navigate('/login')
  }

  if (isUserLoggedIn) {
    loginOrLogout = <button type="button" className="btn btn-danger rounded-1" onClick={handleLogout}>Logout</button>
    profilePath = '/profile'
  } else {
    loginOrLogout = 
    <div>
      <Link to='/login' className="btn btn-info rounded-1">Login</Link>
      <Link to='/signup' className="btn btn-info rounded-1 ms-3">Signup</Link>
    </div>
    profilePath = '/login'
  }

  return(
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Products</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={profilePath}>Profile</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Cart</a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Profile</a> */}
              </li>
            </ul>
          </div>
          {loginOrLogout}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
