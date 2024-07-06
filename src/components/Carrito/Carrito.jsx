import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const Carrito = () => {

  const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } = useContext(CartContext)

  return (
    <div>
      {
        carrito.map( (productoCarrito) => (
          <div style={{ display: "flex", justifyContent: "space-around", margin: "50px 0" }} key={productoCarrito.id}>
            <img src={productoCarrito.imagen} width={100} alt="" />
            <p>{productoCarrito.nombre}</p>
            <p>precio c/u: ${productoCarrito.precio}</p>
            <p>cantidad: {productoCarrito.cantidad}</p>
            <p>total parcial: {productoCarrito.precio * productoCarrito.cantidad}</p>

            <button onClick={ () => borrarProductoPorId(productoCarrito.id) } >Eliminar</button>
          </div>
        ))
      }
      <p>Precio Total: {precioTotal()}</p>
      <button onClick={vaciarCarrito} >Vaciar carrito</button>
      <button>Continuar con la compra</button>
    </div>
  )
}
export default Carrito