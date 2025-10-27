//Immediately Invoked Function Expressions IIFE

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})();

//()()=>to execute fn immediately & remove pollution caused by global scope elements
//use ';' explicitly to end the fn

((name)=>{
    console.log(`DB connected two ${name}`);
})("puja") 