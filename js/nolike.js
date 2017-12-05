window.REDI = window.REDI || {};

REDI.noLike = function (recipes, index) {
	let btn = document.getElementById("noLike");
	btn.style.display = 'inline';
	btn.addEventListener('click', function(){
		recipes.splice(index, 1);
		index = REDI.displayRecipes(recipes);
		if (recipes.length === 1) {
			btn.style.display = 'none';
		}
	});
};
