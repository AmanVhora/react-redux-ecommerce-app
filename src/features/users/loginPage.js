import { useDispatch } from "react-redux"
import { userLogin } from "./usersSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onUsernameChanged = (e) => setUsername(e.target.value)
  const onPasswordChanged = (e) => setPassword(e.target.value)
  
  const handleLogin = () => {
    try {
      const loginData = { username, password }
      dispatch(userLogin(loginData))
      navigate('/profile')
    } catch (error) {
    }
  }

  const canLogin = [username, password].every(Boolean)

  return(
    <div className="container w-50 mt-5">
      <h2 className="mb-3">Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" autoComplete="username" value={username} onChange={onUsernameChanged} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" autoComplete="current-password" value={password} onChange={onPasswordChanged} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin} disabled={!canLogin}>Submit</button>
      </form>
    </div>
  )
}
