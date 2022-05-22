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