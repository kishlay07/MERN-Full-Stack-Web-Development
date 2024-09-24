//1.Primitive Data Types: Primitive values are immutable, meaning their values cannot be changed once they are created.
                        //Primitive values are passed by value, meaning a copy of the value is created when it is passed to a function or assigned to a variable.
//Numbers
let a = 123;

//String
let b = "Kishlay";
let c = "1234";

//Boolean
let male = true;
console.log(typeof male);

//Undefined
let x;
console.log(typeof x);

//Null
let y = null;
console.log(y);
console.log(typeof y);


//2.Reference Data types: 
//Object:
let car = {
    name: "Thar",
    Model: 2024,
    Type: "Disel"
};

console.log(typeof car);
console.log(car);

//Arrays:
const num = [1,2,3,4,5,6,7];
console.log(typeof num);



 /*String: Text enclosed in quotes.
Number: Integers or floating-point numbers.
Boolean: True or false values.
Undefined: Variables declared but not assigned a value.
Null: Represents "no value."
Object: Non-primitive type for storing collections of data.
Array: A special type of object for storing lists of values.*/