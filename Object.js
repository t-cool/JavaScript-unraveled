// JavaScriptのObject型は、キーと値のペアを格納するためのコンテナです。ここでは、Object型の基本的な仕様と操作を示すコード例をいくつか紹介します。

// オブジェクトの作成とアクセス

// オブジェクトの作成
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
  
// プロパティへのアクセス
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe

// プロパティの追加
person.job = "Developer";
console.log(person.job); // Developer

// プロパティの削除
delete person.age;
console.log(person.age); // undefined]



// プロトタイプ継承

// JavaScriptのオブジェクトはプロトタイプを通じて継承が可能です。これにより、あるオブジェクトが別のオブジェクトのプロパティやメソッドを利用できるようになります。
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

let person1 = new Person("John", "Doe");
console.log(person1.fullName()); // John Doe


// Object メソッド

// JavaScript の Object 型には、オブジェクトを操作するための便利な静的メソッドが多数用意されています。

// キーのリストを取得
console.log(Object.keys(person)); // ["firstName","lastName"]

// 値のリストを取得
console.log(Object.values(person)); // ["John", "Doe"]

// エントリーのリストを取得
console.log(Object.entries(person)); // [["firstName","John"], ["lastName", "Doe"]]

// オブジェクトの拡張（マージ）
let location = {
  city: "New York",
  country: "USA"
};

let personDetails = Object.assign(person, location);
console.log(personDetails);