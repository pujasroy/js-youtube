if (true){
    let a=10
    const b=20
    var c=30
}

// console.log(a);
// console.log(b);
console.log(c);

// elements within global scope can be accessed inside local scope
// but elements within local scope cannot be accessed outside 
let a=300
if (true){
    let a=10
    console.log("INNER: ",a); //INNER: 10
}
console.log(a); //300

//scope for console in browser is different as compared to scope for code env in node

 function one(){
    const username="puja"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website) => throws an error as website is inaccessible outside the scope of function two
    two()
 }
 one()

 if (true){
    const username="puja"
    if (username==="puja"){
        const website=" youtube"
        console.log(username+website);
    }
    //console.log(website);   
 }
 //console.log(username);
 
// function addone(num){
//     return num+1
// }
// addone(5)

// const addTwo=function(num){
//     return num+2 
// }
// addTwo(5)

//lines 44-47 & 49-52 are identical

console.log(addone(5));
function addone(num){
    return num+1
}

addTwoNumbers(5)
const addTwo=function(num){
    return num+2 
}
//accessing fn before declaring it is not allowed if fn is stored inside a variable
//it is allowed in the conventional declaration however