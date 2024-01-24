let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let am_pm = document.querySelector(".am-pm");
setInterval(() => {
  clock();
}, 1000);

function clock() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";
  let nowTime =
    hours % 12 === 0
      ? 12
      : `${hours % 12 < 10 ? "0" + (hours % 12) : hours % 12}`;

  hour.innerHTML = nowTime;
  am_pm.innerHTML = ampm;
  minute.innerHTML = minutes >= 10 ? minutes : `0${minutes}`;
  second.innerHTML = seconds >= 10 ? seconds : `0${seconds}`;
}

clock();
