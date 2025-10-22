//JS is a dynamically typed language.

//Primitive

//7 types: string, number, boolean, null, undefined, symbol, BigInt

const score=100;
const scoreValue=100.3;
const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id===anotherId)

const bigNumber=3456789765656789n


//Reference (Non-Primitive)

//Arrays, Objects, Functions

const characters=["Doraemon","Shinchan","Hatori"]

let myObj={
    name:"Puja",
    age:18,
}

const myFunction=function(){
    console.log("Hello World")
}

// console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myObj)
console.log(typeof myFunction)
console.log(typeof characters)