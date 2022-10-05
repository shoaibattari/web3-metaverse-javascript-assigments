// Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.

let num1 = 5;
let num2 = 20;
let add = num1 + num2;
document.write("sum of "+ num1+ "and "+ num2+ " is "+ add);
document.write("</br>")

// 2. Repeat task1 for subtraction, multiplication, division modulus.

let num3 = 25;
let num4 = 20;
let subt = num3 - num4;
document.write("minus of " + num3 + "and " + num4 +" is " + subt);
document.write("</br>")


let num5 = 5;
let num6 = 5;
let multiplication = num5*num6;
document.write("multiplication of " + num5 + "and " + num6 +" is " + multiplication);
document.write("</br>")

let num7= 25;
let num8 = 5;
let division = num7/num8;
document.write("division of " + num7 + "and " + num8 +" is " + division);

document.write("<br>")


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.

document.write("<br>")

let var1
document.write("value after variable declaration is: " + var1  +"<br>")  ;
var1 = 5;
document.write("initial value is: " + var1 +"<br>");
var1 = var1+1;
document.write("value after incerement is: " + var1 +"<br>")  ;
var1 = var1+7;
document.write("value after addition is: " + var1 +"<br>")  ;
var1 = var1-1;
document.write("value after decrement is: " + var1 +"<br>")  ;
var1 = var1/4;
document.write("value after divide is: " + var1 +"<br>")  ;

document.write("<br>");    
document.write("the reminder is: 0" + "<br>")  ;


// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output:

let ticketPrice = 600;
let qty = 5;
let bill = ticketPrice*qty;
document.write("total cost to buy " + qty + "ticket a movie is " + bill +"PKR");

document.write("<br>")
document.write("<br>")
document.write("<br>")


// 5. Write a script to display multiplication table of any 
// number in your browser. E.g
document.write("table of 5  <br>")
let table = 5;
let time = 10;
for (let i =1;i<=time; i++){
    
    document.write("5"  + " X " + i + " = " + table*i + "<br>");
}