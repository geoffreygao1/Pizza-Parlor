# Pizza-Parlor
Independent Project: Object Oriented Progamming

# Test Cases

Describe: Pizza()

Test: It should return a Pizza Object with two properties for toppings and size
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.addTopping(topping)

Test: It should add a topping to the array of toppings in the Pizza Object
Code: myPizza.addTopping("pepperoni"); 
Expected Output: Pizza { toppings: ["anchovies", "pineapple", "pepperoni"], size: "medium" }

Describe: Pizza.removeTopping(topping)

Test: It should remove a topping to the array of toppings in the Pizza Object
Code: myPizza.removeTopping("pepperoni"); 
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.updateSize(size)

Test: It should change the size peoperty of the Pizza Object based on user input
Code: myPizza.updateSize("large"); 
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "large" }

Describe: Pizza.pizzaPrice()

Test: It should return the price of the pizza based on the toppings and size
Code: myPizza.pizzaPrice();
Expected Output: 25;

Describe: Order()

Test: It should return an Order Object with two properties for cart and price
Code: const myOrder = new Order(cart: [], price: 0);
Expected Output: myOrder = Order { cart: [], price: 0 }

Describe: Order.addPizza(Pizza)

Test: It should add a Pizza Object to the array in the cart property
Code: myOrder.addPizza(myPizza)
Expected Output: myOrder = Order { cart: [myPizza], price: 0 }

Describe: Order.cartPrice()

Test: It should update and return the total cart price based on the objects in the pizza cart
Code: myOrder.cartPrice();
Expected Output: 50;