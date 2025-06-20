
//基礎問題Q1
const nickname = "ごっしー"
const str4 = "歳"
const str6 = "です。"

let age = 28

const combined = nickname + "の" + "年齢は" + age + str4 + str6
console.log(combined)


//基礎問題Q2
// let languages = []
// languages[1] = "JavaScript"
// languages[2] = "PHP"
// languages[3] = "Ruby"
// languages[4] = "Python"
// languages[5] = "Go"
// let templateText = `私の好きな言語は${languages[1]}です。
// 次は${languages[4]}を勉強してみたいです。`
// console.log(templateText);


//基礎問題Q2_1
let languages = ["JavaScript","PHP","Ruby","Python","Go"];
let template = `私の好きな言語は${languages[0]}です。`;
let template2 = '私の好きな言語は' + languages[3] + 'です。';
console.log(template);
console.log(template2);

//基礎問題Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age)

//基礎問題Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

// const Bob = playerList.filter(player => player.favorites.includes('The Legend of Zelda'))
// if (Bob.length > 0) {
// console.log('The Legend of Zelda')
// }

//下記の文のやり方もある
// console.log(playerList[0])
// console.log(playerList[0].favorites)
console.log(playerList[1].favorites[1])

// for (let i = 0; i < 3; i++) {
//   console.log(playerList);
//  }
//基礎問題Q5
console.log((playerList[0].age+playerList[1].age+playerList[2].age)/playerList.length)
//基礎問題Q6
// function sayHello (){
//   console.log(hello)
// }

function sayHello() {
  console.log("Hello")
}
sayHello()
const sayWorld = function() {
  console.log("World")
}
sayWorld()

// Q7-1
// const userWithBirthday = {
//   ...user,
//   birthday: '2000-09-27'
// }
// console.log(userWithBirthday)

//基礎問題Q7-2
// const userWithMethod = {
//   ...user,
//   sayHello: function() {
//     console.log("Hello")
//   }
// }
// 基礎問題Q7
user.birthday = "2000-09-27"
user.sayHello = function() {
  console.log('Hello!');
}

//基礎問題Q8
let calc = {}
calc.add = function(x, y) {
  console.log(x + y);
}
calc.add(3, 4)

calc.subtract = function(x, y) {
  console.log(x - y)
}
calc.subtract(15, 5)

calc.multiply = function(x, y) {
  console.log(x * y)
}
calc.multiply(7, 7)

calc.divide = function(x, y) {
  if (y === 0) {
  } else {
    console.log(x / y)
  }
}
calc.divide(25, 5)

//基礎問題Q9
function remainder(x, y) {//仮の名前がついてる引数_例）今回は仮引数xとyに名づけました
   return x % y
}
const result = remainder(5, 3)//実際に値を渡しているところのことを実引数と呼んだりする
console.log("5 を 3 で割った余りは " + result + " です。")
//

//Q10エラーになるためコメントアウトしました
// function foo() {
//   let x = 1;
// }
// console.log(x);

// letで定義された変数は関数の{}ブロックスコープの中でのみ使うことができる
// 今回の上記のものだと{}から外れて外にいるため参照できない
// let x
// function foo() {
//   x = 1
//   }
//   foo()
//   console.log(x)
// 上記はletでxを宣言してfunctionで関数として宣言あとはconsolに出力するだけ

//応用問題Q1
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(10))

// Math.floor(Math.random() * 10);

//応用問題Q2
function consoleMessage(message, delay) {
  setTimeout(function() {
    console.log(message);
  }, delay);
}
consoleMessage("Hello World!", 3000)

//応用問題Q3
let num = 61
if (num > 0) {
  console.log("num is greater than 0")
} else if (num < 0) {
  console.log("num is less than 0")
} else if (num === 0) {
  console.log("num is 0")
} 

//応用問題Q4
let numbers = []
let sum = 0
for (let i = 0; i < 100; i++){
  numbers.push(i)
}
console.log(sum)

//応用問題Q5
let mixed = [4, '2', 5, '8', '9', 0,];
const evenNumbers = [];
for (let i = 0; i < mixed.length; i++) {
  if (mixed[i] % 2 === 0) {
    console.log("even")
  } else if (mixed[i] % 2) {
    console.log("odd")
  } else {
    console.log("not number")
}
}