function factorial(n) {
  // ベースケース: 0の階乗は1
  if (n === 0) {
    return 1;
  }

  // 再帰的なステップ: nの階乗はn * (n-1)の階乗
  return n * factorial(n - 1);
}

console.log(factorial(5));

