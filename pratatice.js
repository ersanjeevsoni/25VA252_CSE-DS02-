

//function :- block of code , execute or perform a particuler task

//sync or async
//by deault sync mean in which order they are defind , in same order will be accessed

// normal function
/* function demo(){
    var num1=4;
    var num2=445;
    console.log(num1+num2);
}
demo(); */

// function with parameter

/* function demo(a,b){
    var num1=a;
    var num2=b;
    console.log(num1+num2);
}
let result=demo(4,5); */

//anonymous function - a function that does not have an identifier (name) associated with it. They are primarily used for short, one-time tasks and are often defined as function expressions or arrow functions. 


/* let cal=function demo(){
    var num1=43;
    var num2=445;
    console.log(num1+num2);
}
cal(); */


////anonymous function  as arrow function
/* let add=(a,b)=>{
    console.log(a*b);
}
add(4,6); */

//Immediately Invoked Function Expressions (IIFEs): An IIFE is a function that runs as soon as it is defined. This pattern is used to create a private scope and avoid polluting the global namespace.

/* (function() {
    console.log(8*8);
})();
 */
// call back function:- a function that is passed as an argument to another function, to be "called back" or executed at a later time

/* function add(callback){
    var num1 = 10;
    var num2 = 20;

    console.log(`First Value is ${num1}`);
    console.log(`Second Value is ${num2}`);

    var res = num1 + num2;

    callback(res);
}

function result(res){
    console.log("Result is " + res);
}

add(result); */ //result as an argument for add function

//setTimeout Callback Example

//setTimeout में हम एक function को delay के बाद execute करते हैं। यहाँ function callback होता है।
/* function greet(name){
    console.log("Hello " + name);
}
function processUser(callback){
    console.log("Processing user...");

setTimeout(function(){
        callback("Vikas");
    },2000);

}
processUser(greet); */

//Real API Callback Example (Simulation)

// जब हम server से data लाते हैं तो time लगता है। इसलिए callback use होता है।
/* function fetchData(callback){
    console.log("Fetching data from server...");

    setTimeout(function(){
        let data = {
            name:"Abhay",
            age:23,
            course:"BTech"
        };

        callback(data);
    },3000);
}

function displayData(user){
    console.log("User Name: " + user.name);
    console.log("Age: " + user.age);
    console.log("Course: " + user.course);
}

fetchData(displayData); */

function displayName(name){
    console.log("hello "+ name);
}

function demo1(cb){
    console.log("processing....");


setTimeout(function(){
    cb("vikas");
},2000);
}

demo1(displayName);