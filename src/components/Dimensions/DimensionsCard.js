import { NavLink } from "react-router-dom";
import { List } from "./DimensionsStyles";
const DimensionsCard = (props) => {
  const dimension = props.dimension;

  return (
    <div className="bg-slate-100 rounded-lg p-5 font-mono flex flex-row items-center w-full max-w-xs">
      <List>
        <img className="portal-card" src="/assets/images/portal.png" alt="" />
      </List>
      <div>
        <h1>
          <NavLink to={`/dimensao/${dimension.id}`}  className="text-3xl hover:text-emerald-500">{dimension.name}</NavLink>
        </h1>
        <h3 className="text-2xl">{dimension.type}</h3>
      </div>
    </div>
  );
};

export default DimensionsCard;
