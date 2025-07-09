// // урок 5
// let score = 0;
// console.log(score);

// document.querySelector('body').addEventListener('click', function(){
//   score++;
//   document.querySelector('h1').textContent = score;
//   console.log(score);
// })

// // Урок 15
// let age, city = 'London', numbers =500;

// console.log(age, city, numbers);

// // Урок 17
// let num = 7
// console.log(7 % 2)

// if(num > 0 && num % 2 ===0) {
//   console.log("Четное");
// } else if(num > 0 && num % 2 !== 0) {
//   console.log('Число положительное и нечетное');
// } else if(num < 0 && num % 2 === 0) {
//   console.log('Число отрицательное и четное');
// } else {
//   console.log(`Ошибка`);
// }

// let x;
// console.log(x);

// if(x) {
//   console.log(`Переменная x имеет значение`);
// } else {
//   console.log(`Переменная x не имеет значение`);
// }

// let score = 0;

// document.querySelector('.btn').addEventListener('click', () => {
//   score++;
//   document.querySelector('span').textContent = score;

//   if(document.querySelector('span').textContent == '5') {
//     alert(`Число 5`);
//     score = 0;
//     document.querySelector('span').textContent = 0
//   }
// })

// // Урок 19
// let x = 10;
// let result = x > 5 ? console.log(`правда`) : console.log(`лож`);

// let message;
// let result1 = x > 7 ? (message = 'правда') : (message = 'лож');
// console.log(message);

// let nums = 6;
// let sum =
//   nums % 2 === 0 ? alert(`число четное`) : console.log('число нечетное');

// // Урок 20
// let numb = -10;

// let sumNumber =
//   numb >= 0
//     ? console.log('Число положительное')
//     : console.log('Число отрицательное');
// console.log('--------------------------------------------');

// let age1 = 25;
// let age2 = 29;

// let oldAge = age1 > age2 ? age1 : age2;

// console.log(`Старший возраст: ${oldAge}`);
// console.log('--------------------------------------------');

// let c = 10;

// let types =
//   typeof c === 'number'
//     ? 'Переменная c является числом'
//     : 'Переменая c не является числом';

// console.log(types);
// console.log('--------------------------------------------');

// let numz = 15;

// let results =
//   numz % 2 === 0
//     ? 'Четное'
//     : numz > 0
//       ? 'Положительное число'
//       : 'Отрицательное число';

// console.log(results);

// // Урок 21
// let day = 2;
// let dayWeek;

// switch(day) {
//   case 0:
//     dayWeek = 'Воскресенье';
//     break;
//   case 1:
//     dayWeek = 'Понедельник';
//     break;
//   case 2:
//     dayWeek = 'Вторник';
//     break;
//   case 3:
//     dayWeek = 'Среда';
//     break;
//   case 4:
//     dayWeek = 'Четверг';
//     break;
//   case 5:
//     dayWeek = 'Пятница';
//     break;
//   case 6:
//     dayWeek = 'Суббота';
//     break;
// default:
//   dayWeek ='Неверный день';
// }

// console.log(`Сегодня ${dayWeek}`);

// // Урок 24
// let count = 0;

// while(true) {
//   console.log(count);
//   count++;
//   if(count === 7) break;
// }

// // Урок 25
// let count = 0;
// do {
//   console.log(count);
//   count++;
//   if(count === 5) break
// } while(true)

// // Урок 31
// let d2 = 10;
// const fn12 = function() {
//   let d2 =10;
//   d2++;
//   console.log(d2);
// }

// fn12();
// fn12();
// fn12();
// fn12();

// // Урок 33
// const fn12 = function(a1, b1) {
//   console.log(a1 + b1);
// }

// fn12(20, 20);
// fn12('Hello', 'JavaScript');

// console.log(`-------------------------------------------------`);

// const h1 = document.querySelector('h1')

// console.log(h1);

// function fn16() {
//   h1.textContent = 'Hello, World!!!'
// }

// function fn17() {
//   h1.textContent = 'JavaScript !!!';
// }

// h1.addEventListener('mouseover', fn16)
// h1.addEventListener('mouseout', fn17)

// // Урок 34
// function fn19(a1, a2, a3) {
//   document.querySelector(a1).textContent = 'hello';
//   console.log(a2 + a3);
// }
// fn19('h1', 20, 20);

// function fn20(a1, a = 20) {
//   console.log(a + a1);
// }
// fn20(2);

// // Урок 35
// function arg() {
//   console.log(arguments);
// }
// arg(1, 2, 3)

// function count() {
//   console.log(arguments.length);
// }

// count(1, 'hello', 10, 20);

// // Урок 36 - обработка функций, кол-во аргументов для которой заранее не известно!!!!
// function count() {
//   console.log(arguments);
// }
// count();

// console.log(`-------------------------------------------------`);

// function fn25() {
//   let total = 0;

//   for(let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }

//   return total;
// }
// console.log(fn25(5, 5, 5, 20));
// // функция "rs" - более короткая запись функции "fn25"
// function rs(...rest) {
//   const ar = rest.reduce((acc, val) => acc + val);
//   return ar;
// }
// console.log(rs(20, 100));

// // Урок 37
// function typeHandler(value) {
//   if(typeof value === 'number') {
//     return 'Numbers'
//   } else if(typeof value === 'string') {
//     return 'Strings'
//   } else {
//     return 'Ошибка'
//   }
// }
// let type = typeHandler(100)

// console.log(type)

// // Урок 38
// function fn30(a, b) {
//   const sum = a + b;
//   return sum;
// }

// console.log(fn30(20, 20));

// // Урок 39 - рандомайзер пароля
// function fn1(p) {
//   const pass = 'qweqewgsfhsrhss46546364dfgh@%#%@3yyhedfg!fsd';
//   let password = '';

//   for(let i = 0; i < p; i++) {
//     const randomIndex = Math.floor(Math.random() * pass.length);
//     password += pass[randomIndex];
//   }
//   return password;
// }
// const randomPassword = fn1(15)
// console.log(randomPassword);
// // --------------------------------------
// document.querySelector('.random-password').addEventListener('click', () => {
//   let inputPassValue = document.querySelector('.pass-in').value = fn1(15);
//   console.log(inputPassValue);
// });

// document.querySelector('.send').addEventListener('click', () => {
//   const inputs = document.querySelectorAll('input');
//   for(let i = 0; i < inputs.length; i++) {
//     inputs[i].value = '';
//   }
//   console.log('пусто');
// });

// // Урок 40
// function fnAdd(a, b) {
//   return a + b;
// }
// const result1 = fnAdd(2, 135);
// console.log(result1);

// const addArrow = (a, b) => {
//   return a + b;
// };
// console.log(addArrow(10, 30));

// const s1 = (a) =>  a * a;
// console.log(s1(20));

// const s2 = () => {
//   console.log('привет мир');
// };
// s2();

// const s3 = () => {
//   const s4 = () => {
//     console.log('я функция');
//   };
//   s4();
// };
// s3();
// console.log(`--------------------------------------------`);
// // способ 1
// const s5 = (num) => num % 2 === 0 ? 'четное' : 'нечетное';
// console.log(s5(5));
// console.log(s5(6));

// // способ 2
// function s6(num) {
//   if(num % 2 === 0) {
//     console.log(`четное`);
//   } else {
//     console.log(`нечетное`);
//   }
// };
// s6(10);
// s6(11);

// // способ 3
// function s7(num) {
//   return num % 2 === 0 ? 'четное' : 'нечетное';
// };
// console.log(s7(20));
// console.log(s7(21));

// // Урок 41 - callback функции (функции обратного вызова) - функции, которые передаются в качестве асргумента для другой функции и вызываются позже
// const myCall = () => {
//   console.log('Функция обратного вызова была вызвана')
// }
// const fn30 = function (callback) {
//   console.log('Выполняем действие........')
//   callback()
// }
// fn30(myCall)

// console.log(`-------------------------------------------------------`)

// function testFn(city, country, callback) {
//   if (callback && typeof callback === 'function') {
//     callback()
//   } else {
//     console.log(`город ${city} - страна ${country}`)
//   }
// }

// testFn('Лондон', 'Англия', function () {
//   console.log('Функция правильно работает')
// })

// console.log(`-------------------------------------------------------`)

// const arr = [1, 2, 3, 4]

// console.log(arr.forEach((el) => console.log(el * 2)))
// console.log(arr.map((el) => el + 10))
// console.log(arr.filter((el) => el > 3))

// console.log(arr.join(''))

// // Урок 42 - Анонимные функции

// const myFn = function () {
//   console.log('hello world')
// }
// myFn()

// console.log(`-------------------------------------------------------`)

// const numbers = [1, 2, 3]

// numbers.forEach(function (num) {
//   console.log(num + 20)
// })
// console.log(`--------------------`)
// numbers.forEach((item) => console.log(item * 5))
// console.log(`--------------------`)
// const add1 = function (a, b) {
//   return a + b
// }
// console.log(add1(20, 20))

// const add2 = (a, b) => a + b
// console.log(add2(2, 3))

// console.log(`-------------------------------------------------------`)

// document.querySelector('h1').addEventListener('click', function () {
//   this.style.backgroundColor = 'purple'
// })

// document.querySelector('h1').addEventListener('click', () => {
//   // this.style.backgroundColor = 'purple'
//   document.querySelector('h1').style.backgroundColor = 'red'
// })

// console.log(`-------------------------------------------------------`)

// function calc(a, b, c) {
//   return a(b, c)
// }

// const result = calc(
//   function (x, y) {
//     return x * y
//   },
//   20,
//   30
// )
// console.log(result)

// // Урок 44 - глобальные / болчные области видимости

// let qwe = 10

// function www() {
//   let eee = 15
//   qwe = 20
// }

// www()

// console.log(qwe)

// // Урок 45 - замыкание: функции, ссылающиеся на независимые свободные переменные (функция запоминает окружение, в котором она была создана)

// function fn11() {
//   let a = 'Я внешняя переменная'

//   function fn12() {
//     console.log(a)
//   }

//   return fn12
// }
// const myFn = fn11()
// myFn()

// // console.log(`-------------------------------------------------------`)

// function g1(g) {
//   return function (name) {
//     console.log(g + ', ' + name)
//   }
// }
// const gHello = g1('Hello')
// gHello('JavaScript')

// // Урок 46 - области видимости

// let message = 'Привет JavaScript'
// const myMessage = () => console.log(message)
// myMessage()

// {
//   const test = 'Hello 1'
//   console.log(test)
//   const message = 'Hi'
//   {
//     const test = 'Hello 2'
//     console.log(test)
//     {
//       const test = 'Hello 3'
//       console.log(test)
//       console.log(message)
//     }
//   }
// }

// function myMessage1() {
//   const message = 'Привет JavaScript 111'
//   console.log(message)

//   for (let i = 0; i < 5; i++) {
//     const message = `Цикл № ${i}`
//     console.log(message)
//   }
// }

// myMessage1()

// console.log(`-------------------------------------------------------`)

// const hello = 'Привет!!'

// function sayHello(message, count) {
//   const m = message
//   let c1 = 0
//   while (c1 < count) {
//     console.log(`${m} -- ${c1}`)
//     c1++
//   }
// }

// sayHello(hello, 5)

// console.log(`-------------------------------------------------------`)

// function r1(a, b) {
//   return a * b
// }

// console.log(r1(20, 3))
// const sum = r1(50, 3)
// console.log(sum)

// console.log(`-------------------------------------------------------`)

// function ageFn(age) {
//   if (typeof age !== 'number') {
//     return 'Возраст указан не корректно!'
//   }
//   if (age < 1 || age > 140) {
//     return 'Такого возраста не существует'
//   }
//   if (age < 18) {
//     return 'Несовершеннолетний'
//   }

//   return 'Вы прошли валидацию'
// }

// console.log(ageFn('привет'))
// console.log(ageFn(0))
// console.log(ageFn(141))
// console.log(ageFn(17))
// console.log(ageFn(29))

// // Урок 47 - ПРАКТИКА

// // 1. Напишите функцию, которая принимает два аргумента (числа) и возвращает их сумму
// function getSum(a, b) {
//   return a + b
// }
// console.log(getSum(4, 5))

// // 2. Напишите функцию, которая проверяет, является ли число четным.
// let addNum = function (a) {
//   if (a % 2 === 0) {
//     return 'Четное'
//   }
//   return 'Нечетное'
// }
// console.log(addNum(2))

// // 3. Напишите функцию, которая принимает строку и возвращает ее длину.
// let getLength = (a) => a.length
// console.log(getLength('qwerty'))

// // Урок 48 - use strict, он же строгий режим
// 'use strict'

// names = 'John'
// console.log(names)

// console.log(window.names)
// console.log(window)

// console.log(`-------------------------------------------------------`)

// function fn1() {
//   names = 'myname'
//   console.log(names)
// }
// fn1()

// // Урок 49
// 'use strict'

// let user = {}
// let user1 = Object()

// console.log(user)

// // Урок 50
// const user = {
//   city: 'London',
//   tel: +954732222,
//   'hello world': false,
// }

// console.log(user)
// console.log(user['hello world'])

// console.log(`-------------------------------------------------------`)

// let car = {
//   brand: 'Toyota',
//   model: 'Corolla',
//   specs: {
//     engine: 'V6',
//     hors: 300,
//   },
// }

// console.log(car.model)
// console.log(car['model'])

// console.log(car.specs)
// console.log(car.specs.hors)

// console.log(`-------------------------------------------------------`)

// let shopp = {
//   items: ['bread', 'milk', 'eggs'],
// }

// console.log(shopp.items)

// console.log(`-------------------------------------------------------`)

// const user4 = {
//   add: function (a1, b1) {
//     return a1 + b1
//   },
// }

// console.log(user4.add(20, 20))

// // Урок 51

// let calculator = {
//   add: function (a, b) {
//     return a + b
//   },
//   subtract: function (a, b) {
//     return a - b
//   },
//   multyple: function (a, b) {
//     return a * b
//   },
// }
// console.log(calculator.add(5, 3))
// console.log(calculator.subtract(10, 3))
// console.log(calculator.multyple(20, 10))

// // Урок 52 - без строгого режима (use strict) - неявно объясленные переменны добаляются в глобал объект window
// age = 40
// console.log(window.age)
// console.log(age)

// console.log(`-------------------------------------------------------`)

// // Урок 53 - this
// // const user = {
// //   age: 1995,
// //   calcAge() {
// //     return 2024 - this.age
// //   },
// // }
// // console.log(user.calcAge())

// // console.log(`-------------------------------------------------------`)

// // 'use strict'
// // function fn1() {
// //   console.log(this)
// //   return this
// // }
// // fn1()
// // console.log(fn1() === window)

// // console.log(`-------------------------------------------------------`)

// // 'use strict'
// // let obj = {
// //   myMethod() {
// //     return this
// //   },
// // }
// // console.log(obj.myMethod() === obj)

// // console.log(`-------------------------------------------------------`)

// // document.querySelector('h1').addEventListener('click', function () {
// //   this.style.backgroundColor = 'purple'
// // })

// // document.querySelector('h1').addEventListener('click', () => {
// //   document.querySelector('h1').style.backgroundColor = 'purple'
// // })

// // console.log(`-------------------------------------------------------`)

// // const user = {
// //   age: 1997,
// //   myMethod() {
// //     return () => {
// //       return this
// //     }
// //   },
// // }
// // console.log(user.myMethod()() === user)

// // console.log(`-------------------------------------------------------`)

// // const person = {
// //   age: 1995,
// //   myAge() {
// //     const a1 = () => {
// //       console.log(2024 - this.age)
// //     }
// //     a1()
// //   },
// // }
// // person.myAge()

// // console.log(`-------------------------------------------------------`)

// // const person = {
// //   age: 1995,
// //   myAge() {
// //     const self = this
// //     return () => {
// //       console.log(2024 - self.age)
// //     }
// //   },
// // }
// // console.log(person.myAge()())

// // console.log(`-------------------------------------------------------`)

// let person2 = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName() {
//     return `${this.firstName} - ${this.lastName}`
//   },
// }
// console.log(person2.fullName())

// // Урок 54 - копирование объектов
// const obj1 = {
//   color: 'red',
//   age: 15,
//   border: '2px',
// }

// const obj2 = obj1

// obj2.age = 40
// obj2.outline = 'none'

// console.log(obj1)
// console.log(obj2)

// console.log(`-------------------------------------------------------`)

// const obj1 = {
//   color: 'red',
//   age: 15,
//   border: '2px',
// }

// const obj2 = Object.assign({}, obj1)

// obj2.age = 40
// obj2.outline = 'none'

// console.log(obj1)
// console.log(obj2)

// console.log(`-------------------------------------------------------`)

// let obj1 = { name: 'John' }

// let obj2 = {}
// // Object.assign(obj2, obj1)
// // или
// obj2 = Object.assign({}, obj1)

// console.log(obj1)
// console.log(obj2)

// console.log(`-------------------------------------------------------`)

// let obj1 = { name: 'John' }
// const obj3 = { name: 'Vassilti', age: 29 }
// const obj2 = Object.assign({}, obj1, obj3)
// console.log(obj2)

// console.log(`-------------------------------------------------------`)
// const fz = 'size'

// const obj1 = {
//   age: 29,
//   city: 'London',
// }
// const obj2 = Object.assign({}, obj1)

// obj1[fz] = '100px'

// console.log(obj1)
// console.log(obj2)

// console.log(`-------------------------------------------------------`)

// const fz = '200px'

// const obj1 = {
//   age: 29,
//   city: 'London',
//   colors: {
//     red: '#ff0000',
//     black: '#000',
//   },
// }
// const obj2 = Object.assign({}, obj1)

// obj1[fz] = '100px'
// obj2.colors.white = '#fff'

// console.log(obj1)
// console.log(obj2)

// // Урок 55 - спред оператор и глубокое копирование
// // const obj1 = {
// //   age: 29,
// //   city: 'London',
// //   colors: {
// //     red: '#ff0000',
// //     black: '#000',
// //   },
// // }

// // const obj2 = { ...obj1 }

// // obj2.age = 15
// // obj2.colors.yellow = 'yellow'

// // console.log(obj1)
// // console.log(obj2)

// // console.log(`-------------------------------------------------------`)

// const obj1 = {
//   age: 29,
//   city: 'London',
//   colors: {
//     red: '#ff0000',
//     black: '#000',
//   },
// }

// const obj2 = structuredClone(obj1)

// obj2.age = 15
// obj2.colors.yellow = 'yellow'

// console.log(obj1)
// console.log(obj2)

// // Урок 56 - JSON
// const a1 = {
//   name: 'Costa',
//   age: 30,
//   isStudent: {
//     city: 'London',
//     color: 'blue',
//   },
// }

// // const a2 = JSON.stringify(a1)
// // const a3 = JSON.parse(a2)

// const a2 = JSON.parse(JSON.stringify(a1))

// a2.isStudent.color = 'red'
// delete a2.isStudent.city

// console.log(a1)
// console.log(a2)
// // console.log(a3)

// // Урок 57 - деструктуризация объектов
// // const obj1 = { name: 'Costa', age: 29 }

// // const { name, age } = obj1

// // console.log(name)
// // console.log(age)

// // console.log(obj1)

// // console.log(`-------------------------------------------------------`)

// // const obj2 = { name: 'Costa', age: 31 }

// // const { name: myName, age: myAge } = obj2

// // console.log(myName)
// // console.log(myAge)

// // console.log(`-------------------------------------------------------`)

// // const object3 = { name: 'Costa' }

// // const { name, city = 'London' } = object3

// // console.log(city)
// // console.log(name)

// // console.log(`-------------------------------------------------------`)

// // const printHandler = ({ name, age, tel }) => {
// //   console.log(`имя ${name}, возраст ${age}, номер ${tel}`)
// // }

// // const person = { name: 'Costa', age: 29, tel: +37612312 }

// // printHandler(person)

// // console.log(`-------------------------------------------------------`)
// // const obj4 = {
// //   name: 'Vassilyi',
// //   open: 10,
// //   styles: {
// //     display: 'flex',
// //     color: 'pink',
// //     fz: '42px',
// //   },
// // }

// // const {
// //   name,
// //   styles: { color, fz },
// // } = obj4

// // console.log(name)
// // console.log(fz)
// // console.log(color)

// // console.log(`-------------------------------------------------------`)

// // const users = [
// //   { id: 1, name: 'Bob' },
// //   { id: 2, name: 'Alice' },
// //   { id: 3, name: 'Charlie' },
// //   { id: 4, name: 'Costa' },
// // ]

// // for (const { id, name } of users) {
// //   console.log(`User ${id} - ${name}`)
// // }

// // console.log(`-------------------------------------------------------`)

// const obj7 = { name: 'John', age: 30, country: 'USA' }

// const { name, ...items } = obj7
// console.log(name)
// console.log(items)

// // Урок 58 - Spread (распаковывает) / Rest (запаковывает)
// // Spread

// // const arr1 = [1, 2, 3, false]
// // const arr2 = [...arr1, 4, 5, 6, 7]
// // console.log(arr1)
// // console.log(arr2)

// // console.log(`-------------------------------------------------------`)

// // Rest

// // const arr3 = [10, 20, undefined, function () {}, {}, { age: 45 }]
// // const [a1, s2, ...lastItems] = arr3
// // console.log(a1)
// // console.log(s2)
// // console.log(lastItems)

// // console.log(`-------------------------------------------------------`)

// // const obj1 = { name: 'John', age: 44 }
// // const obj2 = { ...obj1, country: 'USA' }
// // console.log(obj1)
// // console.log(obj2)

// // console.log(`-------------------------------------------------------`)

// // const objA = { open: 10, closed: 21 }
// // const objACopy = { ...objA }
// // console.log(objA === objACopy)

// // const objB = { open: true }
// // const a1 = objB
// // console.log(objB === a1)

// // console.log(`-------------------------------------------------------`)

// // const { name, ...rest } = { ...{ name: 'Costa', age: 22 }, city: 'London' }

// // console.log(name)
// // console.log(rest)

// // console.log(`-------------------------------------------------------`)

// const objTest = { time: 1200, color: 'blue', fz: '232px' }
// const { time: t, ...rest } = { ...objTest, tel: false }

// console.log(t)
// console.log(rest)

// // Урок 59 - методы объектов

// // object keys
// const obj = {
//   name: 'Bob',
//   day: 2,
//   sayHello: function () {
//     console.log(true)
//   },
//   openModal() {
//     return false
//   },
// }

// let person = {
//   name: 'Costa',
//   age: 32,
//   isAdmin: false,
// }

// const keys = Object.keys(obj)
// const keys1 = Object.keys(person)

// console.log(keys)
// console.log(keys1)

// // for (let key of keys1) {
// //   console.log(`${key} - ${person[key]}`)
// // }

// console.log(`-------------------------------------------------------`)

// // object values
// const keys2 = Object.values(obj)
// console.log(keys2)

// console.log(`-------------------------------------------------------`)

// // object entries
// const keys3 = Object.entries(person)
// console.log(keys3)

// console.log(`-------------------------------------------------------`)

// // object hasOwnProperty
// console.log(person.hasOwnProperty('name'))
// console.log(person.hasOwnProperty('toString'))

// // console.log(`-------------------------------------------------------`)

// // object freeze - прокидывает ошибку при попытке изменения свойств объекта (позволяет создавать неизменяемые объекты)
// // object isFrozen - проверяет, "заморожен" ли объект, или нет (вернет true / false)
// // object seal - "запечатывает" объект, позволяет изменять свойства объекта, но не добавлять новые
// // object isSealed - проверяет, "запечатан" ли объект, или нет (вернет true / false)
// // object preventExtensions - добавлять новые свойства в объект не можем, но изменять их или удалять - можем

// // Урок 60 - Оператор "нулевого" слияния (??) - проверка на null или undefined
// // const person = {
// //   name: 'Alisa',
// //   age: 12,
// //   adress: {
// //     city: 'London',
// //     id: undefined,
// //   },
// // }
// // const idCode = person.adress.id ?? 'пусто'
// // console.log(idCode)

// console.log(`-------------------------------------------------------`)

// const val1 = null
// const val2 = 200

// const result1 = val1 ?? console.log('false')
// const result2 = val2 ?? 'Значение по умолчанию'

// console.log(result2)

// // Урок 61 - Оператор опциональной последовательности - если свойство существует - вернуть его, если нет - вернуть undefined
// // const user = {
// //   name: 'John',
// //   adress: {
// //     city: 'New York',
// //   },
// // }

// // let a1 = user.adress?.city
// // console.log(a1)

// // console.log(`-------------------------------------------------------`)

// const person = {
//   name: 'Costa',
//   adress: {
//     city: 'London',
//   },
// }

// if (person.adress?.city) {
//   console.log(`город указан: ${person.adress.city}`)
// } else {
//   console.log('Город не указан')
// }

// // Урок 62
// const user = {
//   name: 'John',
//   adress: null,
// }
// const city = user.adress?.city ?? 'Город неизвестен'
// console.log(city)

// console.log(`-------------------------------------------------------`)

// const users = {
//   people: 31232,
//   departament1: {
//     departament2: {
//       people: 1200,
//     },
//     departament3: {
//       people: 400,
//       city: 'London',
//     },
//   },
// }
// console.log(
//   users.departament1?.departament2?.country?.city ?? 'нет такого свойства'
// )
// console.log(users.departament1.departament2.people)

// // Урок 63 - Массивы
// 'use strict'

// const arr = []
// console.log(arr)

// console.log(`-------------------------------------------------------`)

// const arr1 = [
//   1,
//   'two',
//   true,
//   { key: 'value' },
//   () => {
//     console.log('Hello')
//   },
// ]
// console.log(arr1)

// console.log(`-------------------------------------------------------`)

// const arr3 = [1, 2, 100, 200, 500]
// console.log(arr3[0])

// console.log(`-------------------------------------------------------`)

// const fruits = ['apple', false, { city: 'London' }]
// console.log(fruits[1])
// fruits[1] = true
// fruits[0] = 'Hello world'
// console.log(fruits)

// console.log(`-------------------------------------------------------`)

// const cars = ['toyota', 'Honda', 'BMW', undefined]
// console.log(cars)
// console.log(cars.length)

// console.log(`-------------------------------------------------------`)

// const arr5 = [1, 2, 'hello']
// arr5.push(10, undefined, 200)
// arr5.pop()
// arr5.pop()
// console.log(arr5)

// console.log(`-------------------------------------------------------`)

// const f1 = ['apple', false, 1, 2]
// console.log(f1.indexOf(10))

// const index = f1.indexOf(1)
// console.log(index)

// console.log(`-------------------------------------------------------`)

// const newArr = [1, 2, 3]
// const a1 = newArr[0]

// newArr[0] = true

// console.log(newArr)
// console.log(a1)

// // Урок 64 - Методы массивов
// 'use strict'

// const arr1 = [1, 2]
// arr1.push(true)
// arr1.push(12, 20, undefined, null)
// arr1.pop()
// arr1.unshift(100, 200)
// arr1.unshift(false)
// arr1.shift()
// arr1.shift()
// console.log(arr1)
// console.log(arr1.length)

// // Урок 65 - Метод массива slice
// 'use strict'

// const arr2 = ['hello', 'banana', 'apple', false, 'car']
// const sliceArr2 = arr2.slice(0, -3)
// console.log(sliceArr2)

// console.log(`-------------------------------------------------------`)

// const persons = [
//   { name: 'Costa', age: 23 },
//   { name: 'Bob', age: 13 },
//   { name: 'Alex', age: 53 },
// ]

// const slicePersons = persons.slice(1, 3)
// console.log(slicePersons)

// // Урок 66 - Метод массива splice (используется для изменения содержимого массива, меняет оригинальный массив); toSpliced - не меняет оригинальный массив
// // const arr4 = [1, 2, 3, 4, 5]
// // const removeItem = arr4.splice(2, 2)

// // console.log(arr4)
// // console.log(removeItem)

// // console.log(`-------------------------------------------------------`)

// // const arr4 = [1, 2, 3, 4, 5]
// // const removeItem = arr4.toSpliced(2, 2)

// // console.log(arr4)
// // console.log(removeItem)

// // console.log(`-------------------------------------------------------`)

// // const arr4 = [1, 2, 3, 4, 5]

// // const removeItem = arr4.splice(2, 2, 20, 10, 15)

// // console.log(arr4)
// // console.log(removeItem)

// // console.log(`-------------------------------------------------------`)

// const arr1 = [1, 2, 3, 4]
// const a1 = arr1.toSpliced(1, 0, undefined)

// console.log(arr1)
// console.log(a1)

// // Урок 67 - concat - метод для объединения масивов
// const a1 = ['a', 'b', 'c']
// const a2 = ['d', 'e', 'f']
// const newArr = a1.concat(a2)
// console.log(newArr)

// const arr5 = [1, 2, 3]
// const arr6 = arr5.concat(4, 5, 6, 7, [undefined, 2000000000000000])
// console.log(arr6)

// const person1 = [{ name: 'Costa', age: 45 }]
// const person2 = [{ name: 'Bob', age: 15 }]
// const combinedPersons = person1.concat(person2)
// console.log(combinedPersons)

// console.log(`-------------------------------------------------------`)

// let a7 = [10, 20]
// let a8 = ['a', 'c']
// let b1 = a7.concat(a8, 30, 40)
// console.log(b1)

// const b3 = [10, 20]
// const b4 = []
// const b5 = b3.concat(b4)

// console.log(b5)

// // Урок 68 - цифкл for ... of для перебора массивов
// const arr = [1, 'hello', true, 'world']

// for (const item of arr) {
//   console.log(item)
// }

// console.log(`-------------------------------------------------------`)

// const numbers = [1, 2, 3, 4, 5]
// let sum = 0

// for (const num of numbers) {
//   sum += num
//   console.log(sum)
// }

// // Урок 69 - цикл forEach - принимает callback функцию к каждому элементу массива, принимает 3 параметра: 1) элемент, 2) индекс элемента, 3) полностью весь массив
// // const number = [1, 2, 3, 4, 5]

// // number.forEach((item, index, arr) => {})

// // console.log(`-------------------------------------------------------`)

// // const arr3 = [1, 2, 3, 4]

// // arr3.forEach((item, index, arr) =>
// //   console.log(`item: ${item}; index: ${index}; array: ${arr}`)
// // )

// // console.log(`-------------------------------------------------------`)

// // const arr4 = ['C#', 'JavaScript', 'Python', 'C++']

// // arr4.forEach((item, index) => {
// //   console.log(`index: ${index}; item: ${item}`)
// // })

// // console.log(`-------------------------------------------------------`)

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8]

// const s1 = []

// numbers1.forEach((num) => {
//   s1.push(num * num)
// })

// console.log(s1)
// console.log(numbers1)

// // Урок 70 - метод массива "map" - создает новый массив путем преобразования каждого элемента выбранного за основу массива; принимает те же 3 аргумента, что и метод forEach
// const numbers1 = [1, 2, 3, 4, 5]
// const stringA = numbers1.map((num) => {
//   return num.toString()
// })

// console.log(numbers1)
// console.log(stringA)

// console.log(`-------------------------------------------------------`)

// const numbers2 = [1, 2, 3, 4, 5]
// const double = numbers2.map((num) => num * 2)

// console.log(double)

// console.log(`-------------------------------------------------------`)

// const users = [
//   { id: 1, name: 'Costa' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Alex' },
// ]

// const userId = users.map((id) => id.name)
// console.log(userId)

// const userId1 = users.map((user) => {
//   return `${user.id} - ${user.name}`
// })
// console.log(userId1)

// // Урок 71 - метод массива "filter" - используется для фильтрации элементов; принимает  те же 3 аргумента, как forEach
// const numbers3 = [1, 2, 3, 4, 5]
// const f = numbers3.filter((num) => num > 3)
// console.log(f)

// console.log(`-------------------------------------------------------`)

// const names = ['Василий', 'Александр', 'Иван', 'Ринат', 'катя', 'саня']
// const f1 = names.filter((name) => name.length > 5)
// console.log(f1)

// console.log(`-------------------------------------------------------`)

// const products = [
//   { price: 1, name: 'Apple' },
//   { price: 2, name: 'Banana' },
//   { price: 3, name: 'Kiwi' },
//   { price: 4, name: 'Cherry' },
// ]
// const f3 = products.filter(function (prod) {
//   return prod.price > 2
// })
// console.log(f3)

// console.log(`-------------------------------------------------------`)

// const numbers = [1, 2, 3, 4, 5]
// const even = numbers.filter((num) => num % 2 === 0)
// console.log(even)

// // Урок 72 - метод массива "find" - поиск первого элемента массива по заданным условиям; метод "includes" - проверяет, есть ли заданный элемент или его часть в массиве или нет (true / false)
// const numbers5 = [1, 2, 3, 4, 5]
// const f4 = numbers5.find((num) => num === 3)
// console.log(f4)
// console.log(numbers5)

// console.log(`-------------------------------------------------------`)

// const users = [
//   { id: 1, name: 'Costa' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Alex' },
// ]

// const f5 = users.find((user) => user.id === 2)
// console.log(f5)

// console.log(`-------------------------------------------------------`)

// const products = [
//   { price: 1, name: 'Apple' },
//   { price: 2, name: 'Banana' },
//   { price: 3, name: 'Kiwi' },
//   { price: 4, name: 'Cherry' },
// ]

// const f6 = products.find((prod) => prod.price > 2 && prod.name.includes('rry'))
// console.log(f6)

// const b4 = ['hello', 'arrlo', 'dasdasdas', 1, 2]
// console.log(b4.includes(1))

// console.log(`-------------------------------------------------------`)

// const num1 = [1, 2, 3, 4, 5]
// const g1 = num1.includes(2, 1) // ищем 2 с 1-го индекса
// const g2 = num1.includes(2, 2) // ищем 2 со 2-го индекса
// console.log(g1)
// console.log(g2)

// // Урок 73 - метод массива "reduce" - исп. для преобразования массива в одно единственное значения; принимает 4 параметра: 1) аккумулятор/накопительная переменая - "acc"; 2) элемент массива - "item"; 3) индекс элемента - "index"; 4) сам массив - "arr".
// const arr = [10, 20, 30, 40]
// const arr2 = arr.reduce((acc, item) => acc + item, 20) // 20 - начальное значение для "acc"
// console.log(arr2)
// console.log(arr)

// console.log(`-------------------------------------------------------`)

// function myFn(...sum) {
//   let sum1 = 0

//   for (let val of sum) {
//     sum1 += val
//   }
//   return sum1
// }
// console.log(myFn(20, 30, 55))

// console.log(`-------------------------------------------------------`)

// const words = ['hi', 'my', 'students']
// const c1 = words.reduce((acc, curr) => acc + ' ' + curr)
// console.log(c1)

// console.log(`-------------------------------------------------------`)

// const num2 = [10, 20, 40, 50, 21, 43]
// const maxNumber = num2.reduce((acc, val) => Math.max(acc, val, 0))
// console.log(maxNumber)

// console.log(Math.max(1, 2, '10', 3, 4, 5, '2'))

// const arr10 = [1, 992, 3, 78]
// console.log(Math.max(...arr10, 5, 1001))

// console.log(`-------------------------------------------------------`)

// const arrA = ['Costa', 'Alex', 'Bob', 'John']
// const fg1 = arrA.reduce((acc, item, index) => {
//   acc[index + 1] = item
//   return acc
// }, {})
// console.log(fg1)

// const arr4 = Object.assign({}, arrA)
// console.log(arr4)

// // Урок 74 - метод массива "reverse"(разворачивает выбранный масив от последнего элемента к первому, МЕНЯЕТ оргинальный массив), метод массива "toReversed" (разворачивает выбранный массив, НЕ МЕНЯЕТ оргинальный массив)
// const l1 = ['A1', 'B1', 'C1', 10]
// const reversed = l1.reverse()
// console.log(l1)
// console.log(reversed)

// console.log(`-------------------------------------------------------`)

// const rev1 = ['a', 'b', 'c', 'd']
// const rev1Copy = rev1.toReversed()
// console.log(rev1)
// console.log(rev1Copy)
// console.log(`original: ${rev1}`)
// console.log(`reversed copy: ${rev1Copy}`)

// // Урок 75 - метод массива "sort"(сортирует массив по условиям, МЕНЯЕТ оргинальный массив); метод массива "toSorted"(сортирует массив по условиям, НЕ МЕНЯЕТ оргинальный массив)
// // const b2 = [1, 2, 11, 50, 3, 4]
// // const b3 = b2.sort()
// // console.log(b2)
// // console.log(b3)

// // console.log(Object.is(b2, b3)) // проверяем, имеет ли массив или объект ссылку на одну и ту же область в памяти, что равносильно следующей строке
// // console.log(b2 === b3)

// // console.log(`-------------------------------------------------------`)

// const b4 = [1, 2, 21, 19, 3, 10, 4]
// const b5 = b4.sort((a, b) => a - b) // задали условие для сортировки
// console.log(b4)
// console.log(Object.is(b4, b5))

// let str = ['a', 'b', 'A', 'B', 'c', 'C']
// str.sort()
// console.log(str)

// let objA = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 21 },
//   { name: 'Costa', age: 17 },
//   { name: 'Niko', age: 25 },
// ]
// objA.sort((a, b) => a.age - b.age)
// console.log(objA)

// console.log(`-------------------------------------------------------`)

// const num = [1, 10, 3, 4, 5, 6, 21, 7]
// const numCopy = num.toSorted((a, b) => {
//   return a - b
// })
// console.log(num)
// console.log(numCopy)

// console.log(Object.is(num, numCopy))

// // Урок 76 - метод массива "with"(меняет элемент на какое либо значение; принимает 2 аргумента: 1) индекс; 2) значение, которое нужно подставить под индекс. НЕ МЕНЯЕТ оригинальный массив)
// const k2 = [1, 2, 3, 4, 5]
// k2[1] = 'hello'
// const k2Copy = k2.with(2, true)
// console.log(k2Copy)
// console.log(k2)

// // Урок 77 - вызов методов в цепочку
// let numbers = [5, 2, 8, 1, 4, 6, 7, 13, 14, 19]
// let sortElements = numbers.filter((num) => num % 2 === 0).sort((a, b) => a - b)
// console.log(sortElements)

// console.log(`-------------------------------------------------------`)

// let names = ['ваня', 'катя', 'ваня', 'коля', 'катя']
// let uniqNames = names.filter((item, index, arr) => arr.indexOf(item) === index)
// console.log(uniqNames)

// console.log(`-------------------------------------------------------`)

// const numbers3 = [1, 3, 6, 9, 12, 15]
// let sum = numbers3
//   .filter((num) => num % 3 === 0)
//   .reduce((acc, curr) => acc + curr)
// console.log(sum)

// console.log(`-------------------------------------------------------`)

// let w1 = ['apple', 'banana', 'grape', 'cherry']
// let str1 = w1.map((word) => word.toUpperCase()).toSorted()
// console.log(str1)

// // Урок 78 - многомерные массивы
// let m1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
// console.log(m1)
// console.log(m1[0])
// console.log(m1[2])
// console.log(m1[1][1])
// console.log(m1[2][2])

// m1.push([10, 11, 12])
// m1.pop()
// console.log(m1)

// const c1 = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ]
// console.log(c1)
// console.log(c1[0][0])
// console.log(c1[0][1][1])
// console.log(c1[1][1][1])

// // const c2 = c1.map((el) => el.map((val) => val.map((item) => item * 5)))
// // console.log(c2)

// for (let i = 0; i < c1.length; i++) {
//   for (let j = 0; j < c1[i].length; j++) {
//     console.log(c1[i][j])
//   }
// }

// c1[1].push([9, 10])
// console.log(c1)

// // Урок 79

// const arr = [1, 2, 3, 1, 2, 3]
// console.log(arr.indexOf(2)) // Находит индекс заданного элемента с начала
// console.log(arr.lastIndexOf(2)) // Находит индекс заданного элемента с конца

// console.log(`-------------------------------------------------------`)

// let number = [1, 2, 3, 4, 5]
// let n1 = number.some((num) => num % 2 === 0) // Проверяет, соответствует ли хоть один элемент массива условию
// console.log(n1)

// console.log(`-------------------------------------------------------`)

// let number1 = [2, 5, 6, 8, 5]
// let n2 = number1.every((num) => num % 2 === 0) // Проверяет, соответствуют ли все элементы массива условию
// console.log(n2)

// let numA = [1, 3, 5, 7, 9]
// let a1 = numA.every((num) => num > 0)
// console.log(a1)

// let words = ['apple', 'banana', 'orange']
// let wordsEvery = words.every((word) => word.includes('ge'))
// console.log(wordsEvery)

// console.log(`-------------------------------------------------------`)

// let mixArr = [1, 'hello', 3, 'world']
// let allNum = mixArr.every((item) => typeof item === 'number')
// console.log(allNum)

// // Урок 80 - метод "findIndex"(используется для поиска первого элемента массива, соответствующий заданным условиям и возвращает его индекс)
// const ages = [19, 24, 31, 35, 42]
// const index = ages.findIndex((age) => age >= 30)
// console.log(index)

// console.log(`-------------------------------------------------------`)

// const users = [
//   { id: 1, name: 'Costa' },
//   { id: 2, name: 'Niko' },
//   { id: 3, name: 'Bob' },
// ]
// const index1 = users.findIndex((user) => user.name === 'Costa')
// console.log(index1)

// console.log(`-------------------------------------------------------`)

// const numbers = [10, 20, 30, 40, 50]
// const index2 = numbers.findIndex((num) => num > 100)
// console.log(index2)

// // Урок 81 - метод "flat"(используется для "сплющивания" вложенных подмассивов)
// const arr = [1, 2, 3, [4, 5]]
// const arrCopy = arr.flat()
// console.log(arrCopy)

// console.log(`-------------------------------------------------------`)

// const arr1 = [1, [2, [3]]]
// const arr1Copy = arr1.flat(2) // По умолчания 1; указывает уровень вложенности для "сплющивания" вложенных массивов (на сколько в глубь отрабатывать методу)
// console.log(arr1Copy)

// console.log(`-------------------------------------------------------`)

// const arr3 = [1, 2, 3, [4, 5]]
// const arr3Copy = arr3.flat().map((num) => num * 2)
// console.log(arr3Copy)

// console.log(`-------------------------------------------------------`)

// const arr4 = [1, , , , , [20, 44]]
// const arr4Copy = arr4.flat() // Дополнительно метод убирает пустые ячейки
// console.log(arr4Copy)

// // Урок 82 - метод "flatMap"(используется для преобразования каждого элемента массива)
// const arr = [1, 2, 3, 4]
// // const arrCopy = arr.flat().map((el) => el * 2) // равносильно следующей записи:
// const arrCopy = arr.flatMap((el) => el * 2)
// console.log(arrCopy)

// console.log(`-------------------------------------------------------`)

// const arr1 = [1, 2, 3, 4, 5]
// const arr1Copy = arr1.flatMap((num) => (num % 2 === 0 ? num : []))
// console.log(arr1Copy)

// // Урок 83 - методы "split"(из строки - в массив; указывается разделитель) и "join"(из массива - в строку; указывается разделитель)
// const str = 'Hello world'
// const arr = str.split(' ')
// console.log(str)
// console.log(arr)

// console.log(`-------------------------------------------------------`)

// const str1 = 'apple, banana, kiwi'
// const arr1 = str1.split(', ')
// console.log(arr1)

// console.log(`-------------------------------------------------------`)

// const str2 = 'apple, banana, kiwi'
// const arr2 = str2.split(', ', 2) // указали индекс того, до какого элемента ищем
// console.log(arr2)

// console.log(`-------------------------------------------------------`)

// const str3 = 'JavaScript'
// const arr3 = str3.split('')
// console.log(arr3)

// console.log(`-------------------------------------------------------`)
// console.log(`-------------------------------------------------------`)

// const arrStr = ['apple', 'banana', 'kiwi']
// const strA = arrStr.join(' ')
// console.log(strA)
// console.log(arrStr)

// console.log(`-------------------------------------------------------`)

// const js = 'javascript'
// console.log(js)

// const jsArr = js.split('')
// console.log(jsArr)

// const jsJoin = jsArr.join('')
// console.log(jsJoin)

// // Урок 84 - практика
// // 1) найти сумму всех элементов массива
// const arr = [1, 2, 3, 4, 5]
// const sum = arr.reduce((acc, elem) => (acc += elem))
// console.log(sum)

// console.log(`-------------------------------------------------------`)
// // 2) найти самый большой элемент массива
// const arr1 = [10, 5, 20, 8, 15, 27]
// const maxElem1 = Math.max(...arr1)
// console.log(maxElem1)

// console.log(`-------------------------------------------------------`)
// // 3) объединить несколько массивов в один массив
// const arr2 = [1, 2]
// const arr3 = [3, 4]
// const arrConcat = arr2.concat(arr3)
// console.log(arrConcat)

// // Урок 85 - методы строк
// const str1 = 'Далеко-далеко, за словесными.'
// const str2 = 'Далеко-далеко, за словесными горами.'
// const str3 = str1 + ' ' + str2
// console.log(str3)

// console.log(`-------------------------------------------------------`)

// const str4 = 'Далеко-далеко, за словесными горами.'
// console.log(str4.length)

// console.log(`-------------------------------------------------------`)

// const strOne = 'Lorem, ipsum'
// const firstChar = strOne[0]
// const lastChar = strOne[strOne.length - 1]
// console.log(firstChar)
// console.log(lastChar)

// console.log(`-------------------------------------------------------`)

// const strHello = 'Hello, world'
// const charStr = strHello.split(' ')

// console.log(charStr)
// console.log(strHello)

// charStr.push('!!!!!!!!!!!!')

// console.log(charStr)

// const newStr = charStr.join('')
// console.log(newStr)

// // Урок 86 - продолжение
// // const arr = ['hello', 'world']
// // console.log(arr[0].toLocaleUpperCase())

// const str = 'Hello, world'
// const strUpper = str.toLocaleUpperCase()
// const strLow = str.toLocaleLowerCase()

// console.log(strUpper)
// console.log(strLow)

// console.log(`-------------------------------------------------------`)

// const str1 = 'Hello, world'
// console.log(str1.slice(1, 3)) // указываем с какого по какой индекс идет срез; указав вторым аргументом "-1" = срез по последний символ

// console.log(`-------------------------------------------------------`)

// const strM = 'Далеко-далеко, за словесными.Далеко-далеко, за'
// console.log(strM.replace('за', 'TRUE')) // находит ПЕРВОЕ указанное значение, меняет на второе указанное значение
// console.log(strM.replaceAll('за', '----------')) // находит ВСЕ соответствия указанному значению, меняет на второе указанное значение

// console.log(`-------------------------------------------------------`)

// const strA = 'Далеко-далеко, за словесными.Далеко-далеко, за'
// console.log(strA)
// console.log(typeof strA)

// console.log(`-------------------------------------------------------`)

// const arr = [1, 2, 3, 'hello', 4, 5, 'hello']
// console.log(arr)
// console.log(typeof arr)

// // Урок 87 - продолжение
// const str1 = 'Далеко-далеко, за словесными'
// console.log(str1.indexOf('за'))

// const name = 'Costa'
// const greeting = `Hello ${name}`
// console.log(greeting)

// console.log(`-------------------------------------------------------`)

// const reverseStr = (str) => str.split('').reverse().join('')
// console.log(reverseStr('hello'))

// console.log(`-------------------------------------------------------`)

// function lg1(str) {
//   const words = str.split(' ')
//   let maxWords = 0
//   for (let word of words) {
//     if (word.length > maxWords) {
//       maxWords = word.length
//     }
//   }
//   return maxWords
// }
// console.log(
//   lg1(
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//   )
// )

// // Урок 88 - деструктуризация массивов
// // const array = ['one', 'two', 'three']
// // const [a, b, c] = array
// // console.log(a)
// // console.log(b)
// // console.log(c)

// // const array1 = ['one', 'two', 'three', true, false]
// // const [a1, b1, c1, d1, e1] = array1
// // console.log(a1, b1, c1, d1, e1)

// // console.log(`-------------------------------------------------------`)

// // const arr = [1, 2, 3, 4, 5, 6, 'hi']
// // const [c2, c3, ...c4] = arr
// // console.log(c2)
// // console.log(c3)
// // console.log(c4)

// // console.log(`-------------------------------------------------------`)

// const arr2 = ['one', 'two']
// const [first, second, admin = true] = arr2
// console.log(first)
// console.log(second)
// console.log(admin)

// let a = true
// let b = false
// // [a, b] = [b, a]
// console.log(a)
// console.log(b)

// const arr = [10, 20, 500, 343, -434]
// const sum1 = (...arrg) => arrg.reduce((acc, value) => acc + value, 0)
// console.log(sum1(...arr))

// const arrNum = [11, 22, 33]
// const sum = (a1, b1, c1) => a1 + b1 + c1
// console.log(sum(...arrNum))

// // Урок 89 - структура данных "Map" (коллекция пар "ключ-значение")
// let map = new Map()
// map.set('key1', 'value') // .set - добавление элемента в коллекцию
// map.set('key2', 'value2').set('key3', true).set(123, false).set(true, 'open')

// console.log(map)

// console.log(`-------------------------------------------------------`)

// let map1 = new Map()
// map1.set(false, 'closed').set(true, { open: 1200 })

// console.log(map1)
// console.log(map1.get(true)) // получаем значению по обращению к ключу
// console.log(map1.get(false))

// console.log(`-------------------------------------------------------`)

// let map2 = new Map()
// map2.set(20, [1, 2, 3]).set('city', 'London')

// console.log(map2)
// console.log(map2.get(20))
// console.log(map2.has(20)) // проверка, существует ли искомый ключ или нет
// console.log(map2.has(123))

// console.log(`-------------------------------------------------------`)

// let map3 = new Map()
// map3.set('color1', 'red').set('backgroundColor', 'pink').set('isAdmin', true)

// console.log(map3)
// console.log(map3.size) // узнаем размер коллекции

// map3.delete('color1') // удаление элементов из коллекции
// console.log(map3)
// console.log(map3.size)

// console.log(`-------------------------------------------------------`)

// const map4 = new Map()
// map4.set('name', 'Costa').set('age', 29).set('car', 'Toyota')
// console.log(map4)

// for (let key of map4.keys()) {
//   // получаем с помощью цикла ТОЛЬКО ключи
//   console.log(key)
// }
// console.log(`---`)
// for (let key of map4.values()) {
//   // получаем с помощью цикла ТОЛЬКО значения
//   console.log(key)
// }
// console.log(`---`)
// for (let key of map4.entries()) {
//   // получаем с помощью цикла массив ключ-значение
//   console.log(key)
// }
// console.log(`---`)
// for (let [key, item] of map4.entries()) {
//   // используем деструктуризацию массива для вывода ключ-значений
//   console.log(key, item)
// }

// console.log(`-------------------------------------------------------`)

// const map5 = new Map()
// map5.set('name', 'Costa').set('age', 29).set('car', 'Toyota')
// console.log(map5)

// map5.clear() // полное очищение коллекции
// console.log(map5)

// console.log(`-------------------------------------------------------`)

// const obj1 = { name: 'john' }
// const obj2 = { name: 'Costa', age: 29 }

// const objMap = new Map()

// objMap.set(obj1, 'value1').set(obj2, 'value2')

// console.log(objMap.get(obj1))
// console.log(objMap.get(obj2))
// console.log(objMap)

// console.log(`-------------------------------------------------------`)

// const map6 = new Map([
//   // добавляем массив сразу при объявлении "Map"
//   ['red', 'красный'],
//   ['blue', 'синий'],
// ])

// console.log(map6)
// console.log(map6.has('red'))
// console.log(map6.get('red'))
// console.log(map6.delete('red'))
// console.log(map6)

// console.log(`-------------------------------------------------------`)

// const myMap = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
//   ['key3', 'value3'],
// ])

// myMap.forEach((value, key) => {
//   console.log(key, value)
// })

// console.log(`-------------------------------------------------------`)

// const arr10 = [1, 2, 3, 3, 4]
// const myMap1 = new Map([
//   ['key5', true],
//   [arr10, 'value 20'],
// ])

// console.log(myMap1)
// console.log(myMap1.get(arr10))

// console.log(`-------------------------------------------------------`)

// const map10 = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
// ])

// const mapToArr = Array.from(map10) // создали новый массив из пар ключа и значения (из массивоподобного или итерируемого объекта, или то, на чем сработает свойство .length)
// console.log(mapToArr)
// console.log(map10)

// console.log(`-------------------------------------------------------`)

// const str = 'hello'
// const str1 = Array.from(str)
// console.log(str1)

// const str2 = [...str]
// console.log(str2)

// console.log(`-------------------------------------------------------`)

// const map11 = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
// ])

// const arr = []

// map11.forEach((item, index) => {
//   // ручное преобразование объекта "Map" в массив-массивов
//   arr.push([item, index])
// })

// console.log(arr)

// console.log(`-------------------------------------------------------`)

// const map12 = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
// ])

// const mapToObject = Object.fromEntries(map12) // создает из массива-массивов объект
// console.log(mapToObject)

// console.log(`-------------------------------------------------------`)

// const arr2 = [
//   [1, 2],
//   [3, 4],
// ]
// const arr3 = Object.fromEntries(arr2)
// console.log(arr3)

// console.log(`-------------------------------------------------------`)

// const myMap20 = new Map([
//   ['a', 10],
//   ['b', false],
// ])

// const obj5 = Object.fromEntries(myMap20)
// console.log(obj5)

// console.log(`-------------------------------------------------------`)

// const myMap30 = new Map([
//   ['tel', +78005553535],
//   ['city', 'London'],
// ])

// function mapToMyObject(map) {
//   let obj = {}

//   for (let [key, value] of map) {
//     obj[key] = value
//   }
//   return obj
// }

// let obj22 = mapToMyObject(myMap30)

// console.log(obj22)

// console.log(`-------------------------------------------------------`)

// const myMap31 = new Map([
//   ['tel', +78005553535],
//   ['city', 'London'],
// ])

// myMap31.set(NaN, 'привет мир')
// console.log(myMap31.get(NaN)) // допускается обращению к ключу "NaN", не смотря на то, что в стандартном коде NaN !== NaN

// // Урок 90 - структура данных "Set" (коллекция уникальных значений)

// 'use strict'

// const set1 = new Set() // создали "Set" объект
// set1.add(true).add(false) // добавляем элемент
// set1.add([1, 2, 3, 4, 5])
// set1.add('Hello World')
// console.log(set1)

// console.log(`-------------------------------------------------------`)

// const set2 = new Set([1, 2, 3, 4, 1, 4, 4])
// console.log(set2)

// console.log(set2.has(2)) // проверяем, содержится ли элемент в коллекции

// console.log(`-------------------------------------------------------`)

// const arr = [1, 2, 1, 2, 'red', 'blue', 'red']

// const set3 = new Set(arr) // получили коллекцию из массива
// console.log(set3)
// console.log(set3.size) // размер коллекции

// console.log(`-------------------------------------------------------`)

// const set4 = new Set([1, 2, 3])
// console.log(set4)

// set4.forEach(function (item) {
//   console.log(item)
// })

// console.log(`-------------------------------------------------------`)

// const set5 = new Set([1, 2, 3, false])
// const arraySet5 = Array.from(set5) // преобразовать коллекцию "Set" в массив
// console.log(arraySet5)

// const set5Spread = [...set5] // можно через спред-оператор
// console.log(set5Spread)

// console.log(`-------------------------------------------------------`)

// const arr1 = [1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 34, 5, 65, 'a', 'a', 'b']

// const arr2 = new Set(arr1)
// arr2.clear() // "clear" удалаяет все элементы из коллекции
// console.log(arr2)

// const arr3 = [...arr2]
// console.log(arr3)

// console.log(`-------------------------------------------------------`)

// let setA = new Set([1, 2, 3, 4])
// let setB = new Set([4, 3, 2, 1, 0])

// let n1 = new Set([...setA, ...setB]) // получаем общую коллекцию уникальных значений из двух массивов
// console.log(n1)

// console.log(`-------------------------------------------------------`)

// let setC = new Set([1, 2, 3, 4])
// let setD = new Set([5, 1, 3, 4])

// let test = new Set([...setC].filter((a) => setD.has(a))) // находим пересечения из двух коллекций и добавляем их в третью

// console.log(test)

// console.log(`-------------------------------------------------------`)

// let setC1 = new Set([1, 2, 3, 4, 8])
// let setD1 = new Set([5, 1, 3, 4])

// let diff = new Set([...setC1].filter((x) => !setD1.has(x))) // находим только те элементы, которые не пересекаются в двух коллекциях, и добавляем эти исключения в третью
// console.log(diff)

// // Урок 91 - коллекция пар "ключ-значение" - WeakMap (ключ - только объекты; значения - любые)
// 'use strict'

// // let obj = { name: 'Costa' }
// // obj = null

// // let obj2 = {}
// // let obj3 = {}
// // obj2.car = 'bmw'

// // obj3 = obj2

// // console.log(obj2)
// // console.log(obj3)

// // console.log(`-------------------------------------------------------`)

// const weak1 = new WeakMap()
// console.log(weak1)

// console.log(`-------------------------------------------------------`)

// const weak2 = new WeakMap()
// const obj = {}
// weak2.set(obj, 'Hello')
// console.log(weak2)
// console.log(weak2.get(obj))
// console.log(weak2.has(obj))
// console.log(weak2.delete(obj))
// console.log(weak2)

// console.log(`-------------------------------------------------------`)

// const persons = new WeakMap()

// const city = {}
// const myName = {}

// persons.set(city, 'London').set(myName, 'Costa')

// console.log(persons.get(city))
// console.log(persons.get(myName))

// console.log(persons.has(city))

// persons.delete(myName)
// console.log(persons)

// // Урок 92 - коллекция - WeakSet (хранит только уникальные объекты)
// // 'use strict'

// // const myWeakSet = new WeakSet()

// // const obj1 = {}
// // const obj2 = {}
// // const obj3 = {}

// // myWeakSet.add(obj1)
// // myWeakSet.add(obj2)

// // console.log(myWeakSet.has(obj2))

// // myWeakSet.delete(obj1)

// // console.log(myWeakSet)

// // console.log(`-------------------------------------------------------`)

// 'use strict'

// const users = new WeakSet()

// const obj1 = { name: 'Costa' }
// const obj2 = { name: 'Bob' }

// users.add(obj1)
// users.add(obj2)

// console.log(users)
// console.log(users.has(obj1))
// console.log(users.has(obj2))

// users.delete(obj1)

// console.log(users.has(obj1))
// console.log(users.has(obj2))

// // Урок 93 - Прототипное наследование

// // const a = { age: 25 }
// // console.log(a)
// // console.log(a.age)

// const a = {
//   age: 22,
//   fn1: function () {
//     console.log('Hello')
//   },
// }

// const a1 = Object.create(a) // принимает 2 параметра: сам объект и свойства

// a1.fn1()
// console.log(a1)

// console.log(`-------------------------------------------------------`)

// const obj1 = {
//   name: 'Costa',
//   myMethod() {
//     console.log('привет мир!')
//   },
// }

// const obj2 = Object.create(obj1)

// obj2.myMethod()
// obj2.city = 'London'
// console.log(obj2)

// console.log(obj2.city)
// console.log(obj1.city)

// obj1.bol = true

// console.log(obj2.bol)

// // Урок 94 - свойство "_proto_" (скрытое свойство, которое содержит ссылку на исходный объект)

// // const a = {}
// // console.log(a.__proto__) // лучше не использовать, а приенять следующие методы:

// // console.log(`-------------------------------------------------------`)

// // const obj = {}
// // const proto = Object.getPrototypeOf(obj) // getPrototypeOf - возвращает прототип указанного объекта
// // console.log(proto)

// // proto.city = 'London'
// // proto.myFn = function () {
// //   console.log('Hello world')
// // }

// // console.log(proto)
// // console.log(obj.city)
// // obj.myFn()
// // console.log(obj)

// // console.log(`-------------------------------------------------------`)

// const obj = {}

// const proto = {
//   greet: function () {
//     console.log('Hello')
//   },
// }
// Object.setPrototypeOf(obj, proto) // setPrototypeOf - принимает 2 параметра: 1) сам объект, для которого требуется установить новый прототип; 2) новый прототип, который нужно установить

// proto.city = 'London'

// console.log(obj.city)
// console.log(obj)

// obj.age = 25
// console.log(obj)
// console.log(proto.age) // У объекта "proto" нет свойства "age"

// console.log(`-------------------------------------------------------`)

// const arr = [1, 2, 3]
// const arr2 = arr.map((el) => el + 20) // например "map" - метод из прототипа

// console.log(arr2)

// // Урок 95 - конструкции

// const obj = { age: 23 }
// console.log(obj)

// const arr = [1, 2, 3]
// console.log(arr)

// // Коструктор "Object" - может быть использован для создания новых объектов

// const obj2 = new Object({ car: true })
// obj2.name = 'Costa'
// obj2.age = 15
// console.log(obj2)

// const arr1 = new Array(1, 2, 3, 4, 5)
// for (let i = 6; i < 201; i++) {
//   arr1.push(i)
// }
// console.log(arr1)

// const str = new String('dasdsa')

// // Урок 96 - функции низшего/высшего порядка
// 'use strict'
// // // функции низшего порядка - функции, которые не принимают никакие другие функции в качестве аргументов и не возвращают функции в качестве результата; просто выполняют какую-либо работу

// // const a1 = (a, b) => a + b
// // console.log(a1(20, 30))

// // const strHandler = (names) => `привет ${names}`
// // console.log(strHandler('Costa'))

// // console.log(`-------------------------------------------------------`)

// // // функции высшего порядка - функции, которые могут принимать другие функции в качестве аргументов, и/или возвращать функции в качестве результата

// // function fn1(a, b) {
// //   return b(a)
// // }

// // function fn2(c) {
// //   return c * 5
// // }

// // console.log(fn1(10, fn2))

// // console.log(`-------------------------------------------------------`)

// // const fn3 = (a, b) => b(a)
// // const fn4 = (c) => c * 4

// // console.log(fn3(4, fn4))

// // console.log(`-------------------------------------------------------`)

// // function m1(f) {
// //   return function (a) {
// //     return a * f
// //   }
// // }

// // const m2 = (f) => (a) => a * f

// // const t1 = m1(3)
// // const t2 = m2(10)

// // console.log(t1(6))
// // console.log(t2(5))

// // console.log(`-------------------------------------------------------`)

// // let numbers = [1, 2, 3, 4, 5]

// // let d = numbers.map((num) => num * 2)
// // console.log(d)

// // let event1 = numbers.filter((num) => num % 2 === 0)
// // console.log(event1)

// // let sum = numbers.reduce((acc, item) => acc + item, 0)
// // console.log(sum)

// // console.log(`-------------------------------------------------------`)

// const numbers = [1, 3, 7, 12, 14, 22, 58]

// function filterNum(arr, num) {
//   return arr.filter((number) => number > num)
// }

// const num = 10
// const result = filterNum(numbers, num)

// console.log(result)

// // Урок 97 - call / apply / bind
// 'use strict'
// // const obj1 = {
// //   name: 'Василий',
// //   mythod(lastName) {
// //     console.log(`привет ${this.name} ${lastName}`)
// //   },
// // }

// // const obj2 = {
// //   name: 'Екатерина',
// // }

// // const a1 = obj1.mythod

// // a1.call(obj1, 'Гудомаров')
// // a1.call(obj2, 'Маркова')

// // // call - метод, позволяющий вызывать функцию с указанием конкретного объекта
// // // особенности метода "call" - изменение контекста функции

// // console.log(`-------------------------------------------------------`)

// // // apply - основа как у метода "call", но принимает аргумент в виде массива

// // const myName = ['Канцев']
// // a1.apply(obj1, myName)
// // a1.apply(obj2, ['Канцева'])

// // console.log(`-------------------------------------------------------`)

// // // bind - создает новую функцию, при вызове имеет контекст "this"

// // const a2 = obj1.mythod.bind(obj1, 'Канцев')
// // const a3 = obj1.mythod.bind(obj2, 'Канцева')
// // const a4 = obj1.mythod.bind(obj2)

// // a2()
// // a3()
// // a4('Smith')

// // console.log(`-------------------------------------------------------`)

// const obj = {
//   language: 'C#',
//   arr: [],
//   myMethod(par1, par2) {
//     console.log(
//       `я программист ${this.language} меня зовут ${par1} мне ${par2} года`
//     )
//     this.arr.push({
//       name: par1,
//       lang: `${this.language}`,
//     })
//   },
// }

// const obj2 = {
//   language: 'JavaScript',
//   arr: [],
// }

// const objCopy = obj.myMethod

// objCopy.call(obj, 'Costa', 24)
// objCopy.call(obj2, 'Bob', 34)

// console.log(obj.arr)
// console.log(obj2.arr)

// const arr1 = ['Costa', 22]
// const arr2 = ['Alice', 42]

// objCopy.apply(obj, arr1)
// objCopy.apply(obj2, arr2)

// objCopy.call(obj2, ...arr1)

// const a3 = obj.myMethod.bind(obj)
// const a4 = obj.myMethod.bind(obj2)

// a3('Василий', 34)
// a4('Василий', 34)

// // Урок 98 - Даты
// 'use strict'

// // const date = new Date()
// // console.log(date)

// // const date1 = new Date(2025, 0, 18)
// // console.log(date1)

// // console.log(`-------------------------------------------------------`)

// const date2 = new Date()

// const year = date2.getFullYear()
// console.log(`Year ${year}`)

// const month = date2.getMonth()
// console.log(`Month ${month}`)

// const hours = date2.getHours()
// const minutes = date2.getMinutes()
// console.log(`Hours ${hours}: minutes ${minutes}`)

// const seconds = date2.getSeconds()
// console.log(`${hours}:${minutes}:${seconds}`)

// const milliseconds = date2.getMilliseconds()
// console.log(`${hours}:${minutes}:${seconds}:${milliseconds}`)

// const dayOfWeek = date2.getDay()
// console.log(`DayNumber ${dayOfWeek}`)

// console.log(`-------------------------------------------------------`)

// const date3 = new Date()

// date3.setFullYear(2026)
// date3.setMonth(15)
// date3.setHours(18)
// date3.setMinutes(59)
// date3.setSeconds(59)
// date3.setMilliseconds(800)

// console.log(date3)

// // Урок 99 - Даты (продолжение)
// 'use strict'

// // const date = new Date()

// // date.setDate(date.getDate() + 10)
// // date.setMonth(date.getMonth() - 2)
// // console.log(date)

// // console.log(`-------------------------------------------------------`)

// const date = new Date()
// console.log(date)

// const date1 = date.toISOString().slice(0, 10)
// console.log(date1)

// const date2 = date1.toString()
// console.log(date2)

// console.log(date)

// // Урок 100 - Даты (продолжение)
// 'use strict'

// const date = new Date()

// // console.log(date.toLocaleDateString()) // локализированная запись (ДД.ММ.ГГГГ)

// // console.log(date.toLocaleDateString('ru-RU'))
// // console.log(date.toLocaleDateString('en-US'))
// // console.log(date.toLocaleDateString('zh-CN'))

// // console.log(`-------------------------------------------------------`)

// console.log(
//   date.toLocaleDateString('ru-RU', {
//     weekday: 'long',
//     //    weekday: 'narrow',
//     //    weekday: 'short',
//     year: 'numeric',
//     month: 'long',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     timeZoneName: 'short',
//   })
// )

// // Урок 101 - Даты (продолжение)
// 'use strict'

// const date = new Date()

// console.log(date.toLocaleDateString())

// // toLocaleString - форматирует как дату, так и время
// console.log(
//   date.toLocaleString('ru-RU', {
//     weekday: 'long',
//     year: 'numeric',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//   })
// )

// // Урок 102 - setTimeout

// // function fn1() {
// //   console.log('1 Hello world')
// // }

// // setTimeout(fn1, 1000) // передали: 1) коллбэк функцию; 2) время задержки для выполнения функции (1с); 3) аргументы для коллбэк функции;

// // setTimeout(function () {
// //   console.log('2 привет мир')
// // }, 2000)

// // function fn2(name) {
// //   console.log(`3 Привет ${name}`)
// // }

// // const myName = 'Alice'

// // setTimeout(fn2, 3000, myName)

// // console.log(`-------------------------------------------------------`)

// // function sayHi() {
// //   console.log('JavaScript')
// // }

// // setTimeout(sayHi, 2000)
// // setTimeout(sayHi, 3000)

// // const time1 = setTimeout(sayHi, 4000)
// // clearTimeout(time1)

// // console.log(`-------------------------------------------------------`)

// function s1() {
//   console.log('1')
// }
// function s2() {
//   console.log('2')
// }
// function s3() {
//   console.log('3')
// }

// setTimeout(() => console.log('4'), 4000)

// function s5() {
//   console.log('5')
// }

// const s1Function = setTimeout(s1, 1000)
// const s2Function = setTimeout(s2, 2000)
// const s3Function = setTimeout(s3, 3000)
// const s5Function = setTimeout(s5, 5000)

// clearTimeout(s3Function)

// // Урок 103 - padStart

// // function fn1(par) {
// //   const n = document.querySelector('.d1')
// //   n.textContent = par

// //   setTimeout(function () {
// //     n.remove()
// //   }, 3000)
// // }

// // fn1('Привет мир')

// // console.log(`-------------------------------------------------------`)

// function fn4() {
//   const time = new Date()
//   const hours = time.getHours().toString().padStart(2, '0')
//   const minutes = time.getMinutes().toString()
//   const second = time.getSeconds().toString()

//   const d1 = document.querySelector('.d1')
//   d1.textContent = `${hours}: ${minutes}:${second}`
// }

// fn4()

// const num = '9'

// const numUpdate = num.padStart(3, '0') // padStart - принимает 2 аргумента: 1) кол-во элементов; 2) то, чем заполнять элементы при отсутствии символов;
// console.log(numUpdate)

// const card = '3188'
// const cardUpdate = card.padStart(16, '*')
// console.log(cardUpdate)

// // Урок 104 - setInterval - повторяющийся вызов функции

// // const lang = 'JavaScript'

// // const fn1 = () => {
// //   console.log(`Hello ${lang}`)
// // }

// // setInterval(fn1, 1000)

// // setInterval(() => console.log(`Прошла одна секунда`), 2000)

// // console.log(`-------------------------------------------------------`)

// const fn1 = (name) => console.log(`Привет ${name}`)
// const userName = 'John'
// setInterval(fn1, 1500, userName)

// function printMessage() {
//   console.log('Hello world')
// }

// const p = setInterval(printMessage, 1000)

// setTimeout(() => {
//   clearInterval(p)
//   console.log('Прошло 6 секунд')
// }, 6000)

// // Урок 105 - практика

// function b1(el) {
//   let bol = true

//   function t1() {
//     bol = !bol
//     el.style.opacity = bol ? 1 : 0
//     setTimeout(t1, 500)
//   }
//   t1()
// }

// const cursorEl = document.querySelector('h1')

// b1(cursorEl)

// // Урок 106 - практика

// function b1(el) {
//   let bol = true

//   function t1() {
//     bol = !bol
//     el.style.opacity = bol ? 1 : 0
//     setTimeout(t1, 500)
//   }
//   t1()
// }

// const cursorEl = document.querySelector('h1')

// b1(cursorEl)

// function randomColor() {
//   const letters = '0123456789ABCDEF'
//   let color = '#'
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)]
//   }
//   return color
// }

// function color2() {
//   const colorBody = document.querySelector('body')
//   colorBody.style.backgroundColor = randomColor()
// }

// setInterval(color2, 500)

// // Урок 107 - IntL (интернационализация)
// 'use strict'

// const number = 123456.78

// const ru = new Intl.NumberFormat('ru-RU').format(number)
// const usa = new Intl.NumberFormat('en-US').format(number)
// const germany = new Intl.NumberFormat('de-DE').format(number)
// const austtria = new Intl.NumberFormat('de-AT').format(number)

// console.log(`Russia ${ru}`)
// console.log(`USA ${usa}`)
// console.log(`Germany ${germany}`)
// console.log(`Austria ${austtria}`)

// const locales = [
//   'en-US', // Америка
//   'de-DE', // Германия
//   'ru-RU', // Россия
//   'kk-KZ', // Казахстан
//   'zh-CN', // Китай
//   'ar', // Арабские страны
//   'hi-IN', // Индия
//   'fr-FR', // Франция
// ]

// // Урок 108 - продолжение
// 'use strict'

// const locales = [
//   'en-US', // Америка
//   'de-DE', // Германия
//   'ru-RU', // Россия
//   'kk-KZ', // Казахстан
//   'zh-CN', // Китай
//   'ar', // Арабские страны
//   'hi-IN', // Индия
//   'fr-FR', // Франция
// ]

// const number1 = 1234567.89

// const format1 = locales.map((el) => new Intl.NumberFormat(el).format(number1))

// console.log(format1.join('\n'))

// console.log(`-------------------------------------------------------`)

// const number2 = 0.12345

// const format2 = locales.map((item) =>
//   new Intl.NumberFormat(item, {
//     style: 'percent',
//     minimumFractionDigits: '2',
//   }).format(number2)
// )

// console.log(format2.join('\n'))

// console.log(`-------------------------------------------------------`)

// const money = 222.35

// const format3 = locales.map((el) =>
//   new Intl.NumberFormat(el, {
//     style: 'currency',
//     currency: 'USD',
//   }).format(money)
// )

// console.log(format3.join('\n'))

// console.log(`-------------------------------------------------------`)

// const date = new Date()

// const newDate = locales.map(function (item) {
//   return new Intl.DateTimeFormat(item).format(date)
// })

// console.log(newDate.join('\n'))

// // Урок 109 - продолжение
// 'use strict'

// const locales = [
//   'en-US', // Америка
//   'de-DE', // Германия
//   'ru-RU', // Россия
//   'kk-KZ', // Казахстан
//   'zh-CN', // Китай
//   'ar', // Арабские страны
//   'hi-IN', // Индия
//   'fr-FR', // Франция
// ]

// const date1 = new Date()
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// }

// const newDate1 = locales.map((el) =>
//   new Intl.DateTimeFormat(el, options).format(date1)
// )

// console.log(newDate1.join('\n'))

// console.log(`-------------------------------------------------------`)

// const date2 = new Date()

// const options2 = {
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
// }

// const newDate2 = locales.map((el) =>
//   new Intl.DateTimeFormat(el, options2).format(date2)
// )

// console.log(newDate2.join('\n'))

// console.log(`-------------------------------------------------------`)

// const date3 = new Date()

// const options4 = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
// }

// const newDate3 = locales.map((el) =>
//   new Intl.DateTimeFormat(el, options4).format(date3)
// )

// console.log(newDate3.join('\n'))

// console.log(`-------------------------------------------------------`)

// function updateTime() {
//   const currentDate = new Date()
//   const options = {
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//   }

//   const timeFormat = new Intl.DateTimeFormat('default', options)

//   const formatDateTime = timeFormat.format(currentDate)

//   const timeDiv = document.querySelector('.d1')

//   timeDiv.textContent = formatDateTime
// }

// setInterval(updateTime, 1000)

// // Урок 110 - UTC (координированное всемирное время), GMT (среднее время Гринвича)
// // добавлена библиотека temporal-polyfill (работает через Node.js)
// 'use strict'

// const { Temporal } = require('temporal-polyfill')

// console.log(Temporal.Now.instant().toString())
// console.log(Temporal.Now.instant().toLocaleString())

// // Урок 111 - Temporal API
// // Документация: https://tc39.es/proposal-temporal/docs/
// // раздел: String persistence, parsing, and formatting
// 'use strict'

// const { Temporal } = require('temporal-polyfill')

// // const dat = Temporal.PlainMonthDay.from({
// //   month: 4,
// //   day: 28,
// // })

// // console.log(dat.toString())

// // console.log(`-------------------------------------------------------`)

// // const year = 2025
// // const month = 6

// // const date = new Temporal.PlainYearMonth(year, month)
// // console.log(date.toString())

// // console.log(`-------------------------------------------------------`)

// // const plainDate = new Temporal.PlainDate(2025, 6, 15)

// // const year = plainDate.year
// // const month = plainDate.month
// // const day = plainDate.day

// // console.log(`Year: ${year}`)
// // console.log(`Month: ${month}`)
// // console.log(`Day: ${day}`)

// // console.log(`-------------------------------------------------------`)

// // const plainTime = new Temporal.PlainTime(12, 34, 19, 500)

// // const hour = plainTime.hour
// // const minute = plainTime.minute
// // const second = plainTime.second
// // const millisecond = plainTime.millisecond

// // console.log(`Hour: ${hour}`)
// // console.log(`Minute: ${minute}`)
// // console.log(`Second: ${second}`)
// // console.log(`Millisec: ${millisecond}`)

// // console.log(`-------------------------------------------------------`)

// // const plainDateTime = new Temporal.PlainDateTime(2024, 6, 15, 10, 12, 38)

// // console.log(`
// // year ${plainDateTime.year}
// // month ${plainDateTime.month}
// // day ${plainDateTime.day}
// // hour ${plainDateTime.hour}
// // minute ${plainDateTime.minute}
// // second ${plainDateTime.second}
// // `)

// // console.log(`-------------------------------------------------------`)

// const now = Temporal.Now.instant()
// console.log(now.toLocaleString())

// Урок 112 - DOM

// // Урок 113 - получение элемента по узлу
// 'use strict'

// // const titleH1 = document.getElementById('title')

// // console.log(titleH1)

// // console.log(`-------------------------------------------------------`)

// // console.log(document.getElementById('title'))
// // console.log(document.querySelector('p'))

// // const p = document.querySelectorAll('p')
// // Array.from(p).forEach((el) => {
// //   el.textContent = 'Hello'
// // })

// // for (let val of p) {
// //   console.log(val)
// //   val.textContent = 'Hello world'
// // }

// // console.log(`-------------------------------------------------------`)

// // for (let val of p) {
// //   console.log(val)
// //   val.innerHTML = '<b>Hello world</b>'
// // }

// // console.log(`-------------------------------------------------------`)

// // for (let val of p) {
// //   console.log(val)
// //   val.innerText = '<b>Hello world</b>'
// // }

// console.log(document.getElementsByClassName('d1'))
// console.log(document.getElementsByTagName('p'))
// console.log(document.querySelectorAll('p'))

// console.log(document.querySelector('.d1'))

// Урок 114 - addEventListener
'use strict'

const h1Title = document.querySelector('.d1')
const input = document.querySelector('.input')

// console.log(h1Title)

// h1Title.addEventListener('click', function () {
//   // h1Title.textContent = 'мы нажали на кнопку'
//   this.textContent = 'мы нажали на кнопку'
// })

// console.log(`-------------------------------------------------------`)

// function myFn() {
//   // h1Title.textContent = 'мы нажали на кнопку'
//   this.textContent = 'мы нажали на кнопку'
// }

// h1Title.addEventListener('click', myFn)

// console.log(`-------------------------------------------------------`)

function fn1() {
  h1Title.style.color = '#fff'
}

function fn2() {
  h1Title.style.color = 'yellow'
}

h1Title.addEventListener('mouseover', fn1)
h1Title.addEventListener('mouseout', fn2)

console.log(`-------------------------------------------------------`)

// input.addEventListener('input', function (event) {
//   console.log(event)
// })

input.addEventListener('input', function (event) {
  h1Title.textContent = event.target.value

  if (input.value === '') {
    h1Title.textContent = 'DOM'
  }
})

console.log(`-------------------------------------------------------`)

function randomColor() {
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

document.querySelector('body').addEventListener('click', randomColor)
