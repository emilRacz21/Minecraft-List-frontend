import "../Header/Header.scss";
import logo from "../../assets/images/minecraft-logo.png";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <button className="button-out">Random Server</button>
      <img src={logo} alt="" onClick={() => navigate("/")} />

      <section>
        <button className="button-in">Add</button>
        <button className="button-in" onClick={() => navigate("/login")}>
          Log In
        </button>
      </section>
    </header>
  );
}
