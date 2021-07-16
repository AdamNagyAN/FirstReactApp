import React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    // componentDidMount
    // useEffect(() => {
    //     console.log('we show')
    // }, []); // array tells when to useEffect run (only on mount)

    //componentDidUpdate
    // useEffect(() =>{
    //     console.log('The useffect ran')
    // }, [count]) // if var updates the useEffect runs

    //componentWillUnmount (cleanUp)
    useEffect(() =>{
        console.log('The useffect ran on mount')
        return () => {
            console.log("Unmounted")
        }
    }, [])

    return (
        <React.Fragment>
            <p>The count is: {count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </React.Fragment>
    )
}

export default Counter
