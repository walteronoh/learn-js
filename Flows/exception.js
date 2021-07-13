//Try and Catch
function tryCatch(){
   const new_error=new Error("A new Error");
   func=()=>{throw new_error};
   try{
       func();
       
   }catch(error){
       console.log(error.message);
   }
}
//tryCatch();

//Omitting catch binding
   function func(){
       try{
        throw "An Exception Error";
        console.log("Statement");
       }catch{
           return;
       }
       
   }
//func()
   //Try Finally Clause
   //Finally usually executed regardless of exception throw
   function tryFinally(){
    try {
        throw 'Check On Error';
      } finally {
        console.log('finally');
      }
   }
   //tryFinally();

   // Try Catch Finally
   function tryCF(){
       try{
           throw "Another Error";
       }catch(e){
           console.log(e)
       }finally{
           console.log("finally")
       }
       //nested try blocks
       try{
            try{
                throw "Exception Catched In Inner Catch block";
            }catch(e){
                console.log(e)
            }finally{
                console.log("finally")
            }
       }catch(e){
           console.log(e);
       }
       //Re-throwing Error
       try{
           //throw "External Exception";
            try{
                throw "Exception Already Catched In Inner Catch block";
            }catch(e){
                console.log(e)
                throw "Another Exception To Be catched Externally";
            }finally{
                console.log("Executed")
            }
       }catch(e){
           console.log(e);
       }
   }
   //tryCF();

   //Returning From a Finally Block
   function returnFinally(){
       try{
           throw "Error Detected";
       }catch(e){
           console.log(e);
           //throw "Error Thrown";
       }finally{
           console.log("Executed");
           return;
       }
   }
   //returnFinally();
   
