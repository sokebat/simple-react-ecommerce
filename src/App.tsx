import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminProtected from "./layouts/AdminProtected";
import Home from "./Pages/Home/Home";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import UserProfile from "./Pages/Profile/Profile";
import RootLayout from "./layouts/RootLayout";
import ProductByCategory from "./Pages/ProductByCategory/ProductByCategory";
import SingleProduct from "./Pages/Product/SingleProduct";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<RootLayout />}>
        <Route element={<AdminProtected />}>
          <Route path="/admin" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<UserProfile />} />
        <Route path="/category/:slug" element={<ProductByCategory />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
