window.REDI = window.REDI || {};

REDI.addClickHandler = function (IDs, dbRecipes) {
  document.getElementById('submit').addEventListener('click', function(){
    let recipes = REDI.getRecipes(IDs, dbRecipes),
    	index = REDI.displayRecipes(recipes);

    REDI.noLike(recipes, index);
  });

};
