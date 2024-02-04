// document.documentElement.style.setProperty("--grid", matrix.length);
export function createDarckMode() {
  const navbar = document.querySelector(".navbar");
  const wraper = document.createElement("div");
  wraper.className = "darck-mode";
  const labelDarckMode = document.createElement("label");
  labelDarckMode.textContent = "Darck mode";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "darck-mode";
  checkbox.className = "darck-mode-checkbox";
  labelDarckMode.prepend(checkbox);

  wraper.append(labelDarckMode);
  navbar.append(wraper);
}

export function togleDarckMode() {
  const navbar = document.getElementById("darck-mode");
  navbar.addEventListener("change", togleDarck);

  function togleDarck() {
    if (navbar.checked) {
      document.documentElement.style.setProperty("--fon", 'rgba(4, 1, 27, 0.988)');
      document.documentElement.style.setProperty(
        "--fon-button",
        "rgb(88, 96, 138)"
      );
      document.documentElement.style.setProperty(
        "--fon-text",
        "rgba(231, 230, 234, 0.974)"
      );
      document.documentElement.style.setProperty(
        "--fon-cells",
        "rgb(23, 5, 95)"
      );
      document.documentElement.style.setProperty(
        "--fon-black",
        "rgb(221, 224, 231)"
      );
      document.documentElement.style.setProperty(
        "--fon-cells-cross",
        "rgb(2, 2, 44)"
      );
      document.documentElement.style.setProperty(
        "--fon-cross-span",
        "#e9e9f1"
      );
    }
    else {
      document.documentElement.style.setProperty(
        "--fon",
        "rgb(248, 251, 251)"
      );
      document.documentElement.style.setProperty(
        "--fon-button",
        "rgb(197, 244, 244)"
      );
      document.documentElement.style.setProperty(
        "--fon-text",
        "rgba(12, 1, 96, 0.974)"
      );
      document.documentElement.style.setProperty(
        "--fon-cells",
        "azure"
      );
      document.documentElement.style.setProperty(
        "--fon-black",
        "black"
      );
      document.documentElement.style.setProperty(
        "--fon-cells-cross",
        "rgb(216, 221, 221)"
      );
      document.documentElement.style.setProperty(
        "--fon-cross-span",
        "#403f3d"
      );
    }
  }
}
