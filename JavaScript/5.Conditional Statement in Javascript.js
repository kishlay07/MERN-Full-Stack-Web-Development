//if Statement: 

let x = 10;
let y = 20;

if(x<y){
    console.log(`${y} is biggest number.`);
}

//if else Statement  & else if

if(x%2 === 0){
    console.log("Number is Even");
}
else {
    console.log("Number is Odd");
}

//Switch Statement:
let carName = "Thar";

switch(carName){
    case "Mahindra Thar":
        console.log("Mahindra thar");
         break;
    case "Tata Punch":
        console.log("Tata Punch");
        break;
    case "Thar":
        console.log("Best car of 2024");
        break;     
        
}

/*Ternary operator :It is a shorthand for the if...else statement.
                    condition ? expression1 : expression2;   //If the condition is true, then expression1 is executed, otherwise, expression2 is executed.*/


let num = 7;

var result = num === 7 ? "Thala for a reason" : "Gambhir 97";
console.log(result);