import "./App.css";
import {useState} from 'react';
import Viewer from "./Counter/Viewer";
import Controller from "./Counter/Controller";

function App() {
  const [count,setCount]=useState(0);
  const handleChange=(value)=>{setCount(count+value)};

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller handleSetCount={handleChange}/>
      </section>
    </div>
  );
}

export default App;