'use strict';

// let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    // count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

};

let question = [];
let question1 = [];
for (let i = 0; i < 2; i++){
        question = prompt('Один из последних просмотренных фильмов?', ''),
        question1 = prompt('На сколько вы его оцениваете?', '');
    personalMovieDB.movies[question] = question1;
}

// if (personalMovieDB.count < 10) {
//     console.log('1');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//      console.log('2');
// } else {
 
// }

// let question1 = prompt('Один из последних просмотренных фильмов?', ''),
//     question2 = prompt('На сколько вы его оцениваете?', ''),
//     question3 = prompt('Один из последних просмотренных фильмов?', ''),
//     question4 = prompt('На сколько вы его оцениваете?', '');

// personalMovieDB.movies[question] = question;
// personalMovieDB.movies[question3] = question4;
console.log(personalMovieDB);