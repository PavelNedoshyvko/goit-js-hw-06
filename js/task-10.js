function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
input: document.querySelector('[type="number"]'),
createBtn: document.querySelector('[data-create]'),
destroyBtn: document.querySelector('[data-destroy]'),
mainBox: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);


function onCreateBtnClick(event) {
	const amount = refs.input.valueAsNumber;
	createBoxes(amount);
}

function onDestroyBtnClick() {
	destroyBoxes()
}

function createBoxes(amount) {
	const arrBoxes = [];
	for (let i = 0; i < amount; i += 1) {
		const box = `<div class="box"></div>`;
		arrBoxes.push(box);
	};
	const stringBoxes = arrBoxes.join('');
	refs.mainBox.insertAdjacentHTML('beforeend', stringBoxes);
	const boxElements = document.querySelectorAll('.box');
	
	let sizeOfBoxElement = 30;

	boxElements.forEach(boxElement => {
			boxElement.style.width = `${sizeOfBoxElement}px`;
			boxElement.style.height = `${sizeOfBoxElement}px`;
		boxElement.style.backgroundColor = getRandomHexColor();
		sizeOfBoxElement += 10;
	});
}

function destroyBoxes() {
	refs.mainBox.innerHTML = '';
}

