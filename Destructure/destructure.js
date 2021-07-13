//Extracting vs destructuring
function destructure(){
    const arr=[1,2,3,4,5,6]
    //Extracting single elements
    const a=arr[0];
    const b=arr[3];
    console.log(a,b)
    //Destructuring Displaying multiple elements once
    const [x,y,z]=arr;
    console.log(x,y,z)
}
//destructure()

//Constructing and Extracting
function extractConstruct(){
    //Constructing single elements
    const arr={};
    arr.name="Joan";
    arr.age=32;
    console.log(arr);
    //Constructing multiple elements
    const arr2={
        name:"Jesse",
        age:23
    }
    console.log(arr2)
    //Extracting properties one at a time
    const a=arr.name
    const b=arr.age
    console.log(a,b)
    //Extracting multiple properties
    //Declaring two variables 'c' and 'd'
    const {name:c,age:d}=arr2;
    console.log(c,d)
}
//extractConstruct()

//Patterns
function patterns(){
    //1 Declaring variables
    const [a]="a";
    console.log(a);
    //2 Assignment
    let b;
    [b]="b";
    console.log(b)
    //3 Parameters
    const f=([a])=>a;
    console.log(f(["c"]));
}
//patterns()

//Object Destructuring
function objectDestructure(){
    //objects
    const fruits={
        a:"Apple",
        b:"Banana",
        m:"Mango"
    }
    //const {a:a,b:b,m:c}=fruits;
    //console.log(b)
    //Property value shorthands
    const {a,b,m}=fruits;
    console.log(a,b,m)
    //Primitive values
    //Strings
    const {length:len}="abcd";
    console.log(len)
    //Arrays
    const {0:arr1,3:arr3,length:d}=[1,2,3,4,5];
    console.log("Length "+d,arr1,arr3)
    //Maps
    const cars=new Map().set("model1","Toyota").set("model2","BMW")
    const {size:numb}=cars;
    console.log(numb)
}
//objectDestructure()

//Rest Properties
function restObject(){
    //Rest property is used in object patterns
    const chars={a:"c",b:"b",c:"a"}
    const {a,...rest}=chars
    console.log(a,rest)
    //Removing property 'a' non-destructively
    console.log(rest)
}
//restObject()

//assignment pitfall in object destructuring
function pitfallObjectDestructure(){
    //Assigning destructure pattern directly will not work
    //starting a statement with curly brace makes js think you are starting a block
    //solution : Put all the statement in a parentheses
    let arr;
    ({a,b,c}={a:"name1",b:"name2",c:"name3"})
    console.log(a,b,c)
}
//pitfallObjectDestructure()

//Array Destructuring
function arrayDestructure(){
    const names=["Walter","Steve","Blue"]
    const [a,b,c]=names;
    console.log("Index[1] "+b)
    //Mentioning a hole
    const [, , f]=names;
    console.log("Index[2] after mentioning holes "+f)
    //Array destructure Applies to any iterable value
    //1 : Map constructor
    const map=new Map().set("r","Red").set("g","Green").set("b","Blue")
    const [val1,val2,val3]=map;
    console.log("Map: key g: "+val2)
    //mentioning a hole
    const [, , val0]=map;
    console.log("Map after mentioning holes: "+val0)

    //2 : Set constructor
    const set=new Set().add(1).add(2).add(3);
    const [set1,set2,set3]=set;
    console.log("Set destructure: "+set2)
    //Mentioning holes
    const [set4, ,set6]=set;
    console.log("After Mentioning hole: "+set6)
}
//arrayDestructure()

//Rest property in array destructuring
function restArray(){
    //rest property in Arrays
    const cars=["Toyota","Mitsubishi","Subaru"];
    const [ ,...rest]=cars;
    console.log("Using rest Property: "+rest)
    
    //rest property in Map
    const fruits=new Map().set(0,"Mango").set(1,"Apple").set(2,"Banana");
    const [ , ,...rest_map]=fruits;
    console.log("Map after mentioning holes and rest property: "+rest_map)

    //rest property in Set
    const language=new Set().add("PHP").add("Java").add("C#");
    const [,...rest_set]=language;
    console.log("Set after mentioning holes and rest property "+rest_set)
}
//restArray()

//Destructure Examples
function examples(){
    //1  Swapping values
    let a=2,b=4;
    console.log("Original: A= "+a+" B="+b);
    [b,a]=[a,b];
    //Swapping
    console.log("A= "+a+" B= "+b)

    //2 Operations that return arrays
    const values=/^([0-9]{2})-([a-z,A-Z]{3})-([0-9]{4})$/;
    const val='12-Jan-2014';
    const [ ,day,month,year]=values.exec(val);
    console.log("Day:"+day+" Month:"+month+" Year:"+year)

    //3 Operations that return multiple values
    function findElement(arr,func){
        for(let i=0;i<arr.length;i++){
            const value=arr[i];
            if(func(value)){
                return {i,value};
            }
        }
    }
    const arr=[1,2,3,4,5,6,7];
    const {i,value}=findElement(arr,x=>x)
    console.log("Index,Value "+i,value)
}
//examples()

//Misc Destructuring
function miscDestructure(){
    //Undefined values and properties
    const [x]=[];
    const {prop}={};
    //array destructing non iterable value
    //const [arr]={};

    //Default values
    //1 array destructure
    //If there is value in the array, the default value will be assumed
    const [numb1=1,numb2=2]=[];
    //2 object destructure
    //If there is value in the object, the default value will be assumed
    const {val1=20,val2=30}={}

    //Parameters are similar to destructuring
    function func(x,y){
        console.log("Using Normal function: ",x+y);
    }
    func(2,3)
    function func2(...rest){
        const [a,b]=rest;
        console.log("Using destructuring: ",a+b)
    }
    func2(3,4)

    //Nested destructuring
    const arr=[
        {name1:"Walter"},
        {name1:"Kiprono"}
    ];
    const [ ,{name1}]=arr;
    console.log("Name: "+name1)
}
miscDestructure()