const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const inputElMinValue = Number(inputEl.getAttribute('min'));
const inputElMaxValue = Number(inputEl.getAttribute('max'));

textEl.style.fontSize = `${inputElMinValue + (inputElMaxValue - inputElMinValue) / 2}px`;

inputEl.addEventListener('input', event => {
	textEl.style.fontSize = `${event.currentTarget.value}px`;
});