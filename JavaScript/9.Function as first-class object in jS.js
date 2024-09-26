//1. Assigning a function to a variable:

var names = function(name,x){

    for(i=0;i<x;i++){
        console.log(`hello ${name}`);
    }
    
};

names(`kishlay Singh`,7);

//2. Passing a function as an argument to another function:

var add = function(a,b){
    return a+b;
};

var sub = function(a,b){
    return a-b;
};

function calculator(arguments,num1,num2){
    return arguments(num1,num2);
}

console.log(calculator(add,7,3));
console.log(calculator(sub,7,3));

//3. Returning a function from another function:

function power(num1){
    return function (num2){
        return num1*num2;
    }
}

var ans = power(5);

console.log(ans(5));
