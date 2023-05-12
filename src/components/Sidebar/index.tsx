import Hamburger from "../../assets/hamburger.svg";
import Compass from "../../assets/compass.svg";
import CompassFill from "../../assets/compass-fill.svg";
import CollectionAdd from "../../assets/collection_add.svg";
import Archive from "../../assets/archive.svg";
import ArchiveFill from "../../assets/archive-fill.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="h-screen w-[75px] flex flex-col items-center bg-slate-900 p-2">
      <div
        role="button"
        onClick={() => navigate("/")}
        className="mb-8 w-[50px]"
      >
        <img src={Hamburger}></img>
      </div>
      <button onClick={() => navigate("collections")} className="btn">
        <img
          className="btn-img"
          src={location.pathname === "/collections" ? CompassFill : Compass}
        ></img>
      </button>
      <button onClick={() => navigate("explore")} className="btn">
        <img
          className="btn-img"
          src={location.pathname === "/explore" ? ArchiveFill : Archive}
        ></img>
      </button>
      <div className="h-[2px] w-full bg-amber-800 mt-8 mb-2 rounded-lg"></div>
      <button onClick={() => navigate("create")} className="btn">
        <img className="btn-img" src={CollectionAdd}></img>
      </button>
    </div>
  );
};
