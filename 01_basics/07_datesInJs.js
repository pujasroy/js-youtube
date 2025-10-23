//Dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

// let myCreatedDate=new Date(2025,0,23,5,33)
// let myCreatedDate=new Date("2025-10-23")
let myCreatedDate=new Date("10-23-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());

// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000)) //=>converts ms to s

let newDate=new Date();
console.log(newDate.getMonth()+1); //=>+1 because indexing starts from 0
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})




