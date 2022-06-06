"use strict";

const guessBot = function (counter) {
  let randomNumber = Math.round(Math.random() * 101);
  const action = function () {
    let userNumber = prompt("Угадай число от 0 до 100!");
    if (userNumber === null) {
      alert("Игра окончена!");
    } else if (counter === 0) {
      if (confirm("Попытки закончились, хотите сыграть еще?") === true) {
        guessBot(9);
      } else {
        alert("До свидания!");
      }
    } else if (isNaN(userNumber)) {
      counter--;
      alert("Введи число! Осталось попыток: " + (counter + 1));
      action();
    } else if (+userNumber > randomNumber) {
      counter--;
      alert("Загаданное число меньше! Осталось попыток: " + (counter + 1));
      action();
    } else if (+userNumber < randomNumber) {
      counter--;
      alert("Загаданное число больше! Осталось попыток: " + (counter + 1));
      action();
    } else if (+userNumber === randomNumber) {
      if (confirm("Поздравляю, Вы угадали! Хотели бы сыграть еще?") === true) {
        guessBot(9);
      } else {
        alert("До свидания!");
      }
    }
  };
  action();
};

guessBot(9);
