/**
 * Additional Reading:
 *
 * https://uk.javascript.info/variables
 * https://uk.javascript.info/types
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
 * https://uk.javascript.info/operators
 * https://uk.javascript.info/type-conversions
 */

const { console } = require("inspector");

 
/**
 * Level - Easy
 * Task - 1
 * Створіть змінну "var" з іменем age та встановіть значення 25
 */

 
  var age = 25;
  console.log(age);
 
/**
 * Level - Easy
 * Task - 2
 * Створіть змінну "let" з іменем userName та встановіть значення "Maria"
 */
 
let userName = 'Maria';
console.log(userName);
 
/**
 * Level - Easy
 * Task - 3
 * Створіть змінну "const" з іменем isActive та встановіть значення true
 */
 
const isActive = true;
console.log(isActive);


 
// !!! Починаючи з цього рядка рекомендується використовувати `let` (або const якщо застосовно)
 
/**
 * Level - Easy
 * Task - 4
 * Створіть змінну emptyValue та встановіть значення null
 */
 
let emptyValue = null;
console.log(emptyValue);
 
/**
 * Level - Easy
 * Task - 5
 * Створіть змінну notDefined та встановіть значення undefined
 */
 
const notDefined = undefined;
console.log(notDefined);
 
/**
 * Level - Easy
 * Task - 6
 * Створіть змінну numbers та встановіть значення як масив чисел від 10 до 15
 */
 
let numbers = [10, 11, 12, 13, 14, 15];
console.log(numbers[3]);
 
/**
 * Level - Easy
 * Task - 7
 * Створіть змінну emptyList та встановіть значення як порожній масив
 */
 
let emptyList = [];
console.log(emptyList);
 
/**
 * Level - Easy
 * Task - 8
 * Створіть змінну fruits та встановіть значення як порожній масив
 * зробіть другий елемент масиву рівним 'Apple'
 */
 
let fruits = [];
fruits[1] = 'Apple';
console.log(fruits);
 
/**
 * Level - Easy
 * Task - 9
 * Створіть змінну thirdItem та встановіть значення як третій елемент масиву numbers
 * ПРИМІТКА: використайте змінну numbers
 */

let numbers9 = [10, 11, 12, 13, 14, 15];
let thirdItem = numbers9[2];
console.log(thirdItem);
 
/**
 * Level - Easy
 * Task - 10
 * Створіть змінну sumResult та встановіть значення як суму першого та останнього елементів масиву numbers
 * ПРИМІТКА: використайте змінну numbers
 */
 
let numbers10 = [10, 11, 12, 13, 14, 15];
let sumResult = numbers10[0] + numbers10[5];
console.log(sumResult);
 
/**
 * Level - Easy
 * Task - 11
 * Створіть змінну tripleAge та встановіть значення як age помножене на 3
 * ПРИМІТКА: використайте змінну age
 */
 
 const age = 25;
 let tripleAge = 25 * 3;
  console.log(tripleAge);

/**
 * Level - Easy
 * Task - 12
 * Створіть змінну greeting та встановіть значення як "Hello, " потім userName, потім "!"
 * ПРИМІТКА: Використайте змінну userName. Результат має бути типу "Hello, Maria!"
 */
 
let userName12 = 'Maria';
let greeting = 'Hello ' + userName12 + '!'; //конкотинація
console.log(greeting)

/**
 * Level - Easy
 * Task - 13
 * Створіть змінну comparison та встановіть значення як нестроге порівняння на рівність 
 * змінних age та tripleAge
 */
 
let age = 25;
let tripleAge13 = 25 * 3;
let comparison = age == tripleAge13;

console.log(comparison);
 
/**
 * Level - Easy
 * Task - 14
 * Створіть змінну strictCheck та встановіть значення як строге порівняння на рівність 
 * змінної age зі строкою "25"
 * ПРИМІТКА: має бути використана строка
 */
 
let age14 = 25
let strictCheck = age14 === '25';

console.log(strictCheck);
 
/**
 * Level - Easy
 * Task - 15
 * Створіть змінну noValue та встановіть значення undefined без використання слова "undefined"
 */
 
let noValue;

console.log(noValue);
 
/**
 * Level - Easy
 * Task - 16
 * Створіть змінну person та встановіть значення як об'єкт з ключем name та значенням "Alice"
 */
 
let person = {
  name: 'Alice'
};

console.log(person.name);
 
/**
 * Level - Easy
 * Task - 17
 * Додайте новий ключ/властивість до об'єкта person з іменем age та значенням 30
 */
 
let person17 = {
  name: 'Alice',
  //age: 30
};
person17.age = 30;
console.log(person17.name);
console.log(person17.age);
  
/**
 * Level - Easy
 * Task - 18
 * Додайте новий ключ/властивість до об'єкта person з іменем info, значення якого буде конкатенацією name, слова " is ", та age
 * ПРИМІТКА: використайте об'єкт person в цьому завданні
 */
 
let person18 = {
  name: 'Alice',
  age: 30,
};
person18.info = `${person18.name} is ${person18.age}`;
console.log(person18.info);