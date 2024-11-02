const fs = require('fs');
const path = require('path');

// サンプルのJavaScriptオブジェクト
const data = {
    name: "田中太郎",
    age: 30,
    hobbies: ["読書", "旅行", "プログラミング"],
    address: {
        city: "東京",
        country: "日本"
    }
};

// JSON文字列に変換（読みやすくするために整形）
const jsonString = JSON.stringify(data, null, 2);

// 実行ファイルからの相対パスでファイルに書き出し
const outputPath = path.join(__dirname, 'output.json');
fs.writeFileSync(outputPath, jsonString, 'utf8');

console.log('JSONファイルの作成が完了しました！');