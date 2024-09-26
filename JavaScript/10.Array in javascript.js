//Array :- array is an object that stores a collection of elements.Arrays can store elements of any data type, including other arrays, and can be dynamically resized.

let myArray = ["iPhone12","iPhone13","iPhone14","iPhone15","iPhone16","iPhone14 Pro Max"];

//Build-In Methods:-
//1.length: returns the number of elements in the array.
console.log(myArray.length);

//2.push(): adds one or more elements to the end of the array.
myArray.push("iphone 15 plus","iphone 15 Pro Max");
console.log(myArray);

//3.pop(): removes the last element from the array and returns it.
myArray.pop();
console.log(myArray);

//4.shift(): removes the first element from the array and returns it.
myArray.shift();
console.log(myArray);

//5.unshift(): adds one or more elements to the beginning of the array.
myArray.unshift("1st iphone");
console.log(myArray);

//6.splice(): removes elements from the array and/or adds new elements.

myArray.splice(3,1,"iPhone 15 Plus")
console.log(myArray);

//7.concat(): joins two or more arrays and returns a new array.

let newarray = ["samsung S10","samsung S20","samsung S21","samsung S24"];
let ans = myArray.concat(newarray);

console.log(ans);

//8.slice(): extracts a portion of an array and returns a new array.
let slicearray = myArray.slice(1,5);                 //[1,5) :-- 1 is included and 5 is excluded.

console.log(slicearray);

//9.indexOf(): returns the index of the first occurrence of a specified element in the array.

console.log(ans.indexOf("samsung S10"));

//10.forEach(): calls a function for each element in the array. (its behave like loop but doesnot return anything)

const movies = ["GOAT","KGF","3idiots","devratha"];
movies.forEach((i)=>console.log(i));

//11.map(): creates a new array with the results of calling a function for each element in the array. (Its return new array)
movies.map((i)=>console.log(i));

movies.map((movies,index,arr)=>console.log(movies,index,arr));

//12.filter(): creates a new array with all elements that pass a test implemented by a function.

const numbers = [1,2,3,4,5,6,7,8,9];

var even = numbers.filter((i)=>i%2===0);

console.log(even);

//13.reduce(): applies a function to each element in the array to reduce the array to a single value.

var sum = numbers.reduce((prevalue,num)=>prevalue+num,0);

console.log(sum);

