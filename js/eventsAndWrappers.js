const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button'),
      owerlay = document.querySelector('.owerlay'),
      link = document.querySelector('a'),
      links = document.querySelectorAll('a');

// нежелательный формат обработчика событий! 
// btn.onclick = function() {
//     alert('Click');
// };  пока все работает!! но если в коде встретиться подобное событие
// btn.onclick = function() {
//     alert('Click2');
// };  первое событие затреться вторым!!


// Обрабочики событий

// btn.addEventListener('click', () => {
//     alert('Click');
// }); // Реакция на нажатие кнопки

// btn.addEventListener('mouseenter', () => {
//     console.log('mouse hover');
// }); // Реакция на наведение курсива на кнопку

// btn.addEventListener('mouseenter', (event) => {
//     console.log(event.target);
// }); // Реакция на наведение курсива на кнопку и выводит элемент на котором произошло событие

// btn.addEventListener('click', (event) => {
//     event.target.remove();
// }); // Реакция на нажатие кнопки: удаляет элемент с страници

// Функция удаления события после его выполнения 
let i = 0;
const deleteElementPige = (event) => {
    console.log(event.target);
    i++;
    if (i == 1) {
       btn.removeEventListener('click', deleteElementPige); 
    }
};
// btn.addEventListener('click', deleteElementPige);

// Всплытие события  
// const deleteElement = (event) => {
//     console.log(event.currentTarget);
//     console.log(event.type);
// };
// btn.addEventListener('click', deleteElement);
// owerlay.addEventListener('click', deleteElement);


// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(event.target);
// });

// Работа с несколькими элементами на странице
// links.forEach(function (item, i) {
//     if (i % 2 == 0) {
//         item.addEventListener('click', (event) => {
//             event.preventDefault();
//         });
//     }
// });

btns.forEach(btn => {
     btn.addEventListener('click', deleteElementPige, {once: true}); 
});
