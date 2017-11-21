window.onload = function (){

 let hour = new Date();
 let currentHour = hour.getHours();
 let message = "It's time for...";

   if (currentHour >= 6 && currentHour <= 12){
     return document.querySelector("#buttonbreakfast").innerHTML = message;
   } else if (currentHour >= 13 && currentHour <= 16) {
     return document.querySelector("#buttonlunch").innerHTML = message;
   } else if (currentHour >= 17 && currentHour <=24) {
     return document.querySelector("#buttondinner").innerHTML = message;
   } else {
     return false;
  }
};

const dbIngredients = {
  1: {
    name: "eggs"
  },
  2: {
    name: "flour"
  },
  3: {
    name: "potatoes"
  },
  4: {
    name: "Tomatoes"
  },
  5: {
    name: "avocado"
  },
  6: {
    name: "onion"
  },
  7: {
    name: "pasta"
  },
  8: {
    name: "garlic"
  },
  9: {
    name: "aubergine"
  },
  10: {
    name: "meat"
  }
};

let dbRecipes = [ //ARRAY (LIST) OF RECIPES
{ //OBJECT RECIPE 1
  mealplan: "Breakfast",
  name: "Eggs with avocado",
  tagIngredients: [1, 4, 5],
  preparation: "Heat a non-stick frying pan, very lightly brush the cut surface of the tomatoes with a little oil, then cook them, cut-side down, in the pan until they have softened and slightly caramelised. Meanwhile, heat a pan of water, carefully break in the eggs and leave to poach for 1-2 mins until the whites are firm but the yolks are still runny",
  picture:"img1.jpg"
},

{ //OBJECT RECIPE 2
  mealplan: "Lunch",
  name: "Lasagne",
  tagIngredients: [6, 7, 8, 10],
  preparation: "Heat the oil in a large non-stick pan and fry the onions and garlic for 5 mins, stirring frequently until softened. Tip in the courgettes, peppers and tomatoes with the tomato purée, bouillon and chopped basil. Stir well, cover and cook for 5 mins. Don't be tempted to add more liquid as plenty of moisture will come from the veg once they start cooking.",
  picture:"img2.jpg"
},

{ //OBJECT RECIPE 3
  mealplan: "Dinner",
  name: "Veggie Lasagne",
  tagIngredients: [6, 7, 8, 9],
  preparation: "Heat the oil in a large non-stick pan and fry the onions and garlic for 5 mins, stirring frequently until softened. Tip in the courgettes, peppers and tomatoes with the tomato purée, bouillon and chopped basil. Stir well, cover and cook for 5 mins. Don't be tempted to add more liquid as plenty of moisture will come from the veg once they start cooking.",
  picture:"img3.jpg"
}
];

let ingredients = [];
// let lengthIngredients = Object.keys(dbIngredients);

for (let index in dbIngredients) {
  ingredients += dbIngredients[index].name + " ";
}

(function addtIngredient() {
  ingredients = ingredients.split(" ")
  let form = document.getElementById("form");
  form.innerHTML = '<input type="checkbox">' + ingredients;
})();

console.log(form);

function getRecipes() {
  for (let i = 0; i < 10; i++) {
    const checkId = document.getElementById(i).checked;
    if (checkId == true) {
      ingredients += i;
    };
  }
  console.log(ingredients);

}


let recipe = dbRecipes[0];

for (let i = 0; i < recipe.tagIngredients.length; i++) {
  let ingredientId = recipe.tagIngredients[i];
  for (let j = 0; j < dbIngredients.length; j++) {
    let dbIngredientId = dbIngredients[j].id;
    if (dbIngredientId === ingredientId){
      // console.log(dbIngredients[j].name);
    }
  }
}
// console.log(dbRecipes[0].preparation);

function checkIngridients() {
dbIngredients
}