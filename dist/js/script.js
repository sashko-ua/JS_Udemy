'use strict';
let money, time;

function start () {
	money = +prompt('Ваш бюджет на місяць?', '');
	time = prompt("Введіть дату в форматі YYYY-MM-DD", '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt('Ваш бюджет на місяць?', '');
	}
}
start();

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Обов'язкова стаття витрат", ''),
			b = prompt("Скільки коштуватиме?", '');
	
		if ( (typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null && a != '' && b != '' && a.length < 50) {
			console.log('Done');
			appData.expenses[a] = b;
		} else {
			console.log('Inpit error');
			i--;
		}
	}
}
chooseExpenses();

let	appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Щоденний бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log("Мінімальний рівень достаку");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
	console.log("Середній рівень достатку");
} else if (appData.moneyPerDay > 2000) {
	console.log("Високий рівень достатку");
} else {
	console.log("Error");
}

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Яка сума накопичень?"),
			persent = +prompt("Під який відсоток?");

		appData.monthIncome = save/100/12+persent;
		alert("Дохід з дкепозиту: " + appData.monthIncome);
	}
}
checkSavings();

// __________WHILE__________
// let i = 0;
// while (i < 2) {
// 	let a = prompt("Обов'язкова стаття витрат", ''),
// 		b = prompt("Скільки коштуватиме?", '');
	
// 	if ( (typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null && a != '' && b != '' && a.length < 50) {
// 		console.log('Done');
// 		appData.expenses[a] = b;
// 	} else {
// 		console.log('Inpit error');
// 		i--;
// 	}

// 	i++;
// }



// __________DO__________
// let i = 0;
// do {
// 	let a = prompt("Обов'язкова стаття витрат", ''),
// 		b = prompt("Скільки коштуватиме?", '');

// 	if ( (typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null && a != '' && b != '' && a.length < 50) {
// 		console.log('Done');
// 		appData.expenses[a] = b;
// 	} else {
// 		console.log('Inpit error');
// 		i--;
// 	}

// 	i++;
// }
// while(i < 2);