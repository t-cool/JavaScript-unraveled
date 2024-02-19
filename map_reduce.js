// MapReduceは、大規模なデータセットを並列処理するためのプログラミングモデルです。基本的には「Map」ステップでデータをキー/値のペアに変換し、「Reduce」ステップでそれらのキーごとに値を集約します。ここでは、JavaScriptを使用して単純なMapReduceの例を示します。

// この例では、文字列の配列から各単語の出現回数を計算します。

// ステップ 1: Map関数
// Map関数は、各要素に対して操作を行い、キー/値のペアの配列を生成します。

function map(words) {
  let results = [];
  words.forEach(word => {
    results.push({key: word, value: 1});
  });
  return results;
}

// ステップ 2: Reduce関数
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
  });
  return reduced;
}

// ステップ 3: MapReduceの実行
// MapReduceのプロセスを実行するために、Map関数とReduce関数を組み合わせます。
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
console.log(wordCounts);

// このコードは、与えられた単語のリストから各単語の出現回数を計算し、結果をオブジェクトとして出力します。MapReduceのプロセスは、大量のデータを扱う分散システムで特に有効ですが、この例はその基本的な概念を理解するのに役立ちます。
