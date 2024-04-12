const fs = require('fs');
const path = require('path');

// CSV ファイルのパス
const csvFilePath = 'data.csv';

// 出力するディレクトリの基本パス
const baseDir = 'output';

// ディレクトリが存在しない場合は作成
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const createStructureFromJson = (data, parentPath = baseDir) => {
  if (data.type === 'folder') {
    const folderPath = path.join(parentPath, data.name);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    data.children.forEach(child => createStructureFromJson(child, folderPath));
  } else if (data.type === 'file') {
    const filePath = path.join(parentPath, data.name);
    fs.writeFileSync(filePath, '');
  }
};

try {
  const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  createStructureFromJson(jsonData);
  console.log('フォルダとファイルの階層構造が作成されました。');
} catch (error) {
  console.error('エラーが発生しました:', error);
}