interface IProps {
  name?: string;
  // se for opcional, só usar name?
  //pode ser type = IProps ao invés de interface
}

function PokemonItem({ name }: IProps) {
  return (
    <div>
      <h2>{name}</h2>
      {/* se for opcional -> {name || "Pokemon sem nome"} */}
    </div>
  );
}

export default PokemonItem;
