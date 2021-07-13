let i;
const k=1;
function checkVariables(){
i=1;
console.log('Using Let:',i==1);
console.log('Using Const:',k==1);
}
//checkVariables();

function changeConst(){
const obj={val:0};
obj.val=obj.val+1;
console.log("Changing Const Value:",obj.val);
}
//changeConst();

function usingLoops(){
    const names=['Hosea','Allan','Blue'];
    //using for..of
    for(const vals of names){
        console.log(vals);
    }
    //using plain for..loop
    for(const i={numb:0};i.numb<names.length;i.numb++){
        console.log(names[i.numb]);
    }
    //using plain for..loop using let
    for(let i=0;i<names.length;i++){
        console.log(names[i]);
    }
}
//usingLoops();

function usingScopes(){
    const b="This";
    {
        const c="Is";
        {
            const d="Javascript.";
            {
                console.log(b,c,d);
            }
        }
    }
}
//usingScopes();

//Let cannot be redeclared, It can only be reassigned.
//console.log(eval("let a=3;a=4"));

function temporalDeadZone(){
    console.log(value);
}
let value=12324;
//temporalDeadZone();

//early function call before declaration
//earlyFA();
function earlyFA(){
    console.log("The function has been called");
}
//early function call will not work if it is declared using const or let
//earlyFAWC();//early call on const declared function will not work
const earlyFAWC=()=>{
    console.log("Call successfull");
}
//earlyFAWC()

//conns of early activation
//carModels();
const car="Ford";
function carModels(){
    console.log("A",car,"Mustang");
}

class Fruits{
    constructor(){
      return(console.log("Mango"));
    }
    earlyFAWC() {
        console.log("Call successfull");
    }
}
//new Fruits().earlyFAWC();
