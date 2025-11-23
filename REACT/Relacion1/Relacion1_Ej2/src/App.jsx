import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './Boton.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Boton></Boton>
    </>
  )
}

export default App
