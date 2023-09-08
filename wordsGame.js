// let name = prompt("Как вас зовут?");
//     console.log("Привет, " + name);

// let likesCats = confirm("Тебе нравятся кошки?");
// if (likesCats) {
//  console.log("Ты классная кошка!");
// } else {
//  console.log("Что ж, не проблема. Все равно ты молодец!");
// }

// Создаем массив со словами
// let words = [
//     "программа",
//     "макака",
//     "прекрасный",
//     "оладушек"
//    ];

// // Выбираем случайное слово
// let word = words[Math.floor(Math.random() * words.length)];

// // Создаем итоговый массив
// let answerArray = [];

// for (let i = 0; i < word.length; i++) {
//     answerArray [i] = "_";
// }

// let remainingLetters = word.length;

// //Игровой цикл
// while (remainingLetters > 0) {
//     // Показываем состояние игры
//     alert(answerArray.join(" "));
//     // Основной код
//     let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры");
//     if (guess === null) {
//         break;
//     }
//     else if (guess !== word[1]) {
//         alert("Хули вылупился как из яйца?");
//     } 
//     else {
//         for (let j=0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
//     alert(answerArray.join(" "));
//     alert("Отлично! Было загадано слово " + word);

//    }

//Упражнения после игры висилица

//Создаем функцию, складывающую 2 числа
    function add (x,y) {
        z=x+y;
        return z; 
    }

    add(12,15);
    console.log(z);

 //Создаем функцию, умножающую 2 числа
 function multiply (x,y) {
    z=x*y;
    return z; 
}

multiply(12,15);
console.log(multiply(12,15)+add(12,15));
