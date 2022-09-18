import { useEffect, useState } from "react";
import DimensionsList from "../../components/Dimensions/DimensionsList";
import { Fundo } from "../../components/Dimensions/DimensionsStyles";
import service from "../../utils/service";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const DimensionsPage = () => {
  const [locations, setLocations] = useState([]);
  const [info, setInfo] = useState({});
  const [dimensionName, setDimensionName] = useState(null);

  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    const result = await service(`
    locations {
      info {
        count,
        pages,
        next,
        prev
      }
      results {
        id,
        name,
        type
      }
    }
    `);
    if (result) {
      setInfo(result.data.locations.info);
      setLocations(result.data.locations.results);
    }
  }

  async function fetchLocationsByPage(pageNumber) {
    const result = await service(`
    locations(page: ${pageNumber}){
      info {
        count,
        pages,
        next,
        prev
      }
      results {
        id,
        name
      }
    }
    `);
    if (result) {
      setInfo(result.data.locations.info);
      setLocations(result.data.locations.results);
    }
  }

  async function fetchSearchLocation(nameLocation, searchLocation) {
    const pageNumberCondition = searchLocation
      ? `page: ${searchLocation},`
      : "";
    const result = await service(`
    locations (${pageNumberCondition} filter: {name: "${nameLocation}"}) {
      info {
        count,
        pages,
        next,
        prev
      }
      results {
        id,
        name
      }
    }
    `);
    if (result) {
      setInfo(result.data.locations.info);
      setLocations(result.data.locations.results);
    }
  }

  function handleSearchInput(nameLocation) {
    setDimensionName(nameLocation)
    fetchSearchLocation(nameLocation);
  }

  function handlePageNavigation(action) {
    if (action === "prev") {
      if (dimensionName) {
        fetchSearchLocation(dimensionName, info.prev);
      } else {
        fetchLocationsByPage(info.prev);
      }
    } else {
      if (dimensionName) {
        fetchSearchLocation(dimensionName, info.next);
      } else {
        fetchLocationsByPage(info.next);
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
          placeholder="Digite o nome de uma dimensão"
          onChange={(ev) => handleSearchInput(ev.target.value)}
        />
      </div>

      <section>
        <Fundo>
          <DimensionsList dimensions={locations} />
        </Fundo>

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
      </section>
    </>
  );
};

export default DimensionsPage;
