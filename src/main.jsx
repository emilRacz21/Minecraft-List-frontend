import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ServerList from "./components/ServerList/ServerList.jsx";
import Login from "./components/Login/Login.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ServerList />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
