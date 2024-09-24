//for loop:
for(let i=0;i<=7;i++){
    console.log(i);
    
}

//while loop:
let i = 0;
while(i<=7){
    console.log(i);
    i++;
}

//do while loop: A do...while loop is similar to a while loop, but it executes the block of code at least once, even if the condition is false.

let a = 0;
do{
    console.log(a);
    a++;
}while(a<7)

//for in loop: A for...in loop is used to loop through the properties of an object.

let emp = {
    name: "Ankur",
    age:25,
    gender:"male"
};

console.log(emp["name"]);

for(let person in emp){
    console.log(emp[person]);
}

//for of loop: A for...of loop is used to loop through the elements of an iterable object, such as an array or a string.

/*for (variable of iterable) {
    // code to be executed
  }*/


let num = [11,22,33,44,55,66,77];

for(let arr of num){
    console.log(arr);
}