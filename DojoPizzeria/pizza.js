function pizzaOven(style, sauce, cheese, toppings) {
    var pizza = {};
    pizza.style = style;
    pizza.sauce = sauce;
    pizza.cheese = cheese; 
    pizza.toppings = toppings;
    return pizza;
}
var pizzaDeepDish = pizzaOven("Deep Dish", "Traditional", "Mozzarella", ["Pepperoni", "Sausage"])
var pizzaHandTossed = pizzaOven("Hand Tossed", "Marinara", ["Mozzarella", "Feta"], ["Mushrooms", "Olives", "Onions"]);
var pizzaMeatKong = pizzaOven("Stuffed Crust", "Traditional", "Mozarella", ["Pepperoni", "Sausage", "Ham", "Bacon"])
var pizzaFlatBread = pizzaOven("Flatbread", "Marinara", "Mozarella", ["Spinach", "Onions"])
console.log(pizzaDeepDish);
console.log(pizzaHandTossed);
console.log(pizzaMeatKong);
console.log(pizzaFlatBread); 

