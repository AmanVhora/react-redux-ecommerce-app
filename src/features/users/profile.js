import { useSelector } from "react-redux";
import { currentUser } from "./usersSlice";

export const Profile = () => {
  const user = useSelector(currentUser)
  const address = `${user.address.number}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`
  
  return (
    <div>
      <p>Username: <span className="border border-dark rounded-2 px-2 py-1 ms-3">{user.username}</span></p>
      <p>Email: <span className="border border-dark rounded-2 px-2 py-1 ms-3">{user.email}</span></p>
      <p>First name: <span className="border border-dark rounded-2 px-2 py-1 ms-3">{user.name.firstname}</span></p>
      <p>Last name: <span className="border border-dark rounded-2 px-2 py-1 ms-3">{user.name.lastname}</span></p>
      <p>Address: <span className="border border-dark rounded-2 px-2 py-1 ms-3">{address}</span></p>
      <p>Phone no: <span className="border border-dark rounded-2 px-2 py-1 ms-3">{user.phone}</span></p>
    </div>
  )
}
