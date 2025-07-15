import { useContext } from "react"
import MyContext from "./MyContext"

function GetContext() {
    const myContext = useContext(MyContext)
    return (
        <>
            <h1>{myContext}</h1>
        </>
    )
}

export default GetContext