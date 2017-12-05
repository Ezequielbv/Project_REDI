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
      }
    }
    if (isValid === true) {
      selectedRecipes.push( recipe );
    }
  }
  return selectedRecipes;
};
