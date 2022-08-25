import Data from "../../utils/data";

const CharacterDetailsPage = () => {
  const character = Data.character;
  return (
    <div className="p-14">
      <div className="flex flex-row">
        <img
          src={character.image}
          alt="imagem perfil personagem"
          className="rounded-lg box-border h-150 w-150 p-4 border-4"
        />
        <div className="ml-5 pt-11">
          <h1 className="text-2xl text-5xl">{character.name}</h1>
          <h4 className="pt-3">
            <span>{character.status}</span> - {character.species}
          </h4>
          <p>
            ultimo local visto: <br />
            <strong>{character.location.name}</strong>
          </p>
        </div>
      </div>
      <div>
        <p className="font-semibold pt-5">Participou dos seguintes episódios:</p>
        {character.episode.map((episode) => {
          return (
            <div className="grid grid-cols-11 gap-1 pt-2" key={episode.id}>
              <h5>{episode.episode}:</h5>
              <h4>{episode.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
