import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "./features/users/usersSlice"
import { Link } from "react-router-dom"

const Navbar = () => {
  const dispatch = useDispatch()
  const isUserLoggedIn = useSelector(state => state.users.user !== null)
  let loginOrLogout

  if (isUserLoggedIn) {
    loginOrLogout = <button type="button" className="btn btn-danger rounded-1" onClick={() => dispatch(userLogout())}>Logout</button>
  } else {
    loginOrLogout = 
    <div>
      <Link to='/login' className="btn btn-info rounded-1">Login</Link>
      <Link to='/signup' className="btn btn-info rounded-1 ms-3">Signup</Link>
    </div>
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
                {/* <a className="nav-link active" aria-current="page" href="#">About</a> */}
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
