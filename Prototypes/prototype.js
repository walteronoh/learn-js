//Setting prototype in object literals
function setPrototype(){
    const val2={
        middle_name:"Kiprono",
        //This property cannot be accessed by the parent object because the first object property is mutated/accessed incase of same name properties
        name:"Brian"
    }
    const val={
        name:"Walter",
        __proto__:val2
    }
    const obj={
        __proto__:val,
        //Own Property
        last_name:"SomeName"
    }
    //obj inherits name
    console.log(obj.name + obj.middle_name)
}
//setPrototype()

//Setting prototypes Advanced
function setPrototypeAdvanced(){
    //Object.create(proto) -> Creates a new object using an existing object as a prototype
    const proto1={name:"kk"}
    const proto2={name_2:"jj"}
    const obj=Object.create(proto1);
    console.log(Object.getPrototypeOf(obj))
}
//setPrototypeAdvanced()

//Sharing prototypes
function sharePrototype(){
    //These two objects have identical properties
    const jane={
        name:"Jane",
        describe(){
            return `${this.name} Is A Name`
        }
    }
    const edmond={
        name:"Edmond",
        describe(){
            return `${this.name} Is A Name`
        }
    }
    console.log(jane.describe())
    console.log(edmond.describe())
    console.log("---Using prototype to share the identical properties---")
    //Using prototype to share the properties
    const common_prop={
        describe(){
            return `${this.name} Is A Name`
        }
    }
    const new_jane={
        name:"Jane",
        __proto__:common_prop
    }
    const new_edmond={
        name:"Edmond",
        __proto__:common_prop
    }
    console.log(new_jane.describe())
    console.log(new_edmond.describe())
}
//sharePrototype();

//Using classes
class Car{
    constructor(name){
        this.name=name;
    }
    describe(){
       return(`${this.name} Mustang`);
    }
}
function car(){
    const models=new Car("Ford");
    console.log(models.name)
    console.log(models.describe())
    //Setting similar objects using .constructor
    const new_model=new models.constructor("Stallion");
    console.log(new_model.describe())
    //Getting the name of a class that created a given instance
    console.log(models.constructor.name)
}
//car()

//Prototype properties
class Fruits{
    constructor(fruit){
        this.fruit=fruit;
    }
    describe(){
        return "Names of fruits"
    }
    get fruit_name(){
        return "Get fruit Name"
    }
}
function listFruits(){
    const fruits=new Fruits("Mango")
    //Displaying name using argument
    console.log(fruits.fruit)
    //Accessing describe()
    console.log(fruits.describe())
    //Accessing getter fruit_name
    console.log(fruits.fruit_name)
}
//listFruits()

//Static Properties
class Drinks{
    static listDrink(){
        return "List Drink"
    }
    static get getDrink(){
        return "Coffee"
    }
}
//console.log(Drinks.listDrink() +": "+Drinks.getDrink)

//Private Data for Classes
//Using naming convention
class SetCount{
    constructor(count,numb){
        this._count=count;
        this.numb=numb;
    }
    counter(){
        return this._count;
    }
}
//Using WeakMap
const _numb=new WeakMap();
class setWeakMap{
    constructor(numb){
        this._numb=numb;
    }
    counter(){
        return this._numb;
    }
}
function getCount(){
    //Naming Convention
    const set_count=new SetCount(8,10);
    console.log(set_count.count)
    //Using WeakMap
    const set_weakmap=new setWeakMap(10);
    console.log(set_weakmap.numb)
}
//getCount()

//Subclassing
class Gadget{
    constructor(name){
        this.name=name;
    }
    display(){
        return this.name
    }
}
class Smart extends Gadget{
    constructor(name,type){
        super(name);
        this.type=type;
    }
    describe(){
        return super.display() + this.type;
    }
}
const smart=new Smart("Samsung","J1");
console.log(smart.describe());