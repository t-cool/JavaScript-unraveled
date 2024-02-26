function add1(num) {
  return num + 1;
}

function add2(num) {
  return num + 2;
}

// このような定義を抽象化できます
function add(a) {
  return function(b) {
    return a + b;
  };
}

// 2つの引数を取る関数をカリー化する
function add(a) {
  return function(b) {
    return a + b;
  };
}

// カリー化された関数を使用
const addFive = add(5);
console.log(addFive(3)); // 8

