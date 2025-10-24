// const tinderUser1=new Object() //singleton
const tinderUser={} //non-singleton
// console.log(tinderUser1);

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Puja",
            middlename:"Sinha",
            lastname:"Roy"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj3={obj1, obj2} =>objects inside object

const obj4=Object.assign({},obj1,obj2,obj3) //{} acts as target and obj1,obj2,obj3 as source
console.log(obj4);

const obj5={...obj1,...obj2} //spread op, same as in arrays
console.log(obj5);

const users=[
    {
        id:1,
        email:"puja@gmail.com"
    },
    {
        id:2,
        email:"puja@gmail.com"
    },
    {
        id:3,
        email:"puja3@gmail.com"
    }
]

console.log(users[1].id)
console.log(users[2]["email"]);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));







