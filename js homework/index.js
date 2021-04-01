//1)максимальное - минимальное
// arr = [1, 2, 3, 36, 2];

// min = arr[0];
// max = arr[0];
// arr.forEach((elem) => {
//   if (elem < min) {
//     min = elem;
//   }

//   if (elem > max) {
//     max = elem;
//   }
// });

// console.log(min, max);

//2)среднее арифмитичесское
// const arr = [12, 15, 20, 25, 59, 79];
// let sumArr = arr.reduce((a, b) => a + b);
// console.log(sumArr / arr.length);

//---------------------------------------------------------------------------

//1) Проверка на строку
// function hasElem(array, string) {
//   console.log(array.includes(string));
// }
// //2) Проверка на число
// function hasElem(array, num) {
//   console.log(array.includes(num));
// }

//3) проверка одинаковых

//------------------------------------------------------------------------------

//1concat>
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

//--

//2reverse>
// const arrReverse = [1, 2, 3];
// const reverseArr = arrReverse.reverse();
// console.log(reverseArr);

//--

//3push-unshift>
// const arr1 = [1, 2, 3];
// arr1.push(3, 4, 5);
// console.log(arr1);

// const arr2 = [1, 2, 3];
// arr2.unshift(4, 5, 6);
// console.log(arr2);

//--

//4shift, pop>
// const arr1 = ["js", "css", "jq"];
// console.log(arr1.pop());

// const arr2 = ["js", "css", "jq"];
// console.log(arr2.pop());

//--

//5slice>
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.slice(0, 3);
// console.log(arr2);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.slice(3, 5);
// console.log(arr2);

//--

//6splice>
// const arr1 = [1, 2, 3, 4, 5];
// const arr1Spliecd = arr1.splice(1, 2);
// console.log(arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const arr2Spliecd2 = arr2.splice(3, 0, "a", "b", "c");
// console.log(arr2);

// const arr3 = [1, 2, 3, 4, 5];
// const arr3Spliecd3 = arr3.splice(1, 0, "a", "b", "c");
// console.log(arr3);

//--

//7sort>
// const arr1 = [3, 4, 1, 2, 7];
// arr1.sort();
// console.log(arr1);

//--

//8Object.keys
// const arr1 = {
//   js: "test",
//   jq: "hello",
//   css: "world",
// };

// console.log(Object.keys(arr1));
