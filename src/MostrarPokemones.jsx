import React from "react";
import "./App.css";

const MostrarPokemones = ({ pokemones }) => {
  /* Comprobando si la matriz de pokemones está vacía o no. */
  if (pokemones) {
    return (
      <div className="grid">
        {/* Iterando a través de la matriz de pokemones y devolviendo un div para cada pokemon. */}
        {pokemones.map((pokemon) => {
          return (
            <div className="card" key={pokemon.name}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.img} />
              <h4>Habilidades</h4>
              {pokemon.abilities?.map((ability) => {
                return <p key={ability.ability.name}>{ability.ability.name}</p>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
};

export default MostrarPokemones;
