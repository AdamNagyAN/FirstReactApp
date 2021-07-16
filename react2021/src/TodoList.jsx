
import React, { useState, useEffect } from 'react'
import axiox from 'axios'
function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() =>{
        axiox.get(`https://jsonplaceholder.typicode.com/todos`).then(res => {
            const responseTodos = res.data;
            setTodos(responseTodos);
          })
    }, [])

    return (
        <div>
            <h6>Todo List</h6>      
            {todos && todos.map((todo) => {
                const { id, userId, title} = todo
                return (<p key={id}>{userId} : {title}</p>)
            })}      
        </div>
    )
}

export default TodoList
