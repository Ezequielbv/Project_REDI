window.REDI = window.REDI || {};

REDI.noLike = function (recipes, index) {
	let btn = document.getElementById("noLike");
	btn.style.display = 'inline';
	btn.addEventListener('click', function(){
		recipes.splice(index, 1);
		REDI.displayRecipes(recipes);
		btn.style.display = 'none';
	});

};
