//Concatenation and Interpolation 
var price = 5000
var itemName = "Boltu"
var messageToPrint = "The price for your " +itemName+ " is " +price+ " dollars"  //concatenation 
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //Interpolation
console.log(messageToPrint)
console.log(messageToPrint2)