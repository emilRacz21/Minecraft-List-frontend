import "./LoadingAnimation.scss";
import { loading } from "../../content";

export default function LoadingAnimation({
  responseText = <p className="loading-text">Loading...</p>,
}) {
  const randomIndex = Math.floor(Math.random() * loading.length);
  return (
    <section className="loading-animation">
      <div
        className="loading-squares"
        style={{ backgroundImage: `url(${loading[randomIndex]})` }}
        alt="Loading screen"
      />
      {responseText}
    </section>
  );
}
