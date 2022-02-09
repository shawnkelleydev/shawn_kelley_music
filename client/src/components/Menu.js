import { NavLink } from "react-router-dom";
// import CartIcon from "./CartIcon";

export default function Menu() {
  const menuItems = ["about", "store"];

  return (
    <nav>
      {menuItems.map((item, i) => (
        <NavLink key={i} to={`/${item}`}>
          {item}
        </NavLink>
      ))}
    </nav>
  );
}
