// apply と call メソッドは、関数の呼び出し方をカスタマイズするために使用します。

// callは引数を個別に渡し、applyは引数を配列として渡します。

// call の利用例
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = {
  name: 'John'
};

// callを使用して関数を呼び出し、thisの値と引数を指定
greet.call(person, 'Hello', '!');

// applyの利用例
greet.apply(person, ['Hello', '!']);
// 出力: Hello, John!

