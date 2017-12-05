window.onload = function (){
  let db = REDI.dbInit();
  REDI.createCheckboxes(db.IDs, db.dbIngredients);
  REDI.addClickHandler(db.IDs, db.dbRecipes);
};