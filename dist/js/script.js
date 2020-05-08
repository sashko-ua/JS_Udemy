"use strict";

let money = prompt( 'Ваш бюджет?', '' ),
    time = prompt( 'Введіть дату в форматі DD-MM-YYYY', '' );

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a = prompt( 'Обов\'язкова стаття витрат', '' ),
    b = prompt( 'Скальки коштує', '' ),
    c = prompt( 'Обов\'язкова стаття витрат', '' ),
    d = prompt( 'Скальки коштує', '' );

appData.expenses[a] = b;

console.log(appData);