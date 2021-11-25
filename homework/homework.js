// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let helloWorld = 'hello world'.length;
// console.log(helloWorld)
// let length = 'lorem ipsum'.length;
// console.log(length);
// let ava = 'javascript is cool'.length;
// console.log(ava);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let helloWorld = 'hello world'.toUpperCase();
// console.log(helloWorld)
// let length = 'lorem ipsum'.toUpperCase();
// console.log(length);
// let ava = 'javascript is cool'.toUpperCase();
// console.log(ava);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let helloWorld = 'HELLO WORLD'.toLowerCase();
// console.log(helloWorld)
// let length = 'LOREM IPSUM'.toLowerCase();
// console.log(length);
// let ava = 'JAVASCRIPT IS COOL'.toLowerCase();
// console.log(ava);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
//
// console.log(str.trim());




// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let fun = () => {
//     return str.split(' ');
// };
// let ret = fun(str);
// console.log(ret);


// - Напишіть функцію delete_characters(str, length),
// яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
//     return str.substring(0, length)
// };
// let res = delete_characters(str,7);
// console.log(res);


//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let fun = (str) => {
//     return str.replaceAll(' ', '-').toUpperCase()
// };
// let fun1 = fun(str);
// console.log(fun1);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу
// рядка з нижнього регістру у верхній.

// let fun = (str) => {
//     return str[0].toUpperCase() + str.slice(1);
// };
// let fun1 = fun('hello okten');
// console.log(fun1);


// - Напишіть функцію capitalize(str), яка повертає рядок,
// у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').
//     map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// let fun1 = capitalize('hello okten welcome');
// console.log(fun1)