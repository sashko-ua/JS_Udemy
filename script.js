"use strict";

let nuberOfFilms;

function start() {
    nuberOfFilms = +prompt('Скільки фільмів подивилися?', '');

    while (nuberOfFilms == '' || nuberOfFilms == null || isNaN(nuberOfFilms)) {
        nuberOfFilms = +prompt('Скільки фільмів подивилися?', '');
    }
}

start();

let personalMovieDB = {
    count: nuberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

// __________WITHOUT-CICLE__________
// let nameOfMovie = prompt ('Як називався фільм?', ''),
//     ratingOfMovie = prompt ('Яка ваша оцінка фільму?'),
//     nameOfMovie2 = prompt ('Як називався фільм?', ''),
//     ratingOfMovie2 = prompt ('Яка ваша оцінка фільму?');

// personlMovieBD.movie[nameOfMovie] = ratingOfMovie;
// personlMovieBD.movie[nameOfMovie2] = ratingOfMovie2;
 
// __________FOR__________
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let name = prompt ('Як називався фільм?', ''),
            rating = prompt ('Яка ваша оцінка фільму?');
    
        if (name != null && rating != null && name != '' && rating != '' && name.length < 15 ) {
            personalMovieDB.movie[name] = rating;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

// __________WHILE__________
// let i = 0;
// while (i < 2) {
//     let name = prompt ('Як називався фільм?', ''),
//         rating = prompt ('Яка ваша оцінка фільму?');

//     i++;
    
//     if (name != null && rating != null && name != '' && rating != '' && name.length < 15 ) {
//         personalMovieDB.movie[name] = rating;
//     } else {
//         i--;
//     }
// }

// __________DO__________
// let i = 0;

// do {
//     let name = prompt ('Як називався фільм?', ''),
//         rating = prompt ('Яка ваша оцінка фільму?');

//     if (name != null && rating != null && name != '' && rating != '' && name.length < 15 ) {
//         personalMovieDB.movie[name] = rating;

//     i++;

//     } else {
//         i--;
//     }
// } while (i < 2);
 
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Маловато фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Нормально так подивився");
    } else if (personalMovieDB.count >= 30) {
        console.log("Кіноман");
    } else {
        console.log("Error");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] =  prompt(`Ваша улюблений жанр під номером ${i}`);
    }
}

writeYourGenres();