import { useState, useEffect } from "react";
import { getMcList } from "../Api/Api.jsx";
import "./ServerList.css";
import MinecraftMotd from "../MinecraftMotd.jsx";
import ping from "/images/ping.png";
import heart from "/images/heart.png";
import dislike from "/images/dislike.png";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation.jsx";
import SetWallpaper from "../SetWallpaper.jsx";
export default function Home() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState();
  const [err, setError] = useState();

  SetWallpaper();

  useEffect(() => {
    getMcList(setData, setLoading, setError, page);
  }, [page]);

  return (
    <ul>
      {loading == undefined ? (
        <LoadingAnimation />
      ) : (
        <>
          {data.results.map((server, index) => {
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
          })}
          <h2 className="page-next">{`page ${page} of ${Math.ceil(
            data.count / 10
          )}`}</h2>

          <section className="button-next-section">
            <button
              onClick={() => {
                setPage((num) => (num > 1 ? num - 1 : num));
              }}
              disabled={page === 1}
              className={`nav-button ${
                page === 1 ? "disabled-button" : "active-button"
              }`}
            >
              Previous
            </button>

            <button
              onClick={() => {
                const totalPages = Math.ceil(data.count / 10);
                setPage((num) => (num < totalPages ? num + 1 : num));
              }}
              disabled={page === Math.ceil(data.count / 10)}
              className={`nav-button ${
                page === Math.ceil(data.count / 10)
                  ? "disabled-button"
                  : "active-button"
              }`}
            >
              Next
            </button>
          </section>
        </>
      )}
    </ul>
  );
}
