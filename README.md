# Pizza-Parlor
Independent Project: Object Oriented Progamming

# Test Cases

Describe: Pizza()

Test: It should return a Pizza Object with three properties for crust, toppings, and size
Code: const myPizza = new Pizza("thin", ["anchovies", "pineapple"], "medium");
Expected Output: Pizza { crust: "thin", toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.addTopping(topping)

Test: It should add a topping to the array of toppings in the Pizza Object
Code: myPizza.addTopping("pepperoni"); 
Expected Output: Pizza { crust: "thin", toppings: ["anchovies", "pineapple", "pepperoni"], size: "medium" }

Describe: Pizza.removeTopping(topping)

Test: It should remove a topping to the array of toppings in the Pizza Object
Code: myPizza.removeTopping("pepperoni"); 
Expected Output: Pizza { crust: "thin", toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.updateSize(size)

Test: It should change the size peoperty of the Pizza Object based on user input
Code: myPizza.updateSize("large"); 
Expected Output: Pizza { crust: "thin", toppings: ["anchovies", "pineapple"], size: "large" }

Describe: Pizza.updateCrust(size)

Test: It should change the size peoperty of the Pizza Object based on user input
Code: myPizza.updateCrust("deep-dish"); 
Expected Output: Pizza { crust: "deep-dish",toppings: ["anchovies", "pineapple"], size: "large" }

Describe: Pizza.pizzaPrice()

Test: It should return the price of the pizza based on the crust, toppings, and size. The base pizza cost is $5, each topping costs $0.75, and the size and crust type multiplies the sum of the base price and toppings. Multipliers are small: 1, medium: 2, large: 3, extra-large: 4. For crust, they are thin: 1.2, classic: 1, deep-dish: 1.5
Code: myPizza.pizzaPrice();
Expected Output: 19.5;

Describe: Order()

Test: It should return an Order Object with two properties for cart and price
Code: const myOrder = new Order(cart: [], price: 0);
Expected Output: myOrder = Order { cart: [], price: 0 }

Describe: Order.addPizza(Pizza)

Test: It should add a Pizza Object to the array in the cart property
Code: myOrder.addPizza(myPizza)
Expected Output: myOrder = Order { cart: [myPizza], price: 0 }

Describe: Order.cartPrice()

Test: It should update and return the total cart price based on the pizza objects in the cart as well as the delivery method. Delivery adds $5 to the price
Code: myOrder.cartPrice();
Expected Output: 13;

Describe: Order.reset()

Test: It should reset the order to a blank order
Code: myOrder.reset());
Expected Output: myOrder = Order { cart: [], price: 0 }