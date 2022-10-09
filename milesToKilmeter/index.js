// create function converter miles to kilometer

function mileTokms(){
let userMile = document.getElementById("miles_user").value;
 converter = userMile*1.609344;

// console.log(result);
// document.write(converter);
// console.log(userMile)
alert("the distance of " + userMile + "kms is equal to " + converter + " miles")
console.log(converter)
document.getElementsByClassName("answer").innerHTML=converter;

};
