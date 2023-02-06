// Home Task 18 (10)
// 1. Напишите функцию JohnyOniNaDerevyah(from, to), которая выводит натуральное(простое) число Фибоначчи 
// каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// а) Используя setInterval.
// б) Используя рекурсивный setTimeout.
// Для тех кто уже спросил и еще не спросил :D `from` и `to`. Это числа из последовательности Фибоначии, например:

// `from = 5, to = 9`, это числа из диапазона выделенного ниже: 
// 0, 1, 1, 2, [3, 5, 8, 13, 21], 34, 55, 89, 144, 233, 377

// То есть числа из последовательности с 5-го по 9-ое включительно, а из них только те, которые являются 
// натуральными(простыми).

// Это: [3, 5, 13]

// let fib = [0, 1];

// function JohnyOniNaDerevyah(from, to) {
//     for (let i = 2; i <= 22; i++) {
//         fib[i] = fib[i-2] + fib[i-1];  
//     }

//     console.log(fib);

//     let interval = fib.slice(from, to + 1);

//     console.log(interval);

//     function isPrime(n) {
//         if (n <= 1) {
//             return false;
//         } else if (n == 2) {
//             return true;
//         } else if (n % 2 == 0) {
//             return false;
//         } else {
//             for (let i = 2; i < n; i++) {
//                 if (n % i == 0) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//     }

//     let result = interval.filter(el => isPrime(el) == true);

//     console.log(result);

//     result.forEach(function(el) {
//         setInterval(() => {
//             console.log(el);
//         }, 1000);
//     });
// }

// JohnyOniNaDerevyah(0, 22);



// 2. Напишите функцию pseudoLoader(), которая будет имитировать процесс загрузки от 0% до 100%.  
// Процесс строится таким образом: Раз в t количество времени, процент загрузки увеличивается на n процентов.
// Оба числа случайны. Процесс загрузки должен остановиться по достижении 100%.
// P.S. Ограничьте диапазон чисел времени, что бы этот процесс не занимал минуты :smile:

// Результаты всех задач выводить в console.log(), ибо это неблокирующий таймеры способ вывода.

let result = '';
let i = 0;

function pseudoLoader(timer) {
    console.log('Console was cleared');
    let timer = setInterval(() => {
        console.clear();
        for (let i = 0; i < 10; i++) {
            result = result + '#'
        }
        i++;
        console.log(`0% ${result}`)
        if (i == 4) {
            clearInterval(timer);
            console.clear();
            console.log(`0% ${result} 100%`)
        }

    }, timer);
}

pseudoLoader(1000);