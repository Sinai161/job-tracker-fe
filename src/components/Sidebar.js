import { useEffect, useState } from "react"
import Header from "./Header"

const userLogin = {
    id: "ioajsdlkjqnman123081",
    firstName: "Ashley",
    lastName: "Galvan",
    email: "fakeemail@gmail.com",
    token: "FakeTokenForNow"
  }

  const UserInfo = (props) => {
    return (
        <h1>{props.firstName}</h1>
    )
  }


const Sidebar = () => {
    const [user, setUser] = useState(userLogin)

    useEffect(() => {
        setUser(userLogin)
    })
    return(
    <div className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 items-start ">
        <div className="w-full justify-between items-center gap-2.5 inline-flex border-b-2">
        <img className="sidebar-img" src="assets/370082334-f2a67fab-f222-4bf2-82c3-0ad258b65a21.png" alt="logo"/>
        <h1 className="sidebar-title text-center">job tracker</h1>
        </div>
        <img src="/assets/Layer 1 (1).png" alt="logo"/>
        <h3 className="h-5 w-5">Dashboard</h3>
        <h3 className="h-5 w-5">Applications</h3>
        <h4>{user.firstName}{user.lastName}</h4>
        <h4>{user.email}</h4>

        <UserInfo props={user}></UserInfo>
    </div>
    )
}

export default Sidebar