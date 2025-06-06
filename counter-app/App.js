import {useState, useEffect} from 'react'
import './App.css';

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {

      document.title = `Count: ${count}`;
      console.log("Count updated to: ", count)

      return () => {console.log("Cleanup - Count was ", count);};

    }, [count]);

  return (

    <div className="App">
      <header className="App-header">Count: {count}
        <button onClick={() => setCount(count+1)}><strong>Increment</strong></button>
        <button onClick={() => setCount(count-1)}><strong>Decrement</strong></button>
        </header>
    </div>
  );
}

export default App;
