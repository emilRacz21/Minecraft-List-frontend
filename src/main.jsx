import { createRoot } from "react-dom/client";
import ServerList from "./components/ServerList/ServerList.jsx";
import "./index.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <ServerList />
    <Footer />
  </>
);
