const { fork } = require('child_process');

// child.js をフォーク
const childProcess = fork('child.js');

// フィボナッチ数を計算するための値を送信
const number = 45;
childProcess.send(number);

// 子プロセスからの結果を受け取る
childProcess.on('message', (result) => {
  console.log(`フィボナッチ数(${number}) は: ${result}`);
  childProcess.kill(); // 子プロセスを終了
});

childProcess.on('exit', () => {
  console.log('子プロセスが終了しました');
});
