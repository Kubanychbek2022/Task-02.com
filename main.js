// 3. Спросите имя пользователя с помощью метода **prompt**. Выведите сообщение на страницу с помощью **`document.write`** : **“Рад знакомству {имя пользователя}!”**.

let askName = prompt("What is your name?");
let greeting = `Hello ${askName} My name is Kubanycbek Tursunbekov welcome to my site.`;

document.write(greeting);

