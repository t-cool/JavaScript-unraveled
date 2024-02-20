// JavaScriptの`forEach`メソッドは、配列の各要素に対して指定した関数を実行します。
// これにより、配列の各要素に対して繰り返し操作を行うことができます。
// `forEach`メソッドは、配列の要素を変更することはありませんが、
// 配列の各要素に対して何らかの処理を行いたい場合に便利です。

const fruits = ['apple', 'banana', 'cherry'];

// 配列の各要素に対して関数を実行
fruits.forEach(function(fruit, index) {
  console.log(index + ': ' + fruit);
});

// 出力:
// 0: apple
// 1: banana
// 2: cherry