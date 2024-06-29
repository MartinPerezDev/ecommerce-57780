import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ producto }) => {
  const [expandir, setExpandir] = useState(false);

  //funcion manejadora del evento - cuando el mouse esta por encima de la card
  const handleMouseOver = () => {
    setExpandir(true);
  };

  //funcion manejadora del evento - cuando el mouse sale de la card
  const handleMouseLeave = () => {
    setExpandir(false);
  };

  const estilosCard = {
    transform: expandir ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s  ease-in-out",
  };

  return (
    <div
      className="item"
      style={estilosCard}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img src={producto.imagen} width={200} alt="" />
      <div className="description-item">
        <p>{producto.nombre}</p>
        <p>precio: ${producto.precio}</p>

        <Link to={"/detalle/" + producto.id} style={{ color: "lime" }}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
};
export default Item;
