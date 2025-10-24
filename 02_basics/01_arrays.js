//array
//=>resizable and can contain a mix of diff datatypes
//array copy ops create shallow copies (props share same references)
//not deep copies which share diff references

const myArr=[0,1,2,3,4,5]

const myHeroes=["doraemon","hatori"]

const myArr2=new Array(1,2,3,4)

// console.log(myArr[1]);

//array methods
// myArr.push(6);
// myArr.push(7); //adds elements
// myArr.pop(); //removes the last element
// myArr.unshift(9); //inserts 9 at the beginning
// myArr.shift(); //removes element from the beginning

/* array atp is 
[
  0, 1, 2, 3,
  4, 5, 6
]
*/

// console.log(myArr)
// console.log(myArr.includes(9)) //boolean value
// console.log(myArr.indexOf(5)); //5
// console.log(myArr.indexOf(19)); //-1

// const newArr=myArr.join(); //binds the array in the form of a string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice
console.log("A ",myArr);
const myn1=myArr.slice(1,3);

console.log(myn1);
console.log("B ",myArr); //array remains unchanged

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr); //splice portion gets removed from the array


