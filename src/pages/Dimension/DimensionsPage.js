import { useEffect, useState } from "react";
import DimensionsList from "../../components/Dimensions/DimensionsList";
import { Fundo } from "../../components/Dimensions/DimensionsStyles";
import service from "../../utils/service"

const DimensionsPage = () => {
  const [locations, setLocations] = useState([])

  async function fetchLocations() {
    const result = await service(`
    locations {
      results {
        id,
        name,
        type
      }
    }
    `);
    setLocations(result.data.locations.results)
  }
  
  useEffect(() => {
    fetchLocations()
  }, [])

  return (
    <section>
      <Fundo>
        <DimensionsList dimensions={locations} />
      </Fundo>
    </section>
  );
};

export default DimensionsPage;
