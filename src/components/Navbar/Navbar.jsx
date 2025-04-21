import "./Navbar.scss";
import { Link } from "react-router-dom";
export default function Navbar({ title, children }) {
  let [name = "Getting started", secondName = ""] = title;
  document.getElementById("root").style.backgroundImage = "";
  return (
    <section className="main-section">
      <section className="navbar-section">
        <article className="navbar-container">
          <nav className="navbar-nav">
            <Link className="navbar-cl" to={`/`}>
              {name}
            </Link>
            <p>-</p>
            <Link className="navbar-c2" to={`/${secondName.toLowerCase()}`}>
              {secondName}
            </Link>
          </nav>

          <h2>{secondName}</h2>
        </article>
        <hr />
        {children}
      </section>
    </section>
  );
}
