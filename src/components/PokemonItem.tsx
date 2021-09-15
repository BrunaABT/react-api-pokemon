interface IProps {
  name?: string;
}

const PokemonItem: React.FC<IProps> = ({ name }) => {
  return (
    <>
      <h2>{name}</h2>
    </>
  );
};

export default PokemonItem;
