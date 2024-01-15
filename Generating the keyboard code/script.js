let keypr = document.querySelector("#keyboard");
let body = document.querySelector("body");

const audio = new Audio("au1.mp3");
body.addEventListener("keydown", (e) => {
  // alert("Hello World");
  keypr.innerHTML = `<h1> You Pressed <h1 style="color: #0fc668c4;"> &nbsp ${e.key}</h1></h1>`;
  var ele = document.getElementById("keycod");
  ele.classList.add("keymod");
  ele.innerHTML = `<h2> ${e.keyCode}</h2>`;

  if (e.ctrlKey && e.key === "z") {
    audio.play();
  } else if (e.ctrlKey && e.key === "c") {
    audio.pause();
  }
});
