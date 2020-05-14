"use strict";

let nuberOfFilms = +prompt('Скільки фільмів подивилися?', '');

let personlMovieBD = {
    count: nuberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

let nameOfMovie = prompt ('Як називався фільм?', ''),
    ratingOfMovie = prompt ('Яка ваша оцінка фільму?'),
    nameOfMovie2 = prompt ('Як називався фільм?', ''),
    ratingOfMovie2 = prompt ('Яка ваша оцінка фільму?');


personlMovieBD.movie[nameOfMovie] = ratingOfMovie;
personlMovieBD.movie[nameOfMovie2] = ratingOfMovie2;


console.log(personlMovieBD);


