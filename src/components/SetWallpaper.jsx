export default function SetWallpaper(loading) {
  const currentDate = new Date();
  const hours = currentDate.getHours();

  if (loading == undefined) {
    document.body.style.backgroundColor = "#141414";
  } else {
    document.body.classList.remove("morning", "night", "loading");
    document.body.classList.add(
      `${hours > 6 && hours <= 18 ? "morning" : "night"}`
    );
  }
}
