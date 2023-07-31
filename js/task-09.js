function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
body: document.querySelector('body'),
nameOfColor: document.querySelector('.color'),
changeColorBtn: document.querySelector('.change-color'),
}

refs.changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
	const randomHexColor = getRandomHexColor();
	refs.body.style.backgroundColor = randomHexColor;
	refs.nameOfColor.textContent = randomHexColor;
};