/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
 
/**
 * Level - Easy
 * Task - 1
 * Реалізуйте алгоритм, який обчислить добуток чисел від 1 до 5 (включно)
 * Використайте 3 різні цикли: for | while | do..while
 * Збережіть результат у відповідні змінні: task1For, task1while, task1Do
 */
 
let task1For = 1;
for(let a = 1; a <= 5; a++){
  task1For *= a;
};
console.log(task1For)

let task1while = 1;
let b = 1;
while(b <= 5) {
  task1while *= b;
  b++;
};
console.log(task1while)

let task1Do = 1;
let c = 1;
do{
  task1Do *= c;
  c++;
} while(c <= 5)
 console.log(task1Do)
 
/**
 * Level - Easy
 * Task - 2
 * Реалізуйте алгоритм, який
 * обчислить суму всіх парних чисел від start до end (включно)
 * Використайте цикл for
 * Збережіть результат у змінній task2Res
 * ПІДКАЗКА: використайте оператор % для перевірки парності
 */
 
const start = 10;
const end = 50;
let task2Res = 0;

for(let a = start; a <= end; a++){
  if (a % 2 === 0) {
    task2Res += a;
  }
}
console.log(task2Res)

 
/**
 * Level - Easy
 * Task - 3
 * Реалізуйте алгоритм, який
 * створить рядок з масиву слів, розділених пробілами
 * Використайте цикл for..of
 * Збережіть результат у змінній task3Res
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 */
 
const task3Array = ['Hello', 'world', 'from', 'JavaScript']; 
let task3Res = '';

for (const word of task3Array) {
  task3Res += word + ' ';
};
task3Res = task3Res.trim();
console.log(task3Res);
 
/**
 * Level - Easy
 * Task - 4
 * Обчисліть загальну кількість товарів на складі
 * Призначте результат змінній 'task4TotalItems'
 * Використайте цикл for..in
 */
 
let task4TotalItems = 0;
const task4warehouse = {
  laptops: 45,
  phones: 120,
  tablets: 67,
  monitors: 33,
  keyboards: 89,
};
for (const key in task4warehouse) {
  task4TotalItems += task4warehouse[key];
};
console.log(task4TotalItems);