import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message />
      {/*<Greet name="Bruce" heroName="Batman"><p>Children prop</p></Greet>
      <Greet name="Adam" heroName="Man"><button>Action</button></Greet>
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Adam" heroName="Man" />
      <Welcome />
  <Hello />*/}
    </div>
  );
}

export default App;
