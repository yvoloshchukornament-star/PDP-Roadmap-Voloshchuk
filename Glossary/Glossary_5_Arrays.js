// I. CREATION (Створення масиву)
    // 1. Спосіб 1 (найчастіший)
let arr = [];
let numbers = [1, 2, 3];
let mixed = ["text", 42, true];
    // 2. Спосіб 2 — через конструктор
let arr1 = new Array();
let arr2 = new Array(1, 2, 3);

    // Масив — це об'єкт
let arr3 = new Array(5); // Створення масиву довжиною 5 з "порожніми слотами".



// II. ACCESSING ELEMENTS (Доступ) - Масив має індекси, починаючи з 0.
let arr4 = ["a", "b", "c"];
console.log(arr4[0]); // "a"
console.log(arr4[2]); // "c"
console.log(arr4.length);
console.log(arr4[arr.length - 1]);
console.log(arr4[100]);
        //Довжина масиву
        arr.length
        //Показати останный елемент масиву
        arr[arr.length - 1]
        //Якщо індексу не існує
        console.log(arr[100]); // undefined



// III. ADDING / REMOVING
    // 1. push() — додати в кінець
let arr5 = [1, 2];
arr5.push(3);
    // 2. pop() — видалити з кінця
arr5.pop();
    // 3.unshift() — додати на початок
arr.unshift(0);
    // 4. shift() — видалити з початку
arr5.shift();
    // 5. splice() — універсальний метод (видаляє, повертає, додає, змінює дані pf ljgjvjuj. syltrcsd)
        // Видалення елементів
    let numbers5 = [1, 2, 3, 4, 5];
    numbers.splice(1, 2);
    console.log(numbers5); // індекси 1, 2 = числам 2, 3.
        // Що повертає
    let numbers6 = [1, 2, 3, 4, 5];
    let removed = numbers6.splice(1, 2);
    console.log(removed); // по індексам 1, 2 - відображає номери 2, 3.
        // Додавання елементів (без видалення)
    let numbers7 = [1, 2, 5];
    numbers7.splice(2, 0, 3, 4);
    console.log(numbers); // Починаємо з індексу 2, Видаляємо 0 елементів, Додаємо 3 і 4.
        // Заміна елементів
    let fruits = ["apple", "banana", "orange"];
    fruits.splice(1, 1, "kiwi");
    console.log(fruits); // Починаємо з індексу 1, Видаляємо 1 елемент ("banana"), Вставляємо "kiwi".
        // Видалити все до кінця
    let arr8 = [1, 2, 3, 4, 5];
    arr8.splice(2);
    console.log(arr8); // видалити все після індексу 2.
        // Якщо не вказати deleteCount (=0), видалиться все до кінця.
        //Від’ємний індекс
    let arr9 = [1, 2, 3, 4, 5];
    arr9.splice(-2, 1);
    console.log(arr9); //-2 означає рахувати з кінця.
    // 6. slice() — копіює частину
let newArr = arr.slice(1, 3); //Не змінює оригінал.

// IV. ARRAY METHODS
    // 1. forEach() - Проходиться по масиву і виконує функцію.
let numbers10 = [1, 2, 3];
numbers10.forEach(num => {
  console.log(num * 2);
});
    // 2. map() - Створює новий масив на основі старого. map завжди повертає масив тієї ж довжини.
let numbers11 = [1, 2, 3];
let doubled = numbers11.map(num => num * 2);
console.log(doubled);
    // 3. filter() - Створює новий масив з елементів, які проходять умову. 
    // filter може зменшити кількість елементів.
let numbers12 = [1, 2, 3, 4];
let evens = numbers12.filter(num => num % 2 === 0);
console.log(evens);