import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import styles from "./styles.module.css";

interface IPokemon {
  abilites: { ability: { name: string } }[];
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
  const [pokemon, setPokemon] = useState();
  const { pokemon: pokemonName } = useParams<IParams>();

  const getPokemonInfo = async () => {
    const { data } = await api.get<IPokemon>(`pokemon/${pokemonName}`);

    setPokemon(data);
  };

  useEffect(() => {
    getPokemonInfo();
  }, []);

  return <h1>Página do Pokemon: {pokemonName}</h1>;
};

export default Pokemon;
