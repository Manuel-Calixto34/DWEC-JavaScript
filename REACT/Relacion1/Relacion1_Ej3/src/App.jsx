import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './Boton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Boton alerta="Yes" nombre="Boton 1"></Boton>
      <Boton alerta="No" nombre="Boton 2"></Boton>
      <Boton alerta="Whatever" nombre="Boton 3"></Boton>
    </>
  )
}

export default App
