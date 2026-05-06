/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

let hamburger = 20;
let free = 20;
if(hamburger >= 4 && free >=1){
    console.log('Ми поїли');
} else{
    console.log('Ми йдемо в інше кафе');
}


/*2.  Напишіть умовну конструкцію if, що перевіряє, 
    чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/
    let price = 1599;
    let result;
    if(price >= 1000 && price <= 1900){
        result = true;
    } else{
        result = false;
    }
    console.log(result);

    let phonePrice = 999;
    let resultText = (phonePrice >=1000 && phonePrice <=1900) ? 'Вигідна ціна, можна брати :)' : 'Не бери! Обман! >_<'
    console.log(resultText);

/* 3.  Напишіть конструкцію if, щоб перевіряє, 
    чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

    let bookPrice = 1000;
    let salePrice; 
    if(bookPrice < 1000 || bookPrice > 1900) {
        salePrice = 'Бінго! Сума оплати = ' + bookPrice + 'грн! Сьогодні ви без знижки!(Правильна відповідь)';
    } else{
        salePrice = 'Пу-пу-пу, ви хочете нас обікрасти? Ви потрапляєте у магічний відрізок: від 1000 до 1900 грн! Знижка ваша!';
    }
    console.log(salePrice);

    let temuPrice = 1800;
    let temuSalePrice = (!(temuPrice > 1000 && temuPrice < 1900)) ? 'Чудово! Сьогодні без магії, тільки наука! (Правильна відповідь)' : 'О ні! Експеліармус не спрацював! Ви можете чарувати!'
    console.log(temuSalePrice);

/*4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

let seassonId = 3;
let seasson;
if(seassonId === 1){
    seasson = 'Зима';
} else if (seassonId === 2){
    seasson = 'Весна';
} else if (seassonId === 3){
    seasson = 'Літо';
} else if (seassonId === 4){
    seasson = 'Осінь';
}else{
    seasson = 'Виникла помилка!'
}
console.log(seasson);


/*5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє між цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) 
    використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

let a, b, c;
a = -8;
b = 0;
c = 777;

if ((a < b && b < c) || (a > b && b > c)){
    console.log('Середнім є число ' + b);
} else if ((b < a && a < c) || (b > a && a > c)){
    console.log('Середнім є число ' + a);
} else if ((a < c && c < b) || (a > c && c > b)){
    console.log('Середнім є число ' + c);
} else{
    console.log('Maybe we have problem!')
}

/*6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

let day = 7;
switch(day){
    case 1:
        console.log('ПН = Понеділок = Monday = Montag');
        break;
    case 2:
        console.log('ВТ = Вівторок = Tuesday = Dienstag');
        break;
    case 3:
        console.log('СР = Середа = Wednesday = Mittwoch');
        break;
    case 4:
        console.log('ЧТ = Четверг = Thursday = Donnerstag');
        break;
    case 5:
        console.log('ПТ = П\'ятниця = Friday = Freitag');
        break;
    case 6:
        console.log('СБ = Субота = Saturday = Samstag');
        break;
    case 7:
        console.log('НД = Неділя = Sunday = Sonntag');
        break;
    default:
        console.log('Upps! We have a little Error! R-r-ra-a-ar')
        break;
}

/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

let x = 9;
let y = 3;
let w;
let operator = '*'
switch(operator){
    case '+':
        console.log(w = x + y);
        break;
    case '-':
        console.log(w = x - y);
        break;
    case '*': 
        console.log(w = x * y);
        break;
    case '/':
        console.log(w = x / y);
        break;
    default:
        console.log('I don\'t know.');
        break;
}

/*8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.*/

let myArrayEight = [];
for (let i = 1; i < 6; i++) {
    myArrayEight.push(i);
}
console.log(myArrayEight);

/*9. Напишіть 2 цикли.
   За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
   За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.*/

   let myArrayNine = [];
   for (let i = 1; i < 10; i +=2){
    myArrayNine.push(i);
   } for (let i = 2; i < 10; i +=2){
    myArrayNine.push(i);
   } console.log(myArrayNine);


/*10. Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6];*/

    const myArrTen = [2, 3, 4, 5, 6];
    let totalTen = 0;
    for (let i = 0; i < myArrTen.length; i++){
        totalTen += myArrTen[i];
    } console.log(totalTen);
    

/*11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

    const arr = [ [1, 2], [3, 4], [5, 6] ];

    Console output:
    1
    2
    3
    4
    5
    6
    */

    const arrEleven = [ [1, 2], [3, 4], [5, 6] ];
    for (let i = 0; i < arrEleven.length; i++){
        for (let j = 0; j < arrEleven[i].length; j++){
            console.log(arrEleven[i][j]);
        }
    }

/*12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
    Використайте для цього вкладені цикли for.

    Наприклад:
    const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
    const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
    const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

    const arr = [[1, 2], [3, 4], [5, 6, 7]];

    let product = 1;

    // тут має бути ваше рішення

    console.log(product);*/

const arrTwelve = [[1, 2], [3, 4], [5, 6, 7]];
let product = 1;
for (let i = 0; i < arrTwelve.length; i++){
  for (let j = 0; j < arrTwelve[i].length; j++){
    product *= arrTwelve[i][j];
  }
} console.log(product);

/*13.* Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/

const string = "Hello World";
const resultThirteen = string.replace(/[aeiouAEIOU]/g, "");
console.log(resultThirteen);

/*14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

let meters = 32;
let kilometers = meters / 1000;
let meterWord;

if (meters % 10 === 1 && meters % 100 !== 11) {
    meterWord = 'Метр';
} else if (meters % 10 >= 2 && meters % 10 <= 4 &&(meters % 100 < 10 || meters % 100 >= 20)) {
    meterWord = 'Метри';
} else {
    meterWord = 'Метрів';
}

let kilometerWord;

if (kilometers % 1 !== 0){
    kilometerWord = 'Кілометра';
} else if(kilometers === 1) {
    kilometerWord = 'Кілометр';
} else if (kilometers > 1 && kilometers < 5){
    kilometerWord = 'Кілометри';
} else {
    kilometerWord = 'Кілометрів';
}

let kilometerFormatted = kilometers.toString().replace('.', ',');

console.log(`${meters} ${meterWord} це ${kilometerFormatted} ${kilometerWord}`);