//Multiplying 
function M(){
    console.log('7'*7);
}
//M();

//adding non primitive datatypes
function nonPrimitive(){
    //On using + , the elements are concatenated.
    //Using *,/,- will return NaN
    console.log([1,2,3]+[2,3]);
}
//nonPrimitive();

//simple add
function strNumb(){
    console.log(3 + "Is a Number");
}
//strNumb();

//Compound Operators
function compoundOperator(){
    // a || b => Returns second operand if first operand is falsy
    console.log(0 || "It Is Falsy");
    // a && b => Returns second operand if first operand is truthy
    console.log(1 && "It Is Truthy");
    // a ?? b => Returns second operand if first operand is nullish
    console.log(null ?? "It Is Nullish");
}
compoundOperator();