let arr=["Mon","Tue","Wed"];

//Changing array
function changeArray(){
    //displaying value using index
    console.log(arr[0]);
    //changing single elements using their index
    arr[2]="Wed";
    console.log(arr);
    //appending new elements
    arr[arr.length]="Thur";
    console.log(arr);
    //appending multiple new elements using push
    arr.push("Fri","Sat","Sun");
    console.log(arr);
    //setting length removes other elements in the array
    arr.length=3;
    console.log(arr);
}
//changeArray();

//Clearing Arrays
function clearArray(){
    //setting length to 0
    arr.length=0;
    console.log(arr);
    //Re-assigning new empty array
    arr=[];
    console.log(arr);
}
//clearArray();

//spreading Arrays
function spreadArray(){
    const numbs=[2,3];
    console.log([1,...numbs,4,5]);
    //concatenating two arrays
    const a=["a","b","c"];
    const b=["d","e"];
    console.log([...a,...b])
}
//spreadArray();

//Listing Indices and entries
function listIndices(){
    //listing indices only
    console.log(...arr.keys());
    //listing index and value
    console.log(...arr.entries());
    //listing array properties
    const obj={1:"Is",a:"Color",F:"A",0:"This"}
    console.log(Object.keys(obj));
}
//listIndices();

//Checking if arrays
function checkArray(){
    //method 1
    console.log(arr instanceof Array);
    //method 2
    console.log(Array.isArray(arr));
}
//checkArray();

//Iterating through arrays
function loopArray(){
    //for of
    for(const day of arr){
        console.log(day);
    }
    //for of keys
    for(const day of arr.keys()){
        console.log(day);
    }
    //for in for keys also
    for(const day in arr){
        console.log(day);
    }
    //for of for index value pairs
    for(const day of arr.entries()){
        console.log(day);
    }
}    
//loopArray();

function addArray(){
    //Destructively
    //1 Prepend
    const langs=["Eng","Spa","Chi","Jap"];
    langs.unshift("Kisw","Por");
    console.log(langs);
    //2 Append
    langs.push("Jam","Kor");
    console.log(langs);

    //Non Destructive
    //1 Prepend
    const newPreArray=["Som","Eth",...langs];
    console.log(newPreArray);
    console.log(langs);
    //2 Append
    const newAppArray=[...langs,"Les","Bots"];
    console.log(newAppArray);
    console.log(langs);
}
//addArray();

//Remove elements form array
function remArray(){
    const names=["Walter","Steve","Sharon"];
    //Using shift()
    names.shift();
    console.log(names);
    //Using pop
    names.pop();
    console.log(names);
    //Deleting one or more elements
    const letters=["a","b","c","d"];
    letters.splice(0,4);
    console.log(letters);
    //setting length
    letters.length=0
    console.log(letters);
}
remArray();