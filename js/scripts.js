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
//test cases
let myPizza = new Pizza();
myPizza.addTopping("anchovies");
myPizza.addTopping("anchovies");
myPizza.addTopping("Peppers");
