// ターゲットオブジェクト
const target = {
    message1: function(x){return x*2},
    message2: "everyone"
  };
  
// ハンドラオブジェクト
const handler = {
  // get トラップを定義
  get: function(target, prop, receiver) {
    if (prop === "message1") {
      return "world";
    }
    return Reflect.get(...arguments);
  }
};

// Proxyの作成
const proxy = new Proxy(target, handler);

console.log(proxy.message1); // "world"
console.log(proxy.message2); // "everyone"
