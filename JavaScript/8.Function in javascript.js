//Function :- A function is a reusable block of code that performs a specific task.

/*There are four types of functions in JS :- 1.Function declaration
                                             2.Function expression
                                             3.Anonymous function
                                             4.Arrow Function  */

//Function declaration: This is a named function

function add(a,b){
    console.log(a+b);
}

add(4,3);

//Function expression: This is a function that is assigned to a variable or a constant.

var name = function(){
    console.log("Hello function without name is called that is function expression");
}

name();

const greet = function(name) {
    console.log(`hello${name}`);
  };
  greet(`Kishlay`);


  //Anonymous function : This is a function without a name, It is often used as a callback function.

  setTimeout(function(){
    console.log("Kishlay");
    
  },1000);


  let anonymousFunction = function() {
    console.log("Hello from GeeksforGeeks!");
};
anonymousFunction();

  //Arrow function: This is a shorthand way of writing a function expression using the => syntax.

let sub = (x,y) => {
    return x-y;
};

console.log(sub(17,3));

let mul = (x,y) => console.log(x*y);

mul(4,2);