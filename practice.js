// 'use strict';

// console.log('Hey ya');

// function User(uName, email) {
//   this.uName = uName;
//   this.email = email;
//   console.log(this);
// }
// const user = new User('rishi', 'nekkendhukura@gmail.com');
// const rishi = new User('vijay', 'kk');
// console.log(User.prototype);

// constructor function
// function Person() {
//   this.name = 'John';
// }

// add a property
// Person.prototype.age = 20;

// creating an object
// const person1 = new Person();

// console.log(person1.age); // 20

// changing the property value of prototype
// Person.prototype = { age: 50 };

// creating new object
// const person3 = new Person();

// console.log(person3.age); // 50
// console.log(person1.age); // 20

// console.log(test);

// const pp = {
//   gg: 'hh',
//   hh: 'hh',
// };

// let sym1 = Symbol(pp.gg);
// let sym2 = Symbol(pp.hh);
// console.log(sym1 === sym2);
// let id = Symbol('sym1');
// alert(id);

// const person76 = {
//   name: 'harish',
// };
// const person98 = Object.create(person76, { ok: { value: 'EmployeeOne' } });
// console.log(person98);
// console.log(person76);

// var a = 'Hello';

// function first() {
//   var b = 'Hi';
//   second();

//   function second() {
//     var c = 'Hey';
//     console.log(a + b + c);
//   }
// }

// first();
// console.log(a);
// var a = 'f';

// var userData = [
//   { name: 'paramesh', age: 24, gender: 'male' },
//   { name: 'rishi', age: 34, gender: 'male' },
//   { name: 'vijay', age: 14, gender: 'male' },
//   { name: 'mounika', age: 24, gender: 'female' },
//   { name: 'charishma', age: 18, gender: 'female' },
//   { name: 'manohar', age: 32, gender: 'female' },
// ];

// let paramesh = userData.map(user => {
//   return user;
// });

// for (let i = 0; i < paramesh.length; i++) {
//   console.log(paramesh[i]);
// }

// console.log(paramesh);

// console.log(parseInt('23px'));
// console.log(Number('px23'));
// let years = [12, 13, 14];
// console.log(years);
// let rag = [...years];
// console.log(rag);

// first();
// function first() {
//   var b = 'hlo';
//   second();
//   function second() {
//     var c = 'hey';
//     console.log(a + b + c);
//   }
// }
// var a = 'Hi';

// function Sum(val1, val2) {
//   var result = val1 + val2;
// }

// var result = Sum(5, 5);
// alert(result);
// const person = {
//   name: 'jonas',
//   age: '38',
// };
// let person1 = { ...person, employeeId: '12' };
// console.log(person1);
// console.log(person1);

// expected output: "My name is Matthew. Am I human? true"
// const her3 = { ...her, ...her2, mowa: 'rishi' };
// console.log(her3);
// console.log(Symbol() === Symbol());
// console.log(bg);
// let bg;
// const her = {
//   name: 'gnyavi',
//   age: '4',
// };

// const her2 = {
//   ...her,
// };
// console.log(her);
// console.log(her2);
// let f = ['d', 'd', 'g'];
// let d = [...f];
// console.log(...f);
// console.log(...d);

// function ok(gg = 'gh') {
//   console.log(gg);
// }
// ok(undefined);
// ok(null);

// async function checkAsync() {
//   console.log(98);
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// console.log(res);

//   console.log(100);
// }
// checkAsync();
// var names = [2, 6, 4, 8, 9, 5];
// function fd(names) {
//   return names.includes(8) && `${names.indexOf(8)} is the index of given args `;
// console.log(a);
// console.log(args);
// return `${a} & ${args}`;
// return args.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(fd(names));

// var names = ["rishi", "parmesh", "vijay", "harish", "jassu"];

// console.log(names);

// var ages = new Array(20, 21, 32, 56);
// console.log(ages);
// var person = {};

//?async/await

// console.log(98);
// async function checkAwait() {
//   const data = "parmesh";
//   const res = await data;
//   return res;
// }

// console.log(100);
// checkAwait();

//?shallow comparision

let d = "vasu";
let e = "vasu";
console.log(d === e);

let a = [1, 2, 3];
let b = [1, 2, 3];
let c = a;
console.log(a === b);
console.log(a === c);
