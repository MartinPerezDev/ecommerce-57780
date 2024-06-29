import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from './components/Ejemplos/Error'
import EjemploContadorEventListener from './components/Ejemplos/EjemploContadorEventListener'
import EjemploFormulario from './components/Ejemplos/EjemploFormulario'

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />

        <Route path='/ejemplos' element={<EjemploContadorEventListener />} />
        <Route path='/formulario' element={<EjemploFormulario />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
