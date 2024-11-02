// 以下に、分割代入の例を示します。
// オブジェクトや配列、そして Map でも分割代入が可能です。

// 1. オブジェクトから分割代入する例

// オブジェクトを引数にとり、分割代入を使わない例
function displayUserInfo(user) {
  const name = user.name;
  const age = user.age;
  const country = user.country;
  console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}

const user = {
  name: "Alice",
  age: 30,
  country: "Japan"
};

displayUserInfo(user); // "Name: Alice, Age: 30, Country: Japan"

// 分割代入を使う例
function displayUserInfoWithDestructuring({ name, age, country }) {
  console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}

displayUserInfoWithDestructuring(user); // "Name: Alice, Age: 30, Country: Japan"


// 2. 配列から分割代入する例

// 配列を引数にとり、分割代入を使わない例
function displayUserInfoFromArray(userArray) {
  const name = userArray[0];
  const age = userArray[1];
  const country = userArray[2];
  console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}

const userArray = ["Alice", 30, "Japan"];

displayUserInfoFromArray(userArray); // "Name: Alice, Age: 30, Country: Japan"

// 分割代入を使う例
function displayUserInfoFromArrayWithDestructuring([name, age, country]) {
  console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}

displayUserInfoFromArrayWithDestructuring(userArray); // "Name: Alice, Age: 30, Country: Japan"


// 3. 必要な要素だけを分割代入で取り出す例

// 例えば、配列から名前と国だけを取り出したい場合
function displayUserNameAndCountry([name, , country]) {
  console.log(`Name: ${name}, Country: ${country}`);
}

displayUserNameAndCountry(userArray); // "Name: Alice, Country: Japan"


// 4. Map から分割代入で値を取り出す例

// Map から分割代入を使って値を取り出すには、配列の分割代入が便利です。
const userMap = new Map();
userMap.set("name", "Alice");
userMap.set("age", 30);
userMap.set("country", "Japan");

// entries()メソッドでキーと値のペアを取り出し、分割代入で扱う
for (const [key, value] of userMap.entries()) {
  console.log(`${key}: ${value}`);
}
// 出力:
// name: Alice
// age: 30
// country: Japan

// または、個別に値を取得することも可能です。
const name = userMap.get("name");
const age = userMap.get("age");
const country = userMap.get("country");
console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
// "Name: Alice, Age: 30, Country: Japan"


// --- 分割代入のメリット ---
// 分割代入を使うことで、コードがシンプルになり、必要な要素だけを簡単に取り出して使うことができます。
// また、配列やオブジェクト、Map など様々なデータ構造で使えるため、便利です。