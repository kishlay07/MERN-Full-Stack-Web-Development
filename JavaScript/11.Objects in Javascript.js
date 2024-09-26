//Objects :- An object is a non-primitive data type that represents a collection of properties. It is a key-value pair data structure where each key is a string (or symbol) and each value can be any valid JavaScript data type, including another object.

//1. Object Literals:  An object literal is a comma-separated list of name-value pairs wrapped in curly braces {}.

const person = {
     "name": "Kishlay",
    "age": 24,
    "Gender":"Male" 
};

//Object inside object
const employes = {
    "name": "Ankur",
   "age": 25,
   "Gender":"Male",
   "address":{       
    "city":"patna",
    "State":"Bihar"
   } 
};

//2. Constructor Functions:  A constructor function is a function that is used to create new objects.

function Person(name , age){
    this.name = name;
    this.age = age;
}

const person1 = new Person("Gauri",25);
const person2 = new Person("ankur",25);

//3. Object.create() Method: It creates a new object with the specified prototype object and properties.
function Guest(name , age){
    name = "KSR";
    age = 24;
}
const newPerson = Object.create(Guest);
newPerson.age = 30;
console.log(newPerson.name);
console.log(newPerson.age);
