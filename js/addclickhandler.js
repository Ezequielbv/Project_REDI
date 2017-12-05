window.REDI = window.REDI || {};

REDI.addClickHandler = function (IDs, dbRecipes) {
	let oldClickHandler = null;

  document.getElementById('submit').addEventListener('click', function(){
    let recipes = REDI.getRecipes(IDs, dbRecipes),
    	index = REDI.displayRecipes(recipes);

    oldClickHandler = REDI.noLike(recipes, index, oldClickHandler);
  });

};
