import { useEffect } from "react";
import dayImage from "../assets/images/day.jpg";
import nightImage from "../assets/images/night.png";

export default function SetWallpaper(loading) {
  let root = document.getElementById("root");
  useEffect(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours();

    root.classList.remove("morning", "night");

    const gradient = `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.382) 20vw,
      rgb(20, 20, 20) 45vw,
      rgb(20, 20, 20) 50vw,
      rgb(20, 20, 20) 50vw
    )`;

    if (loading === undefined) {
      root.style.backgroundColor = "#141414";
      root.style.backgroundImage = "";
    } else {
      root.style.backgroundColor = "";
      const isDay = hours > 6 && hours <= 18;

      root.style.backgroundImage = `${gradient}, url(${
        isDay ? dayImage : nightImage
      })`;
      root.style.backgroundSize = "100vw 100vh";
      root.style.backgroundPosition = "center";
      root.style.backgroundRepeat = "no-repeat";
    }
  }, [loading, root.classList, root.style]);
}
