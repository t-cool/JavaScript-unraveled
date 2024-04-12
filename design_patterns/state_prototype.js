// StateManager コンストラクタ関数
function StateManager() {
  // 状態を保持するオブジェクト
  this.state = {};
}

// 状態を設定するメソッド
StateManager.prototype.setState = function(key, value) {
  this.state[key] = value;
};

// 状態を取得するメソッド
StateManager.prototype.getState = function(key) {
  return this.state[key];
};

// StateManager インスタンスの作成
var manager = new StateManager();

// 状態の設定
manager.setState('user', 'Alice');

// 状態の取得
console.log(manager.getState('user'));  // 出力: Alice

