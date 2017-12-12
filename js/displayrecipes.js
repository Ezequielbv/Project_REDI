window.REDI = window.REDI || {};

/**
 * This method displays a random recipe from the list of recipes,
 * and return the index of the recipe, it chose from the array
 * @return {number} index of the recipe displayed
 */
REDI.displayRecipes = function(selectedRecipes) {
  let random = Math.floor(Math.random() * selectedRecipes.length),
    recipeName = selectedRecipes[random].name,
    recipeDescription = selectedRecipes[random].preparation;

  document.getElementById("recipes").innerHTML = recipeName;
  document.getElementById("description").innerHTML = recipeDescription;
  document.getElementById("image").src = "img/"+ recipeImage;

  return random;
};
