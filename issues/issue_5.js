/**
 * Level - Normal:
 * Task - 1
 * У вас є 2 числа ("val1" та "val2") та "action".
 * "action" зараз дорівнює "max", але може бути - "max" або "min" або "average" або "remainder".
 *
 * Реалізуйте логіку так, щоб код
 * виконував відповідну операцію для "val1" та "val2" на основі параметра "action".
 * наприклад "max" - більше з двох чисел; "min" - менше з двох чисел
 * "average" - середнє арифметичне; "remainder" - залишок від ділення val1 на val2
 * Призначте результат змінній task1
 *
 * Реалізуйте логіку використовуючи "switch-case"
 * Підказка: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */
 
let task1;
const val1 = 15;
const val2 = 4;
const action = 'max';

switch (action){
    case 'max':
    task1 = Math.max(val1, val2);
    break;

    case 'min':
    task1 = Math.min(val1, val2);
    break;

  case 'average':
    task1 = (val1 + val2) / 2;
    break;

  case 'remainder':
    task1 = val1 % val2;
    break;

  default:
    task1 = 'Щось пішло не так!';
}
 console.log(task1);
 
/**
 * Level - Normal
 * Task - 2
 * Реалізуйте умову для змінної userAge:
 * якщо userAge більше або дорівнює 65 - category має дорівнювати "senior"
 * якщо userAge менше 65 та більше або дорівнює 18 - category має дорівнювати "adult"
 * якщо userAge менше 18 та більше 0 - category має дорівнювати "minor"
 * інакше - category має дорівнювати null
 * призначте category змінній task2
 * ПРИМІТКА: це завдання лише для навчальних цілей
 */
 
const userAge = 25;
let category;
let task2;

if(userAge >= 65){
  category = 'senior';
} else if(userAge >= 18 && userAge < 65) {
  category = 'adult';
} else if(userAge > 0 && userAge < 18) {
  category = 'minor';
} else{
  category = null;
}
task2 = category;
console.log(task2);
 
/**
 * Level - Normal
 * Task - 3
 * Напишіть логіку, яка обчислить вартість доставки залежно від 'orderWeight' (вага замовлення в кг)
 * Правила наступні:
 * | Вага замовлення (кг) | Вартість доставки
 * | від 0    до  5       |  50 грн
 * | від 6    до  15      |  100 грн
 * | від 16   до  30      |  150 грн
 * | від 31   до  50      |  200 грн
 * призначте результат змінній 'task3'
 */
 
const orderWeight = 12;
let task3;
 
if(orderWeight > 0 && orderWeight <= 5){
  task3 = '50 грн';
} else if(orderWeight >= 6 && orderWeight <= 15){
  task3 = '100 грн';
} else if(orderWeight >= 16 && orderWeight <= 30){
  task3 = '150 грн';
} else if(orderWeight >= 31 && orderWeight <= 50){
  task3 = '200 грн';
} else{
  task3 = '+ 5 грн за 50+1 кг';
}
console.log(task3);