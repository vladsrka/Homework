"use strict";    

       // 1
// Спросить у пользователя "С какой скоростью едет мотоциклист? (км.ч)"
// Спросить у пользователя "Кокое расстояни е должен преодолеть мотоциклист (км)?"
// Вывести в alert фразу "Мотоциклист приедет через N часов"

    // let speed = prompt('С какой скоростью едет мотоциклист? (км.ч)?');
    // speed = parseFloat(speed);
    // let distance = prompt('Какое расстояние должен преодолеть мотоциклист (км)?');
    // distance = parseFloat(distance);
    // let time = distance / speed;
    // alert(`Мотоциклист приедет через ${time.toFixed(3)} часов.`);


        // 2
// Необходимо попросить пользователя задумать число. Затем он должен умножить это число на 5 и добавить 7.
// То что вышло в итоге нужно ввести в prompt.
// А вы должны выдать пользователю, то число, которое он задумал первоначально.

    // confirm('Доброго времени суток, задумайте число.')
    // confirm('Умножьте это число на 5 и прибавьте 7.')
    // let number = parseFloat(prompt('Введите конечное число.'));
    // let result = (number - 7) / 5;
    // alert(`Исходное число: ${result}`);


        // 3
// ) попросить ввести 2 целых числа. Посчитать сумму этих чисел
// ) попросить ввести 2 дробных числа. Посчитать сумму этих чисел умноженную на 5

    // let number1 = parseInt(prompt('Введите первое целое число.'));
    // let number2 = parseInt(prompt('Введите второе целое число.'));
    // let number3 = parseFloat(prompt('Введите первое дробное число.'));
    // let number4 = parseFloat(prompt('Введите второе дробное число.'));
    // let result1 = number1 + number2;
    // let result2 = (number3 + number4) * 5;
    // alert(`Сумма целых чисел: ${result1}\nСумма дробных чисел умноженных на 5: ${result2.toFixed(3)}`);


        // 4
// Попросить пользователя ввести свой возраст, в зависимости от ответа вывести на экран 
// "Вы совершеннолетний. Доступ разрешен." либо " Вы несовершеннолетний. Доступ заблокирован"

    // let age = prompt('Введите свой возраст:');
    // if (Number(age) >= 18) {
    //     alert('Вы совершеннолетний. Доступ разрешен.');
    // }
    // else {
    //     alert('Вы несовершеннолетний. Доступ заблокирован');
    // }


        // 5
// Загадать любое положительное число (определить его в переменной)
// Попросить пользователя ввести любое положительное число.
// Вывести результат в зависимости от выполнения условий.
// Вы угадали число
// Вы не угадали. Ваше число меньше загаданного.
// Вы не угадали. Ваше число больше загаданного.

    // let number = 34;
    // let numberuser = prompt('Введитe целое положительное число:');
    // if (Number(numberuser) == number) {
    //     alert('Вы угадали число!');
    // }
    // else if (Number(numberuser) < number) {
    //     alert('Вы не угадали. Ваше число меньше загаданного!');
    // }
    // else {
    //     alert('Вы не угадали. Ваше число больше загаданного!');
    // }


        // 6
// Добавить обработку на null либо пустую строку - Вывести "Вы ничего не ввели"
// Добавить обработку на числа - Вывести "Вы ввели не число"
// Добавить обработку отрицательных значений и 0 - Вывести "Нужно ввести положительное число"

let number = prompt('Ведите ');

if (+number == null || +number == '') {
    alert("Вы ничего не ввели!");
}
else if (isNaN(number)) {
    alert("Вы ввели не число!");
}
else if (parseFloat(number) <= 0) {
    alert("Нужно ввести положительное число, не равное нулю!");
}
else {
    alert("Все отлично!");
}