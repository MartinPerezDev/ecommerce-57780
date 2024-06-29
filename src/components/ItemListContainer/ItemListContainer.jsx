import { obtenerProductos } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css"

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams()

  useEffect(() => {
    obtenerProductos()
      .then((respuesta) => {
        if(idCategoria){
          //filtrar los productos por esa categoria
          const productosFiltrados = respuesta.filter((producto) => producto.categoria === idCategoria )
          setProductos(productosFiltrados)
        }else{
          //guardar todos los productos
          setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finalizo la promesa");
      });
  }, [idCategoria]);

  return (
    <div className="itemlistcontainer">
      <h2>{saludo}</h2>
      <ItemList productos = {productos} />
    </div>
  );
};
export default ItemListContainer;
