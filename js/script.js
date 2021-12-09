'use strict';

let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '0');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

};
if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
    alert('Вы смотрите очень мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert('Вы любите смотреть кино!');
} else if (personalMovieDB.count >= 30){
    alert('Настоящий киноман!');
} else {
     alert('error!!!');
}





for (let i = 0; i < 2; i++){
    let question = prompt('Один из последних просмотренных фильмов?', ''),
        question1 = prompt('На сколько вы его оцениваете?', '');

    if (question != null && question1 != null && question != '' && question1 != '' && question.length <= 50) {
        personalMovieDB.movies[question] = question1;
        console.log('+');
    } else {
        console.log('-');
        i--;
    }
    // while (!question[0]) {
    //     
    // }
    
}

console.log(personalMovieDB);