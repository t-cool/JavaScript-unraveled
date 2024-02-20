// 2つの引数を取る関数をカリー化する
function add(a) {
  return function(b) {
    return a + b;
  };
}

// カリー化された関数を使用
const addFive = add(5);
console.log(addFive(3)); // 8