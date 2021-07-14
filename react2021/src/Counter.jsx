import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const incFive = () =>{
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }
    return (
        <React.Fragment>
            <p>The count is: {count}</p>
            <button onClick={() => incFive()}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </React.Fragment>
    )
}

export default Counter
