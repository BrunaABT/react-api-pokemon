import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{pokemon?.name}</h1>
        <img
          className={styles.img}
          src={pokemon?.sprites.other.dream_world.front_default}
          alt=""
        />
        <h2 className={styles.line}>Height: {pokemon?.height} pounds</h2>
        <h2 className={styles.line}>Weigth: {pokemon?.weight} lb</h2>
        <h2 className={styles.line}>
          Type: {pokemon?.types.map((type) => type.type.name).join(", ")}
        </h2>
        <h2 className={styles.line}>
          Abilites:{" "}
          {pokemon?.abilities.map((ability) => ability.ability.name).join(", ")}
        </h2>

        <Link to="/">
          <button className={styles.button}>Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Pokemon;
