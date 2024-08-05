import { useState } from 'react'

import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-200 text-black p-4 mb-4 rounded-xl'>Tailwind CSS in Vite</h1>
      <Card username="Ganesh" btnText="Click me"/>
      <Card username="Ashwini"/>
    </>
  )
}

export default App
