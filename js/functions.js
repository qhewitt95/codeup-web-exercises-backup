"use strict";

/**

 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
   return "Hello, " + name + "!";
}

/**

 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var name = "Quentin";
var helloMessage = sayHello(name)
console.log(helloMessage);

/**

 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Quentin"
console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**

 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(random) {
   if(random === 2) {
      console.log("True ")
      return true;
   }
   else{
     console.log("False ")
      return false;
   }
}
isTwo(random);
console.log("Random number is: " + random.toString());


/**

 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
var num1 =(.20);
var num2 = (20);
var num3 = (0.25);
var num4 = (25.50);
var num5 = (0.15);
var num6 = (33.42);
var total = (num1 * num2);
var total2 = (num3 * num4);
var total3 = (num5 * num6);

 function calculateTip () {
    return total
}
    console.log(calculateTip());

 function calculateTip2 () {
    return total2;
}
console.log(calculateTip2())

function calculateTip3() {
     return total3;
}
console.log(calculateTip3())

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
var billTotalMessage;
billTotalMessage = alert("Total bill is $100")
var message;
message = alert("You will tip 20% ")
alert(message);
var tipAmount = message;
var originalPrice = 100;
var discountPrice = .2;
var newTotal = (originalPrice * discountPrice);
var tipMessage;
tipMessage = alert("You should tip $20");


// console.log('The user entered: ' + message);

function calcTip () {
    originalPrice * tipAmount;
    let number = newTotal;
    return number;
}
console.log("You will tip $" + calcTip());

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
