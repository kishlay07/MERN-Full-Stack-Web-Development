let age = 24;
let msg = `My name is Kishlay and I am ${age} year old`;
console.log(msg);                                                        //Template Literals
console.log(`My name is Kishlay and I am ${age} year old`);


//Operators:-
/*1.Arithmetic Operators: +    // Addition
                          -    // Subtraction
                          *    // Multiplication
                          /    // Division
                          %    // Modulus
                          ++   // Increment
                          --   // Decrement*/

let a = 4;
let b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(++b);
console.log(--a);
console.log(++b);
console.log(--a);

/*2.Assignment Operators:    =     Assignment
                            +=     Addition assignment
                            -=     Subtraction assignment
                            *=     Multiplication assignment
                            /=     Division assignment
                            %=     Modulus assignment */

let x = 10;
let y = 5;
                            
x += y;  // Equivalent to x = x + y
console.log(x);  // Output: 15
                            
y -= x;  // Equivalent to y = y - x
console.log(y);  // Output: -10

/*3.Comparison Operators: ==   // Equal to
                          !=   // Not equal to
                          ===  // Strict equal to
                          !==  // Strict not equal to
                          >    // Greater than
                          >=   // Greater than or equal to
                          <    // Less than
                          <=   // Less than or equal to  */           
                        
let A = 10;
let B = 20;
let C = "10";

console.log(A==B);
console.log(A==C);
console.log(A===C)

/*4) Logical Operators: Logical operators are used to combine two or more Boolean expressions and return a Boolean value.                        

                        &&   // Logical AND
                        ||   // Logical OR
                        !    // Logical NOT*/

let X = 10;
let Y = 5;

console.log(X > 5 && Y < 10);   // Output: true
console.log(X > 5 || Y > 10);   // Output: true
console.log(!(X > Y));         // Output: false

//5.Bitwise Operator: 