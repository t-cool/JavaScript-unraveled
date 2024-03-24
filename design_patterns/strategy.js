// JavaScriptには他の言語のようなインターフェイスがないため、インターフェイスを模倣するためには異なるアプローチを取る必要があります。ストラテジーパターンを実装する一つの方法は、特定の関数を持つオブジェクト（ストラテジー）を定義し、それらを使用するコンテキストを作成することです。以下はその一例です。

// ストラテジーインターフェイスを模倣する
class Strategy {
  execute() {
    throw new Error('executeメソッドは実装されなければなりません。');
  }
}

// 具体的なストラテジー1
class ConcreteStrategyA extends Strategy {
  execute() {
    return 'ストラテジーAの実行';
  }
}

// 具体的なストラテジー2
class ConcreteStrategyB extends Strategy {
  execute() {
    return 'ストラテジーBの実行';
  }
}

// コンテキストクラス
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    return this.strategy.execute();
  }
}

// 使用例
const strategyA = new ConcreteStrategyA();
const strategyB = new ConcreteStrategyB();
const context = new Context(strategyA);

console.log(context.executeStrategy()); // ストラテジーAの実行

context.setStrategy(strategyB);
console.log(context.executeStrategy()); // ストラテジーBの実行

