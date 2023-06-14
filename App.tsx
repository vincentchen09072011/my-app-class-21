import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setcount] = useState(5)
  const [mode,setmode] = useState(false)
  return (
    <>

    <div className='menu'>
      <button className='showmenu'>
        Show Menu
      </button>
    </div>

    <div className='oneandsecdiv'>
      <div className="firstdiv">
        <button className='minus' onClick={() => setcount(count - 1)}>
            -
          </button>
        <h1> {count}</h1>
        <button className='add' onClick={() => setcount(count + 1)}>
           +
          </button>
      </div>
      <div className='singulardiv'>
        <button className='reset' onClick={() => setcount(count = 5)}>
          Reset
        </button>
      </div>
    </div>
    </>
  )
}

export default App
