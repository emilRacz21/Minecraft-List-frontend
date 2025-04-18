export default function SetWallpaper() {
  const currentDate = new Date();
  const hours = currentDate.getHours();

  document.body.classList.remove("morning", "night");
  if (hours >= 6 && hours <= 18) document.body.classList.add("morning");
  if (hours >= 18 && hours <= 6) document.body.classList.add("night");
}
