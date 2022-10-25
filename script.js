//select dom elements
const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const color = document.getElementById("base");
const root = document.querySelector(":root");
//get user values and set elements to them
spacing.addEventListener("input", (e) => {
  const range = e.target.value;
  root.style.setProperty("--spacing", `${range}px`);
});

blur.addEventListener("input", (e) => {
  const range = e.target.value;
  root.style.setProperty("--blur", `${range}px`);
});

color.addEventListener("input", (e) => {
  const colorPick = e.target.value;
  root.style.setProperty("--base", colorPick);
});
