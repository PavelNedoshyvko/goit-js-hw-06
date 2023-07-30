const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function makeIngredientsList (ingredients) {
	const ingredientsListEl = document.querySelector('#ingredients');
	const ingredientsEl = ingredients.map(ingredient => {
		const ingredientItemEl = document.createElement('li');
		ingredientItemEl.textContent = ingredient;
		ingredientItemEl.classList.add('item');
		return ingredientItemEl;
	});
	return ingredientsListEl.append(...ingredientsEl);
};

makeIngredientsList(ingredients);