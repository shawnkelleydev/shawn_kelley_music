import { NavLink } from "react-router-dom";
import Cart from "./Cart";

export default function Menu() {
  return (
    <nav>
      <NavLink to="/store">store</NavLink>
      <NavLink to="/store/cart">
        <Cart />
      </NavLink>
    </nav>
  );
}
