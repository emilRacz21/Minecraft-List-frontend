export default function SetWallpaper() {
  const currentDate = new Date();
  const hours = currentDate.getHours();

  document.body.classList.remove("morning", "night");
  document.body.classList.add(
    `${hours > 6 && hours <= 18 ? "morning" : "night"}`
  );
}
