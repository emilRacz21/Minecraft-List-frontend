import "./SearchServer.scss";
import { useEffect, useState } from "react";
import { getMcVersion, getMcTypes } from "../Api/Api";
import { slogans } from "../../content";

export default function SearchServer() {
  const [type, setType] = useState();
  const [version, setVersion] = useState();
  const [slogan, setSlogan] = useState("");

  useEffect(() => {
    getMcVersion(setType);
    getMcTypes(setVersion);
    const changeSlogan = () => {
      const randomIndex = Math.floor(Math.random() * slogans.length);
      setSlogan(slogans[randomIndex]);
    };

    changeSlogan();
  }, []);

  let gameType = type == undefined ? console.log("Loading") : type.results;
  let gameVersion =
    version == undefined ? console.log("Loading") : version.results;
  return (
    <section className="search-section">
      <h1>FIND A MINECRAFT SERVER</h1>
      <h1 className="text-subtitle">{slogan}</h1>
      <div className="search-input">
        <input type="text" placeholder="Enter server name..." />
        <button>Search</button>
      </div>
      <div className="types-container">
        {gameType != undefined &&
          gameType.map((server, key) => {
            return (
              <p className="server-types" key={key}>
                {server.name}
              </p>
            );
          })}
      </div>
      <div className="types-container">
        {gameVersion != undefined &&
          gameVersion.map((server, key) => {
            return (
              <p className="server-types en" key={key}>
                {server.version}
              </p>
            );
          })}
      </div>
    </section>
  );
}
