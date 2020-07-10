let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let min = document.querySelector("#minutes");
let sec = document.querySelector("#seconds");
let milis = document.querySelector("#milisecs");
let m = (s = ms = 0);

reset.style.display = stop.style.display = "none";
let run;

start.addEventListener("click", function () {
  reset.style.display = stop.style.display = "block";
  start.style.display = "none";
  run = setInterval(sw, 5);
});

stop.addEventListener("click", function () {
  stop.style.display = "none";
  start.style.display = "block";
  clearInterval(run);
});

reset.addEventListener("click", function () {
  setDefault();
});


function sw() {
  ms++;
  milis.innerHTML = ms;
  if (ms >= 200) {
    s++;
    ms = 0;
    s <= 9 ? (sec.innerHTML = `0${s}`) : (sec.innerHTML = s);
  } else if (s >= 60) {
    sec.innerHTML = `00`;
    m++;
    s = 0;
    m <= 9 ? (min.innerHTML = `0${m}`) : (min.innerHTML = m);
  } else if (m >= 60) {
    min, (innerHTML = `00`);
    m = 0;
    setDefault();
  }
}

function setDefault() {
  ms = s = m = 0;
  milis.innerHTML = sec.innerHTML = min.innerHTML = `00`;
}
