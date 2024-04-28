/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  return name != undefined && name.includes(" ") == false && name.length >= 4
}

function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}

// console.log(isValid('Ilia'))
// console.log(isValid('Ilia Burlak'))
// console.log(isValid('Ili'))
// console.log(isValid())