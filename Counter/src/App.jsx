import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Chia aur Areeb</h1>
      <h2>Counter value: 5</h2>

      <button className='mx-3'>Click me</button>
      <button>Sub me</button>
    </>
  )
}

export default App
