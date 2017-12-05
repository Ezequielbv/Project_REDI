window.REDI = window.REDI || {};

REDI.mealTime = function () {
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
};
