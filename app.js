// let name = "ごっしー";
// let greet = '私のニックネームニックネームは'+ name + "です";
// console.log(greet);
// let age = 28;
// console.log(age);
 
//  const str1 = "ごっしー"
//  const str2 = "私のニックネームは"
//  const str3 = "です"
//  const str4 ="歳"
//  const str5 ="年齢は"
//  const str6 ="です。"
//  console.log(combinedString);
//  let age = 28
//  console.log(age)
//  const combinedString = str2 + str1 +str3 + str5 + age + str4 + str6 
//6_6ここまでやってわからん
//6_7答えギズテックに載ってて鬱

const str1 = "ごっしー"
const str4 = "歳"
const str6 = "です。"

let age = 28

const combined = str1 + "の" + "年齢は" + age + str4 + str6
console.log(combined)
console.log(age)

//6_8やる気出ないから明日やる

let languages = []
languages[1] = "JavaScript"
languages[2] = "PHP"
languages[3] = "Ruby"
languages[4] = "Python"
languages[5] = "Go"
let templateText = `私の好きな言語は${languages[1]}です。
次は${languages[4]}を勉強してみたいです。`
console.log(templateText);


// let languages = ["JavaScript","PHP","Ruby","Python","Go"];
// let empties = [];
// let template = "私の好きな言語は[0]です。"
// let templateText = `${template}
// 次は[4]を勉強してみたいです。`
// console.log(templateText);
//やりたかったこと_array型で変数を代入したかった
//6_9
//6_10_なんかできたwまじ意味不明wテンプレートに固執しすぎてた説濃厚てか今日寝てたら余裕で夕方で鬱

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age)
//6_10これは余裕なんかいけるきしてきた神ってる
//gitやらないといけないの鬱

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
const Bob = playerList.filter(player => player.favorites.includes('The Legend of Zelda'))
if (Bob.length > 0) {
console.log('The Legend of Zelda')
}
//下記の文のやり方もある
console.log(playerList[0])
console.log(playerList[0].favorites)
console.log(playerList[1].favorites[1])

// for (let i = 0; i < 3; i++) {
//   console.log(playerList);
//  }

//find?ていうやつが条件要素？のものを取ってきてくれるらしい
//上記のことを聞いてみること
//ファイルJSコマンド5_配列関係から記述＋MDN出典
//filterからplayerを選択後中のfavoriteでどこ選択するかを決まるincludesで要素を確定させる
//やったけどずっとBobのことを認識してくれなかった
//Bobの中の配列数を0より多いかをifで確かめる
//{}を使ってlogの中身がifの配列に当てはまるようにしてconsoleで出力
//値(Array)の要素を探し条件に当てはめる認識
//とりまコマンド５のインデックス関係要素摘出関係を全てやる
//誰だよwTinder入れたやつww

console.log((playerList[0].age+playerList[1].age+playerList[2].age)/3)

//応用で余裕であればfor文もつくる！！！！！！！！
function sayHello (){
  console.log(hello)
}

function sayHello() {
  console.log("Hello")
}
sayHello()
const sayWorld = function() {
  console.log("World")
}

const userWithBirthday = { user,
  birthday: '2000-09-27'
}
console.log(userWithBirthday)

const userWithMethod = {
  ...user,
  sayHello: function() {
    console.log("Hello")
  }
}

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

calc.divide = function(x, y) {
  if (y === 0) {
  } else {
    console.log(x / y)
  }
}
calc.divide(25, 5)


function remainder(x, y) {
   return x % y
}
const result = remainder(5, 3)
console.log("5 を 3 で割った余りは " + result + " です。")


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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(10))

function consoleMessage(message, delay) {
  setTimeout(function() {
    console.log(message);
  }, delay);
}
consoleMessage("Hello World!", 3000)

let num = 61
if (num > 0) {
  console.log("num is greater than 0")
} else if (num < 0) {
  console.log("num is less than 0")
} else if (num = 0) {
  console.log("num is 0")
} 
//num is 0 だけがでてこないぜ！

let numbers
for (let numbers = 0; numbers < 100; numbers++) {
  console.log(numbers)
}

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
//not　numberの出し方わからんぜw

