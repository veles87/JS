// const House = function (room, kitchen, windows, table, badroom) {
//   this.room = room;
//   this.kitchen = kitchen;
//   this.windows = windows;
//   this.table = table;
//   this.badroom = badroom;
// };

// const house1 = new House("big", "all inclusive", 10, "wooden", "2");
// console.log(house1);

// // ===================================

// const motelCrew = new House(1, 1, 1, 1, "generale");
// console.log(motelCrew);

// // ==============================

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;

//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName} wellkom to ${this.name}`);
//   };

//   this.addGuest = function (amount) {
//     this.addGuest += amount;
//   };

//   this.removeGuest = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel= new Hotel('Sun Rise Hotel', 5, 200);
// console.log(hotel);
// hotel.greet('Mango');
// console.log(hotel);

// console.log(hotel.greet);
// hotel.addGuest(20);
// console.log((hotel));
// hotel.removeGuest(5);
// console.log(hotel);

// ==========================

// const Manager = function (name = "manager Name", sales = 0) {
//   (this.name = name),
//     (this.sales = sales),
//     (this.sell = function (product) {
//       this.sales += 1;
//       return `Manager ${this.name} sold ${product}`;
//     });
// };

// const kostya = new Manager("Kostya");
// console.log(kostya.sales);
// console.log(kostya.sell("TV"));
// console.log(kostya.sell("car"));
// console.log(kostya.sales);

// const gon = new Manager("Gon");
// console.log(gon.sales);
// console.log(gon.sell("table"));
// console.log(gon.sell("hair-cat"));
// console.log(gon.sell("bike"));
// console.log(gon.sell("pen"));
// console.log(gon.sell("rope"));
// console.log(gon.sales);

// ===============================

// const animal = { eats: true };
// const dog = { leg: true, head: 1, name: "barks" };

// dog.__proto__ = animal;

// console.log(dog.leg);
// console.log(dog.eats);
// // ===========
// console.log('++++++++');

// const snake = { eats: true };
// const kat = { leg: true, head: 1, name: "barks", eats:false };

// kat.__proto__ = animal;

// console.log(kat.leg);
// console.log(kat.eats);

// console.log('==========');

//!  Object.create(obj)

// const animal ={eats: true, legs: 4};
// console.log(animal);

// const dog  = Object.create(animal);
// console.log(dog);

// dog.barks = true;
// console.log(dog);

// console.log(dog.barks);
// console.log(dog.eats);

// ================

//! Object.prototape.hasOwnProperty()

//* Именно поэтому мы используем метод obj.hasOwnProperty(prop), который возвращает true, если свойство prop принадлежит самому объекту obj, а не его прототипу, иначе false.

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

//* Метод Object.keys(obj) вернет массив только собственных ключей объекта obj, поэтому рекомендуется использовать именно его.

// const animal = { eats: true};
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']

// ========

//! Свойство Function.prototype
// const Guest = function (name,room) {
// 	this.name = name;
// 	this.room  = room;
// };
// // console.log(Guest.prototype);//{constructor: f}

// Guest.prototype.showGuestInfo = function(){
// 	console.log(`name: ${this.name}, room: ${this.room}`);
// }

// const mango = new Guest ('Mango', 28);
// const igor = new Guest('Igor', 36)

// mango.showGuestInfo();
// igor.showGuestInfo();

// console.log(mango);
// console.log(igor);

//! Свойство constructor

//Было упоминание того, что по умолчанию, объект в свойстве prototype уже содержит поле constructor. Запишем это поле явно:

// const Guest = function (name,room) {
// 	this.name = name;
// 	this.room  = room;
// };

// Guest.prototype ={
// 	constructor: Guest,
// }

// console.log();

//! Наследование и конструкторы

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// console.log(Warrior.prototype);

// Warrior.prototype.constructor = Warrior;
// console.log(Warrior);

// Warrior.prototype.attack = function (amount) {
//   this.xp /= amount;
//   console.log(`${this.name} attack with ${this.weapon}`);
// };

// const poly = new Warrior("poly", 300, "sword");

// const kola = new Warrior("kola", 400, "dubina");

// const ola = new Warrior("ola", 500, "lopata");

// const mango = new Hero("Mango", 600);

// poly.attack(30);
// kola.attack(20);
// ola.attack(50);

// poly.gainXp(500);
// kola.gainXp(1000);
// ola.gainXp(1500);
// mango.gainXp(2000);

// console.log(poly);
// console.log(kola);
// console.log(ola);
// console.log(mango);

//! ES КЛАСИ

// class Guest {
//   constructor(name, roomNumber) {
//     this.name = name;
//     this.roomNumber = roomNumber;
//   }

//   getFullInfo() {
//     console.log(`
// 	Guest: ${this.name}
// 	Room Number: № ${this.roomNumber}
// 	`);
//   }
// }

// const mango = new Guest ('Mango', 26);

// mango.getFullInfo();

//! Getters & Setters
//*   смотреть на коменти в слаке

// class Guest {
// 	// Собственные свойства класса размещаем в конструкторе
// 	constructor(name, roomNumber) {
// 	  this.name = name;
// 	  this.roomNumber = roomNumber;
// 	}

// 	// Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
// 	get name() {
// 	  return this.name;
// 	}

// 	set name(value) {
// 	  this.name = value;
// 	}
//   }

//   const mango = new Guest('Mango', 26);

//   // обращение к get и set не требует вызова - т.е. без ()
//   console.log(mango.name); // Mango

//   mango.name = 'Mango the Fluffy';
//   console.log(mango.name); // Mango the Fluffy

//! Статические свойства и методы

// class Calc {
//   constructor() {}

//   static get PI() {
//     return 3.14;
//   };

//   static add(...args){
// 	  return args.reduce((acc, next)=> acc + next,0)
//   }

//   static mult(...args) {
//     return args.reduce((acc, next) => acc * next, 1);
//   }
// }
// console.log(Calc.PI);
// console.log(Calc.add(2, 3, 4));
// console.log(Calc.mult(12, 3, 4));

//! Наследование

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   move() {
//     console.log(`I,${this.name}, am moving`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   bark() {
//     console.log("woof!");
//   }

//   moveAndMakeSound() {
//     super.move();
//     this.bark();
//   }
// }

// const dog = new Dog("Mango", "shepherd");

// dog.move();
// dog.bark();
// dog.moveAndMakeSound();

// ================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

//! Task from Bot

// =1=

// const parent = {
// 	name: 'Stacey',
// 	surname: 'Moore',
// 	age: 54,
// 	heritage: 'Irish'
//   };
//   // Пиши код ниже этой строки

//   const child = Object.create(parent);

//   // Пиши код выше этой строки
//   child.name = 'Jason';
//   child.age = 27;

//   =2=

//const ancestor = {
// 	name: 'Paul',
// 	age: 83,
// 	surname: 'Dawson',
// 	heritage: 'Irish'
//   };
//   // Пиши код ниже этой строки

//   const parent = Object.create(ancestor);
//   parent.name = 'Stacey';
//   parent.surname = 'Moore';
//   parent.age = 54;

//   const child = Object.create(parent);
//   child.name = 'Jason';
//   child.age = 27;

// Пиши код выше этой строки

// =3=

// function Car(brand, model,price){
// 	this.brand = brand;
// 	this.model = model;
// 	this.price = price

//   }

// =4=
//*Добавь в свойство prototype функции-конструктора Car два метода:

//* getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
//* changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// function Car({brand, model, price}) {
// 	this.brand = brand;
// 	this.model = model;
// 	this.price = price;
//   }

// =5=
// function Car({ brand, model, price }) {
// 	this.brand = brand;
// 	this.model = model;
// 	this.price = price;
//   }

//   Car.prototype.getPrice = function(){
// 	return this.price;
//   };

//   Car.prototype.changePrice = function(newPrice){
// 	this.price = newPrice;
//   };

// =6=

// function Storage(items) {
//   this.items = items;
//   Storage.prototype.getItems = function () {
//     return this.items;
//   };

//   Storage.prototype.addItem = function (newItem) {
//     return this.items.push(newItem);
//   };

//   Storage.prototype.removeItem = function (item) {
//     const itemsIndex = this.items.indexOf(item);
//     return this.items.splice(itemsIndex, 1);
//   };
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// =7=

//* С помощью Function Declaration напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

//* Добавь методы на прототип:

//* getValue() - возвращает текущее значение свойства value.
//* padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
//* padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
//* padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.

function StringBuilder(baseValue) {
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
  return this.value;
};

StringBuilder.prototype.padStart = function (str) {
  return (this.value = this.value.padStart(2, str));
  // console.log(value);
};

StringBuilder.prototype.padEnd = function (str) {
  return (this.value = this.value.padEnd(3, str));
  // console.log(value);
};

StringBuilder.prototype.padBoth = function (str) {

  return this.value = str + this.value + str; // console.log(value);
};

// // Пиши код выше этой строки
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

// =8=

// class Car {}

// =9=

//*Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.

//function Car({ brand, model, price }) {
// 	this.brand = brand;
// 	this.model = model;
// 	this.price = price;
//   }

// class Car {
//   brand;
//   model;
//   price;

//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// =10=

//*Добавь классу Car две метода.

//* getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
//*  changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// class Car {
// 	constructor({ brand, model, price }) {
// 	  this.brand = brand;
// 	  this.model = model;
// 	  this.price = price;
// 	}
//   }

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// =11=

//*  Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

//*  getBrand() - возвращает значение приватного свойства brand.
//* changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

// class Car {
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));

// =12=

// class Storage {
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// =13=

//* Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, чтобы свойство value было приватным.

// class StringBuilder {
//   #value;

//   constructor(baseValue) {
//     this.baseValue = baseValue;
//     this.#value = baseValue;
//   }
//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

// =14=

//* Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.model;
//   }

//   set model(newModel) {
//     this.model = newModel;
//   }

//   get price() {
//     return this.price;
//   }

//   set price(newPrice) {
//     this.price = newPrice;
//   }
// }

// =15=

// *Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

//  *Добавь сеттеру price проверку передаваемого значения параметра
//   newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает,
// а если меньше или равно, то перезаписывает цену автомобиля.

// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       return;
//     }
//     this.#price = newPrice;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// =16=

//* Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

//* Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
//* В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
//* Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if (price > this.#MAX_PRICE) {
//       return `Внимание! Цена превышает допустимую.`;
//     }
//     return `Всё хорошо, цена в порядке.`;
//   }

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// =17=

// *В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

//* Объяви класс Admin, который наследует от класса User.
//* Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.

//!Важно помнить, что приватные свойства и методы класса-родителя не наследуются классом-ребёнком.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки

// class Admin extends User{
// 	static AccessLevel= {
// 		BASIC: 'basic',
// 		SUPERUSER: 'superuser',
// 	}
// }

// =18=

//* Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.
//* Чтобы показать как будет использоваться класс Admin, мы добавили инициализацию экземпляра под объявлением класса.

//? функция super(аргументы)-это псевдоним конструктора родительского класса

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//   accessLevel;
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// =19=

//* Добавь классу Admin следующие свойства и методы.

//* Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
//* Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
//* Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//   blacklistedEmails = [];

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true;
//     }
//     return false;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted("mango@mail.com")); //  false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
