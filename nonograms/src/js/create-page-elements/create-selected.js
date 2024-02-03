import СreatorElement from "../create-page-elements/elements-creator";

export function createSelected(elemLvl, elemPictur) {
const navbar = document.querySelector('.navbar');
const select1 = document.createElement('select');
select1.classList = "lvl select";
const select2 = document.createElement('select');
select2.classList = "picture select";

for (let i = 0; i < elemLvl.length; i++ ){
    const options = document.createElement('option');
    options.value = i;
    options.text = elemLvl[i];
    select1.append(options);
  }
  navbar.append(select1)


for (let i = 0; i < elemPictur[0].length; i++ ){
    const options = document.createElement('option');
    options.value = i;
    options.text = elemPictur[0][i];
    select2.append(options);
  }
  navbar.append(select2)


}