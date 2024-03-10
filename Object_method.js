// オブジェクトの作成
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Object メソッド
// キーのリストを取得
console.log(Object.keys(person)); 
// ["firstName", "lastName", "age"]

// 値のリストを取得
console.log(Object.values(person)); 
// ["John", "Doe", 30]

// エントリーのリストを取得
console.log(Object.entries(person)); 
// [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]

// オブジェクトの拡張（マージ）
let location = {
city: "New York",
country: "USA"
};

// person と location オブジェクトを personDetails に結合
let personDetails = Object.assign(person, location);

console.log(personDetails);
// {firstName: "John", lastName: "Doe", age: 30, city: "New York", country: "USA"}

// オブジェクトのコピーを作成
let personCopy = Object.assign({}, person);

console.log(personCopy);
// {firstName: "John", lastName: "Doe", age: 30, city: "New York", country: "USA"}

// オブジェクトのプロパティを凍結（変更不可にする）
Object.freeze(person);
//person.age = 35; // この変更は無視される
//console.log(person.age); // 30
/*
person.age = 35; // この変更は無視される
           ^
TypeError: Cannot assign to read only property 'age' of object '#<Object>'
    at file:///Users/t-cool/Desktop/JavaScript-unraveled/Object_method.js:41:12
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12)
*/

// オブジェクトのプロパティの存在を確認
console.log('age' in person); // true
console.log('salary' in person); // false

// オブジェクトのプロパティを動的にアクセス
let propName = "firstName";
console.log(person[propName]); // "John"