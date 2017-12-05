window.REDI = window.REDI || {};

REDI.noLike = function (recipes, index, oldClickHandler) {
	let btn = document.getElementById("noLike"),
		clickHandler = function () {
			recipes.splice(index, 1);
			index = REDI.displayRecipes(recipes);
			if (recipes.length === 1) {
				btn.style.display = 'none';
			}
		};

	btn.style.display = 'inline';

	if (typeof oldClickHandler === "function") {
		btn.removeEventListener('click', oldClickHandler);
	}

	btn.addEventListener('click', clickHandler);
	return clickHandler;
};
