import { useState, useEffect } from 'react'
import './App.css'
import Color from './components/Color.jsx'

function App() {
  let [color, setColor] = useState('black');

  const bgChanger = (color) => {
    setColor(color);
    console.log('clicked', color);
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
    console.log(color, "UseEffect");

  }, [color])

  return (
    <>
      <h1 className='mb-4'>Choose a color to change the background</h1>
      <div className='flex flex-wrap justify-center bg-white md:p-6 p-3 md:gap-6 gap-3 rounded-2xl'>
        <Color color="red" textColor='white' bgChanger={bgChanger} />
        <Color color="blue" textColor='white' bgChanger={bgChanger} />
        <Color color="green" textColor='white' bgChanger={bgChanger} />
        <Color color="black" textColor='white' bgChanger={bgChanger} />
        <Color color="magenta" textColor='white' bgChanger={bgChanger} />
      </div>
    </>
  )
}

export default App
