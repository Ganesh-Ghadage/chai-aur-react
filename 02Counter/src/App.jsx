import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    
    if(counter == 20){
      console.log("value can not be more than 20");
      return;
    }
    counter = counter + 1;
    setCounter(counter);
    console.log("added",counter);
  }

  const removeValue = () => {
    if(counter == 0){
      console.log("value can not be less than 0");
      return;
    }
    counter = counter - 1;
    setCounter(counter);
    console.log("removed",counter);
  }

  return (
    <>
      <h2>Hooks using counter project</h2>

      <p>Counter : {counter}</p>

      <button onClick={addValue}>Add value</button> 
      <p></p>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
