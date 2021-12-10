'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько вы его оцениваете?', '');

        if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('add in object');
        } else {
            console.log('not value');
            i--;
        } 
    }
}
rememberMyFilms();

function detectPrsonalLevel() {
        if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
        console.log('Вы смотрите очень мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы любите смотреть кино!');
    } else if (personalMovieDB.count >= 30){
        console.log('Настоящий киноман!');
    } else {
        console.log('error!!!');
    }
}
detectPrsonalLevel();

function showMyBD(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyBD(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}
writeYourGenres();
console.log(personalMovieDB);