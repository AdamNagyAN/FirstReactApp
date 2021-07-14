import './App.css';
import Counter from './Counter';
import Employee from './Employee';
function App() {
  const users = [
    {
      firstName: "Jack"
    },
    {
      firstName: "Josephs"
    },
    {
      firstName: "Jana"
    },  
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to my counter!</h2>
        <Counter />
        {users.map(user =>{
          return(
            <Employee {...user}/>
          )
        })}
      </header>
    </div>
  );
}

export default App;
