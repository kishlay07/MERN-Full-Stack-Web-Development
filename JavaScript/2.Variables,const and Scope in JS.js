//Variables:- Variables are used to store values and are declared using the "let" or "var" keyword.

let x = 10;   //let :- Variables declared with let are block-scoped, meaning they are only available within the block, statement, or expression where they are used. This includes blocks like loops and if-statements.
              
var y = 5;    //var:- Variables declared with var are function-scoped, meaning they are only available within the function in which they are declared. If a var variable is declared outside of any function, it becomes a global variable and is accessible from anywhere in the code

//Constants:- Constants are similar to variables but their values cannot be changed once they are declared

const PI = 3.14159;

//Scope:- Scope refers to the visibility of variables and constants within different parts of your code. 
//There are two types of scope: 
//1.Global scope :-
let a = 10;

function myfunc(){
    console.log(a);
    
}
myfunc();

//2.Local scope:-

function myfunc(){
    let b = 5;
    console.log(b);
    
}

//console.log(b); // Throws an error because b is not defined

