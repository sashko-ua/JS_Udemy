'use strict';

let money = prompt('Ваш бюджет на місяць?', ''),
	time = prompt("Введіть дату в форматі YYYY-MM-DD", '');

let	appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

let a1 = prompt("Обов'язкова стаття витрат", ''),
	a2 = prompt("Скільки коштуватиме?", ''),
	a3 = prompt("Обов'язкова стаття витрат", ''),
	a4 = prompt("Скільки коштуватиме?", '');

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

alert(appData.budget / 30);