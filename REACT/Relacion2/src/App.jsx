import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from "./Ej1/Boton.jsx"
import Toggle from "./Ej2/Toggle.jsx"
import Input from "./Ej3/Input.jsx";
import Caja from "./Ej4/Caja.jsx";
import Formulario from './Ej5/Formulario.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Boton></Boton>
      <Toggle></Toggle>
      <Input></Input>
      <Caja></Caja>
      <Formulario></Formulario>
    </>
  )
}

export default App
