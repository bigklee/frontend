import { useLocation } from "react-router-dom";
import { classNames, pathToTitle } from "../../utils";

export const Header = () => {
  const location = useLocation();

  return (
    <div className="w-full flex flex-row gap-4 items-center p-4">
      <div
        className={classNames(
          "font-bold font-millimetre text-4xl",
          location.pathname === "/" ? "text-amber-500" : "text-slate-500"
        )}
      >
        BigKlee
      </div>
      {location.pathname !== "/" ? (
        <>
          <div className="font-bold text-4xl text-slate-500">/</div>
          <div className="font-bold font-millimetre text-4xl text-amber-500">
            {pathToTitle(location.pathname)}
          </div>
        </>
      ) : null}
    </div>
  );
};
