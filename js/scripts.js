//Business Logic
function Pizza() {
  this.crust = "";
  this.toppings = [];
  this.size = "";
};

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

Pizza.prototype.removeTopping = function (topping) {
  this.toppings.splice(this.toppings.indexOf(topping), 1);
};

Pizza.prototype.updateSize = function (pizzaSize) {
  this.size = pizzaSize;
};

Pizza.prototype.updateSize = function (crustType) {
  this.crust = crustType;
};

Pizza.prototype.pizzaPrice = function () {
  let basePrice = 5;
  let sizeMultiplier = 1;
  let crustMultiplier = 1;
  let toppingsPrice = 0;
  let pizzaPrice = 0;

  if (this.size === "medium") {
    sizeMultiplier = 2;
  } else if (this.size === "large") {
    sizeMultiplier = 3;
  } else if (this.size === "extra-large") {
    sizeMultiplier = 4;
  }

  if (this.crust === "thin") {
    crustMultiplier = 1.2;
  } else if (this.crust === "deep-dish") {
    sizeMultiplier = 1.5;
  }

  toppingsPrice = this.toppings.length * 0.75;
  pizzaPrice = (basePrice + toppingsPrice) * sizeMultiplier * crustMultiplier;
  return pizzaPrice;
};

function Order() {
  this.cart = [];
  this.price = 0;
  this.deliveryMethod = "";
};

Order.prototype.addPizza = function (pizza) {
  this.cart.push(pizza);
};

Order.prototype.cartPrice = function () {
  let cartPrice = 0;
  this.cart.forEach(function (element) {
    cartPrice += element.pizzaPrice();
  });
  if (this.deliveryMethod === "delivery") {
    cartPrice += 5;
  }
  return cartPrice;
};

Order.prototype.updateDelivery = function (deliveryType) {
  this.deliveryMethod = deliveryType;
};

Order.prototype.reset = function () {
  this.cart = [];
  this.price = 0;
};

//UI Logic

window.addEventListener("load", function () {
  const form = document.getElementById("orderForm");
  form.addEventListener("submit", cartHandler);
});

//test cases
let myPizza = new Pizza();
myPizza.addTopping("anchovies");
myPizza.addTopping("anchovies");
myPizza.addTopping("Peppers");
myPizza.updateSize("extra-large");
let myOrder = new Order();
myOrder.addPizza(myPizza);
myOrder.addPizza(myPizza);
