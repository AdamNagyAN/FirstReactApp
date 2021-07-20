import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/ducks/counter'

function Counter() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
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

    const hendleDecrement = () =>{
        dispatch(decrement())
    }
    return (
        <React.Fragment>
            <p>The count is: {count}</p>
            <button onClick={() => {dispatch(increment())}}>Increment</button>
            <button onClick={hendleDecrement}>Decrement</button>
        </React.Fragment>
    )
}

export default Counter
