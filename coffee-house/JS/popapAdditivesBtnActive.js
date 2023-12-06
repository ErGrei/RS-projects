function popapAdditivesBtnActive(popapPrise, price, sizePrice) {
  const popapAdditivesBTN = document.querySelectorAll(".popap-Additives-btn");
  const popapAdditives = document.querySelectorAll(".popap-Additives");
  for (let i = 0; i < popapAdditivesBTN.length; i++) {
    popapSizeBTN[i].addEventListener("click", () => {
      popapSizeBTN[i].classList.toggle("popap-size-btn-active");
    });
  }
}
