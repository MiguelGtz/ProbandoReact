import React from "react";

const Alerta = (props) => {
  if (props.estado)
    return <div className="alert alert-primary">{props.message}</div>;
};

export default Alerta;
