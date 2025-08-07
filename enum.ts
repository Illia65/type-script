// enum only can be string or number

enum TrafficLight {
  RED,
  YELLOW,
  GREEN,
}

let ligth = TrafficLight.RED;
if (ligth === TrafficLight.RED) {
  // console.log("Stop");
}

enum DrinkSize {
  SMALL,
  MEDIUM,
  LARGE,
}

function getDrinkPrice(size: DrinkSize) {
  if (size === DrinkSize.SMALL) return 100;
  if (size === DrinkSize.MEDIUM) return 250;
  if (size === DrinkSize.LARGE) return 600;
  return 0;
}

let myDrinkSize = DrinkSize.LARGE;
let price = getDrinkPrice(myDrinkSize);

console.log(price);
