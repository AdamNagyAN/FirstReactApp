import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link, useHistory
} from "react-router-dom";
import Counter from './Counter';
import Employee from './Employee';
import TodoList from './TodoList';
function App() {
  const history = useHistory()
  const [loggedIn, setLoggedIn] = React.useState(false);
  const users = [
    {
      firstName: "Jack",
      id: "ABC"
    },
    {
      firstName: "Josephs",
      id: "ABCD"
    },
    {
      firstName: "Jana",
      id: "ABE"
    },  
  ];
  const employees = undefined;
  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={() => history.push("/todo")}>Todo</button>
        <button onClick={() => history.push("/login")}>Login Page</button>
        <Link to="/employees">Employees</Link>
        
        <Switch>
          <Route path="/todo">
            <TodoList />
          </Route>
          <Route path="/login">
            <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? "Log out" : "Log in"} </button>
            {loggedIn && <Counter />}
            {loggedIn ? (<h1>Hello Adam</h1>) : (<h1>Please log in</h1>)}
            {users.map((user) =>{
              return(
                <Employee key={user.id} {...user}/>
              )
            })}
          </Route>
          <Route path="/employees">
            {!employees && (<h2>Employees undefined</h2>)}
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
