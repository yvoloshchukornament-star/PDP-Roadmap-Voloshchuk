//Базові типи.
/* 
7 примітивних (primitive)
        string
        number
        boolean
        null
        undefined
        bigint
        symbol
1 складний (reference type)
        object*/



// STRING - Рядок - це текст.
let name = "Alice";
let city = 'Kyiv';
let dog = `Хаскі`;

/*  Особливості:
        Має довжину: name.length
        Має методи: toUpperCase(), includes() і т.д.
        Не змінюється (immutable)*/



// NUMBER - Число.
let a = 10;
let b = 3.14;
let c = -5;

/* Спеціальні значення:
    Infinity
    -Infinity
    NaN - Not a Number*/
console.log(10 / 0); // Infinity
console.log("abc" * 2); // NaN



// BOOLEAN - має тільки 2 значення: true or false.
let isAdmin = true;
let isManager = false;

/*Truthy / Falsy
    Falsy значення (їх небагато):
        false
        0
        ""
        null
        undefined
        NaN
    Все інше — truthy.*/



// NULL - Означає "Тут немає значення навмисно".
let data = null;



// UNDEFINED - Означає "Значення ще не присвоєне".
let x;
console.log(x); // undefined



// BIGINT - створений для дуже великих чисел, бо number має обмеження.
let big = 123456789012345678901234567890n;



// SYMBOL - Унікальне значення.
let id = Symbol("id");

/*  Використовується для:
        унікальних ключів в об'єктах
        внутрішніх механізмів JS*/



//OBJECT (не примітив) - {}
let user = { name: "Alice" };
let arr = [1, 2, 3];
let func = function() {};

/*  Об'єкт:
        зберігається по посиланню
        копіюється по посиланню*/