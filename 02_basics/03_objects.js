//singleton
//Object.create

//object literals

const mySym=Symbol("key1")
const JsUser={
    name:"Puja",
    "full name":"Puja Sinha Roy", //cannot be accessed using . , [] need to be used
    age:18,
    [mySym]:"mykey1", //[] to be used to mention the key, otherwise the type is shown as string
    location:"Delhi",
    email:"puja@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); //keys are taken as strings
// console.log(JsUser[email]); => wrong syntax, key has to be defined within double quotes if we are using []
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email="puja@igdtu.ac.in"
// Object.freeze(JsUser.email) //further changes to email do not propogate
// JsUser.email="puja@css.in"
// JsUser.age=17
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`); //string interpolation using back ticks
    
}

JsUser.greeting(); //() needed for execution purpose
JsUser.greetingTwo();


