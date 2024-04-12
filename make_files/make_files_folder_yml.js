const fs = require('fs');

// 'data.yml' ファイルの内容を同期的に読み込む
const rawData = fs.readFileSync('data.yml', 'utf8');

// YAML形式のデータを解析する簡単な関数
function parseSimpleYAML(yamlString) {
  const result = {};
  const lines = yamlString.split('\n');
  let currentIndent = 0;
  let currentObject = result;

  lines.forEach(line => {
    const indent = line.search(/\S|$/);
    const keyValue = line.trim().split(': ');
    if (keyValue.length === 2) {
      if (indent > currentIndent) {
        const lastKey = Object.keys(currentObject)[Object.keys(currentObject).length - 1];
        currentObject[lastKey] = [{}];
        currentObject = currentObject[lastKey][0];
      } else if (indent < currentIndent) {
        currentObject = result;
      }
      currentIndent = indent;
      currentObject[keyValue[0]] = keyValue[1];
    } else if (keyValue[0].trim() === '- name') {
      const nameValue = keyValue[1];
      if (!currentObject['children']) {
        currentObject['children'] = [];
      }
      const newChild = {name: nameValue};
      currentObject['children'].push(newChild);
      currentObject = newChild;
    }
  });

  return result;
}

// YAMLデータを解析
const folderData = parseSimpleYAML(rawData);

// ここに folderData を使ってフォルダとファイルを作成する処理を記述