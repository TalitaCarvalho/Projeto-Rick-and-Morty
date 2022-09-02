import { useEffect, useState } from "react";
import CharactersList from "../../components/Characters/CharactersList";
import Spinner from "../../components/App/Spinner";
import service from "../../utils/service";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCharacters() {
    const result = await service(`
    characters {
      info {
        pages,
        next,
        prev
      }
      results {
        id,
        name,
        image
      }
    }
    `);
    if (result) {
      setCharacters(result.data.characters.results);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);
  return (
    <div>{loading ? <Spinner /> : <CharactersList results={characters} />}</div>
  );
};

export default CharactersPage;
