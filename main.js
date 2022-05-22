// 3. Спросите имя пользователя с помощью метода **prompt**. Выведите сообщение на страницу с помощью **`document.write`** : **“Рад знакомству {имя пользователя}!”**.

let askName = prompt("What is your name?");
let greeting = `Hello ${askName} My name is Kubanycbek Tursunbekov welcome to my site.`;

document.write(greeting);

// 1. Напишите программу, которая считает **количество секунд** в часе.

let secondCount = Number(prompt("Хотите узнать количество секунд в часе? \nТогда введите любое число."));
secondCount *=60 * 60;

alert(secondCount); 

// 2. Создайте переменную `myNumber` и присвойте ей значение 2022. Выведите значение этой переменной на экран с помощью метода **alert.**

let myNumber = `"It is 2022 now"`;

alert(myNumber);

// 4. Даны два числа `a, b`. Написать программу, которая считает среднее арифметическое двух чисел.

let a = 2022;
let b = 2022;
let averageNumber = (a + b) / 2;

console.log(averageNumber);

// 5. Спросите пользователя ввести любое число. Ваша задача вывести следующий по счету число. 
    
//   *Пример: Пользователь вводит число 10. Программа выводит число 11.*

let numeric = Number(prompt("Введите любое число."));
numeric ++;

alert(numeric);
