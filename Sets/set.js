//Creating Sets
function createSet(){
    //1 Using constructor without parameters
    const emptySet=new Set();
    console.log();
    //2 adding array to the constructor
    const arraySet=new Set([1,2,3,4,5])
    console.log(arraySet);
    //3 Using add method
    const addSet=new Set().add(0).add(1);
    console.log(addSet);
}
//createSet();

//Working with Sets
function workSet(){
    const numbs=new Set([1,2,3,4,5,6,7,8,9]);
    //Check if element is a member of a set
    console.log(numbs.has(12));
    //Checking Size
    console.log(numbs.size);
    //Deleting member
    const new_numbs=new Set(numbs);
    new_numbs.delete(7);
    console.log(new_numbs);
    //Clearing A Set
    new_numbs.clear();
    console.log(new_numbs);
}
//workSet();

//Iterating over Sets
function iterateSet(){
    const numbs=new Set([1,2,3,4,5,6,7,8,9]);
    //1 Using for of
    for(const numb of numbs){
        console.log(numb);
    }
    //2 Using Spread
    console.log(...numbs)
}
//iterateSet();

//Using Sets
function usingSet(){
    //1 Removing Duplicates from an array
    const arr=[1,2,3,4,4,4,5,2,1];
    const no_duplicates=new Set(arr)
    console.log(no_duplicates);
    //Creating a set of Unicode characters
    const name="Walter";
    const name_set=new Set(name)
    console.log(name_set)
}
//usingSet();

//Set Operations
function operationSet(){
    const a=new Set([1,2,2,3,4]);
    const b=new Set([2,4,5]);
    //Union (a union b) Creating a new set that contains elements of both a and b
    const union=new Set([...a,...b]);
    console.log(union);
    //Intersection (a ∩ b) Creating a new set that contains elements of a that are in b
    const intersect=new Set(
        [...a].filter(k=>b.has(k))
    );
    console.log(intersect);
    //Difference (a \ b) Creating a new set that contains elements of a that are not in b
    const difference=new Set(
        [...a].filter(k=>!b.has(k))
    );
    console.log('operationSet ' , difference);
}
operationSet();

//Mapping and Filtering Sets
function mfSet(){
    const a=new Set([1,2,3,4]);
    //Mapping
    const map=new Set([...a].map(k=>k+3));
    console.log(map);
    //Filtering
    const filter=new Set([...a].filter(k=>k<=3));
    console.log(filter);
}
//mfSet();
