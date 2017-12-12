window.REDI = window.REDI || {};

REDI.dbInit = function () {
  let dbIngredients = {
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
      name: "tomatoes"
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
    },
    15: {
      name: "salmon"
    },
    16: {
      name: "cheese"
    }
  };

  //After ingredients have been defined, we create the IDs
  let IDs = Object.keys(dbIngredients);

  let dbRecipes = [ //ARRAY (LIST) OF RECIPES
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
      picture:"img2.jpeg"
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
      picture:"img4.jpeg"
    },
    { //OBJECT RECIPE 5
      ingredients: ["1", "12", "13"],
      mealplan: "Breakfast",
      name: "Black beans & scrambled egg tacos",
      preparation: "Heat oil in a large nonstick skillet on medium-high heat. Cook onion and garlic for 2 minutes, stirring often, or until beginning to soften. Stir in beans, salsa and cumin; reduce heat to medium-low. Simmer bean mixture, stirring occasionally, for 3 to 5 minutes or until warmed through and slightly thickened.  Remove skillet from heat, stir in lime juice and cover to keep warm.",
      picture:"img5.jpg"
    },
    { //OBJECT RECIPE 6
      ingredients: ["3", "11"],
      mealplan: "Dinner",
      name: "Potatoes purée",
      preparation: "Bring a pot of salted water to a boil. Add potatoes and cook until tender. <br> In a small saucepan heat butter and milk over low heat until butter is melted. Using a potato masher or electric beater, slowly blend milk mixture into potatoes until smooth and creamy. Season with salt and pepper to taste.",
      picture:"img6.jpeg"
    },
    { //OBJECT RECIPE 7
      ingredients: ["3", "11"],
      mealplan: "Breakfast",
      name: "Coffe",
      preparation: "Water pure in your cup of coffee.",
      picture:"img7.jpg"
    }
  ];

  return {
    dbIngredients: dbIngredients,
    IDs: IDs,
    dbRecipes: dbRecipes
  };

}
