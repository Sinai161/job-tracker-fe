import React, { useState } from "react";
const Header = () => {
    const [date, setDate ] = useState(new Date())

 
const user = () => {
    return(
     <div>
        <h1>Hey, Ashley!</h1>
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
            <h1 className="text-left">{user()}</h1>
            <h1 className="text-left text-slate-600 border-b-2">{currentDate()}</h1>
        </div>
    )
}

export default Header