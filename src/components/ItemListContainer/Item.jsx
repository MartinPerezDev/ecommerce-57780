const Item = ({ producto }) => {
  return (
    <div className="item">
      <img src={producto.imagen} width={200} alt="" />
      <p>{producto.nombre}</p>
      <p>precio: ${producto.precio}</p>
    </div>
  );
};
export default Item;
