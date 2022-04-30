import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Nombres from "./pages/Nombres";
import PokemonList from "./pages/PokemonList";

import Alerta from "./components/Alerta";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<Home />}></Route>
          <Route path="nombres" element={<Nombres />}></Route>
          <Route path="pokemon" element={<PokemonList />}></Route>
          <Route
            path="*"
            element={<Alerta message="Pagina no encontrada!" estado="true" />}
          ></Route>
        </Route>
        <Route
          path="*"
          element={<Alerta message="Pagina no encontrada!" estado="true" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
