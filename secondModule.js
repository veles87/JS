// Массивы
// Присвоение по ссылке и по значению
// Методы массива
// Функции
// Область видимости
// Стрелочные функции
// ===================

// const clients = ['Mango', 'Poly', 'Ajax', 'pOly', 'POLY', 'pOlY'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
// 	/*
// 	 * На каждой итерации мы будем проверять совпадает ли элемент массива с
// 	 * именем клиента. Если совпадает то мы записываем в message сообщение
// 	 * об успехе и делаем break чтобы не искать дальше
// 	 */

// 	if (client === clientNameToFind) {
// 		message = `Клиент с  именем ${clientNameToFind} есть в базе данных!`;
// 		break;
// 	}

// 	// Если они не совпадают то запишем в resultMsg сообщение об отсутствии имени
// 	message = `Клиента с именем  ${clientNameToFind} нету в базе данных!`;
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// ========================

// const matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
// 	console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

// 	for (let j = 0; j < matrix[i].length; j += 1) {
// 		console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
// 		total += matrix[i][j];
// 	}
// }

// console.log(total); // 45


//   =============

// Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
// 	console.log('It is a red fruit!');
// }

//   =========splice()==============


// let scores = [1, 2, 3, 4, 5];
// let dom = [1, 2, 3, 4, 5, 6, 7];

// console.log(scores);
// console.log(dom);


// let deleteSplice = scores.splice(2, 4);
// let deleteSpliceTwo = dom.splice(0, 3);

// console.table(deleteSplice);
// console.table(deleteSpliceTwo);


// ================вставка с помощью splice()


// const colors = ['green', 'yellow', 'black'];

// console.log(colors);

// colors.splice(2, 0, 'pink', 'purpule', 'same');

// console.table(colors);

// ========concat()====================

// const buyers = ['one', 'two', 'three', 'four'];
// const selers = ['den', 'petro', 'ura', 'gleb'];

// const allClients = buyers.concat(selers);

// console.log(allClients);
// console.log(buyers);
// console.log(selers);

// ====================


// const count = function (from, to, step) {
// 	console.log(`count from ${from} to ${to} step ${step} `);

// 	for (let j = from; j <= to; j += step) {
// 		console.log(j)

// 	}
// }

// count(0, 10, 5);
// count(undefined, 4, 2);
// count(2,6,1);
// count(1,20, 1);


// ========arguments=====================

// const sum = function () {

// 	total = 0;

// 	for (let argument of arguments) {
// 		total += argument
// 	};

// 	return total;
// }


// console.log(sum(2, 2, 2))
// console.log(sum(3, 4, 3))
// console.log(sum(5, 5, 10))


// =========преобразование псевдомасива=========


// const fun = function(...args){
// args = Array.from(arguments);

// console.log(args)

// }


// ==================

// const takeMoney = function (salary, balance) {
// 	if (salary === 0) {
// 		console.log(`Enter sum more then ${salary}`);
// 	} else if (salary > balance) {
// 		console.log(`Sorry but ${salary} too big, now no money :( `);
// 	} else {
// 		console.log(`Take yor money`);
// 	}
// };

// takeMoney(0, 300);
// takeMoney(1000, 300);
// takeMoney(300, 1000);


// ===


// const withdrow = function (amount, fritter) {

// 	if (amount === 0) {
// 		console.log(`Enter sum more ${amount}`);
// 		return;
// 	}

// 	if (amount > fritter) {
// 		console.log(`Sorry ${amount} hasn't at the moment no such money inside`);
// 		return
// 	}

// 	console.log(`OK!`);

// }

// withdrow(0, 300);
// withdrow(500, 300);
// withdrow(100, 300);

// =======function declaration========


// addd(1, 2, 3); // 6
// print('text'); // text

// function addd(a, b, c) {
// 	return a + b + c;
// }


// function print(str) {
// 	console.log(str);
// }

// ========arrow function==============

// const asd = (...args) => {
// 	console.log(args)
// }

// asd(1, 4, 5, 6, 7)

// ===============VIDEO LECTION=======

// const cartos = [54, 28, 105, 70, 92, 17, 120];
// let totalos = 0;

// for (let i = 0; i < cartos.length; i += 1) {
// 	console.log(cartos[i]);
// 	totalos += cartos[i];
// }

// console.log("Totalos: ", totalos)

// = 2 variant== 

// for (const carto of cartos) {
// 	totalos += carto
// }
// console.log("Totalos: ", totalos)
// ===========================

// сложить четние числа в масиве

// const numbers = [54, 28, 105, 70, 92, 17, 120, 13, 17, 23];
// let total = 0;
// let totalMinus = 0;
// for (let i = 0; i < numbers.length; i += 1) {
// console.log(numbers[i]); 

// if (numbers[i] % 2 === 0) {
// 	console.log('Четное!!!')

// 	total += numbers[i];

// }else if(numbers[i] % 2 !==0){
// 	console.log(('НЕ четное'))

// 	totalMinus+= numbers[i]
// }
// }

// for (let number of numbers) {
// 	console.log(number)
// if (number % 2 === 0) {
// 	console.log(`${number} - четное`)
// 	total += number
// }

// if (number % 2 !== 0) {
// 	console.log(`Continue, move next:  ${number}`);
// 	totalMinus += number
// 	continue;
// }
// console.log(`${number} - четное`)
// total += number
// };
// console.log(`Total: ${total}`)
// console.log("Total minus: ", totalMinus)


// ======================

// Написать скрипт поиска ЛОГИНА

// #1

// const logins = ['asgsdb', 'adfgty56', 'drgtrhy78', 'jfjdkdiw9556ejxnck'];
// const loginToFind = 'adfgty56';
// let message;

// for (let i = 0; i < logins.length; i += 1) {

// 	const login = logins[i]

// console.log('Login: ', login)

// console.log(`${login}===${loginToFind}: `, login===loginToFind)


// 	if (login === loginToFind) {
// message = `User ${loginToFind} is here`;
// 		break;
// 	}

// }

// console.log(message);


// #2

// for (const login of logins) {

// 	console.log('Login: ', login);
// 	console.log(`${login}===${loginToFind}: `, login === loginToFind)

// 	if (login === loginToFind) {

// 		message = `User ${loginToFind} is here`;
// 		console.log('EQUAL!!!');
// 		break;
// 	}
// }

// #3


// console.log(logins.includes(loginToFind) || logins.includes(';dfng;lsdfnv') );

// #4

// let message = logins.includes(loginToFind)
// "?" `User ${loginToFind} is here!`
// 	: `We can't find this user.`;

// console.log(message)

/*===============
================
================*/

//  нахождение самого маленького числа в массиве, при условии что они не повторяються

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smolestNumber = numbers[0];

// for (const number of numbers) {
// 	// console.log(number)

// 	if (number < smolestNumber) {
// 		smolestNumber = number
// 	}
// }

// console.log(`Smolest Number: -${smolestNumber}-`);


// =наибольшее число, как дз=

// const numbersBig = [51, 18, 13, 24, 7, 85, 19];

// let bigestNumber = numbers[0];

// for (const number of numbers) {
// 	// console.log(number)

// 	if (number > bigestNumber) {
// 		bigestNumber = number
// 	}
// }

// console.log(`Smolest Number: -${bigestNumber}-`);

// ==================

// Напишите скрипт которий обьединяет все єлементи масива в одно строковое значение

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = '';

// for (let friend of friends) {
// 	string += friend + ', ';
// }

// string = string.slice(0, string.length - 2)

// string = friends.join(", ")

// console.log(string);

// ============================

// Изменить регистр на противоположний

// const string = 'JavaScript';
// const letters = string.split('');
// let invertString ='';


// console.log(letters)

// for (const letter of letters){
// 	console.log(letter);

// 	if(letter === letter.toLocaleLowerCase()){
// 		console.log('To Lower Case - ', letter)

// 		invertString += letter.toUpperCase()
// 	}else{
// 		invertString += letter.toLocaleLowerCase()
// 	};
// }

// console.log('invertString: ', invertString)

// =ternarnik=

// const string = 'JavaScript';
// const letters = string.split('');
// let invertString = '';

// console.log(letters);

// for (const letter of letters) {
// 	console.log(letter);

// 	const isEqual = letter === letter.toLocaleLowerCase();

// 	invertString += isEqual ? letter.toUpperCase() : letter.toLocaleLowerCase();
// }

// console.log('invertString: ', invertString);

// ===============

// Должно получиться top-ten-benefits-of-react-framework

// const title = 'Top 10 benefits of react framework';

// const normalizeTitle = title.toLocaleLowerCase();
// console.log(normalizeTitle);

// const words = normalizeTitle.split(' ');
// console.log(words);

// const slug = words.join('-')
// console.log(slug);

// =chainning=

// const lummox = title.toLocaleLowerCase().split(' ').join('-')
// console.log(lummox);

// визивается на методде а не на масиве

// ===========================

// сумма елементов 2 масивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
// 	total += number;

// }
// console.log(total);
// console.log(numbers);


// ================================

// Колекция карточек в trello, метод splice()

// const cards = [
// 	'Card-1',
// 	'Card-2',
// 	'Card-3',
// 	'Card-4',
// 	'Card-5',
// ];

// console.table(cards);

// удаление по индексу indexOf()

// const cardToRemove = 'Card-3';
// const index = cards.indexOf(cardToRemove);
// console.table(index);

// console.log(cards.splice(index, 1));

// console.table(cards);

// добавление по индексу

// const cardToInsert = 'Card-43';
// const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.table(cards)

// обновление по индексу

// const cardToUpdate = 'Card-4';
// const index = cards.indexOf(cardToUpdate)

// console.log(index);

// cards.splice(index, 1, "new card-4");

// console.table(cards);


// ================================
// ===================================
// ======================================
// ===========================================
// =================================================

// ФУНКЦИИ

// Calculate total price function


// const calculateTotalPrice = function (items) {
// 	console.log('Items inside function: ', items);

// 	let total = 0;

// 	for (const item of items) {

// 		total += item;
// 	}

// 	return total;

// };

// const result1 = calculateTotalPrice([1,2,3]);
// console.log(result1);
// console.log(`General price is: ${result1}`);


// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));
// console.log(calculateTotalPrice([700, 200, 300]));
// console.log(calculateTotalPrice([1000, 200, 300]));

// =============================

// Функция для перебора и логирования массива  logItems(items)


// const logItems = function (items) {
// 	for (const item of items) {
// 		console.log(item);
// 	}

// };

// logItems(['Mango', 'Poly', 'Ajax', 'Poly']);
// logItems([1, 2, 3, 4]);
// logItems(['клавиатура', 'наушники', 'часи']);

// =============================

// Напиши функцию findLogin(allLogins, loginToFind) для поиска логина

// const logins = ['asgsdb', 'adfgty56', 'drgtrhy78', 'jfjdkdiw9556ejxnck'];


// const findLogin = function (allLogins, loginToFind) {

// 	for (const login of allLogins) {
// 		if (login === loginToFind) {
// 			return `User ${loginToFind} find.`
// 		}
// 	}
// 	return `User ${loginToFind} do not find.`;

// };
// console.log(findLogin(logins, 'asgsdb'));


// =======2 вариант тернарник=============

// const logins = ['asgsdb', 'adfgty56', 'drgtrhy78', 'jfjdkdiw9556ejxnck'];


// const findLogin = function (allLogins, loginToFind) {

// 	return allLogins.includes(loginToFind)
// 		? `User ${loginToFind} find.`
// 		: `User ${loginToFind} do not find.`;

// };

// console.log(findLogin(logins, 'asgsdb'));
// console.log(findLogin(logins, 'adfgty56'));
// console.log(findLogin(logins, 'drgtrhy78'));
// console.log(findLogin(logins, 'jfjdkdiw9556ejxnck'));
// console.log(findLogin(logins, '907ytr'));
// console.log(findLogin(logins, '2241qw'));

// ========================================

// нахождение самого маленького числа в массиве, при условии что они не повторяються


// const findSmallestNumber = function (numbers) {
// 	let smallestNumber = numbers[0];

// 	for (const number of numbers) {
// 		if (number < smallestNumber) {
// 			smallestNumber = number;
// 		}
// 	}

// 	return smallestNumber;
// };

// console.log(findSmallestNumber([51, 18, 13, 24, 7, 85, 19]));
// console.log(findSmallestNumber([5, 15, 3, 2, -7, -8, 19]));
// console.log(findSmallestNumber([55, 118, 413, -24, 7, -85, 199]));



// ======================================

//  Изменить регистр на противоположний

// const changeCase = function (string) {

// 	const letters = string.split('');
// 	let invertString = '';

// 	for (const letter of letters) {
// 		const isInLowerCase = letter === letter.toLowerCase();

// 		invertString += isInLowerCase 
// 		? letter.toUpperCase()
// 		: letter.toLowerCase();
// 	};

// 	// console.log(letters);
// 	return invertString;
// }

// console.log(changeCase('House of Risen Sun'));
// console.log(changeCase('housE oF risen SuN'));
// console.log(changeCase('hoUse Of RiSen SUn'));

// ==============================


// Должно получиться top-ten-benefits-of-react-framework

// const slugify = function (string) {
// 	return string.toLocaleLowerCase().split(' ').join('-');
// };

// console.log(slugify('Top 10 benefits of react framework'));


// ===============================

// Псевдомасив arguments

// const fn = function () {

// 	console.log(arguments);

// 	const args = Array.from(arguments);

// 	console.log(args);

// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// =======2 вариант============

// const fn = function (...args) {

// 	console.log(args);

// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);


// ========задача==пример========

// ...args ставиться в самом конце

// const fn = function (a, b, c, ...args) {

// 	console.log(`${a} ${b} ${c}`)
// 	console.log(args);

// };

// fn('hello', 2, 3);
// fn('aloha1', 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);


// ====================ЗАДАЧА========================

// Напиши функцию add для сложения произвольного количества аргументов(чисел), опреация  (...rest)


// const add = function (...args) {
// 	console.log(args);

// 	let total = 0;

// 	for (const arg of args) {
// 		total += arg;
// 	}

// 	return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));


// ==========================================================

/*
 * Напиши функцию filterNumbers(array[,number1,...]) которая:
* первим аргументом принимает масив чисел
* после первого аргумента может бить произвольное количество других аргументов которие будут числами
* Функция должна вернуть новий масив, в котором будут только те аргументи, начиная со второго,
* для которих есть аналог в оригинальном масиве

*/



// const filterNumbers = function (array, ...args) {
// 	console.log('array: ', array)
// 	console.log('args: ', args);
// 	const uniqueElements = [];

// 	for (const element of array) {
// 		if (args.includes(element)) {
// 			uniqueElements.push(element);
// 			console.log(`${element} is here`);
// 		}
// 	}

// 	// console.log(uniqueElements);

// 	return uniqueElements;
// };


// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));


// ================================================================================================================================================================================================================================================================================================================================================================================================================


//! ЗАДАЧИ ПО БОТУ


// =1=

// function checkAge(age) {
// 	if (age >= 18) { // Change this line
// 		return "You are an adult";
// 	}

// 	return "You are a minor";
// }

// =2=

// function checkPassword(password) {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
// 	// Change code below this line 

// 	if (password === ADMIN_PASSWORD) {
// 		return "Welcome!";
// 	}
// 	return "Access denied, wrong password!";


// 	// Change code above this line
// }


// =3=

// function checkStorage(available, ordered) {
// 	// Change code below this line


// 	if (ordered === 0) {
// 	  return"Your order is empty!";

// 	} if (ordered > available) {
// 	 return "Your order is too large, not enough goods in stock!";
// 	}

// 	 return "The order is accepted, our manager will contact you";



// Change code above this line
//   }



//   =4=
// const fruits =["apple", "plum", "pear", "orange"];

// =5=

// const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// =6=

// const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
// fruits[1] ="peach";
// fruits[3] ="banana";

// =7=

// const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
// const fruitsArrayLength = fruits.length;

// =8=

// const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


// =9=

// function getExtremeElements(array) {
// 	// Change code below this line

// 	array.splice(1, array.length - 2)
// 	// Change code above this line
// 	return array;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// =10=

// function splitMessage(message, delimeter) {
// 	let words;
// 	// Change code below this line

// 	words = message.split(delimeter);	

// 	// Change code above this line

// 	return words
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));


// =11=

// function calculateEngravingPrice(message, pricePerWord) {
// 	// Change code below this line

// 	let word = message.split(' ');
// 	let cost = word.length * pricePerWord

// 	return cost
// 	// Change code above this line
// }


// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));


// =12=

// function makeStringFromArray(array, delimeter) {
// 	let string;
// 	// Change code below this line
//   string = array.join(delimeter)


// 	// Change code above this line
// 	return string;
//   }


// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));




// =13=

// function slugify(title) {

// 	// Change code below this line
// 	return title.toLowerCase().split(' ').join('-')

// 	// Change code above this line
// }

// console.log(slugify("Arrays for begginers"));


// =14=

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);



// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// =15=

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

// =16=

// function makeArray(firstArray, secondArray, maxLength) {
// 	// Change code below this line
// 	const concatArray = firstArray.concat(secondArray);
// 	const sliceArray = concatArray.slice(0, maxLength);
// 	if (concatArray < maxLength) {
// 		return concatArray;
// 	}
// 	// Change code above this line
// 	return sliceArray;

// 	// +++++++++++2 вариант+++++++++++++++++

// 	// return concatArray.length > maxLength ? sliceArray : concatArray

// }


// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);



// =17=

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// =18=

// function calculateTotal(number) {
// 	// Change code below this line
// 	let amount = 0;
// 	for (let i = 0; i <= number; i += 1) {
// 		amount += i;
// 	}
// 	return amount;
// 		// Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());


// =19=

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// =20=

// function calculateTotalPrice(order) {
// 	let total = 0;
// 	// Change code below this line
// 	for (let i = 0; i < order.length; i += 1) {
// 		total += order[i]
// 	}
// 	// Change code above this line
// 	return total;
// }


// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// =21=

// function findLongestWord(string) {
// 	// Change code below this line
// 	let splitLine = string.split(' ');
// 	let longestWord = ' ';
// 	for (let i = 0; i < splitLine.length; i += 1) {
// 		if (splitLine[i].length > longestWord.length) {
// 			longestWord = splitLine[i];
// 		}
// 	}
// 	return longestWord;
// 	// Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));


// =21-второй вариант=


// function findLongestWord(string) {
// 	  // Change code below this line

// 	  const strSplit = string.split(' ');

// 	  let longestWord = ' ';
// 	  for(let i = 0; i < strSplit.length; i += 1) {
// 	    if(strSplit[i].length > longestWord.length) {
// 	    longestWord = strSplit[i];
// 	    }
// 	  }
// 	  return longestWord;
// 	}


// =22=

// function createArrayOfNumbers(min, max) {
// 	const numbers = [];
// 	// Change code below this line
// 	for (let i = min; i <= max; i += 1) {
// 		numbers.push(i)

// 	}
// 	// Change code above this line
// 	return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// =23=

// function filterArray(numbers, value) {
// 	// Change code below this line
// 	let total = [];

// 	for (let i = 0; i < numbers.length; i += 1) {
// 		if (numbers[i] > value) {
// 			total.push(numbers[i])
// 		}
// 	}

// 	return total;
// 	// Change code above this line
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// =24=

// function checkFruit(fruit) {
// 	const fruits = ["apple", "plum", "pear", "orange"];

// 	return fruits.includes(fruit) ? true : false ; // Change this line
//   }


// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("apple"));
// console.log(checkFruit());


// =25=

// function getCommonElements(array1, array2) {
// 	// Change code below this line
// 	const unique = [];

// 	for (let i = 0; i < array1.length; i += 1) {
// 		if (array2.includes(array1[i])) {
// 			unique.push(array1[i])
// 		}
// 	}

// 	return unique;
// 	// Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


// =26=

// function calculateTotalPrice(order) {
// 	let total = 0;
// 	// Change code below this line

// 	for (const item of order) {
// 	  total += item;
// 	}

// 	// Change code above this line
// 	return total;
//   }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// =27=

// function filterArray(numbers, value) {
// 	// Change code below this line
// 	const filteredNumbers = [];
// 	let total  = 0;

// 	for (let number of numbers) {
// 	  total += number;

// 	  if (number > value) {
// 		filteredNumbers.push(number);
// 	  }
// 	}

// 	return filteredNumbers;
// 	// Change code above this line
//   }



// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray());



// =28=

// Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6 ;


// console.log(a);//0
// console.log(b);//1
// console.log(c);//3
// console.log(d);//5
// console.log(e);//2


// =29=

// function getEvenNumbers(start, end) {
// 	// Change code below this line
// 	const arr = [];
// 	for (let i = start; i <= end; i += 1) {
// 		if (i % 2 === 0) {
// 			arr.push(i)
// 		}
// 	}
// 	return arr
// 	// Change code above this line
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers(7, 7));


// =30=

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// =31=

// function findNumber(start, end, divisor) {
// 	// Change code below this line
// 	let number;

// 	for (let i = start; i < end; i += 1) {
// 		if (i % divisor === 0) {
// 			number = i;
// 			return number;
// 		}
// 	}

// 	// Change code above this line
// }

// console.log(findNumber(2, 6, 5))
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));


// =32=

// return array.includes(value) ? true : false
// function includes(array, value) {
// 	// Change code below this line
// 	for (let num of array) {
// 		if (num === value) {
// 			return true
// 		}
// 	}
// 	return false
// 	// Change code above this line
// }


// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));

