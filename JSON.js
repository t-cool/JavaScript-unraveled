// JSONデータを読み込んで表形式で出力するためのサンプルコードです。

// Node.jsの 'fs' モジュールを使用してファイルを読み込む
const fs = require('fs');

// 'jsonExample.json' ファイルの内容を同期的に読み込む
const rawData = fs.readFileSync('jsonExample.json');

// 読み込んだデータ（生の文字列）をJavaScriptオブジェクトに変換
const studentData = JSON.parse(rawData);

// 表形式で学生情報を出力する関数
function printStudentsTable(students) {
  // ヘッダーを出力
  console.log('学籍番号\t名前\t\t学年\t専攻');
  console.log('--------------------------------------------------');
  
  // 各学生の情報を出力
  students.forEach(student => {
    console.log(`${student['学籍番号']}\t${student['名前']}\t${student['学年']}\t${student['専攻']}`);
  });
}

// '学生情報' キーに対応する配列を取得して、表形式で出力
printStudentsTable(studentData['学生情報']);