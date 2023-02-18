/************************************* Coding challenge #1
let MarkM, MarkH, JohnM, JohnH

MarkM = 95
MarkH = 1.88
JohnM = 95
JohnH = 1.76

let MarkBMI = +(MarkM / (MarkH ** 2)).toFixed(2)
let JohnBMI = +(JohnM / (JohnH ** 2)).toFixed(2)
console.log({MarkBMI, JohnBMI});

let markHigherBMI
if(MarkBMI > JohnBMI) markHigherBMI = true
else markHigherBMI = false
markHigherBMI = MarkBMI > JohnBMI? true:false
console.log(markHigherBMI);
*/


/************************************* Coding challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// let MarkM, MarkH, JohnM, JohnH
// MarkM = 95
// MarkH = 1.88
// JohnM = 95
// JohnH = 1.76

// let MarkBMI = +(MarkM / (MarkH ** 2)).toFixed(2)
// let JohnBMI = +(JohnM / (JohnH ** 2)).toFixed(2)
// console.log({MarkBMI, JohnBMI});

// const markHigherBMI = MarkBMI > JohnBMI
// console.log(markHigherBMI);
// if(markHigherBMI) console.log(`Mark's ${MarkBMI} is higher than John's BMI ${JohnBMI}!`);
// else console.log(`John's BMI ${JohnBMI} is higher than Mark's ${MarkBMI}!`);

// MarkBMI > JohnBMI ? 
// console.log(`Mark's ${MarkBMI} is higher than John's BMI ${JohnBMI}!`):
// console.log(`John's BMI ${JohnBMI} is higher than Mark's ${MarkBMI}!`);




////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const Dolphins = [97, 118, 101]
// const Dolphins = [9, 95, 123]
// const Koalas = [9, 95, 123]

// const reducer = (a,b)=>a+b
// const averDolphins = Dolphins.reduce(reducer) / Dolphins.length
// const averKoalas = Koalas.reduce(reducer) / Koalas.length

// console.log({averDolphins, averKoalas});
// if(averDolphins > averKoalas)console.log(`Dophins(${averDolphins.toFixed(2)}) is heigher than Koalas(${averKoalas.toFixed(2)})`);
// else if(averDolphins === averKoalas)console.log(`is draw(${averDolphins.toFixed(2)})`);
// else console.log(`Koalas(${averKoalas.toFixed(2)}) is heigher than Dophins(${averDolphins.toFixed(2)})`);

// if(averDolphins>averKoalas && averDolphins>=100)console.log(`Dolphins is win(${averDolphins.toFixed(2)})`);
// else if(averDolphins===averKoalas && averDolphins>=100)console.log(`is draw(${averDolphins.toFixed(2)})`);
// else if(averDolphins===averKoalas)console.log(`no teams win${averDolphins.toFixed(2)}`);
// else if(averKoalas>averDolphins && averKoalas>=100)console.log(`Koalas is win(${averKoalas.toFixed(2)})`);
// else console.log(`no teams win,D(${averDolphins.toFixed(2)}):K(${averKoalas.toFixed(2)})`);



////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const value = 430
const tip = value>50 && value<300 ? value*.2 : value*.15
console.log(`the bill was ${value}, the tip was ${tip}, and the total value ${value + tip}`);