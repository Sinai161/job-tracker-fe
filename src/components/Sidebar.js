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
    <div className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-gray-500/6 bg-gray-100 ">
        <div className="w-full justify-between items-center gap-2.5 inline-flex border-b-2">
        <img className="sidebar-img" src="assets/370082334-f2a67fab-f222-4bf2-82c3-0ad258b65a21.png" alt="logo"/>
        <h1 className="sidebar-title text-center">job tracker</h1>
        </div>
        <div className="">
        <img className="inline-flex" src="/assets/Layer 1 (1).png" alt="logo"/>
        <button className="h-5 w-5 hover:bg-slate-600">Dashboard</button>
        </div>
        <div className="">
        <img className="applications-logo inline-flex " src="/assets/372282690-2583ee41-9963-4b69-ab88-a42ea69c3f0e.png" alt="logo"/>
        <button className="h-5 w-5 hover:bg-slate-600">Applications</button>
        </div>
        <h4 className="absolute inset-x-0 bottom-0">{user.email}</h4>
        <h4 className="absolute inset-x-0 bottom-6">{user.firstName}{user.lastName}</h4>

        <UserInfo props={user}></UserInfo>
    </div>
    )
}

export default Sidebar