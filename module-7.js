//* создание єлемента

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.setAttribute("src", "https://placeimg.com/640/480/nature");
// image.setAttribute("alt", "nature");

// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">

//* Свойство innerHTML

//todo Такой код говорит браузеру распарсить строку, проверить на наличие тегов, если нашел таковые, то создать DOM-элементы и вставить их в правильном порядке. При таком подходе, в отличии от createElement, мы не получаем ссылку на созданный DOM-элемент. В то же время создавать много разметки проще.
//? elem.innerHTML = '<p class="text">Pellentesque habitant.</p>'; пример

const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Уберите += и поставьте =, видите результат? заголовок удаляется,
// еще раз перечитайте сноску о работе innerHTML, о том как содержимое перезаписывается
// Если необходимо добавить к уже существующей разметке, то используем +=
article.innerHTML += htmlString;

// Можно делать множественные вставки, для этого мы конкатенируем
// всю необходимую разметку в одну строку, после чего присваиваем ее
// innerHTML родителя.
// Почему именно так, а не поэлементно? Об этом мы поговорим далее.
const list = document.querySelector(".list");
const tech = ["HTML", "CSS", "JavaScript", "React", "Node"];

const markup = tech.reduce((string, item) => string + `<li>${item}</li>`, "");

// Посмотрите что будет в консоли, одна длинная строка с "тегами"
console.log(markup);

// Вешаем всю разметку за одно обращение к DOM
list.innerHTML = markup;

//* Метод insertAdjacentHTML()

const list1 = document.querySelector("#list");

list1.insertAdjacentHTML("beforebegin", "<h2>beforebegin заголовок</h2>");
list1.insertAdjacentHTML("afterbegin", "<li>afterbegin item</li>");
list1.insertAdjacentHTML("beforeend", "<li>beforeend item</li>");
list1.insertAdjacentHTML("afterend", "<p>afterend текст</p>");

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//* метод addEventListener()

const singleBtn = document.querySelector("#single");
// const singleBtn = document.getElementById('single')// так тоже можно

// Для обработчика события можно (и желательно)
// использовать отдельную функцию, ссылку на которую
// передаем вторым аргументом в addEventListener
const handleClick = () => alert("CLICK!");
const handleClickConsole = () => console.log("CLICK! In CONSOLE");

singleBtn.addEventListener("click", handleClick);
singleBtn.addEventListener("click", handleClickConsole);

//========================================================
// Можно вешать более одного обработчика на элемент,
// даже на одно и тоже событие
const multiBtn = document.querySelector("#multiple");
// const multiBtn = document.getElementById('multiple')// так тоже можно

const firstCallback = () => alert("First callback!");
const firstCallbackConsole = () => console.log("First callback In console!");
const secondCallback = () => alert("Second callback!");
const secondCallbackConsole = () => console.log("Second callback in console!");
const thirdCallback = () => alert("Third callback!");
const thirdCallbackConsole = () => console.log("Third callback in console!");

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", firstCallbackConsole);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", secondCallbackConsole);
multiBtn.addEventListener("click", thirdCallback);
multiBtn.addEventListener("click", thirdCallbackConsole);

//* xxxxxxxxxxxxxxxxxxx addEventListener и this xxxxxxxxxxxxxxxxxxx

const user = {
  name: "Mango",
  showName() {
    console.log(this);
    // this будет ссылаться на button если использовать showName как callback
    console.log(`My name is: ${this.name}`);
    // тут undefined так как поля name у button нет
  },
};

/*
 * Представим что у нас есть кнопка с классом js-btn
 * Выберем ее и повесим на нее слушатель клика
 */
const btn = document.querySelector(".js-btn");

user.showName(); //работает
//   btn.addEventListener('click', user.showName); // не работает НЕ виводит имя юзера
btn.addEventListener("click", user.showName.bind(user)); // работает ВИВОДИТ имя юзера

//   xxxxxxxxxxxx Метод elem.removeEventListener() xxxxxxxxxxxxxxxxxxxxx

// element.removeEventListener(event, handler[, phase]);

// xxxxxxxxxxxxxxxx2.2. Метод elem.removeEventListener()

const addBtnRem = document.querySelector('button[data-action="add"]');
const removeBtnRem = document.querySelector('button[data-action="remove"]');
const btnRem = document.querySelector("#btn");

const handleClickRem = () => {
  alert("CLICK EVENT LISTENER ALERT!");
};

addBtnRem.addEventListener("click", () => {
  btnRem.addEventListener("click", handleClickRem);
});

removeBtnRem.addEventListener("click", () => {
  btnRem.removeEventListener("click", handleClickRem);
});

//! xxxxxxxxxxxxxxxx Объект события xxxxxxxxxxxxxxxxxxxxx
// event.type - тип события
// event.target - элемент, на котором произошло событие
// event.currentTarget - элемент, на котором сработал обработчик

const btnEvent = document.querySelector("#btnEvent");

// event - это и есть обьект события который автоматически
// передается первым аргументом, мы можем называть его как угодно,
// хоть qwerty, но чаще всего он называется или e, evt или event

const handleClickEvent = (event) => {
  console.log("event: ", event); //откройте консоль чтобы увидеть весь объект целиком

  console.log("event type: ", event.type); // event type:  click

  // будет window, так как мы используем стрелочную функцию,
  // которая использует внешний контекст
  // Если использовать обычную функцию то this будет самим элементом
  // button и равен currentTarget
  console.log("this: ", this);
  console.log("target: ", event.target); // <button id="btn">CLICK ME!</button>
};

btnEvent.addEventListener("click", handleClickEvent);

//! xxxxxxxxxxxxxxxxxxxx Действия браузера по умолчанию xxxxxxxxxxxxxxxxx

const form = document.querySelector(".form");
const loginInput = form.querySelector('input[type="text"]');
const passInput = form.querySelector('input[type="password"]');
const nameInInput = form.querySelector('input[type="nameIn"]');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Предотвращаем поведение по умолчанию
  event.preventDefault(); // если его нет не виводит информацию

  const login = loginInput.value.trim();
  const password = passInput.value.trim();
  const nameIn = nameInInput.value.trim();

  if (login === "" || password === "" || nameIn === "") {
    return alert("Пожалуйста введите валидную информацию!");
  }

  if ((login === "козел" && password === "1111") || nameIn === "козел") {
    alert(" Сам такой!");
  } // :)

  form.reset();

  alert(`
    Спасибо за регистрацию ${nameIn}!    
  `);

  console.log(`
   Новий пользователь: ${nameIn}!
    Логин: ${login} 
    Пароль: ${password}
  `);
}
