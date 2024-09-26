/*Nullish Coalescing Operator :- This operator returns the right hand value if the left hand value is null or undefined*/

function call(item){
    var items = item ?? 7;
    console.log(items);
}

call();
call(77); 