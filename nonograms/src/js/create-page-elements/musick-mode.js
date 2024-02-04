export function createMusickMode() {
  const navbar = document.querySelector(".navbar");
  const wraper = document.createElement("div");
  wraper.className = "music-mode";
  const labelMusickMode = document.createElement("label");
  labelMusickMode.textContent = "Music mode";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "music-mode";
  checkbox.className = "music-mode-checkbox";
  checkbox.checked = true;
  labelMusickMode.prepend(checkbox);

  wraper.append(labelMusickMode);
  navbar.append(wraper);
}

export function audioRightButton() {
  const checkbox = document.getElementById("music-mode");
  if (checkbox.checked) {
    const clickRightMouse = new Audio("../../right.mp3");
    clickRightMouse.play();
  }
}

export function audioLeftButton() {
  const checkbox = document.getElementById("music-mode");
  if (checkbox.checked) {
    const clickLeftMouse = new Audio("../../left.mp3");
    clickLeftMouse.play();
  }
}

export function audioWinGame() {
  const checkbox = document.getElementById("music-mode");
  if (checkbox.checked) {
    const winGame = new Audio("../../win.mp3");
    winGame.play();
  }
}
