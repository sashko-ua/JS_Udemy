"use strict";

let nuberOfFilms = +prompt('Скільки фільмів подивилися?', '');

let personalMovieDB = {
    count: nuberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

// let nameOfMovie = prompt ('Як називався фільм?', ''),
//     ratingOfMovie = prompt ('Яка ваша оцінка фільму?'),
//     nameOfMovie2 = prompt ('Як називався фільм?', ''),
//     ratingOfMovie2 = prompt ('Яка ваша оцінка фільму?');

// personlMovieBD.movie[nameOfMovie] = ratingOfMovie;
// personlMovieBD.movie[nameOfMovie2] = ratingOfMovie2;
 
for (let i = 1; i < 3; i++) {
    let name = prompt ('Як називався фільм?', ''),
        rating = prompt ('Яка ваша оцінка фільму?');

    if (name != null && rating != null && name != '' && rating != '' && name.length < 15 ) {
        personalMovieDB.movie[name] = rating;
    } else {
        i--;
    }
}
if (personalMovieDB.count < 10) {
    console.log("Маловато фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Нормально так подивився");
} else if (personalMovieDB.count >= 30) {
    console.log("Кіноман");
} else {
    console.log("Error");
}
console.log(personalMovieDB);