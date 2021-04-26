function randomPizza() {
    var style = ["Deep Dish", "Flat Bread", "Hand Tossed"];
    var sauce = ["Traditional", "Marinara", "White"];
    var cheese = ["Mozzarella", "Feta", "Parmesan"];
    var toppings = ["Pepperoni", "Spinach", "Onions"];

    var yourStyle = Math.floor(Math.random() * (style.length)); 
    var yourSauce = Math.floor(Math.random() * (sauce.length)); 
    var yourCheese = Math.floor(Math.random() * (cheese.length)); 
    var yourToppings = Math.floor(Math.random() * (toppings.length));

    return style[yourStyle] + ", " + sauce[yourSauce] + ", " + cheese[yourCheese] + ", " + toppings[yourToppings];

}
var pizzaStyle = randomPizza();
console.log(pizzaStyle);