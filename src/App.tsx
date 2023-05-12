import { Outlet, createHashRouter } from "react-router-dom";
import "./App.css";
import Flow from "./components/Example";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { UserRole } from "./types";
import { useEffect, useState } from "react";

const App = () => {
  const [userRole, setUserRole] = useState<UserRole>("visitor");

  useEffect(() => {
    console.log(userRole);
  }, [userRole]);

  return (
    <>
      <div className="w-screen h-screen flex flex-row">
        <Sidebar></Sidebar>
        <div className="w-full h-screen bg-slate-800 flex flex-col">
          <Header setUserRole={setUserRole} />

          <div className="w-full h-full flex-1 p-10 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
