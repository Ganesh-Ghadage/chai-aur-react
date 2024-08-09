
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
      <h1>Mini Context</h1>
      <p>----------------------------------------------------------------------------------------------------</p>
        <UserContextProvider>
          <Login />
          <br/><p>----------------------------------------------------------------------------------------------------</p>
          <Profile />
        </UserContextProvider>
    </>
      
  )
}

export default App
