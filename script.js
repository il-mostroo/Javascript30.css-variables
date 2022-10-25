const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const color = document.getElementById("base");
const root = document.querySelector(":root");

document.addEventListener("input", (e) => {
  if (!e.target.matches("input")) return;
  const userInput = e.target.value;
  const variable = `--${e.target.name}`;
  const variableValue = variable === "--base" ? userInput : `${userInput}px`;
  root.style.setProperty(variable, variableValue);
});
