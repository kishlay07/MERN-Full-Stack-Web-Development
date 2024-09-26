//Manipulating objects and arrays.

//1. Accessing properties: Objects and arrays can be accessed using their properties or keys. For objects, we can use the dot notation or the square bracket notation to access its properties. For arrays, you can use the index notation.
const myCars = ["Fortuner","Thar","MG","audi","range rover"];
const person = {
    "name":"KSR",
    "age": 24,
    "Gender":"Male",
    "Ph.no":9155484675,
    "address":{
        "city":"Patna",
        "Street":"kankarbagh",
        "State":'Bihar'
    },
    "hobbies": ["Cricket","Reading","Writting","Cricket","Riding"]
};

console.log(person.Gender);
console.log(person['address']['Street']);

console.log(myCars[1]);
console.log(person.hobbies[0]);

//2. Adding properties: You can add new properties to an object or elements to an array using the dot notation or the square bracket notation.

person.skils = ["C","C++","Java","JS","SQL","HTML","CSS"];
console.log(person);

//3. Deleting properties: You can delete properties from an object using the delete keyword.

delete person.age;
console.log(person);

//4. Looping through objects and arrays: 

for(let key in person){
    console.log(`${key} is ${person[key]}`);
}