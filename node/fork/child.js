// フィボナッチ数を計算する関数
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 親プロセスからメッセージ（番号）を受け取り、フィボナッチ数を計算して返す
process.on('message', (number) => {
  const result = fibonacci(number);
  process.send(result); // 親プロセスに結果を送信
});
