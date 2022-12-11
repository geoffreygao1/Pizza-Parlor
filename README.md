# Pizza-Parlor
Independent Project: Object Oriented Progamming

#### By _Geoffrey Gao_

#### _An application that will generate a cart for a pizza order_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _Bootstrap_
* _GIT and Github_
* _Object Oriented Programming_

## Description

_This website contains a form to construct a pizza and allows the user to generate a cart based on their pizza order. The price of the cart is generated from the pizza ingredients. The project demonstrates solid understanding of the new concepts from the Object Oriented Programming course including prototypes, constructors, and UI/Business Logic._

## Github Pages Link

[Click here](https://geoffreygao1.github.io/Pizza-Parlor/) to view the Github Pages website

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.html in your browser_

## Known Bugs

* _N/A_

## License

_MIT_

Copyright (c) _2022_ _Geoffrey Gao_


# Test Cases

#### Describe: Pizza()

Test: It should create a Pizza Object with three properties for crust, toppings, and size
Code: const myPizza = new Pizza();
Expected Output: Pizza { crust: "", toppings: [], size: "" }


#### Describe: Pizza.pizzaPrice()

Test: It should return the price of the pizza based on the crust, toppings, and size. The base pizza cost is $5, each topping costs $0.75, and the size and crust type multiplies the sum of the base price and toppings. Multipliers are small: 1, medium: 2, large: 3, extra-large: 4. For crust, they are thin: 1.2, classic: 1, deep-dish: 1.5
Code: myPizza.pizzaPrice();
Expected Output: 19.5;

#### Describe: Order()

Test: It should return an Order Object with three properties for cart price and delivery method
Code: const myOrder = new Order(cart: [], price: 0, deliveryMethod: "");
Expected Output: myOrder = Order { cart: [], price: 0, deliveryMethod: ""}

#### Describe: Order.addPizza(Pizza)

Test: It should add a Pizza Object to the array in the cart property
Code: myOrder.addPizza(myPizza)
Expected Output: myOrder = Order { cart: [myPizza], price: 0, deliveryMethod = "" }

#### Describe: Order.cartPrice()

Test: It should update and return the total cart price based on the pizza objects in the cart as well as the delivery method. Delivery adds $5 to the price
Code: myOrder.cartPrice();
Expected Output: 13;

#### Describe: Order.clearAll()

Test: It should reset the order to a blank order
Code: myOrder.clearAll());
Expected Output: myOrder = Order { cart: [], price: 0 , deliveryMethod = ""}

