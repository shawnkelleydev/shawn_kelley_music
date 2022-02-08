import BreadCrumb from "./BreadCrumb";
import { Outlet } from "react-router-dom";

export default function Store() {
  return (
    <div className="Store">
      <BreadCrumb />
      <Outlet />
    </div>
  );
}
