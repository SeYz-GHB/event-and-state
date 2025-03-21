import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('');
  const handleclick = (e) =>{
    setCount(e.currentTarget.value);
    
  }
  
  return (
    <>
      <div  className='px-5 py-2 bg-purple-400 w-[600px]'>
        <div className='p-5 bg-purple-800 flex flex-col gap-3'>
        <h2 className='text-[3rem]'>UPPER CASE CONVERTER</h2>
        <label htmlFor="originalText">Enter And TexT!</label>
        <input type="text" id='originalText'  className='bg-gray-500 w-[400px]' value={count} onChange={handleclick} />
        <label htmlFor="originalText">HERE IS THE TEXT IN UPPER CASE</label>
        <input type="text" id='originalText'  className='bg-gray-500 w-[400px]' value={count.toLocaleUpperCase()} onChange={handleclick}/>
        </div>
        


      </div>
    </>
  )
}

export default App
