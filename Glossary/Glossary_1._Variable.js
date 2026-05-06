//Змінна (variable) - це "контейнер" для зберігання даних.*/

var testVar // старий спосіб (до ES6)

/* Особливості:
      1. Має function scope - 
            Вона існує в межах функції, а не блоку. 
            Навіть якщо змінна оголошена в if, вона доступна зовні.*/
if (true) {
  var x = 10;
}
console.log(x);

//      2. Піднімається (Hoisting)
console.log(a); // undefined
var a = 5;
//          JavaScript ніби переносить оголошення наверх:
var a = 5;
console.log(a);

//      3. Можна повторно оголосити
var test = 0;
var test = 5;

/*      Чому var зараз майже не використовують?
Бо:
- створює плутанину
- може викликати баги
- не має блочної області видимості.*/










let name = 'Юлія' // - сучасний стандарт

/* Особливості:
      1. Має block scope
            Працює тільки всередині блоку {}.*/
if (true) {
  let x = 10;
}
console.log(x); //  ReferenceError

//    2.Hoisting є, але без доступу
console.log(a); //  ReferenceError
let a = 5;
//            Є "Temporal Dead Zone" — змінна існує, але доступ до неї заборонений до оголошення.

// 3. Не можна повторно оголосити
let test = 1;
let test = 2; //  помилка
//          Але можна змінювати значення:
let count = 1;
count = 2; // і це ОК










const pi = 3.14 // Константа

//Особливості:
//    1. Block scope (як let)
if (true) {
  const x = 10;
}
console.log(x); //  ReferenceError

//    2. Не можна перевизначити
const a = 10;
a = 20; //  помилка