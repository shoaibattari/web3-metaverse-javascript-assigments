/// Declare a variable called age & assign to it your age. Show
/// your age in an alert box.

let age;
age = prompt("enter your age");
alert("i am " + age + " years old");


/// Declare & initialize a variable to keep track of how many
///times a visitor has visited a web page. Show his/her
///number of visits on your web page. For example: “You
///have visited this site N times”.

let visit_time = 400;
alert("you have visited this site "+ visit_time + " times");


///Declare a variable called birthYear & assign to it your
///birth year. Show the following message in your browser

let birthYear = +prompt("enter your birth year");
let type_chk = (typeof birthYear);
document.write("my birth year is " + birthYear);
document.write("</br>")
document.write("data type of my declared variable is " +  type_chk);




document.write("</br>");

///A visitor visits an online clothing store
///www.xyzClothing.com . Write a script to store in variables
///the following information:
///a. Visitor’s name
///b. Product title
///c. Quantity i.e. how many products a visitor wants to
///order
///Show the following message in your browser: “John
///Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


let v_name = "shoaib"
let prd_name = "T-shirt(s)";
let qty = 5;
document.write(v_name.bold() +" ordered "+ qty+" " +prd_name.bold() +" on XYZ Clothing store");