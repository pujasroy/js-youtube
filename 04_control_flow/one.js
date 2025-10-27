//if

//<,>,<=,>=,==,!=,===,!==

if (2==="2"){
    console.log("executed");
}

const temperature=41
if (temperature<50){
    console.log("less than 50");
}
console.log("temperature is greater than 50"); 
//less than 50
//temperature is greater than 50

if (temperature<50){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("executed");
//less than 50
//executed

// const score=200
// if (score>100){
//     let power="fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); //throws an error=>power variable cannot be accessed outside its scope

const score1=200
if (score1>100){
    var power="fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); 
//User power: fly
//User power: fly
//=>scope of var is global

// const balance=1000
//if (balance>500) console.log("test"),console.log("test2");
//=>unreadable, do not use

// const balance=1000
// if (balance<500){
//     console.log("less than 500");
// } else if (balance<750){
//     console.log("less than 750");
// }
// else if (balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }
//less than 1200

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if (userLoggedIn && debitCard && 2==3){
    console.log("allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}