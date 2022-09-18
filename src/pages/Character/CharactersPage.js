import { useEffect, useState } from "react";
import CharactersList from "../../components/Characters/CharactersList";
import Spinner from "../../components/App/Spinner";
import service from "../../utils/service";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [characterName, setCharacterName] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    const result = await service(`
    characters {
      info {
        count,
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
      setInfo(result.data.characters.info);
      setCharacters(result.data.characters.results);
      setLoading(false);
    }
  }

  async function fetchCharactersByPage(pageNumber) {
    const result = await service(`
    characters(page: ${pageNumber}){
      info {
        count,
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
      setInfo(result.data.characters.info);
      setCharacters(result.data.characters.results);
      setLoading(false);
    }
  }

  async function fetchSearchCharacter(name, pageNumber) {
    const pageNumberCondition = pageNumber ? `page: ${pageNumber},` : "";
    const result = await service(`
    characters (${pageNumberCondition} filter: {name: "${name}"}) {
      info {
        count,
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
      setInfo(result.data.characters.info);
      setCharacters(result.data.characters.results);
    }
  }

  function handleSearchInput(name) {
    setCharacterName(name);
    fetchSearchCharacter(name);
  }

  function handlePageNavigation(action) {
    if (action === "prev") {
      if (characterName) {
        fetchSearchCharacter(characterName, info.prev);
      } else {
        fetchCharactersByPage(info.prev);
      }
    } else {
      if (characterName) {
        fetchSearchCharacter(characterName, info.next);
      } else {
        fetchCharactersByPage(info.next);
      }
    }
  }

  const pageNumber = () => {
    return info.next ? info.next - 1 : info.prev + 1;
  };

  return (
    <>
      <div className="mt-5 flex flex-row justify-center  ">
        <input
          type="text"
          className="border-2 border-black-600 w-64 rounded-lg pl-2"
          placeholder="Digite o nome de um personagem"
          onChange={(ev) => handleSearchInput(ev.target.value)}
        />
      </div>

      <div>
        {loading ? <Spinner /> : <CharactersList results={characters} />}
      </div>

      <div className="flex flex-row justify-between items-center max-w-[50%] m-auto">
        <button
          className="flex flex-row items-center"
          onClick={() => handlePageNavigation("prev")}
        >
          <Icon path={mdiChevronLeft} size={1.5} title="Anterior" />
          Anterior
        </button>
        {pageNumber()}
        <button
          className="flex flex-row items-center"
          onClick={() => handlePageNavigation("next")}
        >
          Próximo
          <Icon path={mdiChevronRight} size={1.5} title="Próximo" />
        </button>
      </div>
    </>
  );
};

export default CharactersPage;
