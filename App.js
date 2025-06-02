import {useState, useEffect} from 'react'
import './App.css';

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("Count updated to: ", count)
    }, [count])

  return (
    <div className="App">

      <header>Count: {count}</header>
      <br></br>
      <button onClick={() => setCount(count+1)}><strong>Increment</strong></button>
      <br></br>
      <button onClick={() => setCount(count-1)}><strong>Decrement</strong></button>

    </div>
  );
}

export default App;
