// 'use strict';

// // // function learnJS(lang, callback) {
// // //     console.log(`я учу: ${lang}`);
// // //     callback();
// // // }
// // // function done() {
// // //     console.log('Я прошел этот урок');
// // // }
// // // learnJS('JS', done);  // Функция callback

// // const options = {
// //     name: 'test',
// //     width: 1024,
// //     height: 1024,
// //     colors: {
// //         border: 'black',
// //         bg: 'red'
// //     },
// //     length: 100500,
// //     makeTest: function () {
// //         console.log('TeSt');
// //     }
// // };
// // options.makeTest();

// // const { border, bg } = options.colors;
// // console.log(bg);

// // console.log(Object.keys(options.colors).length);
// // // delete options.name;
// // // console.log(options);

// // let counter = 0;
// // for (let a in options) {
// //     if (typeof (options[a]) === 'object') {
// //         for (let i in options[a]) {
// //             console.log(`Ключь ${i} и значение ${options[a][i]}`);
// //             counter++;
// //         }
// //     } else {
// //         console.log(`Ключь ${a} и значение ${options[a]}`);
// //         counter++;
// //     }
    
// // }
// // console.log(counter);



// const arr = ['a', 'b', 'e', 'c', 'd'];
// arr.sort();
// console.log(arr);
// function compareNum(a, b) {
//     return a - b;
// }
// //arr.forEach(function (item, i, arr) {
// //    console.log(`${i}: ${item} внутри массива ${arr}`);
// // });

// // arr.pop();
// // arr.push(10);

// // for (let i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }

// // for (let a of arr) {
// //     console.log(a);
// // }

// // const str = prompt('', '');
// // const products = str.split('; ');
// // products.sort();
// // console.log(products.join(', '));

// console.log();

// // const number = {
// //     a: 4,
// //     b: 6,
// //     c: {
// //         a1: 3,
// //         b1: 5
// //     }
// // };
// // console.log(number);
// // const add = {
// //     d: 6,
// //     e: 13
// // };
// // console.log(add);
// // console.log(Object.assign(number, add)); // в объект номер добовляем объект адд

// // const clon = Object.assign({}, add); // клонируем объект add
// // clon.d = 20;

// // console.log(add);
// // console.log(clon); 

// // spred operator

// // const oldArray = ['a', 'b', 'c'];
// // const newArray = oldArray.slice(); // клонируем старый массив!!!без слайса в массив ляжет ссылка на массив
// // newArray[0] = 5;
// // console.log(oldArray, newArray);

// // const video = ['youtube', 'video', 'rutube'],
// //     blogs = ['wordpress', 'livejornal', 'bloger'],
// //     internet = [...blogs, ...video, 'vk', 'facebook'];

// // console.log(internet);//слияние двух массивов в третьем
// //пример
// // function log(a, b, c) {
// //     console.log(a);
// //     console.log(b);
// //     console.log(c);
// // }
// // let num = [1, 2, 3];
// // log(num); // будет == [ 1, 2, 3 ], undefined, undefined
// // log(...num); // будет ==  1, 2, 3 

// // clon object and arrey operators spred

// // let arrey = [1, 2, 'a', 'b'];
// // let newarrey = [...arrey];
// // arrey[1] = 3;
// // console.log(arrey, newarrey);

// // let obj = {
// //     one: 1,
// //     two: 2
// // };
// // let newObj = { ...obj };
// // obj.one = 3;
// // console.log(obj, newObj);

// // // PROTOTIP __proto__

// let solders = {
//     health: 400,
//     armor: 200,
//     speed: 128,
//     sayHello: function (){
//         let x = 'Hello';
//         return x;
//     }
// };
// let soldersJon = {
//     health: 100
// };

// //soldersJon.__proto__ = solders; // Устаревший формат!! наследуемся из solders в soldersJon 

// Object.setPrototypeOf(soldersJon, solders); // наследуемся из solders в soldersJon

// console.log(`Cолдат Джона говорит ${soldersJon.sayHello()} имеет: ${soldersJon.health} здоровья, скорость 
// ${ soldersJon.speed } и ${ soldersJon.armor } защиты.`);

// let jon = Object.create(solders);// создоем обьект jon  и наследуемся из solders
// console.log(`Cолдат Джона говорит ${jon.sayHello()} имеет: ${jon.health} здоровья, скорость 
// ${ jon.speed } и ${ jon.armor } защиты.`);

