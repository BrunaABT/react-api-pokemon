import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

interface IParams {
  pokemon: string;
}

const Pokemon: React.FC = () => {
  const { pokemon } = useParams<IParams>();

  return <h1>Página do Pokemon: {pokemon}</h1>;
};

export default Pokemon;
