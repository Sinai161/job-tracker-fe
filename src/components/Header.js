import React, { useState } from "react";
const Header = () => {
    const [date, setDate ] = useState(new Date())

 
const user = () => {
    return(
     <div>
        <h1>Hi Ashley</h1>
    </div>
    )
}
function currentDate() { 
    return(
        <div>
            <h1>{date.toDateString()}</h1>
        </div>
    )
}
    // let currentDate = new Date()
    // console.log(currentDate)

    return(
        <div>
            <h1>{user()}</h1>
            <h1>{currentDate()}</h1>
        </div>
    )
}

export default Header