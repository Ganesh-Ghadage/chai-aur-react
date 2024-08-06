import { useState } from "react"
import Button from "./components/Button"

function App() {

  const [color, setColor] = useState("Olive")

  return (
    <>
      
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="flex flex-wrap justify-center inset-x-0 bottom-12 fixed px-2">
          <div className="flex flex-wrap justify-center gap-2 bg-white px-4 py-2 rounded-2xl ">
            <Button color="red" setColor={setColor}/>
            <Button color="blue" setColor={setColor}/>
            <Button color="green" setColor={setColor}/>
            <Button color="pink" setColor={setColor}/>
            <Button color="black" setColor={setColor}/>
            <Button color="yellow" setColor={setColor}/>
            <Button color="purple" setColor={setColor}/>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
