import CharactersCard from "./CharactersCard";

const CharactersList = (props) => {
  return (
    <section className="flex flex-row flex-wrap justify-center">
      {props.results.map((character) => {
        return <CharactersCard key={character.id} character={character} />;
      })}
    </section>
  );
};

export default CharactersList;
