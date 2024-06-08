import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import PadreComponente from './components/Ejemplos/PadreComponente'
import HijoComponente from './components/Ejemplos/HijoComponente'
import EjemploContador from './components/Ejemplos/EjemploContador'

function App() {

  return (
    <div >
      <NavBar />
      <ItemListContainer saludo = "Bienvenidos a mi ecommerce" />
      <PadreComponente>
        <h2>Saludos desde App</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure aut numquam maiores incidunt. Porro nisi alias voluptatibus error, itaque rem eligendi dignissimos placeat eos amet id repudiandae vero soluta.</p>
        <HijoComponente />
      </PadreComponente>

      <PadreComponente>
        <h2>Otro titulo</h2>
      </PadreComponente>

      <EjemploContador stock={10} />
    </div>
  )
}

export default App
