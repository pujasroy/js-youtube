function sayMyName(){
    console.log("P");
    console.log("U");
    console.log("J");
    console.log("A");
}

sayMyName(); //() mandatory for execution

// function addTwoNumbers(number1,number2){   //(number1,number2) here are parameters
//     console.log(number1+number2);
// }

// addTwoNumbers(3,4); //(3,4) here are called arguments

function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2;
    console.log("puja"); //anything written beyond return in the scope of the function does not get executed
}

const result=addTwoNumbers(3,5);
console.log("Result: ",result);


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("puja")); //puja just logged in
console.log(loginUserMessage()); //undefined just logged in

function loginUserMessage2(username){
    if (username ===undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2()); //please enter a username
                                  //undefined

//line 34 can also be written as if (!username) {}

function loginUserMessage3(username="sam"){
    if (username ===undefined){                 //this scope remains unexplored because of the default case
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage3()); //sam just logged in =>default case
console.log(loginUserMessage3("puja")); //puja just logged in =>sam overwritten automatically


function calculateCartPrice(...num1){    //...=>rest op
    return num1  
}
console.log(calculateCartPrice(200,400,500,2000)); //[ 200, 400, 500, 2000 ]

function calculateAnotherCart(val1,val2,...num1){
    return num1
}
console.log(calculateAnotherCart(200,400,500,2000)); //[ 500, 2000 ] => 200,400 are taken as val1,val2

// const user={
//     username:"puja",
//     price:199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"puja",
    price:199
})

// const myArray=[200,400,500,1000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,400,500,1000]));



