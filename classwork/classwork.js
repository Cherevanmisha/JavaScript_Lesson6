// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let fun = (str) => {
//     return str.replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ');
// };
//
// let fun1 = fun(n1);
// console.log(fun1);
// let fun2 = fun(n2);
// console.log(fun2);
// let fun3 = fun(n3);
// console.log(fun3);


//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let fun = (random) => {
//     let arr = [];
//     for (let i = 0; i < random; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// };
// let fun1 = fun(100);
// console.log(fun1);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// let fun = (random) => {
//     let arr = [];
//     for (let i = 0; i < random; i++) {
//         arr.push(Math.round(Math.random() * 100));
//
//     }
//     return arr.sort((a,b)=>a-b);
// }
// let fun1 = fun(100);
// console.log(fun1);





// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let fun = (random) => {
//     let arr = [];
//     for (let i = 0; i < random; i++) {
//         arr.push(Math.round(Math.random() * 100));
//
//     }
//     return arr.filter(value =>value%2===0)
// }
// let fun1 = fun(100);
// console.log(fun1);



// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let fun = (random) => {
//     let arr = [];
//     for (let i = 0; i < random; i++) {
//         arr.push(Math.round(Math.random() * 100));
//
//     }
//     return arr.map(value =>value + '' )
// }
// let fun1 = fun(100);
// console.log(fun1);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let nums = [11,21,3];
let fun = (direction) => {
    nums.sort()
};




//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
