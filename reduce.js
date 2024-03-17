// 基本編

// 1. 配列の合計値を計算
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 
// 出力: 15

// 2. 配列の要素を連結
const items = ['これは', 'reduce', 'の', '例です'];
const sentence = items.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);
console.log(sentence); 
// 出力: これは reduce の 例です

// 3. オブジェクトの配列から特定のプロパティの合計値を計算
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const totalAge = people.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
console.log(totalAge); 
// 出力: 90

// 4. 配列の中で最大値を見つける
const grades = [65, 43, 78, 91, 56, 89];
const maxGrade = grades.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), grades[0]);
console.log(maxGrade); 
// 出力: 91

// 5. 配列内の各要素の出現回数をカウント
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];
const fruitCounts = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(fruitCounts); 
// 出力: { apple: 3, banana: 2, orange: 2 }

// 発展編

// 6. 配列をオブジェクトに変換（キーと値のペア）
const keyValuePairs = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
const object = keyValuePairs.reduce((accumulator, currentValue) => {
  accumulator[currentValue[0]] = currentValue[1];
  return accumulator;
}, {});
console.log(object); 
// 出力: { key1: 'value1', key2: 'value2', key3: 'value3' }

// 7. 配列のフラット化
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flatArray); 
// 出力: [1, 2, 3, 4, 5, 6]

// 8. オブジェクトの配列から特定の条件に一致するオブジェクトを検索
const products = [
  { id: 1, name: 'Keyboard', price: 1000 },
  { id: 2, name: 'Mouse', price: 500 },
  { id: 3, name: 'Monitor', price: 5000 }
];
const expensiveProduct = products.reduce((accumulator, currentValue) => {
  return (accumulator.price || 0) > currentValue.price ? accumulator : currentValue;
}, {});
console.log(expensiveProduct); 
// 出力: { id: 3, name: 'Monitor', price: 5000 }

// 9. 二次元配列の転置
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const transpose = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
console.log(transpose); 
// 出力: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

// 10. 配列内のオブジェクトを特定のキーでグルーピング
const people2 = [
  { name: 'Alice', job: 'Engineer' },
  { name: 'Bob', job: 'Designer' },
  { name: 'Charlie', job: 'Engineer' }
];
const groupedByJob = people2.reduce((accumulator, currentValue) => {
  const key = currentValue.job;
  if (!accumulator[key]) {
    accumulator[key] = [];
  }
  accumulator[key].push(currentValue);
  return accumulator;
}, {});
console.log(groupedByJob); 
// 出力: { Engineer: [{ name: 'Alice', job: 'Engineer' }, { name: 'Charlie', job: 'Engineer' }], Designer: [{ name: 'Bob', job: 'Designer' }] }