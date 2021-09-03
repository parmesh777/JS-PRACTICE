const array = [
  {
    id: 1,
    name: "vijay",
    age: 36,
    subject: 3,
    totalScore: 100,
  },
  {
    id: 2,
    name: "mounika",
    age: 37,
    subject: 5,
    totalScore: 450,
  },
  {
    id: 3,
    name: "rishi gaadu",
    age: 38,
    subject: 6,
    totalScore: 550,
  },
  {
    id: 4,
    name: "manu gaadu",
    age: 32,
    subject: 3,
    totalScore: 190,
  },
];

//?largest Age approach 1

// let set = array.sort((a, b) => b.age - a.age).shift();
// console.log(set);
// let res = `${set[0].name} have the highest age that is ${set[0].age}`;
// console.log(res);

//?largest Age approach 2

// let maxAge = array[0].age;
// for (let i = 0; i < array.length; i++) {
// console.log(array[i].age);
// if (array[i].age > maxAge) {
//   maxAge = array[i].age;
// console.log((array[i] = maxAge));
//   }
// }
// console.log(maxAge);

//?Average of given sum & checking highest percentage

// let modified = array
//   .map((element) => {
//     return { ...element, percentage: element.totalScore / element.subject };
//   })
//   .sort((a, b) => b.percentage - a.percentage)
//   .find((n) => true);

// console.log(modified);

//?Find the missing number

// let shuffle = [3, 1, 2, 7, 6, 8, 10, 9, 5, 0];
// let set = shuffle.sort((a, b) => a - b);
// console.log(set);
// for (let i = 0; i <= 100; i++) {
//   if (i !== set[i]) {
//     console.log(`${i} is missing`);
//     break;
//   }
// }
