// 必要なモジュールのインポート
// 'fs'モジュールはファイルシステムを扱うためのもので、ファイルやディレクトリの読み書きを可能にする
const fs = require('fs');
// 'path'モジュールはファイルパスを操作するためのもので、異なるオペレーティングシステム上で一貫した方法でパスを扱うことができる
const path = require('path');

// 再帰的にフォルダの内容を表示する関数
function parseDirectory(dirPath, level = 0) {
  // 'readdirSync'関数を使って、指定されたパスのディレクトリ内のエントリ（ファイルやサブディレクトリ）のリストを同期的に取得する
  // 'withFileTypes'オプションをtrueにすることで、取得されるエントリがファイルなのかディレクトリなのかの情報も含めて取得できる
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  // 取得したエントリのリストをループして、各エントリに対して処理を行う
  entries.forEach(entry => {
    // 'path.join'を使って、ディレクトリのパスとエントリの名前から、エントリの完全なパスを生成する
    const entryPath = path.join(dirPath, entry.name);

    // 現在の階層レベルに基づいて、インデント（空白文字）を生成する。階層が深くなるほどインデントが増える
    const indent = ' '.repeat(level * 2);

    // エントリがディレクトリかどうかを判断する
    if (entry.isDirectory()) {
      // エントリがディレクトリの場合、その名前を表示し（ディレクトリであることを示すためにスラッシュを付ける）、
      // さらにそのディレクトリ内のエントリについて再帰的にこの関数を呼び出す（階層レベルを1増やす）
      console.log(`${indent}${entry.name}/`);
      parseDirectory(entryPath, level + 1);
    } else {
      // エントリがファイルの場合、その名前を表示する
      console.log(`${indent}${entry.name}`);
    }
  });
}

// スクリプトを実行する際のコマンドライン引数から、対象となるディレクトリのパスを取得する
// 引数が指定されていない場合は、カレントディレクトリ（'.'）をデフォルトの対象ディレクトリとする
const targetDir = process.argv[2] || '.';
// 対象ディレクトリに対して、上で定義した関数を呼び出して処理を開始する
parseDirectory(targetDir);
