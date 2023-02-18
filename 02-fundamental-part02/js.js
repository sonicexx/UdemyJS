'use strict';
///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const Dophins1 = [44, 23, 71]
// const Koalas1 = [65, 54, 49]
// const Dophins2 = [85, 54, 41]
// const Koalas2 = [23, 34, 27]

// const reducer = (a, b)=>a+b
// const calcAver = team => (team.reduce(reducer) / team.length).toFixed(2)

// const averDophins1 = calcAver(Dophins1)
// const averKoalas1 = calcAver(Koalas1)
// const averDophins2 = calcAver(Dophins2)
// const averKoalas2 = calcAver(Koalas2)
// console.log({averDophins1, averKoalas1, averDophins2, averKoalas2});

// const checkWinner = function(a, b){
//     console.log({a, b});
//     if(a >= 2*b){
//         console.log(`Dophins is win(${a})`);
//     }else if(b >= 2*a){
//         console.log(`Koalas is win(${b})`);
//     }else if(a === b){
//         console.log(`is draw(${a})`);
//     }else{
//         console.log(`no win, Dophins(${a}):Koalas(${b})`);
//     }
// }
// checkWinner(averDophins2, averKoalas2)

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const value = [125, 555, 44]
// const calcTip = function(data){
//     return data>50 && data<300 ? data*.2 : data*.15
// }
// const bill = []
// value.forEach(item=>{
//     bill.push(calcTip(item))
// })
// const reducer = (a, b)=>a+b
// const total = bill.reduce(reducer)
// console.log({bill, total});

// const arr = [1,'2',3]
// console.log(arr + 2);   //1,2,32
// console.log(arr - 1);  //NaN

// Object
// const gangdan = {
//     name:'gandan',
//     frends:['tiechui', 'chanbing', 'huimian'],
//     job:'teacher',
//     hasDriverlicense:true,

//     calcAge:function(){
//         console.log(this);
//         this.age = 2023 - this.birthYear
//         return this.age
//     },
//     birthYear:1998,

//     //************
//     getSummary: function(){
//         return `gangdan is a ${this.calcAge()}-yaer old teacher, and he has ${this.hasDriverlicense ? 'a':'no'} driver's license`
//     }
// }

// console.log(gangdan);
// // log this (gangdan is a 46-yaer old teacher, and he has a/no driver's license)
// console.log(gangdan.getSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//     name:'Marks',
//     weights: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.BMI = +(this.weights / this.height**2).toFixed(2)
//         return this.BMI
//     }
// }
// const john = {
//     name:'John',
//     weights: 92,
//     height: 1.95,
// }
// console.log(mark, john);
// john.calcBMI = mark.calcBMI

// if(mark.calcBMI() > john.calcBMI()){
//     console.log(`${mark.name}'s BMI(${mark.BMI}) is higher than john(${john.BMI})`);
// }else if(mark.BMI < john.BMI){
//     console.log(`${mark.name}'s BMI(${mark.BMI}) is lower than john(${john.BMI})`);
// }else{
//     console.log(`is draw(${mark.BMI})`);
// }
// console.log(mark, john);

// const gangdan = [1, 2, 3, 4, '5', '6', 7, [1, 2, 3], () => 1];

// for (let i of gangdan) {
//   if (typeof i === 'string') continue;
//   console.log(i);
// }
// 1,2,3,4,7,[1,2,3],()=>1

// for (let i of gangdan) {
//   if (typeof i === 'string') break;
//   console.log(i);
// }
//1,2,3,4

// let dice = Math.floor(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(dice);
//   dice = Math.floor(Math.random() * 6) + 1;
//   dice === 6 && console.log('nice');
// }

const gangdan = {
  name: 'gangdan',
  birth: 1998,
  calcAge: function () {
    console.log(this);
    this.age = 2023 - this.birth;
    return this.age;
  },
  getSum: function () {
    return `a ${this.calcAge()} year-old`;
  },
};

console.log(gangdan.calcAge());
console.log(gangdan.getSum());
