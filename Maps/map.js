//Creating Maps
function createMap(){
    //1 Using constructor with empty paremeter
    const emptyMap=new Map();
    console.log(emptyMap);
    //2 Using arrays as parameters
    const arrayMap=new Map([
        [0,'A'],[1,'B']
    ]);
    console.log(arrayMap);
    //3 Using set() Method
    const setMap=new Map().set(0,'A').set(1,'A');
    console.log(setMap);
}
//createMap();

//Copying Maps
function copyMap(){
    const map=new Map([
        [0,"Red"]
    ]);
    const copy=new Map(map);
    console.log(copy);
}
//copyMap();

// working With Single entries
function workMap(){
    const map=new Map().set(0,"PHP").set(1,"Java");
    console.log(map.get(1));
    //Checking if entry is missing
    console.log(map.get(2) || 'Not There');
    //Using has() to check key
    console.log(map.has(2));
    //Deleting an entry
    const copy= new Map(map);
    console.log(copy.delete(1), copy);
    //Deleting all entries of a map
    //Used || Because console.log(map.clear()) is undefined
    console.log(map.size, map.clear() || map.size);
}
//workMap();

//Getting Keys and Values
function getMap(){
    const map=new Map().set(0,"PHP").set(1,"Java");
    //keys
    console.log(...map.keys());
    //values
    console.log(...map.values());
    //Both keys and values using entries
    console.log(...map.entries());
    //Both keys and values using destructuring
    for(const [key,value] of map){
        console.log(key,value)
    }
}
//getMap();

//Converting Maps to Objects and vice-versa
function convertMap(){
    const drinks=new Map().set(0,"Tea").set(1,"Coffee");
    //Converting to Object destructively
    const obj=Object.fromEntries(drinks);
    console.log(obj);
    //Back to Map
    const map= new Map(Object.entries(obj));
    console.log(map);
}
convertMap();

//Counting Characters 
function countCharacter(characters){
    const charCount=new Map();
    for(let char of characters){
        char=char.toLowerCase();
        let count=charCount.get(char) || 0;
        charCount.set(char,count+1);
    }
    console.log(charCount.entries())
}
//countCharacter("aabcdAgeeew");

function simpleMap(){
    let numbs=[1,2,3,4,5,6,7,8];
    numbs=numbs.map(k=>k*2);
    console.log(numbs);
}
//simpleMap();

function simpleFilter(){
    let chars=['abc','defg','ijklmno','pqrst','uvwx','yz'];
    chars=chars.filter(k=>k.length>3);
    console.log(chars);
}
simpleFilter();

//mapping and filtering maps
function mfMap(){
    const values=new Map([
        [1,"b"],[2,"c"]
    ]);
    //Mapping
    const mapped=new Map([...values].map(([k,v])=>[k*2,'Mapped..'+v]))
    console.log(mapped);
    //Filtering
    const filtered=new Map([...values].filter(([k,v])=>k<2))
    console.log(filtered);
}
//mfMap();

//Combining Maps
function combineMap(){
    const map1=new Map([[0,2]]);
    const map2=new Map([[1,4]]);
    const map=new Map([...map1,...map2]);
    console.log(map);
}
//combineMap();