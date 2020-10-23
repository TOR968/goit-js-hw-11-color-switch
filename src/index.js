const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');



buttonStart.addEventListener('click', ChangeBobyColor);



function ChangeBobyColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(colors[randomIntegerFromInterval(0, colors.length - 1)])
};