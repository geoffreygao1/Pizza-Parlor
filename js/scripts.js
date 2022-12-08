//Business Logic
function Pizza() {
  this.crust = "";
  this.toppings = [];
  this.size = "";
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

// Order.prototype.updateDelivery = function (deliveryType) {
//   this.deliveryMethod = deliveryType;
// };

Order.prototype.reset = function () {
  this.cart = [];
  this.price = 0;
};

//UI Logic

//A global variable is being used in lieu of a sever
let order = new Order();

function cartHandler(event) {
  event.preventDefault();
  const inputCrust = document.querySelector('input[name="crustType"]:checked').value;
  const inputSize = document.getElementById('pizzaSize').value;
  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

  let toppingsList = [];
  for (let i = 0; i < checkboxes.length; i++) {
    toppingsList.push(checkboxes[i].value);
  };

  let pizza = new Pizza();
  pizza.crust = inputCrust;
  pizza.size = inputSize;
  pizza.toppings = toppingsList;
  order.addPizza(pizza);
}

window.addEventListener("load", function () {
  const form = document.getElementById("orderForm");

  let deliveryType = document.getElementById("deliveryType");
  order.deliveryMethod = deliveryType.value;

  form.addEventListener("submit", cartHandler);
});
