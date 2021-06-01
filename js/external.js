"use strict";

//..insert the java code

console.log("Hello World!");
console.log("Hello Polaris!");
console.log("Hello from external Javascript");

alert("Welcome to my Website!");

// the following line will show the OK/CANCEL confirm dialog
// var confirmed = confirm('Are you sure you want to do XYZ?');
//console.log(confirmed); // will be either true or false

let color;
color = prompt('Whats your favorite color? ')
let message;
message = "Great! " + color + " is my favorite color too!"
alert(message);

console.log('The user entered: ' + color);
console.log(typeof(color));

// You have rented some movies for your kids: The little mermaid (for 3 days),
//Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going
//to like it).
//If price for a movie per day is $3, how much will you have to pay?

alert ("The price for the movie is " + (3+5+1)*3)

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,' +
//' they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.' +
//' How much will you receive in payment for this week?' +
//' You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var fbPay = (350 * 10);
var gPay = (400 * 6);
var amZ = (380 * 4);
var total = (fbPay + gPay + amZ);

alert("You have earned " + fbPay + " dollars at Facebook!");
alert("You have earned " + gPay + " dollars at Google!");
alert("You have earned " + amZ + " dollars at Amazon!");
alert("In total you made " + total + " dollars in total!");


const full = confirm("Is he class full? ");
const conflict = confirm("Is there a conflict ");
alert("You can enroll in class " + (!full && !conflict));

let premium =confirm("Are you a premium member? ")
let quantity = Number(prompt("How many items did you buy "));
let expired = confirm("Is the coupon expired? ")

alert("You can get the discount " + ((!expired) && (premium || (quantity > 2))));

var username = "codeup"
var password = "notcodeup "
var contains_no_white_space = password === password.trim() && username === username.trim();

var password_is_five_characters = password.length >= 5;
var password_contains_username = !password.includes(username);
var username_less_than_20_chars = username.length < 20;

console.log(password_is_five_characters);
console.log(password_contains_username);
console.log(username_less_than_20_chars);
console.log(contains_no_white_space);