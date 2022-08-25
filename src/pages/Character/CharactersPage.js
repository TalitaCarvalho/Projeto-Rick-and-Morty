import CharactersList from "../../components/Characters/CharactersList";
import Data from "../../utils/data"
const CharactersPage = () => {
  const data = Data.characters
  return (
    <div>
      <CharactersList results={data.results}/>
    </div>
  );
};

export default CharactersPage;
