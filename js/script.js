'use strict';
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    toggleVisibleMyBD: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else if (!personalMovieDB.privat){
            personalMovieDB.privat = true;
        }
    },
    showMyBD: function(x) {
    if (!x) {
        console.log(personalMovieDB);
    }
    },
    rememberMyFilms: function() {
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
    }},
    writeYourGenres: function() {
    for (let i = 1; i <= 3; i++){
        let a = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if (a != null && a != '') {
             personalMovieDB.genres[i - 1] = a;
            console.log('+');
           
        } else {
            i--;
            console.log('-');
        } 
    }   
        personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр №${i + 1}. - это ${item}!`);
        });
    },
    detectPrsonalLevel: function() {
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
};




