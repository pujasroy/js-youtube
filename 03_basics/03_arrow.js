const user={
    username:"puja",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`); //this is used to refer to current context
        console.log(this);
    }
}

user.welcomeMessage() //puja, welcome to website
                      //{
                      //username: 'puja',
                      //price: 999,
                      //welcomeMessage: [Function: welcomeMessage]
                      //}
user.username="sam" //current context is modified
user.welcomeMessage() //sam, welcome to website =>values not hardcoded in the console statement
                      ////{
                      //username: 'sam',
                      //price: 999,
                      //welcomeMessage: [Function: welcomeMessage]
                      //}
console.log(this); //{} =>returns empty object within node env
//this same console.log(this) returns Window in browser because Window is the global object in browser
 

function myself(){
    let username="puja"
    console.log(this); //returns many values
}
myself()
 
function chai(){
    let username="puja"
    console.log(this.username); //returns undefined as this can be accessed only inside object and not inside fn
}
chai()

const tea=function(){
    let username="puja"
    console.log(this.username); //also returns undefined
}
tea();

//Arrow function

const coffee=()=>{
    let username="puja"
    console.log(this);
}
coffee() //{}

// const addTwo=(num1,num2)=>{
//     return num1+num2  //explicit return
// }

// const addTwo=(num1,num2)=>num1+num2 //implicit return
// const addTwo=(num1,num2)=>(num1+num2)

//=>return keyword to be mentioned within {}
//=>return keyword removed within ()

const addTwo=(num1,num2)=>({username:"puja"}) //returns undefined if not wrapped inside ()
console.log(addTwo(3,4)); //{ username: 'puja' }
