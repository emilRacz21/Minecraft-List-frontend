import "../Header/Header.scss";
import logo from "../../assets/images/minecraft-logo.png";
export default function Header() {
  return (
    <header className="header-container">
      <button className="button-out">Random Server</button>
      <img src={logo} alt="" />
      <section>
        <button className="button-in">Add</button>
        <button className="button-in">Log In</button>
      </section>
    </header>
  );
}
