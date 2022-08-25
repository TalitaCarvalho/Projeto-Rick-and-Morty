import Data from "../../utils/data";
import { useParams } from "react-router-dom";

const DimensionDatailsPage = () => {
  const { id } = useParams();
  const location = Data.location;

  return (
    <div>
      <div className="text-center mt-7 ">
        <h1 className="text-2xl text-5xl">{location.name}</h1>
        <h4 className="text-3xl">{location.type}</h4>
        <h4>{location.dimension}</h4>
      </div>

      <div>
        <p className="text-center mt-5 text-2xl pt-5 font-semibold">
          Residentes dessa dimensão:
        </p>
        <div className="flex flex-row flex-wrap justify-center pt-2">
          {location.residents.map((resident) => {
            return (
              <div className="m-6" key={resident.id}>
                <img
                  className="rounded-lg character-image__size"
                  src={resident.image}
                  alt=""
                />
                <h1 className="text-center font-semibold pb-3 pt-3 ">
                  {resident.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DimensionDatailsPage;
