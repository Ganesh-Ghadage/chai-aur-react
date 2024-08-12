import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1>Todo using Redux</h1>
      <AddTodo />
      <br />
      <Todos />
    </>
  )
}

export default App
