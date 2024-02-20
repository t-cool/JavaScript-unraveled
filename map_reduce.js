// MapReduce は、大規模なデータセットを並列処理するためのプログラミングモデルです。

// Map ステップでデータをキー/値のペアに変換し、
// Reduce ステップでそれらのキーごとに値を集約します。

// 例：文字列の配列から各単語の出現回数を計算します。

// Map関数は、各要素に対して操作を行い、キー/値のペアの配列を生成します。
function map(words) {
  let results = [];
  words.forEach(word => {
    results.push({key: word, value: 1});
    console.log(results);
  });
  return results;
}

// Reduce関数は、Mapステップからの出力を受け取り、キーごとに値を集約します。
function reduce(mappedData) {
  let reduced = {};
  mappedData.forEach(pair => {
    let key = pair.key;
    let value = pair.value;
    if (reduced[key]) {
      reduced[key] += value;
    } else {
      reduced[key] = value;
    }
    console.log(reduced);
  });
  return reduced;
}

// MapReduce の実行
function mapReduce(data) {
  // Mapステップ
  let mappedData = map(data);
  
  // Reduceステップ
  let reducedData = reduce(mappedData);
  
  return reducedData;
}

// データセット
let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// MapReduceの実行
let wordCounts = mapReduce(words);
console.log("-------------------");
console.log(wordCounts);
