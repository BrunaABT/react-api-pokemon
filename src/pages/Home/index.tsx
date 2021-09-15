import api from "../../services/api";

import PokemonItem from "../../components/PokemonItem";
import PokemonLogo from "../../assets/images/pokemon.png";
import styles from "./styles.module.css";

function Home() {
  api.get("pokemon");
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
