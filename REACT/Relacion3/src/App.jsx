import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './Ej1/Saludo.jsx'
import Perfil from './Ej2/Perfil.jsx'
import ContadorPadre from './Ej4/ContadorPadre.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ejercicio 1</h1>
      <Saludo nombre="Ana"></Saludo>
      <Saludo nombre="Beto"></Saludo>
      <Saludo nombre="Carla"></Saludo>
      <h1>Ejercicio 2</h1>
      <Perfil nombre="Pepe" edad="18" online="true" imagenUrl="https://i.pinimg.com/736x/b6/57/67/b65767c38900fedec6724de0f6c5a4a6.jpg"></Perfil>
      <h1>Ejercicio 4</h1>
      <ContadorPadre></ContadorPadre>
    </>
  )
}

export default App
