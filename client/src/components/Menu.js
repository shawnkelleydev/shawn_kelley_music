import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";

export default function Menu() {
  return (
    <nav>
      <NavLink to="/store">store</NavLink>
      <NavLink to="/cart">
        <CartIcon />
      </NavLink>
    </nav>
  );
}
