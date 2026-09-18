// Get UI
const getMap = document.querySelector(".map-container");

const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "pink",
  "brown",
  "skyblue",
  "cyan",
  "beige",
  "black",
  "white",
  "yellow",
  "violet",
];

const selectIds = ["smallcolor", "mediumcolor", "largecolor"];
const selects = selectIds.map((id) => document.getElementById(id));

selects.forEach((select) => {
  colors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    select.appendChild(option);
  });
});

let circleIndex = 0;

getMap.addEventListener("click", function (e) {
  // console.log(" I am working ");

  circleIndex++;
  // console.log(circleIndex);

  // console.log(e.target);

  if (e.target.classList.contains("map-container")) {
    const ox = e.offsetX;
    const oy = e.offsetY;
    // console.log(cx, cy);

    const newSpan = document.createElement("span");
    newSpan.id = circleIndex;
    newSpan.classList.add("circle");

    newSpan.style.left = `${ox}px`;
    newSpan.style.top = `${oy}px`;

    // newSpan.style.setProperty("--small-color", "darkblue");
    // newSpan.style.setProperty("--medium-color", "steelblue");
    // newSpan.style.setProperty("--large-color", "skyblue");

    // console.log(newSpan);

    if (selects.every((s) => s.selectedIndex > 0)) {
      newSpan.style.setProperty("--small-color", selects[0].value);
      newSpan.style.setProperty("--medium-color", selects[1].value);
      newSpan.style.setProperty("--large-color", selects[2].value);
    }

    this.appendChild(newSpan);
  }
});
