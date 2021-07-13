//Creating a promise
function createPromise(x){
  function successCall(result){
    console.log(`Successfully returned: ${result}`)
  }
  function failCall(error){
    console.log(`There was an error: ${error}`)
  }
  if(x===undefined){
    return failCall(x);
  }else{
    return successCall(x)
  }
}
//createPromise(10);

function addSync(x,y){
  return new Promise(
    (resolve,reject)=>{
       if(x===undefined || y===undefined){
          reject(new Error("Both parameters are required"))
       }else{
          resolve(`Output= ${x+y}`);
       }
    }
  );
}
//console.log(addSync(3,2));

//Promise States
function statePromise(){
  //Promise.resolve() creates a promise that is fulfilled with the value x
  Promise.resolve(12).then(x=>{
    console.log(`Fulfilled Promise: ${x}`)
  })
  //If the parameter is already a promise, it is returned unchanged
  Promise.resolve(Promise.resolve('abc')).then(x=>{
    console.log(`Paremeter already a promise: ${x}`)
  })
  //Promise.resolve returns a rejected promise if its parameter is a rejected promise.
  Promise.resolve(new Error("Error in Resolve")).then(x=>{
    console.log(x.message);
  })

  //Promise.reject creates a promise that is rejected
  Promise.reject(new Error("Errors")).catch(x=>{
    console.log(`Rejected: ${x.message}`)
  })
}
//statePromise()

//Returning promises
function returnPromise(){
  //Returning a non-promise value
  Promise.resolve(20).then(x=>{
    return x+x;
  }).then(y=>{
    console.log(`Returned non-promise value= ${y}`)
  })

  //Returning a promise
  Promise.resolve('abcdef').then(str=>{
    return Promise.resolve(90);
  }).then(x=>{
    console.log(`Promise: ${x}`)
  })

  //flat
  Promise.resolve('Hello').then(y=>{
    return add2(y);
  }).then(x=>{
    console.log(`Greetings: ${x}`)
  })
  function add2(y){
    return y;
  }
  //Nested
  // Promise.resolve('PHP').then(y=>{
  //   add2(y).then(
  //     console.log(`Language: ${y}`)
  //   )
  // })

  //Throwing exceptions
  Promise.resolve('hello').then(x=>{
    throw new Error("There is an error");
  }).catch(error=>{
    console.log(`Error: ${error.message}`)
  })

  //.catch and its callback
  //.catch is triggered by rejections while .then is triggered by fulfillments
  Promise.reject(new Error("catch Error")).catch(error=>{
    //Incase something went wrong and you had a default value
    return "Default Value"
  }).then(x=>{
    //The returned value is a fulfillment
    console.log(x)
  })
}
//returnPromise()

//finally
function finallyPromise(){
  Promise.reject(new Error('Throws Error')).catch(error=>{
    console.log(error.message)
    return 'Changed to Default'
  }).then(x=>{
    console.log(x)
  }).finally(()=>{
    console.log("Executed")
  })

  //If finally callback throws an exception, promise returned by finally is rejected
  Promise.reject(new Error("First Error")).finally(()=>{
    throw new Error("Finally throws error");
  }).catch(error=>{
    console.log(error.message)
  })
}
//finallyPromise()

//finally uses
function finallyUses(){
  //doing something first after any kind of settlement
  //When using resolve
  Promise.resolve("Finally").finally(()=>{
    console.log("Accept");
  }).then(result=>{
    console.log(result)
  })
  //When using reject
  Promise.reject("Rejected").finally(()=>{
    console.log("Finally");
  }).catch(error=>{
    console.log(error)
  })
}
//finallyUses()

const util = require('util');
const fs = require('fs');
//Examples
function promiseExample(){
  const readFile = util.promisify(fs.readFile);
  readFile('person.json').then(text=>{
    const obj=JSON.parse(text);
    console.log(obj)
  }).catch(error=>{
    console.log(error.message)
  })
}
//promiseExample()


const fetch=require("node-fetch");
//Async functions
function asyncFunction(){
  const url='https://api.github.com/users/walteronoh';
  async function tryAsync(url){
    try{
      const response=await fetch(url);
      const text=await response.text();
      console.log(JSON.parse(text));
    }catch(error){
      console.log(error);
    }
  }
  tryAsync(url);
}
//asyncFunction()

//Returning from async functions
function returnAsync(){
  //Async always returns promises
  async function tryAsync(){
    return "A returned Promise";
   // throw "An error";
  }
  tryAsync().then(x=>console.log(x)).catch(error=>console.log(error));

  //Returned promises are not wrapped
  async function tryAsync2(){
    //The promise is not wrapped in another promise
    //It becomes result of the function
    return Promise.resolve("Fulfilled promise");
  }
  tryAsync2().then(resp=>console.log(resp));

  //Executing async functions
  function executeAsync(){
    async function tryAsync3(){
      console.log("Async func starts");
      return "Hello";
    }
    tryAsync3().then(resp=>console.log("Greetings "+resp))
  }
  executeAsync()
}
//returnAsync();

//Await working with promises
function awaitPromise(){
  //await and fulfilled promises
  async function fulfilledPromise(){
    return await Promise.resolve("Fulfilled Promise");
  }
  fulfilledPromise().then(x=>console.log(x))
  //await and rejected value
  async function rejectedPromise(){
    return await Promise.reject(new Error("Rejected Value"));
  }
  rejectedPromise().catch(error=>console.log(error.message))
}
//awaitPromise()

//Async in callbacks
function asyncCallback(){
  const chars=[1,2,3,4,5,6,7,8];
  async function awaitMap(){
    const values=chars.map(async result=>{
      return result;
    })
    //promise.all unwraps all promises
    console.log(await Promise.all(values));
  }
  awaitMap()
}
asyncCallback()