import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemones, setPokemones] = useState([]);
  const [filtro, setFiltro] = useState("");

  async function getPokemon() {
    const datos = (
      await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    ).data;
    setPokemones(datos.results);
  }

  useEffect(() => {
    document.title = "Pokemon";
    getPokemon();
  }, []);

  const datosMostrar = !filtro
    ? pokemones
    : pokemones.filter((value) =>
        value.name.toLowerCase().includes(filtro.toLowerCase())
      );

  function eliminarPokemon(pokemon) {
    setPokemones(pokemones.filter((value) => value.name !== pokemon));
  }

  return (
    <div>
      <div className="container my-2">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        ></input>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Pokemon</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datosMostrar.map((pokemon, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{pokemon.name}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarPokemon(pokemon.name)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PokemonList;
