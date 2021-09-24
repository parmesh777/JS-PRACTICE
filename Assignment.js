// let shop = [{ apples: 21 }, { mangoes: 31 }, { oranges: 16 }, { bananas: 8 }];

let fruits = [
  { apples: 4 },
  { mangoes: 4 },
  { oranges: 3 },
  { apples: 3 },
  { mangoes: 6 },
  { apples: 6 },
  { bananas: 4 },
];

let sale = {};
fruits.forEach((t) => {
  let fruit = Object.keys(t);
  // sale[fruit]
  //   ? (sale[fruit] = sale[fruit] + t[fruit])
  sale[fruit] = 1;
  // console.log(sale);
});
console.log(sale, Object.keys(sale));

// const res = Object.keys(sale).filter((f) => f);

// console.log(res);
// console.log(shop);

// const res = shop.filter((v) => {
//   const keys = Object.keys(v);
//   let gg = v[keys] - sale[keys] || v[keys];
//   // console.log(gg, keys);
//   // console.log(`${v}:${v[keys]}  ${sale[keys]} ${v[keys] - sale[keys]}`);
//   // console.log(keys[0], gg);
//   return gg;
// });
// console.log(res);

// var sale = {
//   apples: 5,
//   bananas: 3,
//   grapes: 4,
//   mangoes: 23,
// };
// var catalouge = ["apples", "mangoes", "pineapples", "oranges"];

// console.log(catalouge.filter((f) => !sale[f]));

// const res = Object.keys(sale).filter((f) => !catalouge.includes(f) && f);

// console.log(res);

// let list = [
//   { fruit: "apples", qty: 4 },
//   { fruit: "mangoes", qty: 6 },
//   { fruit: "apples", qty: 4 },
//   { fruit: "mangoes", qty: 5 },
//   { fruit: "apples", qty: 4 },
//   { fruit: "mangoes", qty: 2 },
//   { fruit: "oranges", qty: 4 },
//   { fruit: "bananas", qty: 9 },
// ];

// var catalouge = ["apples", "mangoes", "pineapples", "oranges"];

// let sale = catalouge.filter((f) => f);
// console.log(sale);

// var fruits = ["apple", "mango", "apple", "grape", "apple", "mango"];

// var nums = [5, 9, 8, 5, 4, 8, 2];

// let transactions = [...new Set(fruits)];
// let transactions = nums.filter((value, i, arr) => {
//   // console.log(i);
//   // console.log(value);
//   return arr.indexOf(value) == i;
// });

// console.log(transactions);

// let unq = nums.reduce((acc, curr) => {
//   return acc.includes(curr) ? acc : [...acc, curr];
// }, []);

// var uniq = fruits.reduce(function (acc, curr) {
//   console.log(acc.indexOf(curr) < 0);
//   if (acc.indexOf(curr) < 0) acc.push(curr);
//   return acc;
// }, []);

// console.log(uniq);
