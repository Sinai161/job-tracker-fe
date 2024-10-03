import { useEffect, useState } from "react"

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
    <div className="">
        <img src="assets/370082334-f2a67fab-f222-4bf2-82c3-0ad258b65a21.png" alt="logo"/>
        <h1 className="">Job Tracker</h1>
        <h3>Dashboard</h3>
        <h3>Applications</h3>
        {/* <h4>{user.firstName}{user.lastName}</h4> */}

        <UserInfo props={user}></UserInfo>
    </div>
    )
}

export default Sidebar