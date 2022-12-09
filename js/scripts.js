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
  } else if (this.crust === "deep dish") {
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
  this.price = cartPrice;
};

// Order.prototype.updateDelivery = function (deliveryType) {
//   this.deliveryMethod = deliveryType;
// };

Order.prototype.clearAll = function () {
  this.cart = [];
  this.price = 0;
  this.deliveryMethod = "";
};

//UI Logic

//A global variable is being used in lieu of a sever
let order = new Order();

function cartHandler(event) {
  event.preventDefault();
  const form = document.getElementById("pizzaSelect");
  const inputCrust = document.querySelector('input[name="crustType"]:checked').value;
  const inputSize = document.getElementById('pizzaSize').value;
  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  const deliveryType = document.getElementById('deliveryType').value;

  let pizza = new Pizza();
  //Updates Pizza Object from user input
  let toppingsList = [];
  for (let i = 0; i < checkboxes.length; i++) {
    toppingsList.push(checkboxes[i].value);
  };
  pizza.crust = inputCrust;
  pizza.size = inputSize;
  pizza.toppings = toppingsList;
  //Adds to order
  order.deliveryMethod = deliveryType;
  order.addPizza(pizza);
  order.cartPrice();
  updateCart();
  //clear fields
  form.reset();
};

function updateCart() {
  const cart = document.getElementById("cartContents");
  const pizzaList = document.getElementById("pizzaList");
  const total = document.getElementById("total");
  let deliveryFee = document.getElementById("deliveryFee");

  deliveryFee.innerText = "";
  pizzaList.innerText = "";
  total.innerText = "";

  order.cart.forEach(function (element) {
    let liPizza = document.createElement("li");
    toppingsDesc = "";
    for (let i = 0; i < element.toppings.length; i++) {
      if (element.toppings.length === 1) {
        toppingsDesc += "with " + element.toppings[i];
      } else {
        if (i === element.toppings.length - 1) {
          toppingsDesc += " and " + element.toppings[i];
        } else if (i === 0) {
          toppingsDesc += "with " + element.toppings[i] + " ";
        } else {
          toppingsDesc += element.toppings[i] + " ";
        }
      }
    }
    let pizzaDesc = "One " + element.size + " " + element.crust + " crust pizza " + toppingsDesc + " ($" + element.pizzaPrice().toFixed(2) + ")";
    liPizza.append(pizzaDesc);
    pizzaList.append(liPizza);
  });

  if (order.deliveryMethod === "delivery") {
    deliveryFee.append("Delivery Fee: $5");
  }

  total.append("$" + order.price.toFixed(2));
};

function cartResetHandler() {
  console.log("button clicked");
  order.clearAll();
  updateCart();
};

window.addEventListener("load", function () {
  const form = document.getElementById("orderForm");
  const cartReset = document.getElementById("cartReset");
  form.addEventListener("submit", cartHandler);
  cartReset.addEventListener("click", cartResetHandler);
});
