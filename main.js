"use strict"; //деректиа, которая контролирует наш код

// a = 15;
// console.log(a);

// console.log(number);
let number = 5;
number = 7;
console.log(number);

const leftBorder = 1;
// leftBorder = 8;

const object = {
    a: 50,
};

object.a = 10;
console.log(object);

console.log(name);
var name = "Ivan";

// {
//     let result = 50;
// }
// console.log(result);

{
    var resultat = 50;
}
console.log(resultat);

//типы данных
//число
let num = 4.5;

console.log(4 / 0); //Infinity - числовой тип данных, который обозначает бесконечность
console.log(-4 / 0); // -Infinity
console.log("string" * 9); // NaN - not a number или не число

//строка
const persone = "Alex";
const value = "5";

//булевое значение
const bool = false;

// null / undefinde

// console.log(something); //ReferenceError = null

let und;
console.log(und); //undefined

//объект

const obj = {
    name: "John",
    age: 25,
    isMarried: false,
};

console.log(obj.name);
console.log(obj["age"]);

//массив - частный случай объекта  (ключи=индексы заданы по умолчанию)
let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];

console.log(arr);
console.log(arr[1]);

// общение с пользователем
// alert("hello");

// const result = confirm("Are you here?");
// console.log(result);
//
// const answer = prompt("Вам есть 18?", "18");
// const ans = +prompt("Вам есть 25?", "25"); //динамическая типизация
// console.log(answer + 5); //складываются строки
// console.log(ans + 5); //складываются числаваыв

const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");
console.log(typeof answers); //object

// document.write(answers);

//интерполяция

const category = "toys";
console.log("https://someurl.com/" + category); //https://someurl.com/toys
console.log(`https://someurl.com/${category}/5`); //https://someurl.com/toys/5

const user = "Ivan";
// alert(`Привет, ${user}`);

//оераторы в js * - / +
//математические операции
console.log("arr" + "- obj"); //контекинация строк //arr- obj
console.log(5 + +"- obj"); //NaN
console.log(5 + +" 9"); //14

//инкремент ++
//декремент --
//префексная форма
//постфиксная форма

let incr = 10,
    decr = 10;

incr++; //11 - постфиксная форма
decr--; //9

console.log(incr);
console.log(decr);

++incr; // префиксная форма
--decr;

console.log(incr);
console.log(decr);

console.log(5 % 2); //получаем остаток от деления 1

// = присваивание
// == приводит к одному типу данных
// === строгое сравнение типа данных и значения
// && амперсанд = И (все условия истинны, тогда тру)
// || = или (какое-то из условий истинно, тогда тру)

const isChecked = true,
    isClose = false;

console.log(isChecked && isClose); //false
console.log(isChecked && !isClose); //true
console.log(isChecked || isClose); //true

//! - оператор отрицания
console.log(2 + 2 * 2 != 8); //true

//приоритет операторов

//контроль версий Git
