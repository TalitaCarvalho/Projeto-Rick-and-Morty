import DimensionsList from "../../components/Dimensions/DimensionsList";
import Data from "../../utils/data";
import { Fundo } from "../../components/Dimensions/DimensionsStyles";

const DimensionsPage = () => {
  const data = Data.dimensions;
  return (
    <section>
      <Fundo>
        <DimensionsList dimensions={data.results} />
      </Fundo>
    </section>
  );
};

export default DimensionsPage;
