// !==================КОНСПЕКТ===================

// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = "HOCs are awesome";
//   callback(string);
// };

// higherOrderFunction(printMessage);

// // ===

// const smth = (message) => {

//   console.log(message);
// };

// const smthNew = (callback) => {
//   let arr = ["wer", 1, "wert4", 345];
//   callback(arr);
// };

// smthNew(smth);

// ===

// const repeat1 = (n) => {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeat1(10);
// ===

// const printValue = function (value) {
// 	console.log(value);
//   };

//   const prettyPrint = function (value) {
// 	console.log('Logging value pretyPrint: ', value);
//   };

//   const repeat = function (n, action) {
// 	for (let i = 0; i < n; i += 1) {
// 	  action(i);
// 	}
//   };

// // Передаем printValue как callback-функцию
//   repeat(3, printValue);
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
//   repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

// ===conspect

// const filter = function (array, test) {
// 	const filteredElements = [];

// 	for (const element of array) {
// 	  const passed = test(element);

// 	  if (passed) {
// 		filteredElements.push(element);
// 	  }
// 	}

// 	return filteredElements;
//   };

//   const fruits = [
// 	{ name: 'apples', quantity: 200, isFresh: true },
// 	{ name: 'grapes', quantity: 150, isFresh: false },
// 	{ name: 'bananas', quantity: 100, isFresh: true },
//   ];

//   const freshFruits = filter(fruits, fruit => fruit.isFresh);
//   console.log(freshFruits); // массив с объектами apples и bananas

//   const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
//   console.log(fruitsWithQuantity); // массив с объектами apples и grapes

//   ===

// const bar = function (arr) {
// 	console.log('bar');

//   };

//   const baz = function () {
// 	console.log('baz');
//   };

//   const foo = function () {
// 	console.log('foo');
// 	bar();
// 	baz();
//   };

//   foo();
// // ===

// const fn = ()=>{
// 	console.log('this: ', this);
// }

// fn()// this => underfined

// const user ={name:"Mango"};
// user.contextThis = fn;

// user.contextThis();

// ===
//! call

// const work = function (salary,time ){
// 	return ` Your name ${this.name}, your salary ${salary} for ${time} hour, & you live in ${this.live} `
// };

// const person={name:'Petro',live:'house'};

// console.log(work.call(person, 1500, 20));

//! apply

// const life = function(car,bike){
// 	return `You sername ${this.sername}, your nik ${this.nik}, you have car ${car}  & bike ${ bike}. Of course you have a rest  on island-${this.island}.`
// };

// const man = {sername: 'Davydov', nik: 'Sensei', island: 'MAN'};

// console.log(life.apply(man,['Tayota', 'HarleyDavidson']));

//!bind

// const relax= function (musik,hobby) {
// 	return `I like musik ${musik} & of course hobby ${hobby}.
// 	I like winter in ${this.place}.`

// };

// const place = {place: 'Mountains'};

// const freeTime = relax.bind(place, 'Rock & Rap & Hip-hop', 'Snowboarding')

// console.log(freeTime());

// ===

//? пример из конспекта

// const hotel = {
// 	name: 'Resort Hotel',
// 	showThis() {
// 	  console.log("This is 'this': ", this);
// 	},
//   };

//   const fna = function (callback) {
// 	callback();
//   };

//   // Передаем копию метода showThis с контекстом привязанным к hotel
//   fna(hotel.showThis.bind(hotel)); // {name: "Resort Hotel", showThis: ƒ}

//! функция filter

// const filter = function (array,test) {
// 	const filteredArray = [];
// 	for (const el of array){
// 		// console.log(el);
// 		const pased = test(el);

// 		if (pased){
// 			filteredArray.push(el)
// 		}
// 	}
// 		return filteredArray
// };

//1. передать функцию
//2. функция получает елемент масива
//3. если елемент масива удовлетворяет условия то функция вернет true
//3. если елемент масива НЕ удовлетворяет условия то функция вернет false

// const callback1 = function (value) {
// 	return value>=3;
// }

// const callback2 = function (value) {
// 	return value>3;
// }

// const r1 = filter([1,2,3,4,5], callback1);
// console.log(r1);

// const r2 = filter([1,2,3,4,5,6,7,8],callback2)
// console.log(r2);

// const fruits = [
// 	{ name: 'apples', quantity: 200, isFresh: true },
// 	{ name: 'grapes', quantity: 150, isFresh: false },
// 	{ name: 'bananas', quantity: 100, isFresh: true },
//   ];

//   const getFruitsWithQuantity = function (fruit) {
// 	  return fruit.quantity >=120;
//   };

// const r3 = filter(fruits,getFruitsWithQuantity);
// console.log(r3);

//! Замимкание

// const fnA =function (parametr) {
// 	const innerVariable = `значение внутренней переменной функции fnA`

// const innerFunction = function () {
// 	console.log((`Єто визов innerFunction`));
// 	console.log((innerVariable));
// 	console.log((parametr));
// };
// return innerFunction;

// }

// const fnB = fnA(555);

// fnB();
// console.log(fnB);

// =======

// const makekDish = function(sheffName, dish){
// 	console.log(`${sheffName} cooks ${dish}`);
// };

// makekDish("Poly", 'tea');
// makekDish("Poly", 'eags');
// makekDish("Poly", 'meat');
// console.log("=======");
// makekDish ("Mango", 'tea');
// makekDish("mango", 'eags');
// makekDish("mango", 'meat');

// ===
// const makeSheff  = function (name) {
// 		const message ="hello";
// 		const innerVar = 555;

// 	const makeDish = function(dish){
// 		console.log(`${name} cooks ${dish}`);
// 		console.log(message);
// 		console.log(innerVar);

// 	};

// 	return makeDish;
// };

// const mango = makeSheff('Mango');
// const poly = makeSheff('Poly');
// // console.log(mango);

// mango('meat');
// poly('tea')

// ===========

// const floatingPoint = 3.45678;
// const someIn =  Math.round(floatingPoint);
// const withDecimal =Number(floatingPoint.toFixed(2));

// const rounder= function (number, places) {
// 	return Number (number.toFixed(places))

// }

// console.log(rounder(1.45678,1));
// console.log(rounder(2.45678,2));
// console.log(rounder(3.45678,3));
// console.log(rounder(4.45678,4));

// const rounder =function (places) {
// 	return function (number) {
// 		return Number(number.toFixed(places));
// 	}
// }

// const rounder2 =rounder(2)
// const rounder3 =rounder(3)

// console.log(rounder2(1.45678,1));
// console.log(rounder2(2.45678,2));
// console.log(rounder2(3.45678,3));
// console.log(rounder2(4.45678,4));

// =====

// const salaryManagerFactory = function (employeeName, baseSalary) {
// 	let salary =  baseSalary;

// 	const changeBy = function (amount) {
// 		salary +=amount;
// 	};

// 	return {
// 		raise(amount){
// 		salary+=amount;
// 		},
// 		lower(amount){
// 			salary-=amount;
// 			},
// 		current(){
// 			return `Current salary ${employeeName} - ${salary}`
// 		},
// 	};
// };

// const salaryManager=salaryManagerFactory('Mango',5000);
// // console.log(salaryManager.raise);
// console.log(salaryManager.current());

// ! стрелочние функции

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================

// =1=

//*Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
// 	return 'Ваша пицца готовится, ожидайте.';
//   }
//   // Пиши код ниже этой строки

//   const result = makePizza();
//   const pointer = makePizza;

//   console.log(result);
//   console.log(pointer);

// =2=

//*Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(deliverPizza("Acrobat"));
// console.log(makePizza("Mango"));

// =3=

//*Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку 'Едим пиццу <имя пиццы>'.

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza("Роял гранд", function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza("Ультрасыр", function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName} `);
// });

// =4=

//* Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.' // Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   order(pizzaName, onSuccess, onError) {
//     for (let pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return onSuccess, `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
//       }
//     }
//     return (
//       onError, `Ошибка! В ассортименте нет пиццы с названием ${pizzaName}.`
//     );
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order("Аль Копчино", makePizza, onOrderError));
// console.log(pizzaPalace.order("Биг майк", makePizza, onOrderError));
// console.log(pizzaPalace.order("Четыре нарезона", makePizza, onOrderError));
// console.log(pizzaPalace.order("Венская", makePizza, onOrderError));

// =5=

// const pizzaPalace = {
// 	pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
// 	// Пиши код ниже этой строки
// 	checkPizza(pizzaName) {
// 	  return this.pizzas.includes(pizzaName);
// 	},
// 	order(pizzaName) {
// 	  const isPizzaAvailable = this.checkPizza(pizzaName);

// 	  if (!isPizzaAvailable) {
// 		return `В ассортименте нет пиццы с названием «${pizzaName}».`;
// 	  }

// 	  return `Заказ принят, готовим пиццу «${pizzaName}».`;
// 	},
// 	// Пиши код выше этой строки
//   };
//    console.log(pizzaPalace.order('Аль Копчино'));
//    console.log(pizzaPalace.order('Четыре нарезона'));
//    console.log(pizzaPalace.order('Биг майк'));
//    console.log(pizzaPalace.order('Венская'));

// =6=

// const customer = {
// 	username: 'Mango',
// 	balance: 24000,
// 	discount: 0.1,
// 	orders: ['Burger', 'Pizza', 'Salad'],
// 	// Пиши код ниже этой строки
// 	getBalance() {
// 	  return this.balance;
// 	},
// 	getDiscount() {
// 	  return this.discount;
// 	},
// 	setDiscount(value) {
// 	  this.discount = value;
// 	},
// 	getOrders() {
// 	  return this.orders;
// 	},
// 	addOrder(cost, order) {
// 	  this.balance -= cost - cost * this.discount;
// 	  this.orders.push(order);
// 	},
// 	// Пиши код выше этой строки
//   };

//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, 'Steak');
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// =7=

// Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages получился массив сообщений о статусе заказов из массива orders с помощью цикла for.

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }
// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//   let result = composeMessage.call(orders[i], i + 1);

//   messages.push(result);
// }

// console.log(messages);

// =8=

// const orders = [
// 	{ email: "solomon@topmail.ua", dish: "Burger" },
// 	{ email: "artemis@coldmail.net", dish: "Pizza" },
// 	{ email: "jacob@mail.com", dish: "Taco" },
//   ];
  
//   // Пиши код ниже этой строки
//   function composeMessage(position) {
// 	return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
//   }
  
//   const messages = [];
//   for (let i = 0; i < orders.length; i++) {
// 	const msg = composeMessage.apply(orders[i], [i + 1]);
// 	messages.push(msg);
//   }
  
// =9=


//* Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов. Дополни код так, чтобы в переменных pizzaPalaceComposer и burgerShackComposer были её копии с привязанным контекстом к соответствующим объектам.

// const pizzaPalace = {
// 	company: 'Pizza Palace',
//   };
  
//   const burgerShack = {
// 	company: 'Burger Shack',
//   };
  
//   function composeMessage(customerName) {
// 	return `${customerName}, всегда рады вас видеть в «${this.company}».`;
//   }
//   // Пиши код ниже этой строки



//   const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
//   const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
  
//   const burgerShackComposer = composeMessage.bind(burgerShack);
//   const burgerShackMessage = burgerShackComposer('Поли');
  
// =10=

//* Метод bind и методы объекта

//* Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики. Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service. Сбор статистики симулируется логированием строки. Разберись и дополни код так, чтобы он работал верно.

const service = {
	mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
	subscribe(email) {
	  this.mailingList.push(email);
	  return `Почта ${email} добавлена в рассылку.`;
	},
	unsubscribe(email) {
	  this.mailingList = this.mailingList.filter((e) => e !== email);
	  return `Почта ${email} удалена из рассылки.`;
	},
  };
  
  function logAndInvokeAction(email, action) {
	console.log(`Выполняем действие с ${email}.`);
	return action(email);
  }
  
  const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
  console.log(firstInvoke);
  // Почта kiwi@mail.uk добавлена в рассылку.
  
  console.log(service.mailingList);
  /* ['mango@mail.com', 
	  'poly@hotmail.de', 
	  'ajax@jmail.net', 
	  'kiwi@mail.uk']*/
  const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
  console.log(secondInvoke);
  // Почта poly@hotmail.de удалена из рассылки.
  
  console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
  