import React from "react";

import { Link, useNavigate } from "react-router-dom";

import style from "./login.module.css";
import logo from '../../assets/images/logofood.png'; 

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.container}>
        
        <div className={style.left}>
        <div>
        <button onClick={() => navigate("/")}>❮</button>
        </div>
          <div className={style.logo}>
              Ingresá para continuar !
          </div>
        </div>
        <div className={style.right}>
          <div className={style.login}>
            <h5>
                <img src={logo} alt="FoodGlobal Logo" className="w-32 h-auto" />
            </h5>
        
            <h1>Login</h1>
            <label htmlFor="">Mail</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />

            <button onClick={() => navigate("/dashboard")} className={style.buttonStyle}>Sing in</button>
            <Link to="/privacy" className="underline">Forgot password?</Link>
            <h5>or continue whit</h5>
            <div className={style.appBn}>
              <a href="" className={style.buttonApp}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/012/871/371/non_2x/google-search-icon-google-product-illustration-free-png.png"
                  alt="boton"
                  className={style.resizable}
                />
              </a>
              <a href="" className={style.buttonApp}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/016/716/447/non_2x/facebook-icon-free-png.png"
                  alt="boton"
                  className={style.resizable}
                />
              </a>
            </div>
            <p>Al continuar aceptas <Link to="/privacy" className="underline">Términos y Condiciones</Link > | <Link to="/terms" className="underline">Política de Privacidad</Link> </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
