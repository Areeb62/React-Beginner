import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(8)
  let [number, setNumber] = useState(false)
  let [char, setChar] = useState(false)
  let [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+-=|\/.,><`~[]{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, char, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])

  const rangeValue = (e) => {
    let num = Number(e.target.value);
    setLength(num);
  }

  const passwordRef = useRef(null);
  const Copy = useCallback(() => {
    navigator.clipboard.writeText(password);

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
  }, [password])

  return (
    <>
      <div className='bg-indigo-800 rounded-2xl p-8'>
        <h2 className='text-2xl pb-5 underline'>Password Generator</h2>
        <div className='flex mb-5'>
          <input readOnly ref={passwordRef} value={password} className='bg-white w-full text-black px-5 outline-none placeholder:text-black rounded-bl-2xl rounded-tl-2xl' type="text" name="" id="text" placeholder='Generate password' />
          <button onClick={Copy}>Copy</button>
        </div>
        <div className='flex flex-wrap gap-5 items-center'>

          <div className='flex items-center gap-1'>
            <input className='cursor-pointer' onChange={rangeValue} type="range" id='range' max={20} min={8} value={length} />
            <label className='w-20' htmlFor="range">Length {length}</label>
          </div>

          <div className='flex gap-1 items-center'>
            <input className='cursor-pointer' type="checkbox" id='checkbox' defaultChecked={number} onChange={() => { setNumber((prev) => !prev) }} />
            <label htmlFor="checkbox">Numbers</label>
          </div>

          <div className='flex gap-1 items-center'>
            <input className='cursor-pointer' type="checkbox" id='characters' defaultChecked={char} onChange={() => { setChar((prev) => !prev) }} />
            <label htmlFor="characters">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
