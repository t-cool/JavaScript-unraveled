class MyIterable {
    constructor(data) {
      // コンストラクタでデータを初期化
      this.data = data;
    }
  
    // Symbol.iteratorを実装。for...ofループやスプレッド構文での使用を可能にする
    [Symbol.iterator]() {
      let index = -1; // イテレーションの開始前のインデックス
      let data = this.data; // this.dataをローカル変数にコピー
  
      return {
        // nextメソッドは、イテレータプロトコルに必要
        next: () => ({
          value: data[++index], // 次の値を返す
          done: index >= data.length // コレクションの終わりに達したかどうか
        })
      };
    }
  }
  
  // 活用例
  const iterable = new MyIterable(['a', 'b', 'c', 'd', 'e']);
  
  // for...ofループでイテレータブルオブジェクトを反復処理
  for (const value of iterable) {
    console.log(value);
  }
  // 出力: a, b, c, d, e
  
  // スプレッド構文の活用。イテレータブルオブジェクトから配列を作成
  const arrayFromIterable = [...iterable];
  console.log(arrayFromIterable);
  // 出力: ['a', 'b', 'c', 'd', 'e']