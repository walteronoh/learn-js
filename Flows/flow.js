const Fruits=["Mango","Apple","Banana"];
function breakLoop(){
    for(const fruit of Fruits){
        if(fruit==="Mango"){
            console.log(fruit);
            break;
        }
        console.log(fruit);
    }
}
//breakLoop();

//break with operand
const books=["Lying.pdf","talking.docx","learn.doc"];
const req_suffix=".pdf";
function breakLoopOperand(book,suffix){
  search_block:{
      for(const page of book){
          if(page.endsWith(suffix)){
              console.log(page);
              break search_block;
          }
          console.log("Not Available");
      }
  }
}
//breakLoopOperand(books,req_suffix);

function continueLoop(book){
  for(const page of book){
      if(page.startsWith("Lying")){
          continue;
      }
      console.log(page);
  }
}
//continueLoop(books);

function ifLoop(){
    let i=0;
    if(i==0){
        console.log(i);
    }else{
        console.log("Not 1");
    }
}
//ifLoop();

function switchLoop(color){
    switch(color){
        case 'Red':
            console.log("Red");
        break;    
        case 'Green':
            return true;
        break;    
        case 'Blue':
            console.log("Blue");
        break; 
        default:
            console.log("Try New Color");   
   }
}
//switchLoop('Blues');

let numbers=[0,1,2,3,4,5,6,7,"broom",9];
function whileLoop(){
    while(numbers.length>0){
        let x=numbers.shift();
        console.log(x); 
    }
}
//whileLoop();

function doWhile(){
    let i=0;
    do{
        i++;
    }while(i<numbers.length){
        console.log(numbers);
    }
}
//doWhile();

function forLoop(){
    for(let i=0;i<numbers.length;i++){
        console.log(numbers[i]);
    }
}
//forLoop();

function forOfLoop(){
    for(const [index,numb] of numbers.entries()){
        console.log(index,numb);
    }
}
//forOfLoop();

function forIn(){
    for(const val in numbers){
        console.log(val);
    }
}
forIn();