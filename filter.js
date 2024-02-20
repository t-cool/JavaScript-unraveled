// 数値の配列を用意
const numbers = [1, 2, 3, 4, 5, 6];

// 偶数のみを抽出する関数
const isEven = number => number % 2 === 0;

// filter関数を使用して偶数のみを含む新しい配列を生成
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); 
// [2, 4, 6]

// 人物の情報を含むオブジェクト
const people = {
  john: 28,
  jane: 32,
  doe: 15,
  smith: 45
};

// 年齢が30歳以上の人物のみを抽出する
const filteredPeople = Object.entries(people).filter(([name, age]) => age >= 30)
    .reduce((acc, [name, age]) => 
    {
        acc[name] = age;
        return acc;
    }, {});

console.log(filteredPeople);
// { jane: 32, smith: 45 }

// Mapインスタンスの作成
const myMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);

// Mapインスタンスをフィルタリング
const filteredMap = new Map([...myMap].filter(([key, value]) => key === 'key1' || value === 'value3'));

console.log(filteredMap);
// Map { 'key1' => 'value1', 'key3' => 'value3' }
