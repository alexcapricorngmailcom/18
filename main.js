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

//     // console.log(fib);

//     let interval = fib.slice(from, to + 1);

//     console.log(interval);

//     function isPrime(n) {
//         if (n <= 1) {
//             return false;
//         } else if (n === 2) {
//             return true;
//         } else if (n % 2 === 0) {
//             return false;
//         } else {
//             for (let i = 2; i < n; i++) {
//                 if (n % i === 0) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//     }

//     let result = interval.filter(el => isPrime(el) === true);

//     // console.log(result);

//     let counter = 0;

//     let timer = setInterval(() => {
//         console.log(result[counter]);
//         counter++;

//         if (counter === result.length) {
//             clearInterval(timer);
//         }

//     }, 1000);
// }

// JohnyOniNaDerevyah(0, 22);


// let fib = [0, 1];

// function JohnyOniNaDerevyah(from, to) {
//     for (let i = 2; i <= 22; i++) {
//         fib[i] = fib[i-2] + fib[i-1];  
//     }

//     // console.log(fib);

//     let interval = fib.slice(from, to + 1);

//     console.log(interval);

//     function isPrime(n) {
//         if (n <= 1) {
//             return false;
//         } else if (n === 2) {
//             return true;
//         } else if (n % 2 === 0) {
//             return false;
//         } else {
//             for (let i = 2; i < n; i++) {
//                 if (n % i === 0) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//     }

//     let result = interval.filter(el => isPrime(el) === true);

//     console.log(result);

//     let counter = 0;

//     let timer = setTimeout(function tick() {

//         console.log(result[counter]);
//         counter++;

//         timer = setTimeout(tick, 1000)
        
//         if (counter === result.length) {
//             clearTimeout(timer);
//         }
        
//     }, 1000);
    
// }

// JohnyOniNaDerevyah(0, 22);



// 2. Напишите функцию pseudoLoader(), которая будет имитировать процесс загрузки от 0% до 100%.  
// Процесс строится таким образом: Раз в t количество времени, процент загрузки увеличивается на n процентов.
// Оба числа случайны. Процесс загрузки должен остановиться по достижении 100%.
// P.S. Ограничьте диапазон чисел времени, что бы этот процесс не занимал минуты :smile:

// Результаты всех задач выводить в console.log(), ибо это неблокирующий таймеры способ вывода.

// let result = '';
// let i = 0;
// let max = 100;

// function pseudoLoader(t) {
//     console.log('Console was cleared');
//     let timer = setInterval(() => {
//         console.clear();

//         function getRandomIntInclusive(max) {
            
//             return Math.floor(Math.random() * (max - 10 + 1) + 10);
//           }

//         max = getRandomIntInclusive(max);

//         for (let i = 0; i < getRandomIntInclusive(max); i++) {
//             result = result + '#'
//         }

//         i++;

//         console.log(`0% ${result}`)

//         if (i == 10) {
//             clearInterval(timer);
//             console.clear();
//             console.log(`0% ${result} 100%`)
//         }

//     }, t);  
// }

// pseudoLoader(1000);

// 2. Напишите функцию pseudoLoader(), которая будет имитировать процесс загрузки от 0% до 100%.  
// Процесс строится таким образом: Раз в t количество времени, процент загрузки увеличивается на n процентов.
// Оба числа случайны. Процесс загрузки должен остановиться по достижении 100%.
// P.S. Ограничьте диапазон чисел времени, что бы этот процесс не занимал минуты :smile:

// Результаты всех задач выводить в console.log(), ибо это неблокирующий таймеры способ вывода.

let loader = '';
let max = 100;
let random = 0;
let percent = 0;
console.log('Consol was cleared');

function pseudoLoader() {

    console.log(loader);

    function getRandomTimer() {
        return Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
    }
    
    let timer = setTimeout(function tick() {
        console.clear();

        function getRandomIndex(max) {
            return Math.floor(Math.random() * (max + 1));
        }
    
        random = getRandomIndex(max);
        
        for (let i = 0; i < random; i++) {
            loader = loader + '#';
        }

        max = max - random;
        percent = percent + random;
        
        console.log(`0% ${loader} ${percent}%`);
        // console.log(loader.length);
        // console.log(max);
        timer = setTimeout(tick, getRandomTimer());
        
        if (max == 0) {
            clearTimeout(timer);
        }

    }, 0);
}

pseudoLoader();