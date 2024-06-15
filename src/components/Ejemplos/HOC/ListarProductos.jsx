import hocBuscador from "./hocBuscador"

const ListarProductos = ({ productos }) => {

  return (
    <div>
      {
        productos.map((producto)=> (
          <div key={producto.id}>
            <p>{producto.title}</p>
            <p>${producto.price}</p>
          </div>
        ))
      }
    </div>
  )
}

const ListarProductosConHoc = hocBuscador(ListarProductos)

export default ListarProductosConHoc

