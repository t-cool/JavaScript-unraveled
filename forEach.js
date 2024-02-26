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
