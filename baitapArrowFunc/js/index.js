const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const renderButtons = () => {
  let content = "";
  for (let index in colorList) {
    content += `
    <button type="button" onclick="changeColor('${colorList[index]}')" class="color-button ${colorList[index]}"></button>
    `;
  }

  document.getElementById("colorContainer").innerHTML = content;
};
renderButtons();
//change

window.changeColor = (color) => {
    console.log(color);
  document.getElementsByClassName("house-roof")[0].style.backgroundColor =
    color;
    document.getElementsByClassName("house-upper")[0].style.backgroundColor =
    color;
};

// changColor();
