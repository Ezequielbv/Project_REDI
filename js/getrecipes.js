window.REDI = window.REDI || {};

REDI.getRecipes = function(IDs, dbRecipes) {
  let selectedIngredients = [], //Array with the selected ingredients
    selectedRecipes = []; //Array with receiped that include selected ingredient

  for (let i = 0; i < IDs.length; i += 1) {
    let checkId = document.getElementById(IDs[i]);
    if (checkId.checked === true) {
      let savedId = checkId.id
      selectedIngredients.push(savedId);
    };
  }
//outer loop
  for (let i = 0; i < dbRecipes.length; i += 1) {
    let isValid = true;
    recipe = dbRecipes[i];

    //inner loop
    for (let  j = 0; j < selectedIngredients.length; j += 1) {
      let selectedIngredient = selectedIngredients[j];
      if ( !recipe.ingredients.includes(selectedIngredient)){
        isValid = false;
        document.getElementById('recipeContainer').style['background-color'] = 'rgba(21, 24, 28, 0.7)';
        document.getElementById('recipes').innerHTML = 'Sadly, there have no recipes with these ingredients. We are working on it. <br> Contact us if you have some proposal!<br><a href="https://www.linkedin.com/in/davidramis/" target="_blank"><b>David</b></a> or <a href="https://www.linkedin.com/in/ezequielbv/" target="_blank"><b>Ezequiel</b></a>';
      }
    }
    if (isValid === true) {
      selectedRecipes.push( recipe );
    }
  }
  return selectedRecipes;
};
