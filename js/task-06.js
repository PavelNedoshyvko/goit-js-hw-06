function getInputTextLength() {
	const inputEl = document.querySelector('#validation-input');
	inputEl.addEventListener('blur', event => {
		if (event.currentTarget.value.length === Number(inputEl.getAttribute('data-length'))) {
			inputEl.classList.remove('invalid');
			return inputEl.classList.add('valid');
		}
		inputEl.classList.remove('valid');
		return inputEl.classList.add('invalid');
	 })
}

getInputTextLength();