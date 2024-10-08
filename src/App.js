import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";

import Locales from "./pages/Locales";
import Afiliarse from "./pages/Afiliarse";
import SobreNosotros from "./pages/SobreNosotros";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NegociosPage from "./pages/NegociosPage";
import ProductsConfig from "./components/ProductsConfig/ProductsConfig";
import UsersConfig from "./components/UsersConfig/UsersConfig";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import CreateUser from "./components/CreateUser/CreateUser";
import CreateNegocio from "./components/Negocio/CreateNegocio";
import Dashboard from "./pages/Dashboard"
import PedidoPage from "./pages/PedidoPage";
import Pedidos from "./components/PedidosSocio/Pedidos";
import Ventas from "./components/PedidosSocio/Ventas";
import ResetPassword from "./pages/ResetPassword";
import TerminosyCondiciones from "./pages/TerminosyCondiciones";
import PoliticasPrivacidad from "./pages/PoliticasPrivacidad";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/createusers" element={<CreateUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/privacy" element={<PoliticasPrivacidad />} />
        <Route path="/terms" element={<TerminosyCondiciones />} />
        <Route path="/reset" element={<ResetPassword />} />

         <Route path="/pedido/:id" element={<PedidoPage />} /> 
        <Route path="/createnegocio" element={<CreateNegocio />} />
        <Route path="/productos" element={<NegociosPage />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/products" element={<ProductsConfig />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/createproducts" element={<CreateProduct />} />
        <Route path="/users" element={<UsersConfig />} />
        <Route path="/locales" element={<Locales />} />
        <Route path="/afiliarse" element={<Afiliarse />} />
        <Route path="/about" element={<SobreNosotros />} />
        <Route path="/about" element={<SobreNosotros />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
