import api from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className={styles.container}>
      <img src={PokemonLogo} alt="Pokemon Logo" className={styles.logo} />
      {pokemons ? (
        pokemons.map((pokemon) => (
          <Link to={`/${pokemon.name}`} key={pokemon.name}>
            <PokemonItem name={pokemon.name} />
          </Link>
        ))
      ) : (
        <h1 className={styles.loading}>Carregando...</h1>
      )}
    </div>
  );
}

export default Home;
