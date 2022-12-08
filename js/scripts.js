function Pizza() {
  this.toppings = [];
  this.size = "";
};

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

Pizza.prototype.removeTopping = function (topping) {
  this.toppings.splice(this.toppings.indexOf(topping), 1);
}

Pizza.prototype.updateSize = function (pizzaSize) {
  this.size = pizzaSize;
}

Pizza.prototype.pizzaPrice = function () {
  let basePrice = 5;
  let sizeMultiplier = 0;
  let toppingsPrice = 0;
  let pizzaPrice = 0;

  if (this.size === "small") {
    sizeMultiplier = 1;
  } else if (this.size === "medium") {
    sizeMultiplier = 2;
  } else if (this.size === "large") {
    sizeMultiplier = 3;
  } else if (this.size === "extra-large") {
    sizeMultiplier = 4;
    console.log("extra large")
  }

  toppingsPrice = this.toppings.length * 0.75;
  pizzaPrice = (basePrice + toppingsPrice) * sizeMultiplier;
  console.log(pizzaPrice);
}

//test cases
let myPizza = new Pizza();
myPizza.addTopping("anchovies");
myPizza.addTopping("anchovies");
myPizza.addTopping("Peppers");
myPizza.updateSize("extra-large");