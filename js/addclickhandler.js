window.REDI = window.REDI || {};

REDI.addClickHandler = function (IDs, dbRecipes) {
  document.getElementById('submit').addEventListener('click', function(){
    let recipes = REDI.getRecipes(IDs, dbRecipes);
    console.log(recipes);
    REDI.displayRecipes(recipes);
  });

};
