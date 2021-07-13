//Object 
function listObject(){
    const obj={
        name:"Walter",
        second:"Browns",
        //Using Method
        user(){
            return this.second;
        },
        say(text){
            return `${text + this.name}`;
        }
    }
    console.log(obj.name + obj.user());
    //Adding a new property 
    obj.third="Surname";
    console.log(obj.third)
    console.log(obj.say("Hello"))
}
//listObject()

//Object Accessors
function accessObject(){
    //Get
    const get_obj={
        name:"Walter",
        get user(){
            return this.name;
        }
    }
    console.log(get_obj.user);
    //Set
    const set_obj={
        name:"Walter",
        set user(username){
            this.name=username;
        }
    }
    set_obj.user="Kiprono";
    console.log(set_obj.name)
    //Setting More Than One property
    const multi_obj={
        first_name:"Jane",
        second_name:"Johnson",
        set user(username){
            const parts=username.split(' ');
            this.first_name=parts[0];
            this.second_name=parts[1];
        }
    }
    multi_obj.user="Massey Ferguson";
    console.log(multi_obj.first_name + multi_obj.second_name);
}
//accessObject()

//Spreading into objects
function spreadObject(){
    const obj1={a:"a",b:"b",c:"c"};
    const obj2={...obj1,d:"d"}
    console.log(obj2);
    //Incase of clashing keys, the property that is mentioned last 'wins'
    const obj3={...obj2,d:"Last"};
    console.log(obj3)
}
//spreadObject()

//Copying Objects
function copyObject(){
    const original={a:"a",b:{name:"Jay"}}
    const copy={...original};
    //Changing the value of property a 'It has been changed non-destructively'
    copy.a="b";
    console.log("Original:"+original.a+" Copy:"+copy.a)
    //Modifying object
    //Object properties Are shared between original and copy hence modifying copy will also modify the original
    copy.b.name="Walter";
    console.log("Original:"+original.b.name+" Copy:"+copy.b.name)

}
//copyObject()

//Methods Manipulation
function playObject(){
    const play={
        player(a,b){
            return this + a+b;
        }
    }
    console.log(play.player("w","k"))
    //Using .call
    console.log(play.player.call("Letters ","j","k"))
    //Using .bind
    const func=play.player.bind("Players: ","Kipchoge"," Keino");
    console.log(func())
}
//playObject()

//Pitfall Objects
function pitfallObject(){
    const obj={
        prefix:'*',
        value(val){
            //This .map method will return undefined for 'this.prefix' because of the defined function has its own 'this'
            // return val.map(function(x){
            //     return this.prefix + x;
            // })

            //Using arrow function will solve the problem
            // return val.map((x)=>{
            //     return this.prefix + x;
            // })

            //storing 'this' in a different variable
            // const k=this;
            // return val.map(function(x){
            //     return k.prefix + x;
            // })    

            //Binding this to the map method function
            // return val.map(function(x){
            //     return this.prefix + x;
            // }.bind(this));

            //Specifying value for this in the callback
            return val.map(function(x){
                return this.prefix + x;
            },this);
        }
    }
    console.log(obj.value(['a','b']));
}
//pitfallObject();

//Optional static property access
function staticObject(){
    const models=[
        {
            Toyota:{
                Lorry:{
                    name:"Canter",
                    price:"2M"
                },
            Pickup:{
                    name:"Hilux",
                    price:"1M"
                },
                Saloon:{
                    name:"Probox",
                    price:"500K"
                }
            }
        }
    ]
    const cars=models.map(p=>
        p.Toyota?.Saloon?.name ?? 'Not There'
    )
    console.log(cars)
}
//staticObject()

//Optional dynamic property access
function dynamicObject(){
    const keys="props";
    console.log({prop:1}?.[keys] ?? 'Blank')
}
//dynamicObject()



