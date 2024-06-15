import { obtenerProductos } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useLoading from "../../hooks/useLoading";
import Loading from "../Ejemplos/Loading";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const { isLoading, showLoading, hideLoading } = useLoading();

  useEffect(() => {
    //mostrar pantalla de carga
    showLoading()

    obtenerProductos()
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        //ocultar pantalla de carga
        hideLoading()
      });
  }, []);

  return (
    <div className="itemlistcontainer">
      <p>{saludo}</p>
      {isLoading ? <Loading /> : <ItemList productos={productos} />}
    </div>
  );
};
export default ItemListContainer;
