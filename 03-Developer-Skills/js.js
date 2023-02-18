// BUG TODO
// const degrees = [10, 20, 30, 45, "err", 10];
// const newDe = [1, 2, 3, 4, "err"];
// const temp = degrees.concat(newDe);

// const calcTemp = function (temps) {
//   const temp = temps.filter((item) => typeof item === "number");
//   const max = Math.max(...temp);
//   const min = Math.min(...temp);
//   console.log({ max, min, temp: max - min });
// };
// calcTemp(degrees);
// calcTemp(temp);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1.数组 =》 字符串
// 2.天数为索引值

// 拆解为子问题
// 1.  ①数组中的数字转为字符串；  ②并且在数字后添加 度数符号
// 2.  索引值 + 1的天数

// const arr1 = [17, 21, 23];
// const arr2 = [12, 5, -5, 0, 4];
// const a = 'a';
// let nice = a => 1;

// const printForecast = function (arr) {
//   const res = `...${arr
//     .map((item, index) => `${item}'c in ${index + 1} days`)
//     .join('...')}...`;
//   console.log(res);
// };

// printForecast(arr1);
// printForecast(arr2);
