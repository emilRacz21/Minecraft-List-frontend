// export default function SetWallpaper(loading) {
//   const currentDate = new Date();
//   const hours = currentDate.getHours();

//   if (loading == undefined) {
//     document.body.style.backgroundColor = "#141414";
//   } else {
//     document.body.classList.remove("morning", "night", "loading");
//     document.body.classList.add(
//       `${hours > 6 && hours <= 18 ? "morning" : "night"}`
//     );
//   }
// }
import { useEffect } from "react";
import dayImage from "../assets/images/day.jpg";
import nightImage from "../assets/images/night.png";

export default function SetWallpaper(loading) {
  useEffect(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours();

    document.body.classList.remove("morning", "night");

    const gradient = `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.382) 20vw,
      rgb(20, 20, 20) 45vw,
      rgb(20, 20, 20) 50vw,
      rgb(20, 20, 20) 50vw
    )`;

    if (loading === undefined) {
      document.body.style.backgroundColor = "#141414";
      document.body.style.backgroundImage = "";
    } else {
      document.body.style.backgroundColor = "";
      const isDay = hours > 6 && hours <= 18;

      document.body.style.backgroundImage = `${gradient}, url(${
        isDay ? dayImage : nightImage
      })`;
      document.body.style.backgroundSize = "100vw 100vh";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
    }
  }, [loading]);
}
