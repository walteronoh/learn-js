//Ordinary Functions
function func(){
    console.log("Func");
}
//func();

//Cannot Be Activated Early. Anonymous function Expression
const func2=function(){
    console.log("Func 2");
}
//func2();

//Named function
const func3=function name(){
    console.log("Named Function");
}
//func3();
function data(x,y,{unique,ignore}){
    console.log(x + y + unique + ignore);
}
//data("string",3,{unique:true,ignore:"Extensions"})

//Invoking Function
function invoke(){
    function add(x,y){
        console.log(x+y);
    }
    //Real Function Invocation
    add(2,5);
    //Method
    const obj={InvokeAdd:add};
    obj.InvokeAdd(1,3);
    //Using Classes
    const add_class=new add(1,7);
}
//invoke();

//Specialised Functions
//Arrow function
const name=()=>{
    console.log("Walter");
}
//name();

//Method
const obj={
    user(){
        console.log("Username");
    }
}
//obj.user();

//Classes
class MyClass{
    constructor(){
        function user(){
            console.log("Username Function In A Class");
        }
        return user();
    }
}
//const username=new MyClass();

//Arrow functions
function arrowFunction(){
    //using arrow function
    const val=[1,2,3,4].map(x=>x+1);
    console.log(val);
    //Using a normal function
    const val2=[1,2,3,4].map(function(x){return x*3})
    console.log(val2);
    //Arrow function Is More Concise
}
//arrowFunction();

//"this" is a special variable/ object oriented feature
//Allows one to access the receiver
const names={
    name:"Walter",
    nameMethod(){
        //Ordinary function
        //It has its own "this" hence it returns undefined
        function accessName(){
            console.log(this.name);
        }
        accessName()
        //Arrow Function
        accessNameArrow=()=>{
            console.log(this.name)
        }
        accessNameArrow()
    }
}
//names.nameMethod()

//Parameter handling
function parameters(){
    //1 Calling function with exact arguments as parameters
    function add(x,y){
        console.log(x+y);
    }
    add(2,3)
    //2 Calling function with excess arguments 
    //the function would assume the excess arguments
    add(6,5,4,5)
    //3 Calling function with less arguments
    //the function would return 'undefined' for the excess parameter
    add("W")
    //Parameter default values
    function defaultValues(x,y=7){
        console.log(x+y)
    }
    //On Calling with exact arguments, the default value will be assumed
    //On calling with less arguments, the default value will be used
    defaultValues(2);
    //defaultValues(2,9)

    //Rest Parameters
    function rest(x,...y){
        console.log(x,y);
    }
    rest("w","x","y","z")

    //Creating default argumens required using rest
    function restArgs(...args){
        if(args.length !== 2){
            console.log("Two Arguments are required")
        }else{
            console.log(args);
        }
    }
    restArgs("x","y","z")
}
//parameters()

//Named Parameters
function namedParameters({start,end,stop}){
    console.log(start,end,stop);
}
//No worrying about arranging the arguments
//namedParameters({start:0,stop:4,end:3});

//Rest vs Spread
//Rest is used when defining functions or methods (Converts Arguments into arrays)
//Spread is used when calling functions or methods (Converts iterable objects i.e arrays into arguments)
function restSpread(){
    const all_names=['Walter','Jeff'];
    //Rest
    function list_names(...all_names){
        console.log(all_names)
    }
    //Spread
    list_names(...all_names);
    //Passing elements to rest
    list_names("Walter","Jeff","Bruno")
}
//restSpread()

//Methods of Functions
function methodFunctions(){
    //call
    function calls(x,y){
        console.log(this,x,y)
    }
    calls.call("hello","good","day")
    //apply
    const chars=['a','b'];
    function applies(x,y){
        console.log(this,x,y)
    }
    applies.apply('Letters',chars)
    //bind
    function someFunc(arg1,arg2){
        console.log(arg1,arg2)
    }
    const boundFunc=someFunc.bind(this)
    boundFunc('c','d')
}
methodFunctions()
