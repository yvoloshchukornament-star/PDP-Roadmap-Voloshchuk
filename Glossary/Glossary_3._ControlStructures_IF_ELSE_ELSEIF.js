// Control Structures (керуючі конструкці) - Це конструкції, які керують потоком виконання коду.
// За замовчуванням код виконується зверху вниз.



// 1. IF statement - 
//      Якщо умова повертає true — блок виконується.
//      Якщо false — пропускається.
let age = 20;

if (age >= 18) {
  console.log("Доступ дозволено");
}



// 2. IF...ELSE - 
// Коли є два варіанти.
let score = 55;

if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}



// 3. IF...ELSE IF...ELSE - 
// Коли варіантів більше двох.
let temperature = 25;

if (temperature > 30) {
  console.log("Hot");
} else if (temperature >= 10) {
  console.log("Warm");
} else {
  console.log("Cold");
}



// 4. Nested if (вкладені умови)
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Admin panel");
  } else {
    console.log("User panel");
  }
}



// 5. Тернарний оператор (скорочений if) -
// Скорочена форма для простих умов.
let ageTest = 18;

let message = ageTest >= 18 ? "Adult" : "Minor";



// 6. Switch - 
// Коли перевіряємо одне значення проти кількох варіантів.
let action = "max";

switch (action) {
  case "max":
    console.log("Find maximum");
    break;

  case "min":
    console.log("Find minimum");
    break;

  default:
    console.log("Unknown action");
}



// 7.Guard Clauses (кращий стиль) - 
// Замість вкладених if
function check(user) {
  if (!user) {
    return "No user";
  }

  if (!user.isActive) {
    return "Inactive";
  }

  return "OK";
}
// Це читається краще ніж глибока вкладеність.



// Логічні оператори в умовах
//      AND - && - Обидві умови мають бути true.
if (ageAnd > 18 && isLoggedIn);

//      OR - || - Хоча б одна true.
if (isAdmin || isModerator);

//      NOT - ! - Інвертує значення.
if (!isLoggedIn);
