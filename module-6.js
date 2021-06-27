//* Array.prototype.filter() - это метод массива, который скрывает в себе логику перебора коллекции и вызывает callback-функцию, которую мы ему передаем для каждого элемента, возвращая массив элементов, подошедших под критерий.

// ==MDN==
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = words.filter((word) => word.length > 6);

// // console.log(words);
// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

// ==MDN==

//! =Conspect=
// Императивный подход
// const numbersImp = [1, 2, 3, 4, 5];
// const filteredNumbersImp = [];

// for (let i = 0; i < numbersImp.length; i += 1) {
//   if (numbersImp[i] > 2) {
//     filteredNumbersImp.push(numbersImp[i]);
//   }
// }

// console.log(filteredNumbersImp); // [4, 5]

// // Декларативный подход
// const numbersDec = [1, 2, 3, 4, 5];
// const filteredNumbersDec = numbersDec.filter((value) => {
//   return value > 3;
// });

// console.log(filteredNumbersDec); // [4, 5]

// ! Clean function
//* Dirty Function
// const dirtyValue = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// dirtyValue(numbers, 2);

// console.log(numbers);

//* Clean Function

// const pureMultiply = (array, value) => {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     result.push(array[i] * value);
//   }
//   return result;
// };

// const numbers = [1, 2, 3, 4, 5, 6];
// const doubleNumbers = pureMultiply(numbers, 2);

// console.log(numbers);
// console.log(doubleNumbers);

// ! ПЕРЕБЕРАЮЩИЕ МЕТОДИ МАСИВА

//* =forEach=

// const numbers = [1, 2, 3];

// numbers.forEach((num) => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

//* =map()=

// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // [2, 4, 6]

// ==

//* Используем map чтобы пройти по базе данных users и получить массив всех имен пользователей.

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map((user) => user.name);
// console.log(names); // ["Mango", "Poly", "Ajax"]

//* =filter()=

// const numbersFilter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbersFilter.filter((num) => num > 7));
// console.log(numbersFilter.filter((num) => num < 7));
// console.log(numbersFilter.filter((num) => num === 4));
// console.log(numbersFilter.filter((num) => num > 134));

// // =examle to find actieve & not-active user=

// const usersFilterAct = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
//   { name: "Roma", isActive: false },
//   { name: "Gosha", isActive: true },
//   { name: "Misha", isActive: true },
// ];

// const activeUser = usersFilterAct.filter((user) => user.isActive);
// console.log(`activeUser: `, activeUser);
// const notActiveUser = usersFilterAct.filter((user) => !user.isActive);
// console.log(`notActiveUser: `, notActiveUser);

//* =find()=

// const numbersF = [1, 2, 3, 4, 5, 67, , 105];

// const numbersFind = numbersF.find((num) => num > 7);
// console.log(numbersFind);
// const numbersFindMin = numbersF.find((num) => num < 7);
// console.log(numbersFindMin);
// const numbersFindStrict = numbersF.find((num) => num === 105);
// console.log(numbersFindStrict);
// const numbersZerro = numbersF.find((num) => num == 1000);
// console.log(numbersZerro);

// //* Используем find, чтобы пройти по базе данных users и найти пользователя по идентификатору id. Идентификаторы всегда уникальны.

// const usersFind = [
//   { id: "000", name: "Mango", isActive: true },
//   { id: "001", name: "Poly", isActive: false },
//   { id: "002", name: "Ajax", isActive: true },
//   { id: "003", name: "Chelsey", isActive: false },
// ];

// const userF = usersFind.find((user) => user.id === "003");
// console.log(userF);

// //? =make function=

// //* Используем find, чтобы пройти по базе данных users и найти пользователя по идентификатору id. Идентификаторы всегда уникальны.

// const getUserById = (arr, id) => arr.find((user) => user.id === id);
// console.log(getUserById); //(arr, id) => arr.find((user) => user.id === id)

// console.log(getUserById(usersFind, "002")); //{id: "002", name: "Ajax", isActive: true}
// console.log(getUserById(usersFind, "001")); //{id: "001", name: "Poly", isActive: false}

//* =every(), some()=

// //? Метод every проверяет, прошли ли все элементы массива тест, предоставляемый callback-функцией. Возвращает true, если вызов callback-функции вернет true для каждого элемента в array

// const isBigEnough = (val) => val > 10;

// console.log([13, 16, 56, 7, 19, 34].every(isBigEnough)); //false
// console.log([13, 16, 56, 78, 19, 34].every(isBigEnough)); //true

// //? Метод some проверяет, проходит ли по крайней мере один элемент в массиве тест, предоставляемый callback-функцией. Возвращает true, если вызов callback-функции вернет true хотя бы для одного элемента в array.

// console.log([2, 5, 8, 1, 4].some(isBigEnough)); //false
// console.log([12, 5, 8, 1, 4].some(isBigEnough)); //true

// // ====

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// const allAvaliable = fruits.every((fruit) => fruit.amount > 0);
// console.log(allAvaliable); //false

// const someAvaliable = fruits.some((fruit) => fruit.amount > 0);
// console.log(someAvaliable); //true

//* =reduce()=

//? Аккумулирующая функция, используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.

//! Работает это так:

//* Функция reduce создаст новую переменную, называемую аккумулятор. Затем присвоит аккумулятору значение текущего (первого) элемента массива currentItem.
//* Функция проверит, есть ли у массива следующий элемент и если он есть, то добавит значение к аккумулятору. Когда следующего элемента не окажется (конец массива), функция вернет значения аккумулятора.
// *Вторым аргументом reduce может быть начальное значение initialValue. Это значение будет присвоено аккумулятору до применения callback-функции к первому элементу массива.

// const numbersR = [1, 2, 3, 4, 5];
// const numbersRd = [1000, 20]; // не очень удачний пример

// const numbersRplus = numbersR.reduce((acc, value) => acc + value, 0);
// const numbersRmultiply = numbersR.reduce((acc, value) => acc * value, 1);
// const numbersRdivide = numbersRd.reduce((acc, value) => acc / value);

// console.log(numbersRplus); //15
// console.log(numbersRmultiply); //120
// console.log(numbersRdivide); //50 -не очень удачний пример

//todo: Допустим у нас есть следующая задача: из массива постов твиттера отдельного пользователя необходимо посчитать сумму всех лайков. Можно перебрать циклом for или forEach, каждое из этих решений потребует дополнительного кода. А можно использовать reduce.

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const face = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["English", "Reduce", "Flutter"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["angular", "postgre", "SQL"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   { id: "005", likes: 12, tags: ["angular", "postgre", "SQL"] },
//   { id: "006", likes: 11, tags: ["C++", "C#", "Next"] },
//   { id: "008", likes: 4, tags: ["English", "Reduce", "Flutter"] },
//   { id: "009", likes: 4, tags: ["js", "nodejs"] },
//   { id: "010", likes: 4, tags: ["English", "Reduce", "Flutter"] },
//   { id: "011", likes: 4, tags: ["js", "nodejs", "react"] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes);
// const countLikes = (tweets) =>
//   tweets.reduce((totalLikes, tweets) => totalLikes + tweets.likes, 0);
// console.log(`countLIkes tweets: `, countLikes(tweets));

// // =face=

// const likesF = face.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likesF);

// const countLikesF = (face) =>
//   face.reduce((totalLikes, face) => totalLikes + face.likes, 0);

// console.log(`countLikes face:  `, countLikesF(face));

// // ==мы соберем в массив все теги, которые встречаются в постах.

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(`Tags: `, tags);

// // =face=

// const tagsF = face.reduce((allTags, faceF) => {
//   allTags.push(...faceF.tags);

//   return allTags;
// }, []);

// console.log(`TagsF: `, tagsF);

// //* ===function=для сбора тегов из коллекции=

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(`getTags(tweets): `, getTags(tweets));

// // =face=

// const getTagsF = (face) =>
//   face.reduce((allTags, faceF) => {
//     allTags.push(...faceF.tags);

//     return allTags;
//   }, []);

// console.log(`getTags(face): `, getTagsF(face));

// // ==посчитать количество уникальных тегов в массиве

// const unicTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const unicTagsRes = unicTags(tweets);

// console.log(unicTagsRes);

// // =face=

// const unicTagsF = (face) =>
//   face.reduce((allTags, faceF) => {
//     allTags.push(...faceF.tags);

//     return allTags;
//   }, []);

// const unicTagsResF = unicTagsF(face);

// console.log(`unicTagsResF: `, unicTagsResF);

// // =========================
// //Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);

// console.log(`tagCount: `, tagCount);

// // =face=

// const countTagsF = (tagsF) => tagsF.reduce(getTagStats, {});

// const tagCountF = countTags(tagsF);

// console.log(`tagCountF: `, tagCountF);

// =====================================

// //* разворачивание масивов MDN

// const flatter = [
//   [12, 3, 4, 5],
//   [3, 5, 6, 7],
//   [0, 9, 8, 87],
// ];

// const flatterUncover = flatter.reduce(function (a, b) {
//   return a.concat(b);
// });

// console.log(flatter);
// console.log(flatterUncover);

// // * =sort()=

// //? Позволяет сортировать элементы массива на месте. Помимо возврата отсортированного массива, метод sort также отсортирует массив, на котором он был вызван. По умолчанию метод sort сортирует, преобразуя элементы к строке.

// const numbersSort = [2, 1, 3, 4, 5];

// console.log(`Before sort: `, numbersSort);
// console.log(`After sort: `, numbersSort.sort());

// const namesSort = [
//   "ajax",
//   "stels",
//   "chelsy",
//   "poly",
//   "abraham",
//   "kolly",
//   "user",
// ];

// console.log(`Before Sort of nameSors: `, namesSort);
// console.log(`After Sort of nameSors: `, namesSort.sort());

// * Свой порядок сортировки

//! Для указания своего порядка сортировки в метод arr.sort(fn) нужно передать функцию fn с двумя параметрами, которая сравнивает их. Внутренний алгоритм функции сортировки умеет сортировать любые массивы. Но для этого ему нужно знать, как их сравнивать. Эту роль и выполняет fn.

// todo. Отсортируем массив наших пользователей по возрастанию дней онлайн активности.

// const userSort = [
//   { name: "Mango", daysActive: 15 },
//   { name: "Poly", daysActive: 4 },
//   { name: "Ajax", daysActive: 27 },
//   { name: "Chelsey", daysActive: 2 },
// ];

// const sortByActivDays = (a, b) => a.daysActive - b.daysActive;
// console.log(userSort.sort(sortByActivDays));//2,4,15,27

// const sortByActivDays1 = (b,a ) => a.daysActive - b.daysActive;
// console.log(userSort.sort(sortByActivDays1));//27,15,4,2

//* Цепочки методов массива

// todo. Есть массив чисел, из него необходимо взять все четные и умножить на 2, после чего еще и развернуть массив.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = numbers.filter((x) => x % 2 === 0);
// console.log(even);

// const doubled = even.map((x) => x * 2);
// console.log(doubled);

// const reversed = doubled.reverse();
// console.log(reversed);

// const numbersChain = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const resultChainMethod = numbersChain
//   .filter((num) => num % 2 === 0)
//   .map((num) => num * 2)
//   .reverse();

// console.log(`resultChainMethod: `, resultChainMethod);

//! Video

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// console.table(players);

// const playerIdToUpdate = "player-3";

// const updatedPlayers = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayd: player.timePlayed + 100,
//     };
//   }
//   return player;
// });

// console.table(updatedPlayers);

// const playersProcent = players.map((player) => ({
//   ...player,
//   points: player.points * 1.1,
// }));

// console.log(playersProcent);

// const onlineFilters = players.filter((player) => player.online);
// const noOnlineFilters = players.filter((player) => !player.online);

// console.log(`onlineFilters: `, onlineFilters);
// console.log(`noOnlineFilters: `, noOnlineFilters);

// const hardCorePlayers = players.filter((player) => player.timePlayd > 220);
// console.log(`hardCorePlayers: `, hardCorePlayers);

// const playerIdToFind = "player-4";
// // const findPlayer = players.find(player => player.id ===playerIdToFind);
// const findPlayer = players.find(({ id }) => id === playerIdToFind);
// console.log(`findPlayer: `, findPlayer);

// ! FUNCTION

// const findPlayerByIdFunction = (allPlayer, playerId) => {
// 	return allPlayer.find(player=>player.id===playerId);
// };

// const findPlayerByIdFunction = (allPlayer, playerId) => {
//   return allPlayer.find(({ id }) => id === playerId);
// };

// console.log(
//   `findPlayerByIdFunction-1: `,
//   findPlayerByIdFunction(players, "player-2")
// );
// console.log(
//   `findPlayerByIdFunction-2: `,
//   findPlayerByIdFunction(players, "player-5")
// );

// const totalTime = players.reduce((totalTime, player)=>{
// 	return totalTime + player.timePlayd
// },0);

// const totalTime = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0
// );

// console.log(`totalTime: `, totalTime);

// // =============================

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// ===========
//   const allTags = tweets.reduce((tags, tweet)=>{
// 	  return [...tags, ...tweet.tags]
//   },[]);
// =================
// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

// // console.log(`allTags: `, allTags);

// const tagStats = allTags.reduce((acc, tag) => {
// 	console.log(`acc: `, acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

// 	return acc;
//   }

//   acc[tag] =1;

//   return acc;
// }, {});

// console.log(tagStats);

// ==2 variant==

// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

// // console.log(`allTags: `, allTags);

// const tagStats = allTags.reduce((acc, tag) => {
//   console.log(`acc: `, acc);

//   if (acc[tag]) {

//     return {
//       ...acc,
//       [tag]: acc.tag + 1,
//     };
//   }

//   return{
// 	  ...acc,
// 	  [tag]:1
//   };
// }, {});

// console.log(tagStats);

// =3 variant=

// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

// // console.log(`allTags: `, allTags);

// const tagsStats = allTags.reduce(
//   (acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
//   {}
// );

// console.log(tagsStats);

//! =ЗАДАЧИ ПО БОТУ=

// =1=

//* Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
//* Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

// //   for (let i = 0; i < orderedItems.length; i += 1) {
// //     totalPrice += orderedItems[i];
// //   }

//   orderedItems.forEach(function (orderedItem) {
//     return (totalPrice += orderedItem);
//   });

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

// =2=

//* Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
//*  Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

// 	numbers.forEach((number)=>{
// 		if (number>value){
// 			filteredNumbers.push(number)
// 		}
// 	});

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //   }
//     // }

//     // // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// console.log(filterArray([1, 2, 3, 4, 5], 3));//[4,5]

// =3=

//*  Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
//* Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   firstArray.forEach((firstArrayElem) => {
//     if (secondArray.includes(firstArrayElem)) {
//       commonElements.push(firstArrayElem);
//     }
//   });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); //2
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //1,2
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]

// =4=

//* Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// };

//   =5=

//*Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Пиши код выше этой строки

// =6=

//* Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// Пиши код ниже этой строки
// const calculateTotalPrice=(orderedItems)=> {
// 	let totalPrice = 0;

// 	orderedItems.forEach((item)=> {
// 	  totalPrice += item;
// 	});

// 	return totalPrice;
//   }
//   // Пиши код выше этой строки

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// =7=

//* Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Пиши код ниже этой строки
// const filterArray = (numbers, value)=> {
//     const filteredNumbers = [];

//     numbers.forEach((number)=>{
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// =8=

//* Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Пиши код выше этой строки
//   return commonElements;
// };

// =9=

//* Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
//* Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven (numbers, value) {
//   // Пиши код ниже этой строки
//   let newArr = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArr.push(number + value);
//     } else {
//       newArr.push(number);
//     }
//   });

//   return newArr;
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]

// =10=

//* Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet)=> planet.length);
// console.log(planetsLengths);

// =11=

//* Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки

//   const titles = books.map((book)=>book.title);
//   console.log(titles);

// =12=

//* Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки

//   const genres = books.flatMap((book)=> book.genres);
//   console.log(genres);

// =13=

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // Пиши код ниже этой строки
// const getUserNames = (users) => {
//   let newUser = users.map((user) => user.name);
//   return newUser;
// };
// // Пиши код выше этой строки

// =14=

//* Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // Пиши код ниже этой строки
// const getUserEmails = (users) => {
//   const newEmail = users.map((user) => user.email);
//   return newEmail;
// };

// console.log(getUserEmails);
// // Пиши код выше этой строки

// =15=

//*Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter((number)=> number %2 ===0);
// const oddNumbers = numbers.filter((number)=> number % 2 !==0);
// console.log(evenNumbers);
// console.log(oddNumbers);

// =16=

//*Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика", "мистика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика", "приключения"],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, books) => books.indexOf(genres) === index
// );
// console.log(uniqueGenres);

// =17=

//*Используя метод filter() дополни код так, чтобы:

//* В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
//* В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Бернард Корнуэлл";
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// =18=

//* Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   let result = users.filter((user) => user.eyeColor === color);
//   return result;
// };
// // Пиши код выше этой строки

// =19=

//*Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//   let resultUser = users.filter(
//     (user) => user.age > minAge && user.age < maxAge
//   );

//   return resultUser;
// };
// // Пиши код выше этой строки

// =20=

//*Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   const userFriends = users.filter((user) => user.friends.includes(friendName));
//   return userFriends
// };
// // Пиши код выше этой строки

// =21=

//* Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// // Пиши код ниже этой строки
// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);

//   const uniqueFriends = allFriends.filter(
//     (friend, index, allFriends) => allFriends.indexOf(friend) === index
//   );
//   return uniqueFriends;
// };
// // Пиши код выше этой строки

// =22=23=

//* Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// const users = [
// 	{
// 	  name: 'Moore Hensley',
// 	  email: 'moorehensley@indexia.com',
// 	  eyeColor: 'blue',
// 	  friends: ['Sharron Pace'],
// 	  isActive: false,
// 	  balance: 2811,
// 	  gender: 'male',
// 	  age: 37
// 	},
// 	{
// 	  name: 'Sharlene Bush',
// 	  email: 'sharlenebush@tubesys.com',
// 	  eyeColor: 'blue',
// 	  friends: ['Briana Decker', 'Sharron Pace'],
// 	  isActive: true,
// 	  balance: 3821,
// 	  gender: 'female',
// 	  age: 34
// 	},
// 	{
// 	  name: 'Ross Vazquez',
// 	  email: 'rossvazquez@xinware.com',
// 	  eyeColor: 'green',
// 	  friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
// 	  isActive: false,
// 	  balance: 3793,
// 	  gender: 'male',
// 	  age: 24
// 	},
// 	{
// 	  name: 'Elma Head',
// 	  email: 'elmahead@omatom.com',
// 	  eyeColor: 'green',
// 	  friends: ['Goldie Gentry', 'Aisha Tran'],
// 	  isActive: true,
// 	  balance: 2278,
// 	  gender: 'female',
// 	  age: 21
// 	},
// 	{
// 	  name: 'Carey Barr',
// 	  email: 'careybarr@nurali.com',
// 	  eyeColor: 'blue',
// 	  friends: ['Jordan Sampson', 'Eddie Strong'],
// 	  isActive: true,
// 	  balance: 3951,
// 	  gender: 'male',
// 	  age: 27
// 	},
// 	{
// 	  name: 'Blackburn Dotson',
// 	  email: 'blackburndotson@furnigeer.com',
// 	  eyeColor: 'brown',
// 	  friends: ['Jacklyn Lucas', 'Linda Chapman'],
// 	  isActive: false,
// 	  balance: 1498,
// 	  gender: 'male',
// 	  age: 38
// 	},
// 	{
// 	  name: 'Sheree Anthony',
// 	  email: 'shereeanthony@kog.com',
// 	  eyeColor: 'brown',
// 	  friends: ['Goldie Gentry', 'Briana Decker'],
// 	  isActive: true,
// 	  balance: 2764,
// 	  gender: 'female',
// 	  age: 39
// 	}
//   ]

// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {

// 	let isActiveUsers = users.filter((user)=> user.isActive===true);
// 	return isActiveUsers;

// };
// // Пиши код выше этой строки

// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
// 	let notActiveUsers = users.filter((user)=> user.isActive===false);
// 	return notActiveUsers;

// };
// Пиши код выше этой строки

// =24=

//*Используя метод find() дополни код так, чтобы:

//* В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
//* В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
// ];
// const BOOK_TITLE = "Сон смешного человека";
// const AUTHOR = "Роберт Шекли";
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// =25=

//* Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.

// const users = [
// 	{
// 	  name: 'Moore Hensley',
// 	  email: 'moorehensley@indexia.com',
// 	  eyeColor: 'blue',
// 	  friends: ['Sharron Pace'],
// 	  isActive: false,
// 	  balance: 2811,
// 	  gender: 'male'
// 	},
// 	{
// 	  name: 'Sharlene Bush',
// 	  email: 'sharlenebush@tubesys.com',
// 	  eyeColor: 'blue',
// 	  friends: ['Briana Decker', 'Sharron Pace'],
// 	  isActive: true,
// 	  balance: 3821,
// 	  gender: 'female'
// 	},
// 	{
// 	  name: 'Ross Vazquez',
// 	  email: 'rossvazquez@xinware.com',
// 	  eyeColor: 'green',
// 	  friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
// 	  isActive: false,
// 	  balance: 3793,
// 	  gender: 'male'
// 	},
// 	{
// 	  name: 'Elma Head',
// 	  email: 'elmahead@omatom.com',
// 	  eyeColor: 'green',
// 	  friends: ['Goldie Gentry', 'Aisha Tran'],
// 	  isActive: true,
// 	  balance: 2278,
// 	  gender: 'female'
// 	},
// 	{
// 	  name: 'Carey Barr',
// 	  email: 'careybarr@nurali.com',
// 	  eyeColor: 'blue',
// 	  friends: ['Jordan Sampson', 'Eddie Strong'],
// 	  isActive: true,
// 	  balance: 3951,
// 	  gender: 'male'
// 	},
// 	{
// 	  name: 'Blackburn Dotson',
// 	  email: 'blackburndotson@furnigeer.com',
// 	  eyeColor: 'brown',
// 	  friends: ['Jacklyn Lucas', 'Linda Chapman'],
// 	  isActive: false,
// 	  balance: 1498,
// 	  gender: 'male'
// 	},
// 	{
// 	  name: 'Sheree Anthony',
// 	  email: 'shereeanthony@kog.com',
// 	  eyeColor: 'brown',
// 	  friends: ['Goldie Gentry', 'Briana Decker'],
// 	  isActive: true,
// 	  balance: 2764,
// 	  gender: 'female'
// 	}
//   ]

// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {

// 	let userEmailFind = users.find((user)=> user.email === email);
// 	return userEmailFind;

// };
// // Пиши код выше этой строки

// =26=

//* Используя метод every() дополни код так, чтобы:

// *1 В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// *2 В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// *3 В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// *4 В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// *5 В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// *6 В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(
//   (number) => number % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every(
//   (number) => number % 2 !== 0
// );

// const eachElementInThirdIsEven = thirdArray.every((result) => result % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((result) => result % 2 !== 0);

// =27=

//* Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
  let isActiveResult = users.every((user) => user.isActive);
  // return isActiveResult
  console.log(isActiveResult);
};
// 2 variant
// const isEveryUserActive=(users) => users.every((user) => user.isActive);

// Пиши код выше этой строки

isEveryUserActive(users);

// =28=

//* Используя метод some() дополни код так, чтобы:

//*1 В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
//*2 В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
//*3 В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
//*4 В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
//*5 В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
//*6 В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((point)=>point%2===0);
// const anyElementInFirstIsOdd = firstArray.some((point)=>point%2!==0);

// const anyElementInSecondIsEven = secondArray.some((dot)=>dot%2===0);
// const anyElementInSecondIsOdd = secondArray.some((dot)=>dot%2!==0);

// const anyElementInThirdIsEven = thirdArray.some((punctum)=>punctum %2 ===0);
// const anyElementInThirdIsOdd = thirdArray.some((punctum)=> punctum %2 ===0);

// =29=

// * Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.

// const users = [
// 	{
// 	  name: 'Moore Hensley',
// 	  email: 'moorehensley@indexia.com',
// 	  eyeColor: 'blue',
// 	  friends: ['Sharron Pace'],
// 	  isActive: false,
// 	  balance: 2811,
// 	  gender: 'male'
// 	},
// 	{
// 	  name: 'Sharlene Bush',
// 	  email: 'sharlenebush@tubesys.com',
// 	  eyeColor: 'blue',
// 	  friends: ['Briana Decker', 'Sharron Pace'],
// 	  isActive: true,
// 	  balance: 3821,
// 	  gender: 'female'
// 	},
// 	{
// 	  name: 'Ross Vazquez',
// 	  email: 'rossvazquez@xinware.com',
// 	  eyeColor: 'green',
// 	  friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
// 	  isActive: false,
// 	  balance: 3793,
// 	  gender: 'male'
// 	},
// 	{
// 	  name: 'Elma Head',
// 	  email: 'elmahead@omatom.com',
// 	  eyeColor: 'green',
// 	  friends: ['Goldie Gentry', 'Aisha Tran'],
// 	  isActive: true,
// 	  balance: 2278,
// 	  gender: 'female'
// 	},
// 	{
// 	  name: 'Carey Barr',
// 	  email: 'careybarr@nurali.com',
// 	  eyeColor: 'blue',
// 	  friends: ['Jordan Sampson', 'Eddie Strong'],
// 	  isActive: true,
// 	  balance: 3951,
// 	  gender: 'male'
// 	},
// 	{
// 	  name: 'Blackburn Dotson',
// 	  email: 'blackburndotson@furnigeer.com',
// 	  eyeColor: 'brown',
// 	  friends: ['Jacklyn Lucas', 'Linda Chapman'],
// 	  isActive: false,
// 	  balance: 1498,
// 	  gender: 'male'
// 	},
// 	{
// 	  name: 'Sheree Anthony',
// 	  email: 'shereeanthony@kog.com',
// 	  eyeColor: 'brown',
// 	  friends: ['Goldie Gentry', 'Briana Decker'],
// 	  isActive: true,
// 	  balance: 2764,
// 	  gender: 'female'
// 	}
//   ];

//   // Пиши код ниже этой строки
// const isAnyUserActive = users => {

// 	const isAnyUserActiveSome = users.some((user)=>user.isActive);
// 	return isAnyUserActiveSome

// };
// // Пиши код выше этой строки

// =30=

//* Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.													((acc, number) => acc + number);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// =31=

//* Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// const players = [
//   { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//   { name: "Поли", playtime: 469, gamesPlayed: 2 },
//   { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//   { name: "Киви", playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   const averageTime = player.playtime / player.gamesPlayed;
//   return total + averageTime;
// }, 0);

// =32=33=

//* Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// =1variant mysli=не правильно
// Пиши код ниже этой строки
// const calculateTotalBalance = users => {

// 	const total = users.reduce((acc,user)=>{

// 		return total = acc + user.balance
// 	},0)

// };
// Пиши код выше этой строки

// =2variant mysli=

// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// };

// =========
// Пиши код ниже этой строки

//*Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

// const getTotalFriendCount = users => {

// 	return users.reduce((acc,user)=>acc+ user.friends.length,0 )

// };
// Пиши код выше этой строки

// =34=

//* Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// =35=

//*Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=> a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b)=>b-a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// =36=

//* Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки

//   const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
//   console.log(authorsInAlphabetOrder);

//   const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));
// console.log(authorsInReversedOrder);

// =37=

//* Дополни код так, чтобы:

//* В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
//* В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
//* В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
//* В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
// 	{ title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
// 	{ title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
// 	{ title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
// 	{ title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// 	{ title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки

//   const sortedByAuthorName = [...books].sort((firstName,secondName)=>firstName.author.localeCompare(secondName.author));

//   const sortedByReversedAuthorName = [...books].sort((firstName,secondName)=>secondName.author.localeCompare(firstName.author));

//   const sortedByAscendingRating = [...books].sort((first,second)=>first.rating-second.rating)

//   const sortedByDescentingRating = [...books].sort((first,second)=>second.rating-first.rating);

// =38=39=40=

//*Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// // Пиши код ниже этой строки
// const sortByAscendingBalance = (users) => {
//   const totalSort = [...users].sort(
//     (small, big) => small.balance - big.balance
//   );
//   return totalSort;
// };

// Пиши код ниже этой строки

//* Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

// const sortByDescendingFriendCount = (users) => {
//   const totalCountFriendsByDown = [...users].sort(
//     (first, second) => second.friends.length - first.friends.length
//   );
//   return totalCountFriendsByDown;
// };

//* Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

// Пиши код ниже этой строки


// const sortByName = (users) => {
//   const totalSortByName = [...users].sort((nameFirst, nameSecond)=>
//     nameFirst.name.localeCompare(nameSecond.name)
//   );
//   return totalSortByName;
// };



// =41=

//*Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// const books = [
// 	{ title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
// 	{ title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
// 	{ title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
// 	{ title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
// 	{ title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Пиши код ниже этой строки

//   const names = [...books].sort((firstName,secondName)=>firstName.author.localeCompare(secondName.author)).filter((book)=>book.rating > MIN_BOOK_RATING).map((book)=>book.author);

//   console.log(names);

// =42=43=44=

//* Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

// Пиши код ниже этой строки
// const getNamesSortedByFriendCount = (users) => {
//   return (userFriendsAmountUp = [...users]
//     .sort(
//       (firstName, secondName) =>
//         firstName.friends.length - secondName.friends.length
//     )
//     .map((user) => user.name));
// };
// Пиши код выше этой строки
// ===

//* Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

// Пиши код ниже этой строки
const getSortedFriends = (users) => {
  return [...users]
    .flatMap((user) => user.friends)
    .filter((friends, index, users) => users.indexOf(friends) === index)
    .sort();
};

// answer for 43:
//['Adrian Cross', 'Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson', 'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner', 'Padilla Garrison', 'Sharron Pace', 'Solomon Fokes'].

//* Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter((user) => user.gender === gender)
    .reduce((acc, user) => acc + user.balance, 0);
};
// Пиши код выше этой строки

console.log(getSortedFriends(users.gender(male)));