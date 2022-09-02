// import Data from "../../utils/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../utils/service"

const DimensionDatailsPage = () => {
  const { id } = useParams();
  const [dimensionDetails, setDimensionDetails] = useState({});
  
async function fetchDimensionDetails() {
  
  const result = await service(`
  location(id:${id}) {
    id,
    name,
    type,
    dimension,
    residents {
      id,
      image,
      name
    }
  }
  `);
  setDimensionDetails(result.data.location)
}


useEffect(() => {
  fetchDimensionDetails();
}, [])

  // const location = Data.location;

  return (
    <div>
      <div className="text-center mt-7 ">
        <h1 className="text-2xl text-5xl">{dimensionDetails.name}</h1>
        <h4 className="text-3xl">{dimensionDetails.type}</h4>
        <h4>{dimensionDetails.dimension}</h4>
      </div>

      <div>
        <p className="text-center mt-5 text-2xl pt-5 font-semibold">
          Residentes dessa dimensão:
        </p>
        <div className="flex flex-row flex-wrap justify-center pt-2">
          {dimensionDetails.residents?.map((resident) => {
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
