import { createRoot } from "react-dom/client";
import ServerList from "./components/ServerList/ServerList.jsx";
import "./index.css";
import Header from "./components/Header/Header.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <ServerList />
  </>
);
