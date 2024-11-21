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
    const [isOpen, setOpen] = useState(true)
    const isVisible = () => (isOpen ? '' : 'hidden')
    const buttonStyles = () => (isOpen ? '' : '')
    const imgStyles = () => (isOpen ? '': 'w-8 h-8')
    // whensomeone clicks on the button we want to switch between w-full / w-32 
    const toggle = (e) => {
        setOpen(!isOpen)
    }

    useEffect(() => {
        setUser(userLogin)
    })

    return (
        <div className={`side-bar-div h-[calc(100vh-0rem)] ${isOpen ? 'w-full' : 'w-32'} open max-w-[20rem] p-4 shadow-xl shadow-gray-500/6 bg-gray-100 aria-hidden`}>
            <div className="w-full items-center inline-flex border-b-2">
                <img className="sidebar-img" src="assets/370082334-f2a67fab-f222-4bf2-82c3-0ad258b65a21.png" alt="logo" />
                <h1 className={`title sidebar-title ${isVisible()}`}>job tracker</h1>
                <button onClick={toggle}>
                    <img className="w-3 h-3" src="assets/icon-collapse 1.png" alt="logo" />
                </button>
            </div>
            <div className={`hover:bg-white rounded-md ${buttonStyles()}`}>
                <img className={`inline-flex ${imgStyles()}`} alt="logo" src="/assets/Layer 1 (1).png"/>
                <button className={`text-lg m-3 ${isVisible()}`}>Dashboard</button>
            </div>
            <div className={`hover:bg-white rounded-md ${buttonStyles()}`}>
                <img className="applications-logo inline-flex " src="/assets/372282690-2583ee41-9963-4b69-ab88-a42ea69c3f0e.png" alt="logo" />
                <button className={`text-lg m-3 ${isVisible()}`}>Applications</button>
            </div>
            <h4 className="absolute inset-x-0 bottom-0">{user.email}</h4>
            <h4 className="absolute inset-x-0 bottom-6">{user.firstName}{user.lastName}</h4>

            <UserInfo props={user}></UserInfo>
        </div>
    )
}

export default Sidebar