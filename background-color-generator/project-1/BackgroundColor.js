const body = document.querySelector("body");
const leftInput = document.querySelector(".left-input");
const rightInput = document.querySelector(".right-input");
const cssOutput = document.querySelector(".css-output");


let leftColor = leftInput.value;
let rightColor = rightInput.value;

const ChangeBackground = () => {
  const cssString = `linear-gradient(to right,${leftColor},${rightColor})`;
  body.style.background = cssString
  cssOutput.textContent = `Background: ${cssString}`;
};

leftInput.addEventListener("change", (event) => {
  leftColor = event.target.value;
  ChangeBackground();
});

rightInput.addEventListener("change", (event) => {
  rightColor = event.target.value;
  ChangeBackground();
});


const Generate = document.querySelector(".Generator-button");

const randomColor = () => {
  const values = "123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random()*16);

    color += values[randomIndex];
  }
  return color;
}

Generate.addEventListener("click", () => {
  leftColor = randomColor();
  rightColor = randomColor();

  leftInput.value = leftColor;
  rightInput.value = rightColor;

  ChangeBackground();
});
