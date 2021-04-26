var name = "link";
var weapons = ["sword", "boomerang"]

//If I wanted to get the boomerang, I'd have to loop through the array and look for the index where the value == "boomerang"

// Objects - Provides a descriptive key. 
var link = {
    // Key / Value pairs
    "name" : "Link",
    "weapons" : ["master Sword", "Bommerang"],
    "armor" : "Green Tunic",
    "attack" : function() {
        console.log(this.name + " dons their " + this.armor + " and leaps into battle!")
        console.log("Link throws boomerang at your face!");
    }

}


var zelda = {
    "name" : "Zelda",
    "weapons" : "Chain Thing",
    "armor" : "Dress"
}
link.attack();
