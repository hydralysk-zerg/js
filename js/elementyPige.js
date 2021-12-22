// 'use strict';

// const box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     hearts = document.querySelectorAll('.heart'),
//     oneHearts = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');
// // Изменение стиля элемента на странице
// box.style.backgroundColor = 'blue';
// box.style.width = '550px';
// box.style.cssText = "background-color: blue; width: 450px; border-radius: 35px";
// btns[2].style.borderRadius = '15px';
// circle[1].style.backgroundColor = 'green';
// // Перебор псевдомассива и стилизация элементов
// for (let i = 0; i < hearts.length; i++) {
//     if (i % 2 == 1) {
//         hearts[i].style.cssText = "background-color: blue; border-radius: 20px";
//     } else {
//         hearts[i].style.cssText = "background-color: yellowgreen; border-radius: 15px";
//     }
// }
// hearts.forEach(item => {
//         item.style.cssText = "background-color: blue; border-radius: 30px";
// });
// // стилизация и действия с элементами на странице
// const div = document.createElement('div'); // Создание элемента в JS
// div.classList.add('black'); // Стилизация элемента JS
// wrapper.append(div); // Вставляет элемент в конец перед закрывающим тегом
// wrapper.appendChild(div); // Устаревший формат // Вставляет элемент в конец перед закрывающим тегом
// wrapper.prepend(div); // Вставляет элемент после открывающего тега
// hearts[1].before(div); // Вставляет элемент перед элементом на странице
// hearts[1].after(div); // Вставляет элемент после элемента на странице
// wrapper.insertBefore(div, hearts[0]); // Устаревший формат//Вставляет выбранный элемент div перед элементом hearts[0]
// circle[0].remove(); // Удаляет выбранный элемент на странице 
// hearts[3].replaceWith(circle[1]); //вырезает выбранный элемент circle[1] и заменяет им hearts[3]
// wrapper.removeChild(hearts[4]); // Устаревший формат // Удаляет выбранный элемент на странице 
// wrapper.replaceChild(circle[1], hearts[3]); //вырезает выбранный элемент circle[1] и заменяет им hearts[3]
// // Добавление текста в элемент страници 
// div.innerHTML = '<h1>Hello World</h1>'; // Дабавляет в элемент текст и теги формата HTML
// circle[2].innerHTML = '<h1>Hello World</h1>'; // Дабавляет в элемент текст и теги формата HTML
// div.textContent = '<h1>Hello World</h1>'; // Дабавляет в элемент ТОЛЬКО! текст
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // Вставляет HTML структуру внутри объекта в начало структуры
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // Вставляет HTML структуру после объекта
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // Вставляет HTML структуру перед объектом
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // Вставляет HTML структуру внутри объекта в конце структуры


// console.dir(box);