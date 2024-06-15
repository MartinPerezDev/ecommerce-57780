import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductById, addProduct, modProduct } from "../../utils/fetchApi.js";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const newProduct = {
    nombre: "Producto 3",
    descripcion: "Descripcion 3",
    stock: 2,
    categoria: "mascotas",
    imagen: "https://th.bing.com/th/id/OIP.4SsKFAsz_O3JesFuyVcFUwHaHa?rs=1&pid=ImgDetMain",
    precio: 300,
  };

  const mod = {
    nombre: "Alimento para perro",
    precio: 5000
  }

  useEffect(() => {
    getProducts().then((data) => setProductos(data));

    getProductById(1).then((data) => console.log(data));
  }, []);

  const clickEvento = () => {
    //addProduct(newProduct).then((data)=> setProductos(data))
    modProduct(1, mod).then((data)=> setProductos(data))
  }

  return (
    <div className="itemlistcontainer">
      <p>{saludo}</p>
      <button onClick={clickEvento}>Click me!</button>
      <ItemList productos={productos} />
    </div>
  );
};
export default ItemListContainer;
