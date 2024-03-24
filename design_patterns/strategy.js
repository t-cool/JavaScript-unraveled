// ストラテジーインターフェイスを模倣する
function Strategy() {}
Strategy.prototype.execute = function() {
  throw new Error('executeメソッドは実装されなければなりません。');
};

// 具体的なストラテジー1
function ConcreteStrategyA() {}
ConcreteStrategyA.prototype = Object.create(Strategy.prototype);
ConcreteStrategyA.prototype.execute = function() {
  return 'ストラテジーAの実行';
};

// 具体的なストラテジー2
function ConcreteStrategyB() {}
ConcreteStrategyB.prototype = Object.create(Strategy.prototype);
ConcreteStrategyB.prototype.execute = function() {
  return 'ストラテジーBの実行';
};

// コンテキストクラス
function Context(strategy) {
  this.strategy = strategy;
}
Context.prototype.setStrategy = function(strategy) {
  this.strategy = strategy;
};
Context.prototype.executeStrategy = function() {
  return this.strategy.execute();
};

// 使用例
var strategyA = new ConcreteStrategyA();
var strategyB = new ConcreteStrategyB();
var context = new Context(strategyA);

console.log(context.executeStrategy()); // ストラテジーAの実行

context.setStrategy(strategyB);
console.log(context.executeStrategy()); // ストラテジーBの実行
