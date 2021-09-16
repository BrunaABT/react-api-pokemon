import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import styles from "./styles.module.css";

interface IPokemon {
  abilities: { ability: { name: string } }[];
  height: number;
  name: string;
  weight: number;
  types: { type: { name: string } }[];
  sprites: { other: { dream_world: { front_default: string } } };
}

interface IParams {
  pokemon: string;
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const { pokemon: pokemonName } = useParams<IParams>();

  const getPokemonInfo = async () => {
    const { data } = await api.get<IPokemon>(`pokemon/${pokemonName}`);

    setPokemon(data);
  };

  useEffect(() => {
    getPokemonInfo();
  }, []);

  return (
    <div className={styles.container}>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
      <h2>Height: {pokemon?.height} pounds</h2>
      <h2>Weigth: {pokemon?.weight} lb</h2>
      <h2>Type: {pokemon?.types.map((type) => type.type.name).join(", ")}</h2>
      <h2>
        Abilites:{" "}
        {pokemon?.abilities.map((ability) => ability.ability.name).join(", ")}
      </h2>
    </div>
  );
};

export default Pokemon;
