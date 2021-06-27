const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

console.log(totalPrice);

// ============================


function multiply(x, y, z) {
	console.log("Код до return выполняется как обычно");

	// Возвращаем результат выражения умножения
	return x * y * z;

	console.log("Этот лог никогда не выполнится, он стоит после return");
}

// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550

//   =======================================

function makeMessage(name, price) {
	// Change code below this line	
	const message = `You picked ${name}, price per item is ${price} credits`;
	// Change code above this line
	return (message);

};

makeMessage('Radar', 6150);
makeMessage('Scanner', 3500);
makeMessage('Reactor', 8000);
makeMessage('Engine', 4070);

// ================================


function calculateTotalPrice(orderedQuantity, pricePerItem) {
	// Change code below this line
	const totalPrice = orderedQuantity * pricePerItem;

	// Change code above this line
	return (totalPrice);
};

calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);
calculateTotalPrice(1, 3500);
calculateTotalPrice(12, 70);


// ==========================


function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
	// Change code below this line

	const totalPrice = orderedQuantity * pricePerDroid + deliveryFee

	const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

	// Change code above this line
	console.log(message);
};

makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200)

// =======================


function isValidPassword(password) {
	const SAVED_PASSWORD = 'jqueryismyjam';
	// Change code below this line
	const isMatch = (password === SAVED_PASSWORD);

	// Change code above this line
	return (isMatch);
};

isValidPassword("mangodab3st");
isValidPassword("kiwirul3z");
isValidPassword("jqueryismyjam");


//   ==================================


function checkStorage(available, ordered) {
	let message;
	// Change code below this line
	if (ordered > available) {
		message = `Not enough goods in stock!`

	} else {
		message = `Order is processed, our manager will contact you.`
	}

	// Change code above this line
	console.log(message);
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);



// ========18=========


function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
	let message;
	// Change code below this line
	let totalPrice = pricePerDroid * orderedQuantity;

	if (totalPrice > customerCredits) {

		message = "Insufficient funds!";

	} else {

		totalPrice = customerCredits - totalPrice


		message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`;

	}

	// Change code above this line
	console.log(message);
}

makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000);
makeTransaction(500, 10, 5000);


// =================20=========

function checkStorage(available, ordered) {
	let message;
	// Change code below this line

	if (ordered === 0) {
		message = "There are no products in the order!";
	} else if (ordered > available) {
		message = "Your order is too large, there are not enough items in stock!";
	} else {
		message = "The order is accepted, our manager will contact you";
	}

	// Change code above this line
	return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);


// ========21==

function isNumberInRange(start, end, number) {
	const isInRange = number >= start && number <= end; // Change this line

	return isInRange;
};
isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76);

//   =========23=======

function isNumberNotInRange(start, end, number) {
	const isInRange = number >= start && number <= end;
	const isNotInRange = !isInRange; // Change this line

	return isNotInRange;
};

isNumberNotInRange(10, 30, 17);
isNumberNotInRange(10, 30, 5);
isNumberNotInRange(20, 50, 24);
isNumberNotInRange(20, 50, 76);

//   =========24=======


function getDiscount(totalSpent) {
	const BASE_DISCOUNT = 0;
	const BRONZE_DISCOUNT = 0.02;
	const SILVER_DISCOUNT = 0.05;
	const GOLD_DISCOUNT = 0.1;
	let discount;
	let procent = 100;
	// Change code below this line

	if (totalSpent >= 50000) {
		discount = GOLD_DISCOUNT * procent;
	} else if (totalSpent >= 20000 || totalSpent === 50000) {
		discount = SILVER_DISCOUNT * procent;
	} else if (totalSpent >= 5000 || totalSpent === 20000) {
		discount = BRONZE_DISCOUNT * procent;
	} else {
		discount = BASE_DISCOUNT;
	}

	// Change code above this line
	console.log(discount);
}

getDiscount(137000);
getDiscount(46900);
getDiscount(8250);
getDiscount(1300);
getDiscount(5000);
getDiscount(20000);
getDiscount(50000);

//   =============25=answer============

function checkStorage(available, ordered) {
	let message;
	// Change code below this line  
	message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
	// Change code above this line
	return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180);



// ===========26===============

function checkPassword(password) {
	const ADMIN_PASSWORD = "jqueryismyjam";
	let message;
	// Change code below this line
	message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"

	// Change code above this line
	return message;
}
//   ==============27=====================

function getSubscriptionPrice(type) {
	let price;
	// Change code below this line
	switch (type) { // Change this line
		case "starter": // Change this line
			price = 0; // Change this line
			break;
		case "professional": // Change this line
			price = 20; // Change this line
			break;
		case "organization": // Change this line
			price = 50; // Change this line
			break;
	}
	// Change code above this line
	return price;
}

// ===========28==================

function checkPassword(password) {
	const ADMIN_PASSWORD = "jqueryismyjam";
	let message;
	// Change code below this line

	switch (password) {
		case null:
			message = "Canceled by user!";
			break;

		case ADMIN_PASSWORD:
			message = "Welcome!";
			break;

		default:
			message = "Access denied, wrong password!"
	}
	// Change code above this line
	console.log(message);
}


checkPassword("mangohackzor");
checkPassword(null);
checkPassword("polyhax");
checkPassword("jqueryismyjam");

// ===========29=====================

function getShippingCost(country) {
	let message;
	switch (country) {

		case "China":
			price = 100;
			message = `Shipping to ${country} will cost ${price} credits`;
			break;

		case "Chile":
			price = 250;
			message = `Shipping to ${country} will cost ${price} credits`;
			break;

		case "Australia":
			price = 170;
			message = `Shipping to ${country} will cost ${price} credits`;
			break;

		case "Jamaica":
			price = 120;
			message = `Shipping to ${country} will cost ${price} credits`;
			break;

		default:
			message = "Sorry, there is no delivery to your country"

	}

	// Change code above this line
	// return message;
	console.log(message)

};
getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");


// ==========30=====================

function getNameLength(name) {
	const message = `Name ${name} is ${name.length} characters long`; // Change this line

	return message;
}

getNameLength("Poly");
getNameLength("Harambe");
getNameLength("Billy");
getNameLength("Joe");

// ==========31===============

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

// =============32===================

function getSubstring(string, length) {
	const substring = string.slice(0, length); // Change this line

	return (substring)
	// console.log(substring);

}
getSubstring("Hello world", 3);
getSubstring("Hello world", 6);
getSubstring("Hello world", 8);
getSubstring("Hello world", 11);


// ===========33===================
function formatMessage(message, maxLength) {
	let result;
	// Change code below this line

	result = message.length > maxLength ? message.slice(0, maxLength) + "..." : message

	if (message.length > maxLength) {
		result = message.slice(0, maxLength) + "..."
	} else {
		result = message
	}

	/// Change code above this line
	// return result;
	console.log(result)
}
formatMessage("Curabitur ligula sapien", 16);
formatMessage("Curabitur ligula sapien", 23);
formatMessage("Vestibulum facilisis purus nec", 20);
formatMessage("Vestibulum facilisis purus nec", 30);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);

// ================34=========

function normalizeInput(input) {
	const normalizedInput = input.toLowerCase(); // Change this line

	// return (normalizedInput);
	console.log(normalizedInput);
}

normalizeInput("Hello world");
normalizeInput("This ISN'T SpaM");
normalizeInput("Big SALE");

// ==========35================

// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

function checkForName(fullName, name) {
	const result = fullName.includes(name); // Change this line
	return result;
}

//    ================36=ternarnik=============

function checkForSpam(message) {
	let result;
	// Change code below this line

	result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") ? message = true : message = false

	// Change code above this line
	// return result;
	console.log(result);
}
checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");

// ==========36==============================

function checkForSpam(message) {
	let result;

	if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
		result = true;
	} else {
		result = false;
	}
	// Change code above this line
	// return result;

	console.log(result);
}
checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");

// ============Марта===========

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
// result = message.toLowerCase('spam');
// result = message.toLowerCase('sale');
// if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')){
// result = true;
// } else {
//  result = false;
// }
//   // Change code above this line
//   console.log(result);
// }
// ===============================

// ЗАДАЧА
// Написать программу которая конвертирует минуты в формат HH:MM

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:1

// 1) переменние
// 2) цикл
// 3) деление по модулю


// let hour = 0;
// let minute;
// let count;
// for (i = 0; i % 10; i += 1) {
// 	if (Number(i % 1 && i % 2)) {
// 		let hour = Number(i);
// 		console.log(Number(i))
// 	}
// }




// =======DONE===========
// Написать програму которая конвертирует минуты в формат HH:MM

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:1

// =====1 решение=========


// let x = 70;
// let hour = x / 60;
// let minutes = x % 60;
// for (let i = 1; i <= x; i += 1) {
//     console.log(`Now ${Math.floor(hour)}:${minutes}`)
// }

// ==========2 решение=======

// for (let i = 0; i <= 1441; i += 1) {
// 	let hour = i / 60;
// 	let minutes = i % 60;
// 	if (i === 70) {

// 		console.log(`Now ${Math.floor(hour)}:${minutes}`)

// 	} else if (i === 450) {
// 		console.log(`Now ${Math.floor(hour)}:${minutes}`)

// 	} else if (i === 1441) {
// 		console.log(`Now ${Math.floor(hour)}:${minutes}`)
// 		break
// 	}

// }

// =========DONE================


