const colorBox = document.getElementById("color-box");


const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 1)`;
};

function changeColor() {
  colorBox.style.backgroundColor = getRandomColor();
}


