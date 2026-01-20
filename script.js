const speed = document.getElementById("speed");
const text = document.getElementById("text");

const renderText = "We love Programming!";
let intervalId = null;
let i = 0;

if (speed.value != "") {
  intervalId = setInterval(() => {
    text.innerHTML += renderText[i];
    i++;

    if (i === renderText.length) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 500 / Number(speed.value));
}
