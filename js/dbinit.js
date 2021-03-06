window.REDI = window.REDI || {};

REDI.dbInit = function () {
  let dbIngredients = {
    1 : {
      name: 'eggs'
    },
    2 : {
      name: 'flour'
    },
    3 : {
      name: 'potatoes'
    },
    4 : {
      name: 'tomatoes'
    },
    5 : {
      name: 'avocado'
    },
    6 : {
      name: 'onion'
    },
    7 : {
      name: 'pasta'
    },
    8 : {
      name: 'garlic'
    },
    9 : {
      name: 'aubergine'
    },
    10 : {
      name: 'meat'
    },
    11 : {
      name: 'milk'
    },
    12 : {
      name: 'bread'
    },
    13 : {
      name: 'beans'
    },
    14: {
      name: 'chickpeas'
    },
    15: {
      name: 'salmon'
    },
    16: {
      name: 'cheese'
    },
    17: {
      name: 'cous-cous'
    },
    18: {
      name: 'mushrooms'
    },
    19: {
      name: 'rice'
    },
    20: {
      name: 'green/red peppers'
    },
    21: {
      name: 'green peas'
    },
    22: {
      name: 'lentils'
    },
    23: {
      name: 'fish'
    },
    24: {
      name: 'celery'
    },
    25: {
      name: 'carrots'
    }
  };

  //After ingredients have been defined, we create the IDs
  let IDs = Object.keys(dbIngredients);

  let dbRecipes = [ //ARRAY (LIST) OF RECIPES
    { //OBJECT RECIPE 1
      ingredients: ['1', '4', '5'],
      mealplan: 'Breakfast',
      name: 'Eggs with avocado',
      preparation: '<p>Heat a pan with a little oil, brush the cut tomatoes, then cook them until they have softened.</p>' +
      '<p>Meanwhile, heat a pan of water, break in the eggs and leave to poach for 1-2 mins until the whites are firm but the yolks are still runny.<p>' +
      '<p>Smash the avocados and spread the in bread, put the eggs on the top and serve with the tomatoes.</p>',
      picture:'img1.jpg'
    },
    { //OBJECT RECIPE 2
      ingredients: ['6', '7', '8', '10'],
      mealplan: 'Lunch',
      name: 'Lasagne',
      preparation: '<p>Heat the oil in a pan and fry the onions, peppers and garlic until softened.</p>' +
      '<p>Tip in the tomatoes and the meat and, when it is cooked, the tomato purée together with chopped basil. Stir well, cover and cook for 5 mins.</p>' +
      '<p>Mount the first layer of lasaña pasta at the bottom of a pyrex and cover it with the sauce. Built the layers until it´s over and put it in the oven until the pasta is done.</p>',
      picture:'img2.jpg'
    },
    { //OBJECT RECIPE 3
      ingredients: ['6', '7', '8', '9'],
      mealplan: 'Dinner',
      name: 'Veggie Lasagne',
      preparation: '<p>Heat the oil in a pan and fry the onions, peppers and garlic until softened.</p>' +
      '<p>Tip in courgettes, aubergines and tomatoes with the tomato purée, with chopped basil. Stir well, cover and cook for 5 mins.</p>' +
      '<p>Mount the first layer of lasaña pasta at the bottom of a pyrex and cover it with the sauce. Built the layers until it´s over and put it in the oven until the pasta is done.</p>',
      picture:'img3.jpg'
    },
    { //OBJECT RECIPE 4
      ingredients: ['2', '11', '1'],
      mealplan: 'Breakfast',
      name: 'Pancakes',
      preparation: '<p>In a medium bowl, whisk together milk, butter (or oil), and egg. Add flour, baking soda and sugar to milk mixture; whisk until just moistened (do not overmix; a few small lumps are fine).</p>' +
      '<p>Add the dough to a pan heat with butter. When bubbles come out in the surface, turn the pancake until goldener in both sides.</p>' +
      '<p>Ready to serve with whatevere you fancy,salty or sweet!</p>',
      picture:'img4.jpg'
    },
    { //OBJECT RECIPE 5
      ingredients: ['1', '12', '13'],
      mealplan: 'Breakfast',
      name: 'Black beans & scrambled egg tacos',
      preparation: '<p>Heat oil in a large skillet on medium-high heat. Cook onion and garlic until softened. Stir in beans, salsa and cumin; reduce heat to medium-low.</p>' +
      '<p>Simmer bean mixture, stirring occasionally, for 3 to 5 minutes or until warmed through and slightly thickened.</p>' +
      '<p>Remove skillet from heat, stir in lime juice and cover to keep warm.</p>',
      picture:'img5.jpg'
    },
    { //OBJECT RECIPE 6
      ingredients: ['3', '11'],
      mealplan: 'Dinner',
      name: 'Potatoes purée',
      preparation: '<p>Bring a pot of salted water to a boil. Add potatoes cut in squares and cook until tender.</p>' +
      '<p>In a small saucepan heat butter and milk over low heat until butter is melted. Using a potato masher or electric beater, slowly blend milk mixture into potatoes until smooth and creamy.</p>' +
      '<p>Season with salt and pepper to taste and ready!.</p>',
      picture:'img6.jpg'
    },
    { //OBJECT RECIPE 7
      ingredients: ['3', '6', '8','15'],
      mealplan: 'Lunch',
      name: 'Grilled Salmon with Cilantro Sauce',
      preparation: '<p>Lightly grease one side of a large sheet of aluminum foil. Place salmon on the greased side of foil.</p>' +
      '<p>Melt the butter in a saucepan over medium heat. Remove from heat, and mix in cilantro and jalapeno. When cilantro is wilted, drizzle butter mixture over the salmon...</p>',
      picture:'img7.jpg'
    },
    { //OBJECT RECIPE 8
      ingredients: ['1', '4', '16'],
      mealplan: 'Lunch',
      name: 'Pizza',
      preparation: '<p>Pizza dough is a yeasted dough which requires active dry yeast.</p>' +
      '<p>Add tomato sauce mixed with oregano on the dought, and add the ingredients that you fancy, covering it with cheese, ideally mozzarella.</p>' +
      '<p>Put your pizza in the oven until cheese is melted and dought crispy.</p>',
      picture:'img8.jpg'
    },

    { //OBJECT RECIPE 9
      ingredients: ['13', '16'],
      mealplan: 'Lunch',
      name: '<p>Quinoa and Black Beans',
      preparation: '<p>Mix quinoa into onion mixture and cover with vegetable broth,</p>' +
      '<p>season with cumin, cayenne pepper, salt, and pepper. Bring the mixture to a boil. Cover, reduce heat, and simmer until quinoa is tender and broth is absorbed, about 20 minutes.</p>',
      picture:'img9.jpg'
    },
    { //OBJECT RECIPE 10
      ingredients: ['1', '2', '11'],
      mealplan: 'Lunch',
      name: 'Grandmother´s Buttermilk Cornbread',
      preparation: '<p>Melt butter in large skillet. Remove from heat and stir in sugar.</p>' +
      '<p>Quickly add eggs and beat until well blended. Combine buttermilk with baking soda and stir into mixture in pan. Stir in cornmeal, flour, and salt until well blended and few lumps remain. </p>' +
      '<p>Pour batter into the prepared pan...</p>',
      picture:'img10.jpg'
    },
    { //OBJECT RECIPE 11
      ingredients: ['4', '6', '14'],
      mealplan: 'Lunch',
      name: 'Chopped Chickpeas Salad',
      preparation: '<p>Canned chickpeas are our pick for convenience, but you can also cook up a batch of dried beans, if you like.</p>' +
      '<p>Chopped greens: We´re partial to crunchy romaine, spicy arugula, or crisp red cabbage. You can even toss in some fresh herbs.Red onion: This brings a little bit of sweetness and a little bit of bite.</p>' +
      '<p>Rinse them under cold water if you want a milder flavor.</p>',
      picture:'img11.jpg'
    },
    { //OBJECT RECIPE 12
      ingredients: ['4', '12', '16'],
      mealplan: 'lunch',
      name: 'Tomato-Cheese toast',
      preparation: '<p>Take a piece of bread and fill it with tomato and any other ingredient you fancy have in your fridge.</p>' +
      '<p>Cover it with cheese and put it in the oven until the bread is toasted and the cheese is melted.</p>',
      picture:'img12.jpg'
    },
    { //OBJECT RECIPE 13
      ingredients: ['17', '18', '15', '4'],
      mealplan: 'Lunch',
      name: 'Cous-cous',
      preparation: '<p>Put a small cup of water to boil, adding spices that you fancy, salt, pepper, olive oil and a hint of cinnamon.</p>' +
      '<p>Once it´s boiling, add the same cup with couscous, take it out of the fire and cover until couscous absorbs the water.</p>' +
      '<p>You can add whatever you want to this, like salmon, mushrooms, or tomatoes.</p>',
      picture:'img13.jpg'
    },
    { //OBJECT RECIPE 14
      ingredients: ['4', '6', '8', '13', '19', '20'],
      mealplan: 'Lunch',
      name: 'Chili-sin-Carne',
      preparation: '<p>Heat the oil in a pan and fry the onions, red peppers and garlic until softened. </p>' +
      '<p>Tip in a can of black beans and chili flakes, and add tomatoes puree (or fresh tomatoes), together with some other spices such as black pepper, curry and cinnamon.</p>' +
      '<p>Separately, while the beans and tomatoes are low-fire cooking, boil rice in slightly salted water with a bit of oil.</p>' +
      '<p>Once ready serve them together</p>',
      picture:'img-not-ready-2.jpg'
    },
    { //OBJECT RECIPE 15
      ingredients: ['3', '8', '21'],
      mealplan: 'Lunch',
      name: 'Potatoes with green peas',
      preparation: '<p>Cover the bottom of a pot with olive oil fry the garlics until browned and a bay leave.</p>' +
      '<p>Tip in the potatoes cut in big squares and stir constantly. Add the green peas (optional) and stir again.</p>' +
      '<p>Cover it with water and leave it boils until potatoes are soft and most of the water has gone.</p>',
      picture:'img-not-ready.jpg'
    },
    { //OBJECT RECIPE 16
      ingredients: ['1', '2', '11'],
      mealplan: 'Breakfast',
      name: 'Creppes',
      preparation: '<p>With the measure of a cup, add one cup and a half of flour, one cup of milk, a spoon of sugar and a hint of salt (and cinnamon if you fancy) to a blender and mix.</p>' +
      '<p>Add some butter to a pan and bring it to heat. Pour the batter until coats the surface of the pan evenly.</p>' +
      '<p>Cook the crepe until the bottom is light brown, turn and cook the other side.</p>' +
      '<p>Serve with whatever you have! Salty or sweet.</p>',
      picture:'img-not-ready-2.jpg'
    },
    { //OBJECT RECIPE 17
      ingredients: ['4', '6', '8', '20', '22'],
      mealplan: 'Lunch',
      name: 'Lentils soup',
      preparation: '<p>Add in hot water lentils half an hour before. <br>Add one tomato, one green pepper, one onion, half garlic head, with parsley, oil, salt and two spoons of red paprika. You can add some spicy chorizo if you fancy.</p>' +
      '<p>Cover it with water and leave it cooking for 20-30 minutes in an open pot.</p>',
      picture:'img-not-ready.jpg'
    },
    { //OBJECT RECIPE 18
      ingredients: ['3', '4', '6', '8', '23', '24', '25'],
      mealplan: 'Dinner',
      name: 'Fish soup',
      preparation: '<p>Cut all the vegetables (tomato, onion, garlic, celery, carrots and potatoes), add them to a pot and cover with water, together with a spoon of olive oil, salt and pepper.</p>' +
      '<p>Boil for around 20 minutes, until carrots and potatoes are softened, and then add the fish.</p>' +
      '<p>Boil for another 5 or 10 minutes until cooked.</p>',
      picture:'img-not-ready.jpg'
    },
    { //OBJECT RECIPE 19
      ingredients: ['1', '12'],
      mealplan: 'Dinner',
      name: 'Soft-boiled Eggs',
      preparation: '<p>Some times you are not in the mood to have a strong dinner or to spend a lot of time preparing something.</p>' +
      '<p>Tip a couple of eggs in boiling water for 5 minutes. Serve them cut with a hint of salt and pepper and a spoon of olive oil.</p>' +
      '<p>Add some toasted bread if you fancy and that \'\ it!</p>',
      picture:'img-not-ready.jpg'
    }
  ];

  return {
    dbIngredients: dbIngredients,
    IDs: IDs,
    dbRecipes: dbRecipes
  };

}
