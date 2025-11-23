import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './Ej1/Saludo.jsx'
import Perfil from './Ej2/Perfil.jsx'
import ListaProductos from './Ej3/ListaProductos.jsx'
import ContadorPadre from './Ej4/ContadorPadre.jsx'
import Card from './Ej5/Card.jsx'

function App() {
  const [count, setCount] = useState(0);
  const productos = [
    {id: 1, nombre: "Teclado", precio: 35},
    {id: 2, nombre: "Lámpara", precio: 30},
    {id: 3, nombre: "Cascos", precio: 20}
  ]

  return (
    <>
      <h2>Ejercicio 1</h2>
      <Saludo nombre="Ana"></Saludo>
      <Saludo nombre="Beto"></Saludo>
      <Saludo nombre="Carla"></Saludo>
      <h2>Ejercicio 2</h2>
      <Perfil nombre="Pepe" edad="18" online="true" imagenUrl="https://i.pinimg.com/736x/b6/57/67/b65767c38900fedec6724de0f6c5a4a6.jpg"></Perfil>
      <h2>Ejercicio 3</h2>
      <ListaProductos productos={productos}></ListaProductos>
      <h2>Ejercicio 4</h2>
      <ContadorPadre></ContadorPadre>
      <h2>Ejercicio 5</h2>
      <Card title="Bienvenida">
        <p>Este es el contenido de la primera tarjeta.</p>
        <button>Click aquí</button>
      </Card>

      <Card title="Despedida">
        <img src="..." alt="adiós" />
      </Card>
    </>
  )
}

export default App
