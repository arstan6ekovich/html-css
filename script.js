// let options = {
//   title: "Меню"
// };

// let {width=100, height=200, title} = options;

// alert(title);  // Меню
// alert(width);  // 100
// alert(height); // 200

"use strict";



// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Пончик", "Пирожное"]
// }

// let { title="Меню", size: {width, height}, items: [item1, item2] } = options;

// // Меню 100 200 Пончик Пирожное
// console.log(title);  // Меню
// console.log(width);  // 100
// console.log(height); // 200
// console.log(item1);  // Пончик
// console.log(item2);  // Пирожное

// const [item1, item2] = ["Marlen", "Mar4ik"];
// console.log(`${item1} ${item2}`);

// let arr = [
//   {
//     title: "Marlen",
//     age: 26,
//   },
//   {
//     title: "Iphone 12",
//     age: 26,
//   },
//   {
//     title: "Marlen Dev",
//     age: 26,
//   },
//   {
//     title: "Iphone 14 pro",
//     age: 26,
//   },
// ];

// function checkTask(str, arr) {
//   return str.filter((el) =>
//     el.title.toUpperCase().includes(arr.toUpperCase() || el.age.toUpperCase().includes(arr.toUpperCase()))
//   );
// }

// console.log(checkTask(arr, prompt()));

// function checkTask(arr) {
//     let res = []
//     for(let i of arr) {
//         arr.unsrift(i)
//     }
// return res
// }

// console.log(checkTask([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

let coverString = (str) => str.trim("_");

console.log(coverString("hello_world"));
