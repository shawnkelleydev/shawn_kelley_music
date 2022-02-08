import { NavLink } from "react-router-dom";
// import CartIcon from "./CartIcon";

export default function Menu() {
  return (
    <nav>
      <NavLink to="/store">store</NavLink>
      {/* <NavLink to="/store/cart">
        <CartIcon />
      </NavLink> */}
    </nav>
  );
}
