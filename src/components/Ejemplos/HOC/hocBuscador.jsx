import { useEffect, useState } from "react";

const hocBuscador = (Component) => {
  return function () {
    const [productos, setProductos] = useState([]);
    const [consulta, setConsulta] = useState("");

    useEffect( ()=>{

      fetch("https://fakestoreapi.com/products")
        .then((respuesta)=> respuesta.json())
        .then((data)=> setProductos(data) )

    }, [] )

    const search = (listaProductos) => {
      const listaProductosFiltrados = listaProductos.filter((producto)=> (
        producto["title"].toLowerCase().includes(consulta)
      ))

      return listaProductosFiltrados
    }

    const changeInput = (event) => {
      setConsulta(event.target.value.toLowerCase());
    };

    return (
      productos && (
        <div>
          <input type="text" placeholder="buscar..." onChange={changeInput} />
          <Component productos={ search(productos) } />
        </div>
      )
    );
  };
};

export default hocBuscador
