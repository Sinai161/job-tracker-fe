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
        <div className="header">
            <h1 className="header1 text-center font-roboto">{user()}</h1>
            <h1 className="header2 text-center text-slate-600">{currentDate()}</h1>
            <div className="border-b-2"></div>
        </div>
    )
}

export default Header