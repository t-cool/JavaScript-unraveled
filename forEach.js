// forEach メソッドは、配列の各要素に対して指定した関数を実行します。
const fruits = ['apple', 'banana', 'cherry'];

// 配列の各要素に対して関数を実行
fruits.forEach(function(fruit, index) {
  console.log(index + ': ' + fruit);
});

// 出力:
// 0: apple
// 1: banana
// 2: cherry

// 例2: 配列の各要素を大文字に変換して新しい配列を作成
const upperCaseFruits = [];
fruits.forEach(fruit => {
  upperCaseFruits.push(fruit.toUpperCase());
});
console.log(upperCaseFruits);
// 出力: ['APPLE', 'BANANA', 'CHERRY']

// 例3: 各要素の長さを計算
fruits.forEach(fruit => {
  console.log(`${fruit} の長さは ${fruit.length} です。`);
});
// 出力:
// apple の長さは 5 です。
// banana の長さは 6 です。
// cherry の長さは 6 です。

// 例4: 各要素に対して何かの処理を行い、その結果をオブジェクトに格納
const fruitDetails = {};
fruits.forEach(fruit => {
  fruitDetails[fruit] = { length: fruit.length, uppercase: fruit.toUpperCase() };
});
console.log(fruitDetails);
// 出力: { apple: { length: 5, uppercase: 'APPLE' }, banana: { length: 6, uppercase: 'BANANA' }, cherry: { length: 6, uppercase: 'CHERRY' } }

// 例5: 配列の各要素に対して、条件に一致する場合のみ何かの処理を実行
fruits.forEach(fruit => {
  if (fruit.length > 5) {
    console.log(`${fruit} は5文字より長いです。`);
  }
});
// 出力:
// banana は5文字より長いです。
// cherry は5文字より長いです。

// 例6: 各要素を使ってHTMLリストを作成
let htmlList = '<ul>';
fruits.forEach(fruit => {
  htmlList += `<li>${fruit}</li>`;
});
htmlList += '</ul>';
console.log(htmlList);
// 出力: <ul><li>apple</li><li>banana</li><li>cherry</li></ul>

// 例7: 各要素の最初の文字だけを取り出して新しい配列を作成
const firstLetters = [];
fruits.forEach(fruit => {
  firstLetters.push(fruit[0]);
});
console.log(firstLetters);
// 出力: ['a', 'b', 'c']

// 例8: 各要素をキーとして、その要素の出現回数を値とするオブジェクトを作成
const fruitCounts = {};
fruits.forEach(fruit => {
  if (fruitCounts[fruit]) {
    fruitCounts[fruit] += 1;
  } else {
    fruitCounts[fruit] = 1;
  }
});
console.log(fruitCounts);
// 出力: { apple: 1, banana: 1, cherry: 1 }

// 例9: 各要素に対してランダムな数を加えた新しい配列を作成
const fruitsWithRandom = [];
fruits.forEach(fruit => {
  const randomNum = Math.floor(Math.random() * 10);
  fruitsWithRandom.push(`${fruit} ${randomNum}`);
});
console.log(fruitsWithRandom);
// 出力例: ['apple 3', 'banana 7', 'cherry 2'] (ランダムなので出力は実行ごとに異なります)

// 例10: 各要素を逆順にして新しい配列を作成
const reversedFruits = [];
fruits.forEach(fruit => {
  reversedFruits.unshift(fruit);
});
console.log(reversedFruits);
// 出力: ['cherry', 'banana', 'apple']