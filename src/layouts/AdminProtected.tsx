import { Outlet } from "react-router-dom";
import Notfound from "./Notfound";

const AdminProtected = () => {
  const token = localStorage.getItem("token");
  // if (!token) {
  //   window.location.href = "/login";
  // }
  return (
    // <div>
    //   <h1>Protected Route</h1>
    //   <Outlet />
    // </div>

    token == 'admin' ? <Outlet /> : <Notfound/>
  );
};

export default AdminProtected;
