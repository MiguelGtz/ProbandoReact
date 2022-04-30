import React from "react";
import { useState, useEffect } from "react";
import Alerta from "../components/Alerta";

const Nombres = () => {
  useEffect(() => {
    document.title = "Nombres";
  }, []);

  const [nombres, setNombres] = useState([]);
  const [nombre, setNombre] = useState("");
  const [isVacio, setIsVacio] = useState(false);

  function guardarNombre(e) {
    if (!nombre) {
      setIsVacio(true);
      e.preventDefault();
    } else {
      setNombres([...nombres, nombre]);
      setNombre("");
      e.preventDefault();
    }
  }
  return (
    <div>
      <div className="container my-2">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {nombres.map((val, index) => (
              <tr key={index}>
                <td>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={guardarNombre}>
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              setIsVacio(false);
            }}
          ></input>
          <input
            type="submit"
            className="btn btn-success my-2"
            value="Guardar"
          ></input>
        </form>
        <Alerta
          estado={isVacio}
          message="Tienes que escribir un nombre!"
        ></Alerta>
      </div>
    </div>
  );
};

export default Nombres;
