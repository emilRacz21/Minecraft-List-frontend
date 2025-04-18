import { useState, useEffect } from "react";
import { getMcList } from "../Api/Api.jsx";
import "../Home/Home.css";
import MinecraftMotd from "../MinecraftMotd.jsx";
import ping from "../../../public/images/ping.png";
import heart from "../../../public/images/heart.png";
import dislike from "../../../public/images/dislike.png";
export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [err, setError] = useState();

  useEffect(() => {
    getMcList(setData, setLoading, setError);
  }, []);

  return (
    <ul>
      {loading == undefined ? (
        <p>Loading please wait</p>
      ) : (
        data.results.map((server, index) => {
          return (
            <div key={index}>
              {console.log(server)}
              <section className="server-container">
                <img src={server.favicon} />
                <div className="desc-section">
                  <MinecraftMotd motd={server.description} />
                </div>

                <section className="fav-section">
                  <div className="players-online">
                    <h2>{` ${server.players_online}/${server.players_max}`}</h2>
                    <img src={ping} alt="" />
                  </div>
                  <div className="players-online">
                    <h2>{`${server.like_count}`}</h2>
                    <img src={heart} alt="" />
                  </div>
                  <div className="players-online">
                    <h2>{`${server.dislike_count}`}</h2>
                    <img src={dislike} alt="" />
                  </div>
                </section>
              </section>
            </div>
          );
        })
      )}
    </ul>
  );
}
