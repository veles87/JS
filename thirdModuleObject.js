//* Конспект

// const hotel = {
// 	nameHotel: "Resort Hotel",
// 	stars: 5,
// 	capacity: 200,
// 	cost: 350
// };
// console.table(hotel);
// console.log(hotel.nameHotel);
// console.log(hotel.cost);
// console.log(hotel["stars"]);
// ---

// * создание пари если нет такого в обьекте;

// hotel.manager = "Chack Noris";
// hotel['security'] = "Van Dam";

// console.log(hotel.manager);
// console.log(hotel["security"]);

// =====================================

// *delete -оператор удаления
// delete hotel.cost //1 variant
// delete hotel['capacity'] // 2 variant
// console.log(hotel);

// =====================

// * shortHand properties

// let nameRest = 'Hotel California';
// let costRest = 1000;
// let placeRest = 'Ocean Beach';

// const restTeritory = {
// 	nameRest,
// 	costRest,
// 	placeRest,
// 	stars: 5,
// };

// console.table(restTeritory);

// =================

//* вичисляемие свойства

// const title = "BikersNik";
// const getBike = function () {

// 	return "myBike"
// };

// let bikers = {
// 	[title]: title,
// 	[getBike()]: getBike(),
// };

// console.table(bikers);

//=====================

//* методи обьекта

// const newYork = {
// 	city: 'New York',
// 	street: '1-st street',
// 	cars: 2500,
// 	house: 2000000000,
// 	air: '1.3cub/m',
// 	helloNewYork() {
// 		console.log('This is function');
// 	}
// };

// console.table(newYork);
// newYork.helloNewYork();

//*  this

// const hotelRom = {
// 	nameRom: "Rom Hotel",
// 	starsRom: 5,
// 	capacityRom: 100,
// 	showNameRom() {
// 		console.log(this.nameRom);
// 	},
// 	changeCapacityRom(value) {
// 		this.capacityRom = value;
// 	},
// }

// hotelRom.showNameRom();
// hotelRom.changeCapacityRom(500);
// console.log(hotelRom.capacityRom);

// ==========================

//*  цикл for...in

// const hotelSport = {
// 	nameSport: "Sport",
// 	nameCost: 250,
// 	nameStars: 5,
// 	nameCapacity: 300,
// };

// for (const key in hotelSport) {

// 	console.table('Hotel Sport key: ', key); //перебор ключей

// 	console.table('Hotel sport value: ', hotelSport[key]);// перебор значений
// };

// * Object.keys(), Object.values(), Object.entries()

// const hotelSport = {
// 	nameSport: "Sport",
// 	nameCost: 250,
// 	nameStars: 5,
// 	nameCapacity: 300,
// };

// const hotelSportKeys = Object.keys(hotelSport);
// console.log(hotelSportKeys);
// const hotelSportValue = Object.values(hotelSport);
// console.log(hotelSportValue);
// const hotelSportEntries = Object.entries(hotelSport);
// console.log(hotelSportEntries);

//* Object.keys() и цикл for...of

// const houseOfRisenSun = {
// 	namehouseOfRisenSun: 'House of Risen Sun',
// 	starshouseOfRisenSun: 10,
// 	costhouseOfRisenSun: 500,
// 	managerhouseOfRisenSun: 'Don Shymoda',

// };

// const keyshouseOfRisenSun = Object.keys(houseOfRisenSun);

// for (const keys of keyshouseOfRisenSun) {
// 	console.log('Value: ', houseOfRisenSun[keys]);
// };

//* можно использовать результат Object.entries()

const cars = {
  carName: "Nisan",
  while: 1,
  sit: 4,
  belt: 5,
  motor: 1,
};

const entriesCar = Object.entries(cars);

for (const insideCar of entriesCar) {
  const keyCar = insideCar[0];
  const valueCar = insideCar[1];

  console.log(`${keyCar}: ${valueCar}`);
}

//**Задача пример */

// const vegetables = {
// 	apple: 6,
// 	tomato: 10,
// 	cucamber: 15,
// 	popcorn: 30,
// 	potato: 35,
// 	meloan: 3,
// };

// const sumVegetables = Object.values(vegetables);
// console.log(sumVegetables);

// let vegTotal = 0;

// for (const itemVeg of sumVegetables) {
// 	vegTotal += itemVeg;
// };

// console.log(`Total vegetables: `, vegTotal, '- piece');

// ==============================

//* Операция spred & rest

// !Распиление аргументов

//найти самую маленькую температуру

// const temperature = [12, 2, 34, 5, 67, 123, 4];

// const minTemp = Math.min(...temperature);
// console.log(minTemp);

// const maxTemp = Math.max(...temperature);
// console.log(maxTemp);

//! Распиление масивов

// const movies = ['Rembo', 'Alience', 'Green Mile', 'Every Sunday', 'Joe Black'];

// const likeMovies = [...movies];
// console.log(likeMovies);

// const heros = ['IronMan', 'Doctor Doolit', 'Ninja', 'Robocop'];

// const allItem = [...heros, ...movies];
// console.log(allItem);

//? slice() в комбинации с операцией spread

// const sliceSpred = [...heros.slice(1, 3), ...movies.slice(-2)];
// console.log(sliceSpred);

//? Можно обновлять элементы не изменяя оригинальный массив, а создавая новый с обновленными значениями.

// const bed = ['pillow ', 'blanket ', 'mattress', 'night', ' light'];
// console.log(bed);

// const newPlaceForSleep = [
// 	...bed.slice(0, 2), // copy
// 	'Soft Toy', 'Bucket Rose', // add
// 	...bed.slice(2), // copy
// ];

// console.log(newPlaceForSleep);

//! Распиление обьектов

//Object.assign()

// const a = { x: 1, y: 2 };
// const b = { x: 4, z: 3 };

// const c = Object.assign({}, a, b);
// console.log(c);

// const d = { ...a, ...b };
// console.log(d);

//* свойства распыляемого объекта могут перезаписать значение существующего свойства, если имена ключей совпадают, а распыление происходит после указания свойства.

// const q = { s: 1, d: 2 };
// const w = { s: 0, f: 3 };

// const m = { s: 5, j: 11, ...q, u: 21, ...w };
// console.log(m);  //{s: 0, j: 11, d: 2, u: 21, f: 3}

//* Задача на создание чтотокогото

// let man = { hasHands: true, hasHead: true, hasBody: false };
// let horse = { hasLegs: 4, hasTail: true, hasBody: true };

// const kentavr = { ...man, hasEyes: 2, ...horse};
// console.log(kentavr);

//!  Операция rest

// const add = function (...args) {
// 	console.log(args);
// };

// add(6, 7, 8);
// add(1, 2, 3, 4, 5)

// ======

//* Операция rest собирает все оставшиеся аргументы и поэтому должна идти последней в подписи функции, иначе будет ошибка.

// const add = function (value, name, ...args) {
// 	console.log(value);
// 	console.log(name);
// 	console.log(args);

// };

// add(10, 'one:', 1, 2, 3)
// add(15, 'two:', 1, 2, 3, 4, 5)

//! Деструктуризация

// const hotel = {
// 	name: "Hotel one",
// 	stars: 5,
// 	capacity: 100,
// };

// const { name = "Hotel two", stars = 5, status = "empty" } = hotel;
// console.log(name, stars, status); //Hotel one 5 empty

// const { name: hotelName, stars, status: HotelStatus = 'empty' } = hotel;
// console.log(hotel);//{name: "Hotel one", stars: 5, capacity: 100}

//*Используя операцию ... (rest) можно делать частичную деструктуризацию, взяв из объекта необходимые поля, а остальное собрать в переменную под именем rest (имя переменной произвольное), это будет объект с теми полями, которые мы явно не деструктуризировали в переменные.

// const { name, ...rest } = hotel;
// console.log(hotel);//{name: "Hotel one", stars: 5, capacity: 100}
// console.log(name);//Hotel one
// console.log(rest);//{stars: 5, capacity: 100}

//! Деструктуризация масивов

// const rgba = [200, 255, 100];
// ======variant======
// let red, green, blue;
// [red, green, blue] = rgba;
// =====variant======
// const [red, green, blue] = rgba;

// =======varian more than in array======
// const [red, green, blue, alfa = 0.3] = rgba;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue} Alfa:${alfa}`);//Red: 200, Green: 255, Blue: 100 Alfa:0.3

// =======varian more than in array======

// const [red, green, blue] = rgba;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue} `);//Red: 200, Green: 255, Blue: 100

// ================

//!...rest

//*деструктуризировать только первые n элементов, а остальные сохранить в одну переменную в виде массива.

// const rgb = [200, 225, 100];
// const [red, ...colors] = rgb;
// console.log(`Red: ${red}, Colors: ${colors}`);

//* Допустим, из массива rgb необходимо взять только последнее значение.

// const rgb = [200, 255, 100];
// const [, , blue] = rgb;

// console.log(`Blue ${rgb}`);

// ================================================================================================================================================================================================================================================================================================================================================================================================================

//! Видео Лекции Репети

// let green = 200;
// let blue = 300;
// let yellow = 400;

// let color = [250, 350, 450];
// [green, blue] = color;

// console.log(`G: ${green} B: ${blue} Y: ${yellow}`);

// let pictures = [100, 200, 477];

// const [, , number477] = pictures;
// console.log(`Pictures : ${number477}`);

//! Вичисляемое свойство

// let inputName = 'color';
// let color = 'tomato';
// let pictures = 'square';
// let author = 'Salvador Dali';

// let colorPickerName = {
// 	[inputName]: color,
// 	[author]: pictures,
// }

// console.table(colorPickerName);

//! МЕТОДИ
//Method getName

// const playList = {
// 	name: "My super List",
// 	rating: 5,
// 	track: ['track-1', 'track-2', 'track-3'],
// 	trackCount: 3,
// 	// getName: function () {
// 	// 	console.log('Hello this is Method getName!');// oldSchool

// 	// },
// 	getName() {
// 		console.log('Hello this is Method getName!');

// 	},
// };

// playList.getName();

// * == method=

// const playList = {
//   name: "My super List",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,

//   changeName(newName) {
//     console.log("This inside changeName!", this);
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },
// };
// console.log(playList.getTrackCount()); // 1 визов
// playList.changeName("New name-1");
// playList.addTrack("new track-4");
// console.log(playList.getTrackCount());
// playList.addTrack("new track-5"); // 2 визов
// playList.updateRating(8);
// playList.getTrackCount(); //3 визов внутри обьекта

//! Перебор

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedBack = 0;

//* Object.keys() -> масив с ключами

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);

//   console.log(feedback[key]);

//   totalFeedBack += feedback[key];
// }

// console.log("Total Feedback: ", totalFeedBack);

//* object.value()-> масив значений

// const values = Object.values(feedback);
// console.log(values);

// let totalFeedBack = 0;

// for (const value of values) {
//   console.log(value);

//   totalFeedBack += value;
// }

// console.log("Total Feedback: ", totalFeedBack);

// ================

//!  Работа с коллекцией(масив обьектов)

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];
// console.log(friends);

// for (let friend of friends) {
// 	// console.log(friend);
// 	// console.table(friend.name);
// 	console.table(friend.online);

// 	friend.newprop = 555;
// }

// console.table(friends);

//! поиск друга по имени

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];
// // console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     // console.log(friend);
//     // console.log(friend.name);
//     // console.log(friend.name);

//     if (friend.name === friendName) {
//       return " Find our Friend!!!";
//     }
//   }
//   return "Unfortunately we can't find such friend";
// };

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chalsy"));

//! получить все имена друзей

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];
// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {};

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }
//   //   console.log(names);
//   return names;
// };

// // console.log(getAllNames(friends));
// console.log(getAllNames(friends));

//! Получить всех друзей online

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// const getOnLineFriends = (allFriends) => {
//   const onLineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onLineFriends.push(friend);
// 	  };
//   }
//   return onLineFriends;
// };

// console.table(getOnLineFriends(friends));

//! Получить всех друзей offline

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// const getOffLineFriends = (allFriends) => {
//   const offLineFriends = [];

//   for (let friend of allFriends) {
//     if (!friend.online) {               // "!" не равно
//       offLineFriends.push(friend);
//     }
//   }
//   return offLineFriends;
// };

// console.log(getOffLineFriends(friends));

//! Создать 2 обьекта , если online  о пушить в 1 , offline -2

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: false },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
//   { name: "Oreo", online: true },
//   { name: "ALamp", online: false },
//   { name: "Joker", online: true },
// ];

// const getFriendsByOnlineStatus = (allFriends) => {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     // console.log(friend);
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }
//     friendsByStatus.offline.push(friend);
//   }

//   return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

//*Задача : КОЛИЧЕСТВО СВОЙСТВ В ОБЬЕКТЕ

// const x = {
// 	a: 1,
// 	b: 2,
// 	c: 43,
// 	d: 56,

// };
//   console.log(Object.keys(x));
//   console.log(Object.keys(x).length);

//! Деструктуризация обьекта

// const person = {
//   name: "Igor",
//   //   serName: "Panchenko",
//   age: 35,
//   car: "Lexus",
//   musikLike: "Rock",
// };

// // const { name, serName, age, car, musikLike } = person;

// const { name, serName: NIK = "User nik", age, car, musikLike } = person; //переименование через двоеточие, дефольное значение через равно.

// console.log(
//   name,
//   //   serName,
//   NIK,
//   age,
//   car,
//   musikLike
//   //   `Your name ${name} sername ${serName},
//   //    you are ${age} years old. Your car ${car}
//   //     & you like ${musikLike} musik `
// );

//! Object.entries()- usecase from video

// const authors = {
//   kiwi: 4,
//   poly: 5,
//   ajax: 6,
//   mango: 8,
// };

// const entries = Object.entries(authors);

// console.log(entries);

// for (const [name, rating] of entries) {
//   console.log(name, rating);
// };

//! обьект настроек

// const showProfileInfo = (userProfile) => {
//   console.table(userProfile);
// };

// const person = {
//   name: "Igor",
//   serName: "Panchenko",
//   age: 35,
//   car: "Lexus",
//   musikLike: "Rock",
//   stats: {
//     folowers: 100,
//     views: 100,
//     likes: 30,
//   },
// };

// showProfileInfo(person);

//! Работа с колекцией товаров в корзине
//! Работа с колекцией товаров в корзине
//! Работа с колекцией товаров в корзине
//! Работа с колекцией товаров в корзине

//*
/**
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * {name: 'tomato', price: 50}
 * {name: 'grapes', price: 50}
 * {name: 'lemon', price: 50}
 * {name: 'strawberries', price: 50} *
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];

//       if (productName === item.name) {
//         console.log("Find product: ", productName);
//         console.log("index: ", i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;
//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: "tomato", price: 50 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "strawberries", price: 110 });
// cart.add({ name: "strawberries", price: 110 });
// cart.add({ name: "strawberries", price: 110 });

// console.table(cart.getItems());
// // ==
// console.log(("Total: ", cart.countTotalPrice()));
// // ==

// // ==
// cart.remove("tomato");
// console.table(cart.getItems());
// // ==

// cart.clear();
// console.log(cart.getItems());
// // ==

// // cart.increaseQuantity()
// // console.log(cart.getItems());

//*
//! Работа с колекцией товаров в корзине
//! Работа с колекцией товаров в корзине
//! Работа с колекцией товаров в корзине
//! Работа с колекцией товаров в корзине
// ================================================================================================================================================================================================================================================================================================================================

//! ЗАДАЧИ ПО БОТУ  МОДУЛЬ № 3

// = 10=

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
//   for (const key in apartment) {
// 	// Change code below this line

	// keys.push(key);
	// values.push(apartment[key]);

// 	// Change code above this line
//   }

// =11=

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)){

//   keys.push(key);
//   values.push(apartment[key]);
//
//   }
//   // Change code above this line
// }

// =12=

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const item in object) {
//     if (object.hasOwnProperty(item)) {
//       propCount += 1;
//     }
//   }

//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({})); //0
// countProps({ name: "Mango", age: 2 }); //2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); //3

// =13=

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);

//   for (const key of keys){
//    values.push(apartment[key]);

//   }
//   console.log(keys);
//   console.log(values);

// =14=

// function countProps(object) {
// 		// Change code below this line
// 	return Object.keys(object).length
// 	// Change code above this line
//   }

// console.log(countProps({}));//0
// console.log(countProps({ name: "Mango", age: 2 }));//2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));//3

// =15=

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log("Keys: ", keys);
// console.log("Values: ", values);

// =16=

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const nameSalary = Object.values(salaries);
//   for (const item of nameSalary) {
//     totalSalary += item;
//   }

//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({}));//0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));//330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));//400

// =17=

/**Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors. */

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// // Change code below this line

// console.log(hexColors);
// console.log(rgbColors);

// =18=

//*Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// // Change code above this line

// console.log(getProductPrice("Radar")); //1300
// console.log(getProductPrice("Grip")); // 1200
// console.log(getProductPrice("Scanner")); //2700
// console.log(getProductPrice("Droid")); //400
// console.log(getProductPrice("Engine")); //null

// =19=

//*Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let arrStart = [];
//   for (const product of products) {
//     let item = product[propName];
//     // console.log(npq);
//     if (item !== undefined) {
//       arrStart.push(item);
//     }
//   }
//   return arrStart;
//   // Change code above this line
// }

// console.log(getAllPropValues("name")); //["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); //[4, 3, 7, 9]
// console.log(getAllPropValues("price")); //[1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); //[]

// =20=

//*Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let startPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return startPrice;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Blaster")); //0
// console.log(calculateTotalPrice("Radar")); //5200
// console.log(calculateTotalPrice("Droid")); //2800
// console.log(calculateTotalPrice("Grip")); //10800
// console.log(calculateTotalPrice("Scanner")); //8100

// =21=

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(yesterday); //28
// console.log(tomorrow); //33
// console.log(meanTemperature); //29

// =22=

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// =23=

//*Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// Change code below this line
// ================єто било
// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;
//const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// =====================єто било
// Change code above this line

// Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(highTemperatures);

//* чтоби деструктуризировать надо написать по новой в деструктуризации//

// =24=

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// =25=

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // =========деструктуризация
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// // // Change code below this line

// console.log(highToday); //32
// console.log(lowToday); //28
// console.log(todayIcon); //"https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// console.log(highTomorrow); //31
// console.log(tomorrowIcon); //"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

// =26=

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: {low: tomorrowLow, high:tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );

// =27=
//*В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// =28=

//*В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore);//97
// console.log(worstScore );//14
// console.log(thirdGroupScores);//[29, 47, 18, 97, 81]

// =29=

//* В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

//* Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings,...overrideSettings,};

// console.log(finalSettings.theme);// "light"
// console.log(finalSettings.public);//"false"
// console.log(finalSettings.withPassword);//'true
// console.log(finalSettings.minNumberOfQuestions);//10
// console.log(finalSettings.timePerQuestion);//30

// =30=
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   const newData = { ...{ completed, category, priority }, ...data }; // работает в боте
//   // const newData = {...{data}, ...data};//работает и в консоли

//   return newData;

//   // Change code above this line
// }

// console.log(makeTask({})); //{ category: "General", priority: "Normal", completed: false }
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// ); //{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// console.log(makeTask({ category: "Finance", text: "Take interest" })); //{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));

// =31=

// // Change code below this line
// function add(...args) {
//   // Change code above this line
//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total;
// }

// =32=

// Change code below this line
// function addOverNum(value, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > value)
// 		total += arg;
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218

// =33=

// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

//* необходимо добавить arr,...args, в скобки для того чтоби полностью дополнить функцию.
// function findMatches(arr, ...args) {
// 	const matches = []; // Don't change this line

// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line

//   for (let arg of args) {
//     if (arr.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// =34=

// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     const { itemBook } = this;//// протупил, разобрался в методе, он не обязателен
//     for (let i = 0; i < itemBook; i += 1) {
//       item += itemBook[i];
//       if (bookName === item.name) {
//         item.splice(i, 1);
//       }
//     }
//     return `Deleting book ${bookName}`;
//   },

//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// =35=

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookName = this.books.indexOf(oldName);
//     this.books.splice(bookName, 1, newName);

//     return this.books;

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles")); //["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook("The last kingdom", "Dune")); //["Dune", "Haze", "The guardian of dreams"]

// =36= to =40=

// const atTheOldToad = {
//   // Change code below this line
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(potionName) {
//     return this.potions.push(potionName);
//   },

//   removePotion(potionName) {
//     let delPot = this.potions.indexOf(potionName);
//     this.potions.splice(delPot, 1);
//     return this.potions; //  в боте не указивать
//   },
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     const upDatePoition = this.potions.indexOf(oldName);
//     this.potions.splice(upDatePoition, 1, newName);
//     return this.potions;
//     // Change code above this line
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad);
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));
// console.log(atTheOldToad.removePotion("Dragon breath")); //["Speed potion", Stone skin"]
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// =41=

// * Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }
    this.potions.push(potionName);
  },
  //   ===========================================!!!!!!!!!!!!!!!====================
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
      }
    }
  },
  //   =================================!!!!!!!!!!!!!!!!!========================
  updatePotionName(oldName, newName) {
    for (let item of this.potions) {
      if (item.name === oldName) {
        item.name = newName;
      }
    }
  },
  // Change code above this line
};
// ==============================!!!!!!!!!!!!!!!!!!=====================
console.log(atTheOldToad.getPotions()); //[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })); //в массиве potions последним элементом будет этот объект

console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 })); //в массиве potions последним элементом будет этот объект

console.log(atTheOldToad.removePotion("Dragon breath")); //[ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]

console.log(atTheOldToad.removePotion("Speed potion")); //[ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); //[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]

console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
); //[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
