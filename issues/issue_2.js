/**
 * Additional Reading:
 *
 * https://uk.javascript.info/comparison
 * https://uk.javascript.info/ifelse
 *   or https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 *   and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * https://uk.javascript.info/logical-operators
 */

const { console } = require("inspector");

 
/**
 * Level - Easy
 * Task - 1
 * Реалізуйте умову для змінної score:
 * якщо score більше або дорівнює 60 - task1 має дорівнювати "Pass"
 * якщо score менше 60 - task1 має дорівнювати "Fail"
 */
 
const score = 75;
let task1;
if (score >= 60) {
    task1 = 'Pass';
}else {
    task1 = 'Fail';
}
console.log(task1);
 
const score1 = 75;
let task11 = (score1 >= 60) ? 'Pass' : 'Fail';
console.log(task11);
 
/**
 * Level - Easy
 * Task - 2
 * Реалізуйте умову для змінної temperature:
 * якщо temperature більше 30 - task2 має дорівнювати "Hot"
 * якщо temperature від 10 до 30 (включно) - task2 має дорівнювати "Warm"
 * якщо temperature менше 10 - task2 має дорівнювати "Cold"
 */
 
const temperature = 22;
let task2;
if (temperature > 30) {
    task2 = 'Hot';
} else if (temperature >= 10 && temperature <=30) {
    task2 = 'Warm';
} else {
    task2 = 'Cold';
}
console.log(task2);
 
/**
 * Level - Easy
 * Task - 3
 * Реалізуйте логіку
 * коли b3 парне число - task3 дорівнює різниці a3 та b3
 * коли b3 непарне число - task3 дорівнює добутку a3 та b3
 * ПІДКАЗКА: використайте оператор залишку від ділення %
 */
 
let task3;
const a3 = 5;
const b3 = 8;
if (b3 % 2 !== 0) {
task3 = a3 * b3;
} else{
task3 = a3 - b3;
}
 console.log(task3);
 
/**
 * Level - Easy
 * Task - 4
 * Реалізуйте ту ж логіку що і в Task 3
 * призначте результат змінній task4, але використайте тернарний оператор замість if-else
 * ПРИМІТКА: a3 та b3 використовуються з Task 3
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
 
const a4 = 5;
const b4 = 8;
let task4 = (b4 % 2 === 0) ? a4 - b4 : a4 * b4;
 console.log(task4);
 
// ваш код тут
 
/**
 * Level - Easy:
 * Task - 5
 * У вас є 2 числа ("value1" та "value2") та "operation".
 * "operation" зараз дорівнює "max", але може бути - "max" або "min" або "average" або "power".
 *
 * Реалізуйте логіку так, щоб код
 * виконував відповідну операцію для "value1" та "value2" на основі параметра "operation".
 * наприклад "max" - більше з двох чисел; "min" - менше з двох чисел
 * "average" - середнє арифметичне; "power" - value1 в степені value2
 * Призначте результат змінній task5
 * ПІДКАЗКА: для степеня використайте Math.pow(value1, value2) або value1 ** value2
 */
 
let task5;
const value1 = 4;
const value2 = 2;
const operation = 'max';

if (operation === 'max'){
    task5 = Math.max(value1, value2);
} else if (operation ==='min'){
    task5 = Math.min(value1, value2);
} else if (operation === 'average'){
    task5 = (value1 + value2) / 2;
} else if (operation === 'power'){
    task5 = Math.pow(value1, value2);
} else {
    throw new Error ('Кряква заплуталась');
}

console.log(task5);
 
/**
 * Level - Easy
 * Task - 6
 * Призначте task6 значення, яке є протилежним до isVisible
 * ПРИМІТКА: Використайте логічний оператор NOT
 */
 
const isVisible = true;
let task6;
if (isVisible === true) {
    task6 = !isVisible;
}
console.log(task6);
 
/**
 * Level - Easy
 * Task - 7
 * Модифікуйте код нижче, щоб task7 дорівнювало false
 * ПРИМІТКА: Використайте логічний оператор
 */
 
const flag1 = false;
const flag2 = false;
let task7 = flag1 && flag2;
console.log(task7);

const flag11 = false;
const flag21 = false;
let task71 = flag11 || flag21;
console.log(task71);



 