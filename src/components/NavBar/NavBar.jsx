import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img
          width={150}
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <ul className="categories">
        <li className="category">
          <p>Hamburguesas</p>
          <div className="img-category">
            <img
              src="https://images.deliveryhero.io/image/pedidosya/only-home-squad/grid-masonry/quilted/restaurants-foto-q-v2.png"
              alt=""
            />
          </div>
        </li>
        <li className="category">
          <p>Helados</p>
          <div className="img-category">
            <img
              src="https://images.deliveryhero.io/image/pedidosya/only-home-squad/grid-masonry/quilted/helados-foto-q-v2.png"
              alt=""
            />
          </div>
        </li>
        <li className="category">
          <p>Mascotas</p>
          <div className="img-category">
            <img
              src="https://images.deliveryhero.io/image/pedidosya/only-home-squad/grid-masonry/quilted/mascotas-foto-q.png"
              alt=""
            />
          </div>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
