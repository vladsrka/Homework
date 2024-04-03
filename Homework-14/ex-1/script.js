"use strict";


// Я немного поковырялся в массивах и разобрался
// почему у меня не работал данный метод
// (нумерация элем массива не может начинаться с 1, от этого и плясала ошибка чтения .push) ))

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push([])
//     for (let k = 1; k < 10; k++) {
//         arr[i - 1].push(`${k} * ${i} = ${i * k}`)
//     }
// }
// console.table(arr)



// Homework ex_1 МАТРИЦА!!!

// let size;
// do {
//     size = prompt("Введите целое число N ( N размер матрицы NxN )");
//     if (+size == null || +size == "") {
//         alert("Вы ничего не ввели!");
//     } else if (isNaN(size)) {
//         alert("Вы ввели не число!");
//     } else if (parseFloat(size) <= 0) {
//         alert("Нужно ввести положительное число!");
//     } else if (!Number.isInteger(+size)) {
//         alert("Нужно ввести целое число!");
//     } else {
//         size = parseInt(size);
//     }
// } while (size !== parseInt(size));

// let arr = [];
// let value;
// let str, stlb;
// for (let i = 0; i < size; i++) {
//     arr[i] = [];
//     check: for (let j = 0; j < size; j++) {
//         str = i + 1;
//         stlb = j + 1;
//         value = prompt(`Введите значение ячейки ${str}.${stlb}:`);
//         if (+value == "") {
//             alert("Вы ничего не ввели!");
//             j -= 1;
//             continue check;
//         } else if (isNaN(value)) {
//             alert("Вы ввели не число!");
//             j -= 1;
//             continue check;
//         } else if (parseFloat(value) <= 0) {
//             alert("Нужно ввести положительное число!");
//             j -= 1;
//             continue check;
//         } else if (!Number.isInteger(+value)) {
//             alert("Нужно ввести целое число!");
//             j -= 1;
//             continue check;
//         } else {
//             value = parseInt(value);
//         }
//         arr[i].push(value);
//     }
// }
// console.log(arr);

// let num = arr.length, count1 = 0, count2 = 0, count3;
// for (var m = 0; m < num; m++) {
//     count3 = 0;
//     for (var n = 0; n < num; n++) {
//         count3 += arr[m][n];
//     }
//     console.log(`Сумма элементов строки №${m + 1}: ${count3}`);
// }

// for (var k = 0; k < num; k++) {
//     count1 += arr[k][k];
// }
// console.log(`Сумма элементов главной диагонали: ${count1}`);

// for (var l = 0; l < num; l++) {
//     count2 += arr[l][num - 1 - l];
// }
// console.log(`Сумма элементов побочной диагонали: ${count2}`);



// Homework ex_2

let number;
do {
    number = prompt(`Какой жанр предпочитаете?\n1 - Роман, 2 - Детектив, 3 - Фентези`);
    if (+number == null || +number == "" || +number > 3) {
        alert("Нужно ввести число от 1 до 3!");
    } else if (isNaN(number)) {
        alert("Вы ввели не число!");
    } else if (parseFloat(number) <= 0) {
        alert("Нужно ввести положительное число от 1 до 3!");
    } else if (!Number.isInteger(+number)) {
        alert("Нужно ввести целое число от 1 до 3!");
    } else {
        number = parseInt(number);
    }
} while (number !== parseInt(number));

let checkpref;
let pref;
do {
    checkpref = prompt(`Предпочитаете современную литературу?\nда/нет`);
    if (checkpref == "") {
        alert("Нужно ввести ответ!");
    } else if (checkpref !== 'да' && checkpref !== 'нет') {
        alert("Нужно ввести да либо нет!");
    } else {
        pref = checkpref;
    }
} while (pref !== checkpref);

let checkauthor;
let author;
do {
    checkauthor = prompt(`Хотели бы книгу русского автора?\nда/нет`);
    if (checkauthor == "") {
        alert("Нужно ввести ответ!");
    } else if (checkauthor !== 'да' && checkauthor !== 'нет') {
        alert("Нужно ввести да либо нет!");
    } else {
        author = checkauthor;
    }
} while (author !== checkauthor);

if (+number === 1 && pref === 'нет' && author === 'да') {
    alert(`Предлагаем вам почитать - “Война и мир”`);
} else if (+number === 3 && pref === 'да' && author === 'да') {
    alert(`Предлагаем вам почитать - “Ночной дозор”`);
} else if (+number === 3 && pref === 'да' && author === 'нет') {
    alert(`Предлагаем вам почитать - “Гарри Поттер”`);
} else if (+number === 2 && pref === 'нет' && author === 'нет') {
    alert(`Предлагаем вам почитать - “Шерлок Холмс”`);
} else if (+number === 2 && pref === 'да' && author === 'нет') {
    alert(`Предлагаем вам почитать - “Девушка в поезде”`);
} else {
    alert(`К сожалению, не смогли подобрать вам книгу`);
}