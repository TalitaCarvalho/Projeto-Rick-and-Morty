import { NavLink } from "react-router-dom";

const CharactersCard = (props) => {
  const character = props.character;
  const status = character.status === "Alive" ? "alive" : "dead";

  return (
    <div className="card">
      <img src={character.image} alt="" />

      <div className="texto-informacao">
        <h1><NavLink to={`/personagem/${character.id}`}>{character.name}</NavLink></h1>
        <h4>
          <span className={status}>{character.status}</span> - {character.species}
        </h4>
        <p>
          Ultimo local em que foi visto: <br/> <strong>{character.location.name}</strong>
        </p>
      </div>
    </div>
  );
};

export default CharactersCard;
