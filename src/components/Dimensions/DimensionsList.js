import DimensionsCard from "./DimensionsCard";

const DimensionsList = (props) => {
  return (
      <div className="flex flex-row mt-8 grid-cols-4 gap-20 justify-center">
        {props.dimensions.map((dimension) => {
          return <DimensionsCard key={dimension.id} dimension={dimension} />;
        })}
      </div>
    
  );
};

export default DimensionsList;
