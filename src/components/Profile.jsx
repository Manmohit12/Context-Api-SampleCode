import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
const Profile = () => {
    const {user}=useContext(UserContext)

    if(!user) return <div>Please Login</div>
  return(
     <> 
     <div>Welcome {user.username}</div><div>Your password is : {user.password}</div><div> Your UserId is : {user.userId}</div>
     </>
  )
}

export default Profile
