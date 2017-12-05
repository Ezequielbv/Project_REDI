window.onload = function (){
  let dbIngredients = {},
    dbRecipes = [],
    IDs = [];

  function dbInit() {
    dbIngredients = {
      1 : {
        name: "eggs"
      },
      2 : {
        name: "flour"
      },
      3 : {
        name: "potatoes"
      },
      4 : {
        name: "Tomatoes"
      },
      5 : {
        name: "avocado"
      },
      6 : {
        name: "onion"
      },
      7 : {
        name: "pasta"
      },
      8 : {
        name: "garlic"
      },
      9 : {
        name: "aubergine"
      },
      10 : {
        name: "meat"
      },
      11 : {
        name: "milk"
      },
      12 : {
        name: "bread"
      },
      13 : {
        name: "beans"
      },
      14: {
        name: "chickpeas"
      }
    };

    //After ingredients have been defined, we create the IDs
    IDs = Object.keys(dbIngredients);

    dbRecipes = [ //ARRAY (LIST) OF RECIPES
      { //OBJECT RECIPE 1
        ingredients: ["1", "4", "5"],
        mealplan: "Breakfast",
        name: "Eggs with avocado",
        preparation: "Heat a non-stick frying pan, very lightly brush the cut surface of the tomatoes with a little oil, then cook them, cut-side down, in the pan until they have softened and slightly caramelised. Meanwhile, heat a pan of water, carefully break in the eggs and leave to poach for 1-2 mins until the whites are firm but the yolks are still runny",
        picture:"img1.jpg"
      },
      { //OBJECT RECIPE 2
        ingredients: ["6", "7", "8", "10"],
        mealplan: "Lunch",
        name: "Lasagne",
        preparation: "Heat the oil in a large non-stick pan with meat and fry the onions and garlic for 5 mins, stirring frequently until softened. Tip in the courgettes, peppers and tomatoes with the tomato purée, bouillon and chopped basil. Stir well, cover and cook for 5 mins. Don't be tempted to add more liquid as plenty of moisture will come from the veg once they start cooking.",
        picture:"img2.jpg"
      },
      { //OBJECT RECIPE 3
        ingredients: ["6", "7", "8", "9"],
        mealplan: "Dinner",
        name: "Veggie Lasagne",
        preparation: "Heat the oil in a large non-stick pan and fry the onions and garlic for 5 mins, stirring frequently until softened. Tip in the courgettes, peppers and tomatoes with the tomato purée, bouillon and chopped basil. Stir well, cover and cook for 5 mins. Don't be tempted to add more liquid as plenty of moisture will come from the veg once they start cooking.",
        picture:"img3.jpg"
      },
      { //OBJECT RECIPE 4
        ingredients: ["2", "11", "1"],
        mealplan: "Breakfast",
        name: "Pancakes",
        preparation: "In a medium bowl, whisk together milk, butter (or oil), and egg. Add dry ingredients to milk mixture; whisk until just moistened (do not overmix; a few small lumps are fine).",
        picture:""
      },
      { //OBJECT RECIPE 5
        ingredients: ["1", "12", "13"],
        mealplan: "Breakfast",
        name: "Black beans & scrambled egg tacos",
        preparation: "Heat oil in a large nonstick skillet on medium-high heat. Cook onion and garlic for 2 minutes, stirring often, or until beginning to soften. Stir in beans, salsa and cumin; reduce heat to medium-low. Simmer bean mixture, stirring occasionally, for 3 to 5 minutes or until warmed through and slightly thickened.  Remove skillet from heat, stir in lime juice and cover to keep warm.",
        picture:""
      },
      { //OBJECT RECIPE 6
        ingredients: ["3", "11"],
        mealplan: "Dinner",
        name: "Potatoes purée",
        preparation: "Bring a pot of salted water to a boil. Add potatoes and cook until tender. <br> In a small saucepan heat butter and milk over low heat until butter is melted. Using a potato masher or electric beater, slowly blend milk mixture into potatoes until smooth and creamy. Season with salt and pepper to taste.",
        picture:""
      }
    ];
  }

  function createCheckboxes() {
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
  }

  function addClickHandler() {
    document.getElementById('submit').addEventListener('click', function(){
      let recipes = getRecipes();
      console.log(recipes);
      displayRecipes(recipes);
    });
  }

  //Returns an array of recipes.
  function getRecipes() {
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
  }

  function displayRecipes(selectedRecipes) {
    //Add recipes to HTML
    let random = Math.floor(Math.random() * selectedRecipes.length),
      recipeName = selectedRecipes[random].name,
      recipeDescription = selectedRecipes[random].preparation;

    document.getElementById("recipes").innerHTML = recipeName;
    document.getElementById("description").innerHTML = recipeDescription;
  }

  function mealTime() {
    let hour = new Date();
    let currentHour = hour.getHours();
    let message = "It's time for...";

    if (currentHour >= 6 && currentHour <= 12){
      document.querySelector("#buttonbreakfast").innerHTML = message;
    } else if (currentHour >= 13 && currentHour <= 16) {
      document.querySelector("#buttonlunch").innerHTML = message;
    } else if (currentHour >= 17 && currentHour <=24) {
      document.querySelector("#buttondinner").innerHTML = message;
    } else {
      // return false;
    }
  }

  (function main() {
    dbInit();
    createCheckboxes();
    addClickHandler();
  })();
};
