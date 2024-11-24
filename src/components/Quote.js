import { useEffect, useState } from "react"
const Quote = () => {
    const [quote, setQuote] = useState(null)
    // const url =`https://zenquotes.io/api/today`
    useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await fetch("https://zenquotes.io/api/today", { mode: 'no-cors' })
            console.log(response)
        if(!response.ok) {
            throw new Error('no response')
        }
        console.log(response)
        const result = await response.json()
        setQuote(result)
        console.log(result)
    }catch (error){
        console.error('Error fetching data:', error.message)
    }
}
    fetchData()
}, [])

    return(
    <div>
        <h1>Quote of the day</h1>
        {quote ? (
            <p>{JSON.stringify(quote)}</p>
        ): (
            <p>Loading...</p>
        )}
    </div>
    )
}
export default Quote