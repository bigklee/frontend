import Archive from "../../assets/archive.svg";
import Compass from "../../assets/compass.svg";
import CollectionAdd from "../../assets/collection_add.svg";
import { useNavigate } from "react-router-dom";

export const Default = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center gap-10 flex-wrap">
      <Card title="Browse Collections" path="collections" icon={Compass} />
      <Card title="Explore Archive" path="explore" icon={Archive} />
      <Card title="Create New Collection" path="create" icon={CollectionAdd} />
    </div>
  );
};

const Card = ({
  title,
  path,
  icon,
}: {
  title: string;
  path: string;
  icon: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      className="bg-slate-800 border-amber-500 hover:bg-slate-700 border-2 rounded-lg flex flex-col items-center justify-center h-[300px] aspect-square"
      onClick={() => navigate(path)}
    >
      <div className="text-2xl text-amber-300 mb-8 font-millimetre">
        {title}
      </div>
      <img className="w-10 h-10" src={icon}></img>
    </div>
  );
};
