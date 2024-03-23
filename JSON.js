// JSONデータを読み込むためのサンプルコードです。
// この例では、'jsonExample.json' からデータを読み込み、
// JSON形式の文字列をJavaScriptオブジェクトに変換する方法を示します。

// Node.jsの 'fs' モジュールを使用してファイルを読み込む
const fs = require('fs');

// 'jsonExample.json' ファイルの内容を同期的に読み込む
const rawData = fs.readFileSync('jsonExample.json');

// 読み込んだデータ（生の文字列）をJavaScriptオブジェクトに変換
const studentData = JSON.parse(rawData);

// 学生情報をコンソールに出力する
console.log(studentData);

// 特定の操作を行う例：全学生の名前をコンソールに出力
studentData['学生情報'].forEach(student => {
  console.log(student['名前']);
});

// JSONオブジェクトを文字列に変換する例
const jsonString = JSON.stringify(studentData, null, 2);
console.log(jsonString);

// このコードはNode.js環境で実行することを想定しています。
// JSON.parse() はJSON形式の文字列をJavaScriptオブジェクトに変換します。
// JSON.stringify() はJavaScriptオブジェクトをJSON形式の文字列に変換します。
// 第二引数と第三引数に null と 2 を指定することで、
// 出力されるJSON文字列のフォーマットを整えることができます。