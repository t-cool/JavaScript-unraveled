let result = [1,2,3,4,5]
    .filter(x => x%2==0)
    .map(x => x*2)
    .reduce((x,y) => x+y);

console.log(result);


let sum = [1,2,3,4,5]
    .filter(x => x % 2 != 0) // 奇数のみをフィルタリング
    .map(x => x * 3) // 各要素を3倍にする
    .reduce((acc, curr) => acc + curr, 0); // 合計を計算

console.log(sum);

// Map型のデータを用意
let data = new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
    [4, 'd'],
    [5, 'e']
]);

// Mapからキーのみを抽出し、偶数のキーに対応する値を2倍にして、その合計を計算
let result2 = Array.from(data)
    .filter(([key, value]) => key % 2 == 0)
    .map(([key, value]) => key * 2)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result);

// Mapからキーのみを抽出し、奇数のキーに対応する値を3倍にして、その合計を計算
let sum2 = Array.from(data)
    .filter(([key, value]) => key % 2 != 0)
    .map(([key, value]) => key * 3)
    .reduce((acc, curr) => acc + curr, 0);

console.log(sum);
