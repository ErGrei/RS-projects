let interval;
export let minits = 0;
export let seconds = 0;
export let miliSeconds = 0;
const playTimer = () => {
  miliSeconds++;
  document.querySelector(".timer-seconds").innerHTML = "0" + seconds;
  if (miliSeconds > 90) {
    seconds++;
    miliSeconds = 0;
  }
  if (seconds > 9) {
    // seconds++;
    document.querySelector(".timer-seconds").innerHTML = seconds;
  }
  if (seconds > 59) {
    minits++;
    document.querySelector(".timer-minits").innerHTML = "0" + minits;
    seconds = 0;
    document.querySelector(".timer-seconds").innerHTML = "0" + seconds;
  }
};

export function initTimer() {
  interval = setInterval(playTimer, 10);
}

export function stopTimer() {
  clearInterval(interval);
}

export function resetTimer() {
  clearInterval(interval);
  minits = 0;
  seconds = 0;
  miliSeconds = 0;
}
