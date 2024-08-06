import { useState , useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*(){}[]:;<>/?"

    for(let i=0; i<=length; i++){
      let rand = Math.random() * str.length + 1;
      pass+=str.charAt(rand);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='justify-center mx-auto text-orange-500 bg-gray-700 py-4 my-10 w-full max-w-md rounded-lg px-6'>
          <h1 className='text-white font-medium text-lg py-3 text-center'>Password Generator</h1>
          <div className='flex rounded-lg overflow-hidden mb-4 shadow'>
            <input
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordRef}
            />
            <button 
            onClick={copyPassword}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  hover:bg-blue-200 hover:text-blue-800'
            >Copy</button>
          </div>
          <div className='flex items-center gap-x-1 mx-auto justify-center mb-3'>
            <button 
              type='button'
              className='bg-blue-700 text-white px-3 py-1 rounded-xl hover:bg-blue-200 hover:text-blue-800'
              onClick={passwordGenerator}
            >Generate Password</button>
          </div>
          <div className='flex text-sm gap-x-4'>
            <div className='flex items-center gap-x-1'>
              <input 
                type='range'
                value={length}
                min={6}
                max={25}
                className='cursor-pointer'
                id='inpRange'
                onChange={(e) => {setLength(e.target.value)}}
              />
                <label htmlFor='inpRange'>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type='checkbox'
                defaultChecked={numAllowed}
                id='numAllowed'
                onChange={() => {
                  setNumAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='numAllowed'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type='checkbox'
                defaultChecked={charAllowed}
                id='charAllowed'
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='charAllowed'>Charters</label>
            </div>
          </div>
          
      </div>
    </>
  )
}

export default App
