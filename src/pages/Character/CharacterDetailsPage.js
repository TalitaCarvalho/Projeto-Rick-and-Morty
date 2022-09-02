// import Data from "../../utils/data";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/App/Spinner";
import service from "../../utils/service";

const CharacterDetailsPage = () => {
  // const character = Data.character;
  const { id } = useParams();
  const [characterDetails, setCharacterDatails] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchCharacterDatails() {
    setLoading(true);
    const result = await service(`
    character(id: ${id}) {
      id,
      name, 
      status,
      species,
      image,
      location {
        id,
        name
      },
      episode {
        id,
        episode,
        name
      }
    }
    `);
    if (result) {
      setCharacterDatails(result.data.character);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacterDatails();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="p-14">
          <div className="flex flex-row">
            <img
              src={characterDetails.image}
              alt="imagem perfil personagem"
              className="rounded-lg box-border h-150 w-150 p-4 border-4"
            />
            <div className="ml-5 pt-11">
              <h1 className="text-2xl text-5xl">{characterDetails.name}</h1>
              <h4 className="pt-3">
                <span>{characterDetails.status}</span> -{" "}
                {characterDetails.species}
              </h4>
              <p>
                ultimo local visto: <br />
                <strong>{characterDetails?.location?.name}</strong>
              </p>
            </div>
          </div>
          <div>
            <p className="font-semibold pt-5">
              Participou dos seguintes episódios:
            </p>
            {characterDetails.episode?.map((episode) => {
              return (
                <div className="grid grid-cols-11 gap-1 pt-2" key={episode.id}>
                  <h5>{episode.episode}:</h5>
                  <h4>{episode.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterDetailsPage;
