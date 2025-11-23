import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './Cabecera.jsx'
import ListaCompra from './ListaCompra.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecera></Cabecera>
      <ListaCompra></ListaCompra>
    </>
  )
}

export default App
