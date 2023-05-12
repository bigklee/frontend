import { useLocation } from "react-router-dom";
import { classNames, pathToTitle } from "../../utils";
import { UserRole } from "../../types";

const roles: UserRole[] = ["visitor", "curator", "admin"];

export const Header = ({
  setUserRole,
}: {
  setUserRole: (r: UserRole) => void;
}) => {
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
      <select
        className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-slate-700 border-slate-600 placeholder-gray-400 text-slate-50 ml-auto w-fit"
        onChange={(e) => setUserRole(e.target.value as UserRole)}
      >
        {roles.map((r, i) => (
          <option key={i} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  );
};
