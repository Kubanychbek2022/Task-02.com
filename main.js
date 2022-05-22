// 3. Спросите имя пользователя с помощью метода **prompt**. Выведите сообщение на страницу с помощью **`document.write`** : **“Рад знакомству {имя пользователя}!”**.

let askName = prompt("What is your name?");
let greeting = `Hello ${askName} My name is Kubanycbek Tursunbekov nice to meet you.`;

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



/* 6. Создайте объект описывающий пользователя, в данном объекте должны быть следующие ключи:
    - Имя
    - Возраст
    - Список друзей
    - Почтовый адрес
    - Электронный адрес */

    let user = {
      name: "Ilon",
      age: 50,
      friendList: ["Peter Nicholson", "Christy Nicholson"],
      gmail: "mask.com",
    };

    console.log(user.name);



    /* 7. Создайте объект описывающий блог-пост на сайте:
    - Название поста
    - Автор поста
    - Дата публикации поста
    - Тело поста (содержит текст поста)
    - Картинка поста (содержит url картинки)
    - Теги поста */

    const blogPost = {
      postName: "Bishkek",
      postAuthor: "Tursunbekov K T",
      publishedAt: 2022,
      postBody: "Bishkek  is the capital of Kyrgyzstan , a city of republican significance , the administrative center of the Chui region . The largest city in Kyrgyzstan in terms of population - 1,088,900 people. (as of January 1, 2021) [2] , the main transport hub, industrial and administrative center of the country. Modern cultural, political and economic center of the republic.",
      postImg: "https://www.advantour.com/img/kyrgyzstan/bishkek/bishkek.jpg",
      tagPost: '<img src=" ">',
    };



    // 8. Создайте массив с именами пользователей.

    let users = ["Ilon Mask", "Peter Nicholson", "Christy Nicholson"];


    // 9. Создайте массив с url адресами на разные картинки.

    let imgUrl = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9oqkvUF7uSdAM4Vs0Wn2Y4SRuYN85K-cBA&usqp=CAU",
      "https://st-1.akipress.org/st_gallery/4/772604.c2d590a5b031d53cc9add60339607368.jpg",
    ];
