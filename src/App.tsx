import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-row">
        <Sidebar></Sidebar>
        <div className="w-full h-screen bg-slate-800 flex flex-col">
          <Header />

          <div className="w-full h-full flex-1 p-10 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
