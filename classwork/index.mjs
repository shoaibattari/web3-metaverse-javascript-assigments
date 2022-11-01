 const sub = (a,b)=>{
    return a-b;
 }
 const result1 = sub(5,4);
 console.log(result1);

 const subt = (c,d)=> c-d;
 const result2 = subt(5,4);
 console.log(result2);


const greeet = (name)=> console.log((`hello ${name}`));
const result3 = greeet("saleem");
console.log(result3);
console.log(greeet("Sattar"));

const arr = [1,2,3,4,];
const arr2 = arr
arr2[2] = 5; // both array value change
const arr3 = [...arr]
arr3[2]=10; // both array not value changes
console.log(arr);
console.log(arr2);
console.log(arr3);

// this function return array 
const add=(...params)=>{
console.log(params);};
const result = add(1,2,3,4,5);

// this function auto call
(function(){
    console.log("hello world");
})();


// function dosum(){
//     console.log("hellooooo");
// dosum();
// }
// dosum()


function dosumthing(num){
    console.log(`num is this iteration is ` + num);
    if (num > 0) {
        dosumthing(--num);
    }
}
dosumthing(5);

// callback function
const greett = (name) =>{
        console.log(`hello ${name}`);
}
const sayhello = (greeting, name)=>{
    greeting(name);
};
sayhello(greett, "ali")


// after some auto run this function
const greet = () =>{
        console.log(`hello ALi`);
}
setTimeout(greet,1000)
