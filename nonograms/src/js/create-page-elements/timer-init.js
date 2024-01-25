

let interval;
let minits = 0;
let seconds = 0;

const playTimer = () => {
  seconds++;
  document.querySelector(".timer-seconds").innerHTML = "0" + seconds;
  if (seconds > 9 ) {
    document.querySelector(".timer-seconds").innerHTML =  seconds;
  }
  if (seconds > 59 ) {
    minits++
    document.querySelector(".timer-minits").innerHTML = "0" + minits
    seconds=0;
    document.querySelector(".timer-seconds").innerHTML = "0" + seconds;

    
  }



}

export function initTimer() {
  interval = setInterval(playTimer, 1000);
}
