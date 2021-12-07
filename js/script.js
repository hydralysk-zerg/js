'use strict';



let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

};
let question1 = prompt('Один из последних просмотренных фильмов?', ''),
    question2 = prompt('На сколько вы его оцениваете?', ''),
    question3 = prompt('Один из последних просмотренных фильмов?', ''),
    question4 = prompt('На сколько вы его оцениваете?', '');

personalMovieDB.movies[question1] = question2;
personalMovieDB.movies[question3] = question4;

console.log(personalMovieDB);