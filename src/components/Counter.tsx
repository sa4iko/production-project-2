import { useState } from "react"
import classes from "./Counter.module.scss"

export const Counter = () => {

    const [count, setCount] = useState(0)

    const increament = () => {
        setCount(count + 1);
    }

    return (
        <div className={classes.btn}>
            <div>{count}</div>
            <button onClick={increament}>Increament</button>
        </div>
    )
}