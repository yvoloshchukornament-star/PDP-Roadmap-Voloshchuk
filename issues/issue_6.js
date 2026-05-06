/**
 * Level - Normal
 * Task - 1
 * Реалізуйте алгоритм, який обчислює степінь числа task1base в степені task1power використовуючи 
 * for, while, do..while оператори
 * Призначте результат відповідній змінній
 * ПРИМІТКА: не використовуйте Math.pow() або оператор **
 * Підказка: 2^3 = 2 * 2 * 2 = 8
 */
 
let task1ForPower = 1;
let task1WhilePower = 1;
let task1DoPower = 1;
 
const task1base = 2;
const task1power = 5; // 2^5 = 32
 

// Task - 1:1: алгоритм з "for"
for (let a = 0; a < task1power; a++){
    task1ForPower *= task1base;
}
 
// Task - 1:2: алгоритм з "while"
let b = 0;
while (b < task1power){
    task1WhilePower *= task1base;
    b++
}
 
// Task - 1:3: алгоритм з "do"
let c = 0;
do{
    task1DoPower *= task1base;
    c++
} while (c < task1power);

console.log(task1ForPower);
console.log(task1WhilePower);
console.log(task1DoPower);
 
/**
 * Level - Normal
 * Task - 2
 * Реалізуйте алгоритм, який створить рядок з кожного третього елемента масиву чисел
 * Збережіть результат у змінній task2Res
 * Підказка: ви можете використовувати цикли з числами для доступу до елементів масиву
 */
 
const task2Array = [10, 20, 30, 40, 50, 60, 70, 80, 90]; // => "306090"
let task2Res = '';
for (let d = 2; d < task2Array.length; d += 3){
    task2Res += task2Array[d] + ' ';
}
console.log(task2Res);
 
/**
 * Level - Normal
 * Task - 3
 * Реалізуйте алгоритм, який створить масив чисел у зворотному порядку з кроком 3
 * УВАГА!!! - елементи повинні братись з кінця до початку
 * Збережіть результат у змінній task3Res (це має бути масив)
 * ПРИМІТКА: не використовуйте метод array.reverse()
 */
 
const task3Array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]; // => [50, 35, 20, 5]
let task3Res = [];
 for (let e = task3Array.length - 1; e >= 0; e -= 3){
    task3Res.push(task3Array[e]);
 }
 console.log(task3Res);