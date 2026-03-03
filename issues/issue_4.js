/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
 * https://uk.javascript.info/operators
 */
 
/**
 * Level - Normal
 * Task - 1
 * Створіть змінну з іменем emptyArr та встановіть значення як порожній масив використовуючи конструктор Array
 * ПРИМІТКА: використайте синтаксис `new Array`
 */
 
let emptyArr = new Array();
console.log(emptyArr)
 
/**
 * Level - Normal
 * Task - 2
 * Створіть змінну з іменем arr5 та встановіть значення як масив довжиною 5 з порожніми елементами
 * використайте конструктор Array
 * ПРИМІТКА: використайте синтаксис `new Array`
 */
 
let arr5 = new Array(5);
console.log(arr5);
 
/**
 * Level - Normal
 * Task - 3
 * Створіть змінну з іменем mixedArr та встановіть значення як масив довжиною 5 з наступними елементами:
 * перший елемент = "start"
 * другий елемент = 42
 * третій елемент = true
 * четвертий елемент = undefined
 * п'ятий елемент = "end"
 * використайте конструктор Array
 * ПРИМІТКА: використайте синтаксис `new Array`
 */
 
let mixedArr = new Array(5);
mixedArr[0] = "start";
mixedArr[1] = 42;
mixedArr[2] = true;
mixedArr[3] = undefined;
mixedArr[4] = "end";
console.log(mixedArr)