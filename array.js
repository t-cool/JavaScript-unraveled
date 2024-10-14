// 基本的な配列の作成

/**
 * 空の配列を作成する
 */
let emptyArray = [];
console.log(emptyArray); // 出力: []

/**
 * 初期値を持つ配列を作成する
 */
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // 出力: [1, 2, 3, 4, 5]

/**
 * 様々な型の要素を持つ配列
 */
let mixedArray = [1, "二", true, null, { key: "value" }];
console.log(mixedArray);
// 出力: [1, "二", true, null, { key: "value" }]

// ===========================================
// length プロパティ
// 配列の長さを取得または設定する
// ===========================================

/**
 * 配列の長さを取得する
 */
console.log(numbers.length); // 出力: 5

/**
 * 配列の長さを変更する（要素を削除する）
 */
numbers.length = 3;
console.log(numbers); // 出力: [1, 2, 3]

/**
 * 配列の長さを増やす（空の要素が追加される）
 */
numbers.length = 5;
console.log(numbers); // 出力: [1, 2, 3, undefined, undefined]

// ===========================================
// push() メソッド
// 配列の末尾に一つまたは複数の要素を追加する
// ===========================================

/**
 * 1つの要素を追加する
 */
numbers.push(4);
console.log(numbers); // 出力: [1, 2, 3, undefined, undefined, 4]

/**
 * 複数の要素を追加する
 */
numbers.push(5, 6, 7);
console.log(numbers); // 出力: [1, 2, 3, undefined, undefined, 4, 5, 6, 7]

// ===========================================
// pop() メソッド
// 配列の末尾から要素を一つ削除し、その要素を返す
// ===========================================

/**
 * 末尾の要素を削除する
 */
let poppedElement = numbers.pop();
console.log(poppedElement); // 出力: 7
console.log(numbers); // 出力: [1, 2, 3, undefined, undefined, 4, 5, 6]

// ===========================================
// unshift() メソッド
// 配列の先頭に一つまたは複数の要素を追加する
// ===========================================

/**
 * 先頭に要素を追加する
 */
numbers.unshift(0);
console.log(numbers); // 出力: [0, 1, 2, 3, undefined, undefined, 4, 5, 6]

/**
 * 複数の要素を先頭に追加する
 */
numbers.unshift(-2, -1);
console.log(numbers);
// 出力: [-2, -1, 0, 1, 2, 3, undefined, undefined, 4, 5, 6]

// ===========================================
// shift() メソッド
// 配列の先頭から要素を一つ削除し、その要素を返す
// ===========================================

/**
 * 先頭の要素を削除する
 */
let shiftedElement = numbers.shift();
console.log(shiftedElement); // 出力: -2
console.log(numbers);
// 出力: [-1, 0, 1, 2, 3, undefined, undefined, 4, 5, 6]

// ===========================================
// concat() メソッド
// 複数の配列を結合して新しい配列を作成する
// ===========================================

/**
 * 配列を結合する
 */
let moreNumbers = [7, 8, 9];
let combinedArray = numbers.concat(moreNumbers);
console.log(combinedArray);
// 出力: [-1, 0, 1, 2, 3, undefined, undefined, 4, 5, 6, 7, 8, 9]

/**
 * 複数の配列を一度に結合する
 */
let evenMoreNumbers = [10, 11];
let allNumbers = numbers.concat(moreNumbers, evenMoreNumbers);
console.log(allNumbers);
// 出力: [-1, 0, 1, 2, 3, undefined, undefined, 4, 5, 6, 7, 8, 9, 10, 11]

// ===========================================
// slice() メソッド
// 配列の一部を抽出して新しい配列を返す
// ===========================================

/**
 * 開始位置のみ指定
 */
let slicedArray1 = allNumbers.slice(5);
console.log(slicedArray1);
// 出力: [undefined, undefined, 4, 5, 6, 7, 8, 9, 10, 11]

/**
 * 開始位置と終了位置を指定
 */
let slicedArray2 = allNumbers.slice(2, 5);
console.log(slicedArray2); // 出力: [1, 2, 3]

/**
 * 負のインデックスを使用
 */
let slicedArray3 = allNumbers.slice(-3);
console.log(slicedArray3); // 出力: [9, 10, 11]

// ===========================================
// splice() メソッド
// 配列に要素を追加、削除、置換する
// ===========================================

/**
 * 要素の削除
 */
let splicedArray = allNumbers.splice(2, 3);
console.log(splicedArray); // 出力: [1, 2, 3]
console.log(allNumbers);
// 出力: [-1, 0, undefined, undefined, 4, 5, 6, 7, 8, 9, 10, 11]

/**
 * 要素の追加
 */
allNumbers.splice(2, 0, 'a', 'b', 'c');
console.log(allNumbers);
// 出力: [-1, 0, 'a', 'b', 'c', undefined, undefined, 4, 5, 6, 7, 8, 9, 10, 11]

/**
 * 要素の置換
 */
allNumbers.splice(5, 2, 'x', 'y');
console.log(allNumbers);
// 出力: [-1, 0, 'a', 'b', 'c', 'x', 'y', 4, 5, 6, 7, 8, 9, 10, 11]

// ===========================================
// indexOf() メソッド
// 指定した値が最初に現れるインデックスを返す
// ===========================================

/**
 * 存在する要素のインデックスを取得
 */
let indexC = allNumbers.indexOf('c');
console.log(indexC); // 出力: 4

/**
 * 存在しない要素の場合
 */
let indexZ = allNumbers.indexOf('z');
console.log(indexZ); // 出力: -1

/**
 * 開始位置を指定
 */
let index4 = allNumbers.indexOf(4, 5);
console.log(index4); // 出力: 7

// ===========================================
// lastIndexOf() メソッド
// 指定した値が最後に現れるインデックスを返す
// ===========================================

/**
 * 配列に重複する要素を追加
 */
allNumbers.push('a');
console.log(allNumbers);
// 出力: [-1, 0, 'a', 'b', 'c', 'x', 'y', 4, 5, 6, 7, 8, 9, 10, 11, 'a']

/**
 * 最後に現れる 'a' のインデックスを取得
 */
let lastIndexA = allNumbers.lastIndexOf('a');
console.log(lastIndexA); // 出力: 15

/**
 * 開始位置を指定して検索
 */
let lastIndexABefore10 = allNumbers.lastIndexOf('a', 10);
console.log(lastIndexABefore10); // 出力: 2

// ===========================================
// forEach() メソッド
// 配列の各要素に対して指定した関数を実行する
// ===========================================

/**
 * 簡単な例
 */
allNumbers.forEach(function(element, index) {
  console.log(`インデックス ${index}: ${element}`);
});

/**
 * thisArg を使用
 */
let obj = {
  multiplier: 2
};
allNumbers.forEach(function(element) {
  if (typeof element === 'number') {
    console.log(element * this.multiplier);
  }
}, obj);

// ===========================================
// map() メソッド
// 各要素に関数を適用し、新しい配列を作成する
// ===========================================

/**
 * 数値を2倍にする
 */
let doubledNumbers = allNumbers.map(function(element) {
  return typeof element === 'number' ? element * 2 : element;
});
console.log(doubledNumbers);
// 出力: [-2, 0, 'a', 'b', 'c', 'x', 'y', 8, 10, 12, 14, 16, 18, 20, 22, 'a']

// ===========================================
// filter() メソッド
// 条件を満たす要素のみを抽出する
// ===========================================

/**
 * 数値のみを抽出
 */
let onlyNumbers = allNumbers.filter(function(element) {
  return typeof element === 'number';
});
console.log(onlyNumbers);
// 出力: [-1, 0, 4, 5, 6, 7, 8, 9, 10, 11]

// ===========================================
// reduce() メソッド
// 配列を単一の値に集約する
// ===========================================

/**
 * 数値の合計を計算
 */
let total = onlyNumbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(total); // 出力: 59

// ===========================================
// reduceRight() メソッド
// 配列を逆順に単一の値に集約する
// ===========================================

/**
 * 文字列の連結（逆順）
 */
let concatenatedString = allNumbers.reduceRight(function(accumulator, currentValue) {
  return accumulator + String(currentValue);
}, '');
console.log(concatenatedString);
// 出力: 'a1121098765 4yxcb a0-1'

// ===========================================
// every() メソッド
// 全ての要素が条件を満たすか確認する
// ===========================================

/**
 * 全ての要素が数値かどうか
 */
let areAllNumbers = onlyNumbers.every(function(element) {
  return typeof element === 'number';
});
console.log(areAllNumbers); // 出力: true

/**
 * 全ての要素が正の数かどうか
 */
let areAllPositive = onlyNumbers.every(function(element) {
  return element > 0;
});
console.log(areAllPositive); // 出力: false

// ===========================================
// some() メソッド
// 少なくとも一つの要素が条件を満たすか確認する
// ===========================================

/**
 * 少なくとも一つの要素が 'a' かどうか
 */
let hasA = allNumbers.some(function(element) {
  return element === 'a';
});
console.log(hasA); // 出力: true

/**
 * 少なくとも一つの要素が負の数かどうか
 */
let hasNegative = onlyNumbers.some(function(element) {
  return element < 0;
});
console.log(hasNegative); // 出力: true

// ===========================================
// find() メソッド
// 条件を満たす最初の要素を取得する
// ===========================================

/**
 * 最初の偶数を見つける
 */
let firstEven = onlyNumbers.find(function(element) {
  return element % 2 === 0;
});
console.log(firstEven); // 出力: 0

// ===========================================
// findIndex() メソッド
// 条件を満たす最初の要素のインデックスを取得する
// ===========================================

/**
 * 最初の偶数のインデックスを見つける
 */
let firstEvenIndex = onlyNumbers.findIndex(function(element) {
  return element % 2 === 0;
});
console.log(firstEvenIndex); // 出力: 1

// ===========================================
// includes() メソッド
// 配列に指定した値が含まれるか確認する
// ===========================================

/**
 * 値 'x' が含まれるか
 */
let includesX = allNumbers.includes('x');
console.log(includesX); // 出力: true

/**
 * 値 100 が含まれるか
 */
let includes100 = allNumbers.includes(100);
console.log(includes100); // 出力: false

/**
 * 開始位置を指定
 */
let includesAFromIndex5 = allNumbers.includes('a', 5);
console.log(includesAFromIndex5); // 出力: true

// ===========================================
// join() メソッド
// 配列の要素を文字列として連結する
// ===========================================

/**
 * カンマ区切りで連結
 */
let joinedString = onlyNumbers.join();
console.log(joinedString); // 出力: '-1,0,4,5,6,7,8,9,10,11'

/**
 * 区切り文字を指定
 */
let hyphenatedString = onlyNumbers.join('-');
console.log(hyphenatedString); // 出力: '-1-0-4-5-6-7-8-9-10-11'

// ===========================================
// reverse() メソッド
// 配列の要素を反転させる
// ===========================================

/**
 * 配列を反転
 */
let reversedArray = onlyNumbers.slice().reverse();
console.log(reversedArray); // 出力: [11, 10, 9, 8, 7, 6, 5, 4, 0, -1]

// ===========================================
// sort() メソッド
// 配列をソートする
// ===========================================

/**
 * 文字列としてソート
 */
let sortedArray = onlyNumbers.slice().sort();
console.log(sortedArray);
// 出力: [-1, 0, 10, 11, 4, 5, 6, 7, 8, 9]

/**
 * 数値としてソート
 */
let numericallySortedArray = onlyNumbers.slice().sort(function(a, b) {
  return a - b;
});
console.log(numericallySortedArray);
// 出力: [-1, 0, 4, 5, 6, 7, 8, 9, 10, 11]

// ===========================================
// fill() メソッド
// 配列の指定した範囲を特定の値で埋める
// ===========================================

/**
 * 全ての要素を0で埋める
 */
let filledArray = new Array(5).fill(0);
console.log(filledArray); // 出力: [0, 0, 0, 0, 0]

/**
 * 一部の要素を特定の値で埋める
 */
filledArray.fill(1, 2, 4);
console.log(filledArray); // 出力: [0, 0, 1, 1, 0]

// ===========================================
// copyWithin() メソッド
// 配列内の要素をコピーして別の位置に挿入する
// ===========================================

/**
 * 配列の例
 */
let copyArray = [1, 2, 3, 4, 5, 6];

/**
 * 要素をコピー
 */
copyArray.copyWithin(0, 3, 5);
console.log(copyArray); // 出力: [4, 5, 3, 4, 5, 6]

// ===========================================
// entries() メソッド
// キー/値のペアを持つイテレータを返す
// ===========================================

/**
 * イテレータを取得
 */
let iterator = onlyNumbers.entries();
for (let [index, value] of iterator) {
  console.log(`インデックス ${index}: ${value}`);
}

// ===========================================
// keys() メソッド
// インデックスを持つイテレータを返す
// ===========================================

/**
 * イテレータを取得
 */
let keyIterator = onlyNumbers.keys();
for (let key of keyIterator) {
  console.log(`キー: ${key}`);
}

// ===========================================
// values() メソッド
// 値を持つイテレータを返す
// ===========================================

/**
 * イテレータを取得
 */
let valueIterator = onlyNumbers.values();
for (let value of valueIterator) {
  console.log(`値: ${value}`);
}

// ===========================================
// flat() メソッド
// 多次元配列を平坦化する
// ===========================================

/**
 * ネストされた配列
 */
let nestedArray = [1, [2, [3, [4, [5]]]]];
let flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray); // 出力: [1, 2, 3, 4, 5]

// ===========================================
// flatMap() メソッド
// 各要素に関数を適用し、結果を平坦化する
// ===========================================

/**
 * 各要素を2倍にして配列として返す
 */
let flatMappedArray = [1, 2, 3].flatMap(function(x) {
  return [x * 2];
});
console.log(flatMappedArray); // 出力: [2, 4, 6]

/**
 * 要素を条件でフィルタリングしつつ平坦化
 */
let words = ["こんにちは", "", "世界"];
let letters = words.flatMap(function(word) {
  return word.split('');
});
console.log(letters);
// 出力: ["こ", "ん", "に", "ち", "は", "世", "界"]

// ===========================================
// Array.from() メソッド
// 配列風オブジェクトや反復可能オブジェクトから配列を作成する
// ===========================================

/**
 * 文字列から配列を作成
 */
let str = "hello";
let charArray = Array.from(str);
console.log(charArray); // 出力: ['h', 'e', 'l', 'l', 'o']

/**
 * マップ関数を適用
 */
let numberArray = Array.from([1, 2, 3], function(x) {
  return x * x;
});
console.log(numberArray); // 出力: [1, 4, 9]

// ===========================================
// Array.isArray() メソッド
// 値が配列かどうかを判定する
// ===========================================

/**
 * 配列の場合
 */
console.log(Array.isArray([])); // 出力: true

/**
 * 配列でない場合
 */
console.log(Array.isArray({})); // 出力: false

// ===========================================
// Array.of() メソッド
// 引数を要素とする新しい配列を作成する
// ===========================================

/**
 * 単一の数値から配列を作成
 */
let singleNumberArray = Array.of(7);
console.log(singleNumberArray); // 出力: [7]

/**
 * 複数の引数
 */
let multipleValuesArray = Array.of(1, 2, 3);
console.log(multipleValuesArray); // 出力: [1, 2, 3]

// ===========================================
// toString() メソッド
// 配列を文字列に変換する
// ===========================================

/**
 * 配列を文字列に変換
 */
console.log(onlyNumbers.toString()); // 出力: '-1,0,4,5,6,7,8,9,10,11'

// ===========================================
// toLocaleString() メソッド
// 各要素の toLocaleString() を呼び出し、文字列を作成する
// ===========================================

/**
 * 日付の配列
 */
let dateArray = [new Date('2020-01-01'), new Date('2020-12-31')];
console.log(dateArray.toLocaleString());
// 出力はロケールによって異なる

// ===========================================
// その他のプロパティやメソッドの注意点
// ===========================================

/**
 * 多次元配列の操作
 */
let multiDimensionalArray = [[1, 2], [3, 4], [5, 6]];
let flattenedOnce = multiDimensionalArray.flat();
console.log(flattenedOnce); // 出力: [1, 2, 3, 4, 5, 6]

/**
 * スプレッド構文を使用した配列のコピー
 */
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log(copiedArray); // 出力: [1, 2, 3]

/**
 * オブジェクトの配列のソート
 */
let people = [
  { name: '太郎', age: 30 },
  { name: '次郎', age: 25 },
  { name: '三郎', age: 35 }
];
people.sort(function(a, b) {
  return a.age - b.age;
});
console.log(people);
// 出力: [{ name: '次郎', age: 25 }, { name: '太郎', age: 30 }, { name: '三郎', age: 35 }]

/**
 * Array.prototype の拡張は非推奨
 */
Array.prototype.customMethod = function() {
  console.log('カスタムメソッド');
};
// 配列に不要なプロパティが増えるため、基本的には避けるべき