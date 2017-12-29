window.REDI = window.REDI || {};

REDI.noLike = function (recipes, index, oldClickHandler) {
	let btn = document.getElementById('noLike'),
		clickHandler = function () {
			if (recipes.length <= 1) {
				document.getElementById('recipeName').innerHTML = '<p style="color: #BDBD4A">Sadly, we have no more recipes with the selected ingredients. We are working on it though! <br> Contact us if you have some proposal!<br><a href="https://www.linkedin.com/in/davidramis/" target="_blank">David</a> or <a href="https://www.linkedin.com/in/ezequielbv/" target="_blank">Ezequiel</a></p>';
				btn.style.display = 'none';				
			} else {
				recipes.splice(index, 1);
				index = REDI.displayRecipes(recipes);
				if (recipes.length === 1) {
					btn.style.display = 'none';
				}
			}
		};

	btn.style.display = 'inline';

	if (typeof oldClickHandler === 'function') {
		btn.removeEventListener('click', oldClickHandler);
	}

	btn.addEventListener('click', clickHandler);
	return clickHandler;
};
