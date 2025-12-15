// Змінні в JS
// var message = 'Привіт, JavaScript!'; // застарілий спосіб оголошення змінної
// const message = 'Привіт, JavaScript!'; // значення змінної не може бути змінене
// let message = 'Привіт, JavaScript!'; // значення змінної може бути змінене

/*

let messageForUser = 'Привіт, JavaScript!';
alert(messageForUser);

messageForUser = 'Нове привітання!'; // Це викличе помилку, оскільки messageForUser оголошено як const
console.log(messageForUser);

// Типи даних
// Текстові дані, рядки (String)
const userName = 'Іван';
// Числові дані (Number)
const userAge = 25.5;
// Булеві значення (Boolean)
const isUserLoggedIn = true;

// Спеціальні значення
// null - відсутність значення
let userAddress = null;
// undefined - змінна оголошена, але не має значення
let userPhoneNumber;

// Складені типи даних
// Масиви (Array) - колекції значень
const userRoles = ['admin', 'editor', 'subscriber'];
// Об'єкти (Object) - складні структури даних (про одну сутність)
const userProfile = {
    name: 'Іван',
    age: 25,
    isLoggedIn: true
};

// Не будемо розглядати на цьому курсі
// Символи (Symbol) - не має відношення до тексту, це унікальні ідентифікатори
// Великі цілі числа (BigInt) - для роботи з дуже великими числами

// Щоб зрозуміти тип даних змінної, можна використовувати оператор typeof
console.log(typeof userName); // "string"
console.log(typeof userAge); // "number"
console.log(typeof isUserLoggedIn); // "boolean"
console.log(typeof userAddress); // "object" (це особливість JavaScript для null)
console.log(typeof userPhoneNumber); // "undefined"
console.log(typeof userRoles); // "object"
console.log(typeof userProfile); // "object"

*/

/*

// Як створити функцію?
function sum(a, b) {
  return a + b;
}

const userAge = Number(prompt("Введіть ваш вік:"));
const nextAge = sum(userAge, 1);
console.log("Наступного року вам буде: " + nextAge);

// Оператори для чисел
// Арифметичні оператори: +, -, *, /, %, ++, --
// Оператор присвоєння: =, +=, -=, *=, /=

// Оператори для логічних значень
// Оператори порівняння: ==, ===, !=, !==, >, <, >=, <=
// Логічні оператори: &&, ||, !

if (userAge >= 18) {
  console.log("Ви повнолітній.");
} else {
  console.log("Ви неповнолітній.");
}

*/

// Цикли
// Цикл з лічильником
// for (let i = 1; i <= 5; i++) {
//   console.log("Ітерація номер: " + i);
// }

// Цикл з передумовою
// let count = 42;
// while (count <= 5) {
//   console.log("Ітерація номер: " + count);
//   count++;
// }

// Цикл з післяумовою
// let count = 1;
// do {
//   console.log("Ітерація номер: " + count);
//   count++;
// } while (count <= 5);

// Масиви
const fruits = ['яблуко', 'банан', 'вишня'];
console.log(fruits[2]); // виведе 'вишня'
fruits.push('апельсин'); // додаємо новий елемент
console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log('Фрукт номер ' + (i + 1) + ': ' + fruits[i]);
// }

// Спеціальний тип циклу для масивів
// for (const fruit of fruits) {
//   console.log('Фрукт: ' + fruit);
// }

// Спеціальні ключові слова break і continue
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break; // вихід з циклу, коли i дорівнює 6
  }
  if (i % 2 === 0) {
    continue; // пропускаємо парні числа
  }
  console.log('Непарне число: ' + i);
}
