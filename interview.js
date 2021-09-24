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

let shuffle = [3, 1, 2, 8, 10, 5, 0];

// let set = shuffle.sort((a, b) => a - b);
// console.log(set);
// for (let i = 0; i <= 100; i++) {
//   if (i !== set[i]) {
//     console.log(`${i} is missing`);
//     break;
//   }
// }

// const getHighest = (arr1) => {
//   highest = 0;
//   for (i = 0; i < arr1.length; i++) {
//     if (highest < arr1[i]) {
//       highest = arr1[i];
//     }
//   }
//   return highest;
// };

// let large = getHighest(shuffle);

// var newArray = [];
// for (i = 0; i <= large; i++) {
//   newArray.push(i);
// }
// console.log(newArray);

// const missingElements = newArray.filter((ele) => !shuffle.includes(ele));

// console.log(...(missingElements + "  are missing"));

// var a = [5, 3, 6, 8, 10, 13, 9];

// var missing = [];

// const numArr = (arr, min, max) => {
//   for (var i = min; i <= max; i++) {
//     if (arr.indexOf(i) == -1) {
//       missing.push(i);
//     }
//   }
//   console.log(...missing);
// };
// numArr(a, Math.min(...a), Math.max(...a));

var years = [1989, 2015, 2000, 1967, 2013, 1967, 2016];

const output = years.sort((a, b) => b - a);
const largestNum = [output[0], output[1]];
console.log(...largestNum);
