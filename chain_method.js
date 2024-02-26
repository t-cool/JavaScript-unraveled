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