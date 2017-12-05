window.REDI = window.REDI || {};

REDI.createCheckboxes = function (IDs, dbIngredients) {
  let htmlFormInputString = '',
    listIngredients = document.getElementById("listIngredients");

  for (let i = 0, max = IDs.length; i < max; i += 1) {
    let ID = IDs[i],
      ingredientObj = dbIngredients[ID],
      name = ingredientObj.name;

    //HTML that we want to create throught JS:
    htmlFormInputString += '<input class="" type="checkbox" id="' + ID + '" value="' + ID + '">';
    htmlFormInputString += '<label class="tags" for="' + ID + '">' + name + '</label>';
    // console.log(htmlFormInputString);
  }

  listIngredients.innerHTML = htmlFormInputString;

};
