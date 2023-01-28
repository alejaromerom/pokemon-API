import { useState, useCallback } from "react";
import "./App.css";
import MostrarPokemones from "./MostrarPokemones";

function App() {
  const [data, setData] = useState([]);

  /**
   * se usa la API de recuperación para realizar una solicitud a la PokeAPI y luego se usa la respuesta
   * para establecer los datos en nuestro estado.
   */
  /* const consumoApi = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      console.log("Mostrar error:", error);
    }
  }; */

  const fetchPokemon = useCallback(async () => {
    try {
      const response = await fetch(
        `http://pokeapi.co/api/v2/pokemon/?limit=50`
      );
      if (response.ok) {
        /* El código anterior está obteniendo los datos de la API y configurando los datos en el estado. */
        const data = await response.json();
        data.results.forEach(async (pokemon) => {
          const response = await fetch(`${pokemon.url}`);
          if (response.ok) {
            /* Obtener los datos de la API y establecer los datos en el estado. */
            const dataPokemon = await response.json();
            pokemon.img = dataPokemon.sprites.front_default;
            pokemon.abilities = dataPokemon.abilities;
            setData(data.results);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="center">
        <button onClick={fetchPokemon}>Busqueda</button>
        {/* Pasar los data al componente MostrarPokemones. */}
        <MostrarPokemones pokemones={data}></MostrarPokemones>
      </div>
    </>
  );
}

export default App;
