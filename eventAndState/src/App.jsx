import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [IsRaining, setIsRaining] = useState(false);
 

  return (
    <>
      <div className={`h-[400px] w-[600px] flex flex-col items-center justify-around ${IsRaining? 'bg-yellow-500': 'bg-blue-500'}`}>
        <h1 className='font-bold text-[30px]'>{IsRaining? 'sun Time!' : 'Rain Time!'}</h1>
        <button className='bg-gray-800 p-2' onClick={() => setIsRaining(true)}>Sunny Time</button>
        <button className='bg-gray-800 p-2' onClick={()=> setIsRaining(false)}>Rain Time</button>
      </div>
    </>
  )
}

export default App
