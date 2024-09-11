//1

// let answer1 = prompt("Чи любиш ти котиків?");
// let answer2 = prompt("Точно?");

// if (answer1 && answer2 == true) {
//   alert("Обидва поля заповнені");
// } else {
//   alert("Не всі поля заповнені");
// }

//2

// let x = parseInt(prompt("Введіть число:"));
// let y = parseInt(prompt("Введіть число ще раз:"));
// let total = x + y;

// if (total >= 10) {
//     alert('Сума чисел більша або дорівнює 10')
// } else {
//     alert('Сума чисел не більша 10')
// }

//3

// let x = prompt("Напишіть слово JavaScript:");

// if (x.includes("JavaScript")) {
//   alert("Урааа ти написав слово JavaScript");
// } else {
//   alert("Не ураааа ти не написав слово JavaScript, який ти поганий");
// }

//4

// let number = prompt('Введіть число:')

// if(number <= 20 && number >=10) {
//     alert('Твоє число входить у діапазон')
// } else {
//     alert('Твоє число не входить у діапазон')
// }

//5

let firstName = prompt('Введіть своє ім`я ')
let email = prompt('Введіть свою електронну пошту')
let password = prompt('Введіть свій пароль')

if (firstName.length >= 3 && password.length >= 6 && email.includes("@.")) {
    location.replace("./notindex.html");
} else {
    alert('Дані не підходять')
}