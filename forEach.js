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