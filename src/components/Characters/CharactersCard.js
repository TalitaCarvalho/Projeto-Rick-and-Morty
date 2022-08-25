import { NavLink } from "react-router-dom";
import { Card } from "./CharactersListStyle";

const CharactersCard = (props) => {
  const character = props.character;
  // const status = character.status === "Alive" ? "alive" : "dead";

  return (
    <div className="m-10">
      <Card>
        <img
          className="rounded-lg character-image__size"
          src={character.image}
          alt=""
        />
      </Card>
        <div>
          <h1 className="text-center mt-5">
            <NavLink className="hover:text-emerald-500" to={`/personagem/${character.id}`}>
              {character.name}
            </NavLink>
          </h1>
        </div>
    </div>
  );
};

export default CharactersCard;
