import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavbarWeb from "../components/NavbarWeb.jsx";
import FooterWeb from "../components/FooterWeb.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import DokumentasiPage from "./pages/DokumentasiPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import EditProduct from "./pages/EditProduct.jsx";

function App() {
  return (
    <div>
      <NavbarWeb />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/product" Component={ProductPage} />
        <Route path="/dokumentasi" Component={DokumentasiPage} />
        <Route path="/profile" Component={ProfilePage} />
        <Route path="/add" Component={AddProduct} />
        <Route path="/edit/:id" Component={EditProduct} />
      </Routes>
    </div>
  );
}

export default App;
