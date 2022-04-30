import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="container text-center">
      <h1>Este es el Login</h1>
      <Link className="btn btn-primary" to="dashboard">
        Entrar
      </Link>
    </div>
  );
};

export default Login;
