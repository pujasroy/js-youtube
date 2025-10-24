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
