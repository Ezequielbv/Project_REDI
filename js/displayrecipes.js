window.REDI = window.REDI || {};

REDI.displayRecipes = function(selectedRecipes) {
  //Add recipes to HTML
  let random = Math.floor(Math.random() * selectedRecipes.length),
    recipeName = selectedRecipes[random].name,
    recipeDescription = selectedRecipes[random].preparation;

  document.getElementById("recipes").innerHTML = recipeName;
  document.getElementById("description").innerHTML = recipeDescription;
};
