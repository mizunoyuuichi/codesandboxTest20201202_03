/**
 *
 *
 */
// var val1 = "var変数"
// console.log(val1)

// val1 = "update val"
// console.log(val1)

// var val1 = "var再宣言"
// console.log(val1)

// let let2 = "let val";
// console.log(let2);

// let2 = "let val2";
// console.log(let2);

//let let2 = "re let val"
//console.log(let2)

// const con1 = "con1 val"
// console.log(con1)
// con1 = "update con1"
// const con1 = "con1 val2"

// // const use object (cant overwire)
// const val4 = {
//   name: "jyakee",
//   age: 28
// };
// val4.name = "yade";
// val4.address = "hirohima";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("bear");
// console.log(val5);

// // テンプレート文字列
// const name = "jyakee"
// const age = 28
// // before
// const beforeMessage = "私の名前は" + name + "です" + age + "です。"
// console.log(beforeMessage)
// const afterMessage = `私の名前は${name}です。${age}です、、`
// console.log(afterMessage)

//allow関数
// before
// function func1(str) {
//   str
// }
// console.log("func1,,,")
// const meanFunc1 = function (str) {
//   return str; // const functionでは return が省略できなかった、
// };
// console.log(meanFunc1("func1 const"));

// const arrowFunc = (str) => {
//   str; // const arrowでは return を省略できた
// };
// console.log(arrowFunc("func2です"));

// const arrowFunc2 = (str) => str; // 1行なら{}を省略できる (これは以前もあったな)
// // 自動で全部1行に更新された
// console.log(arrowFunc2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 30));

// 分割代入
// const myProfile = {
//   name: "jyakee",
//   age: 28,
// }
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1)

// const { name, age } = myProfile // 取り出す
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2)

// 配列の場合
// const myProfile = ['jyakee', 28]
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3)

// const [ name, age ] = myProfile
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4) // 1, 3番目を使いたい場合、どうなる、、、できないかも

// // デフォルト値
// const sayHello = (name = "デフォルト値") => console.log(`こんにちは${name}さん！`)
// sayHello('ジャック')
// sayHello()

// スプレット構文 ...
const arr1 = [1, 2];
console.log(arr1);
