// グローバルスコープ (Global Scope)
// どこからでもアクセス可能な変数
var globalVar = "グローバル変数です";

function accessGlobalVar() {
  console.log(globalVar); // "グローバル変数です"
}

accessGlobalVar();

// 関数スコープ (Function Scope)
// var で宣言された変数は、その関数内でのみ有効
function functionScopeExample() {
  var functionScopedVar = "関数スコープの変数です";
  console.log(functionScopedVar); // "関数スコープの変数です"
}

functionScopeExample();
// console.log(functionScopedVar); // エラー: functionScopedVar is not defined

// ブロックスコープ (Block Scope)
// let と const で宣言された変数は、ブロック内でのみ有効
if (true) {
  let blockScopedLet = "ブロックスコープの let 変数です";
  const blockScopedConst = "ブロックスコープの const 変数です";
  console.log(blockScopedLet);   // "ブロックスコープの let 変数です"
  console.log(blockScopedConst); // "ブロックスコープの const 変数です"
}
// console.log(blockScopedLet);   // エラー: blockScopedLet is not defined
// console.log(blockScopedConst); // エラー: blockScopedConst is not defined

// var はブロックスコープを無視する
if (true) {
  var functionScopedVar = "再宣言された var 変数です";
}
console.log(functionScopedVar); // "再宣言された var 変数です"

// レキシカルスコープ (Lexical Scope)
// 内側のスコープから外側のスコープへ変数を探索
function outerFunction() {
  var outerVar = "外側の変数です";
  function innerFunction() {
    var innerVar = "内側の変数です";
    console.log(outerVar); // "外側の変数です"
    console.log(innerVar); // "内側の変数です"
  }
  innerFunction();
  // console.log(innerVar); // エラー: innerVar is not defined
}

outerFunction();

// クロージャ (Closure)
// 関数が宣言されたときのスコープを保持する
function closureExample() {
  var closedVar = "クロージャの変数です";
  return function() {
    console.log(closedVar);
  };
}

var myClosure = closureExample();
myClosure(); // "クロージャの変数です"

// ホイスティング (Hoisting)
// var で宣言された変数と関数宣言は、スコープの先頭に「持ち上げられる」
// ただし、変数の代入はそのままの位置に留まる
console.log(hoistedVar); // undefined
var hoistedVar = "ホイスティングされた変数です";

// let と const でもホイスティングは起こるが、Temporal Dead Zone のためエラーになる
// console.log(temporalVar); // エラー: Cannot access 'temporalVar' before initialization
let temporalVar = "Temporal Dead Zone の外にいます";

// シャドーイング (Shadowing)
// 内側のスコープで同じ名前の変数を宣言すると、外側の変数を「隠す」
var shadowVar = "外側の変数です";

function shadowingExample() {
  var shadowVar = "内側の変数です";
  console.log(shadowVar); // "内側の変数です"
}

shadowingExample();
console.log(shadowVar); // "外側の変数です"

// 'this' キーワードとスコープ
// 'this' は実行コンテキストに依存する
var obj = {
  name: "オブジェクト",
  regularFunction: function() {
    console.log(this.name); // "オブジェクト"
  },
  arrowFunction: () => {
    console.log(this.name); // undefined (グローバルスコープの 'this')
  }
};

obj.regularFunction();
obj.arrowFunction();

// モジュールスコープ (Module Scope)
// ES6 モジュールでは、各モジュールが自分自身のスコープを持つ
// ただし、これはブラウザや Node.js でモジュールとして読み込んだ場合のみ適用
// ここでは簡単な例のみ示します

// モジュールA.js
// export const moduleVar = "モジュールの変数です";

// モジュールB.js
// import { moduleVar } from './モジュールA.js';
// console.log(moduleVar); // "モジュールの変数です"

// 即時関数 (IIFE: Immediately Invoked Function Expression)
// スコープを汚染しないために使用
(function() {
  var IIFEVar = "IIFE 内の変数です";
  console.log(IIFEVar); // "IIFE 内の変数です"
})();

// console.log(IIFEVar); // エラー: IIFEVar is not defined

// 'use strict' とスコープ
// 厳格モードでは、暗黙的なグローバル変数の作成が防止される
function strictModeExample() {
  'use strict';
  // x = 10; // エラー: x is not defined
}

strictModeExample();

// パラメータスコープ
// 関数の引数もその関数のスコープ内でのみ有効
function parameterScope(paramVar) {
  console.log(paramVar); // "引数です"
}

parameterScope("引数です");
// console.log(paramVar); // エラー: paramVar is not defined

// ループとブロックスコープ
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log("let を使ったループの i:", i); // 0, 1, 2
  }, 100);
}

for (var j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log("var を使ったループの j:", j); // 3, 3, 3
  }, 100);
}

// this の挙動とスコープチェーン
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
};

var alice = new Person("Alice");
console.log(alice.getName()); // "Alice"

// アロー関数と this
var arrowFunctionExample = {
  name: "Arrow",
  regularFunction: function() {
    console.log(this.name); // "Arrow"
  },
  arrowFunction: () => {
    console.log(this.name); // undefined
  }
};

arrowFunctionExample.regularFunction();
arrowFunctionExample.arrowFunction();

// クラススコープ
class MyClass {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

const instance = new MyClass(10);
console.log(instance.getValue()); // 10

// try-catch ブロックとスコープ
try {
  throw new Error("エラー発生");
} catch (error) {
  console.log(error.message); // "エラー発生"
}
// console.log(error); // エラー: error is not defined

// ネストされた関数とスコープチェーン
function outer() {
  var outerVar = "外側の変数";

  function middle() {
    var middleVar = "中間の変数";

    function inner() {
      var innerVar = "内側の変数";
      console.log(outerVar);   // "外側の変数"
      console.log(middleVar);  // "中間の変数"
      console.log(innerVar);   // "内側の変数"
    }
    inner();
  }
  middle();
}

outer();

// プロトタイプチェーンとスコープ
function Animal(name) {
  this.name = name;
}

Animal.prototype.getName = function() {
  return this.name;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var myDog = new Dog("Max", "Bulldog");
console.log(myDog.getName()); // "Max"

// デフォルトパラメータとスコープ
function defaultParameter(a, b = 5) {
  console.log(a + b);
}

defaultParameter(3); // 8

// 動的スコープと JavaScript
// JavaScript は静的スコープ（レキシカルスコープ）を持つ
var scope = "グローバルスコープ";

function checkScope() {
  var scope = "ローカルスコープ";
  function f() {
    return scope;
  }
  return f();
}

console.log(checkScope()); // "ローカルスコープ"

// 'with' ステートメントとスコープ（使用非推奨）
var objWith = { a: 1, b: 2 };

// with (objWith) {
//   console.log(a); // 1
//   console.log(b); // 2
// }

// 'eval' とスコープ
function evalExample() {
  var x = 2;
  eval('var x = 5; console.log(x);'); // 5
  console.log(x); // 5 （eval 内で宣言された x が関数スコープを汚染）
}

evalExample();

// スコープチェーンの解決順序
var a = 1;
function first() {
  var b = 2;
  function second() {
    var c = 3;
    console.log(a + b + c); // 6
  }
  second();
}
first();

// ブロックスコープ内での関数宣言
if (true) {
  function blockScopedFunction() {
    console.log("これはブロックスコープ内の関数です");
  }
  blockScopedFunction(); // ブラウザによって挙動が異なる場合があります
}

// JavaScript のスコープは非常に重要で、変数の可視性とライフタイムを決定します。
// スコープを正しく理解し活用することで、コードの予測可能性と安全性を高めることができます。
