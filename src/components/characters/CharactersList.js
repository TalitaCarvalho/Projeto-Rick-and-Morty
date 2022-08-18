import { Card } from "./CharactersListStyle";
import CharactersCard from "./CharactersCard";

const CharactersList = (props) => {
  return (
    <section>
      <Card>
        {props.results.map((character) => {
          return <CharactersCard key={character.id} character={character} />;
        })}
      </Card>
    </section>
  );
};

export default CharactersList;
