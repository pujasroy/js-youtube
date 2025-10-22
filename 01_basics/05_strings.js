const name="Puja";
const repoCount=50;

// console.log(name+repoCount+" Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //string interpolation

const gameName=new String('Puja-hc')

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('j'));

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-7,4)
console.log(anotherString)

/*
Index:0,1,2,3,4,5,6
Char:P,u,j,a,-,h,c
Neg. Index:-7,-6,-5,-4,-3,-2,-1
A negative index counts backward from the end of the string. -7 corresponds to the character at index 0 (P).
The slice() method extracts up to, but not including, the character at the endIndex.
output:Puja
*/

const newStringOne="   Puja   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://puja.com/puja%20sinharoy"
console.log(url.replace('%20','-'))
console.log(url.includes('Puja'))

console.log(gameName.split('-'))