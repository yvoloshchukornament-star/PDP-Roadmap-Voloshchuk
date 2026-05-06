// Scope (область видимості) — це те, де змінна доступна у коді.

/* Тобто:
- де ти можеш її використовувати
- і де вона “існує”*/

/*Global Scope (глобальна область)
Це змінні, які оголошені поза будь-якими функціями чи блоками.
Приклад:*/
let name = "Юля";
function sayHi() {
  console.log(name);
}sayHi(); // Юля

/*Function Scope (область функції)
Змінна доступна тільки всередині функції, де вона створена.
Приклад:*/
function test() {
  let age = 25;
  console.log(age);
}

test(); // 25
console.log(age); // Помилка

/*Block Scope (блочна область) - Це змінні, які живуть всередині блоку {}
блоки — це:
if
for
while
{ } у коді
Приклад:*/
if (true) {
  let x = 10;
  const y = 20;
}
console.log(x); //  Помилка
console.log(y); //  Помилка



// Приклад разом

let globalVar = "Я глобальна";
function example() {
  let functionVar = "Я в функції";
  if (true) {
    let blockVar = "Я в блоці";
    console.log(globalVar);   // true
    console.log(functionVar); // true
    console.log(blockVar);    // true
  }
  console.log(blockVar); // false
}
example();
console.log(functionVar); // false