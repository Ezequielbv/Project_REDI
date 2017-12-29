window.REDI = window.REDI || {};

/**
 * This method displays a random recipe from the list of recipes,
 * and return the index of the recipe, it chose from the array
 * @return {number} index of the recipe displayed
 */
REDI.displayRecipes = function(selectedRecipes) { 
	console.log(selectedRecipes);
  let random = Math.floor(Math.random() * selectedRecipes.length),
    recipeName = selectedRecipes[random].name,
    recipeDescription = selectedRecipes[random].preparation;
    recipeImage = selectedRecipes[random].picture;

  document.getElementById('recipeContainer').style['background-color'] = 'rgba(21, 24, 28, 0.7)';
  document.getElementById('recipeName').innerHTML = recipeName;
  document.getElementById('description').innerHTML = recipeDescription;
  document.getElementById('image').innerHTML = '<img src="img/' + recipeImage + '" alt="recipe-image" class="img-fluid">';

  return random;
};
