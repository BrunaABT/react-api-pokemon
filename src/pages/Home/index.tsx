import PokemonItem from "../../components/PokemonItem";

function Home() {
  return (
    <div>
      <h1>Meu site com react!</h1>
      <PokemonItem name="pikachu" />
      <PokemonItem name="charmander" />
      <PokemonItem name="bulbassauro" />
      <PokemonItem name="dito" />
      <PokemonItem name="delibird" />
    </div>
  );
}

export default Home;
