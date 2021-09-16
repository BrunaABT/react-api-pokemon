import api from "../../services/api";
import { useState } from "react";

import PokemonItem from "../../components/PokemonItem";
import PokemonLogo from "../../assets/images/pokemon.png";
import styles from "./styles.module.css";

interface IPokemons {
  name: string;
  url: string;
}

interface IResponse {
  //resultado do backend
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemons[];
}

function Home() {
  const [pokemons, setPokemons] = useState<IPokemons[]>();

  const getAllPokemons = async () => {
    const { data } = await api.get<IResponse>("pokemon");

    setPokemons(data.results);
  };

  return (
    <div className={styles.container}>
      <img src={PokemonLogo} alt="Pokemon Logo" className={styles.logo} />
      <PokemonItem name="pikachu" />
      <PokemonItem name="charmander" />
      <PokemonItem name="bulbassauro" />
      <PokemonItem name="dito" />
      <PokemonItem name="delibird" />
    </div>
  );
}

export default Home;
