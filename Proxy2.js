// Proxyを使って、オブジェクトへの読み取りと書き込みをインターセプトするデモ

// ターゲットオブジェクト
const target = {
    message1: "hello",
    message2: "everyone"
  };
  
  // ハンドラオブジェクト
  const handler = {
    // プロパティの読み取りをインターセプト
    get: function(target, prop, receiver) {
      if (prop === "message1") {
        return "こんにちは";
      }
      return Reflect.get(...arguments);
    },
    // プロパティの書き込みをインターセプト
    set: function(target, prop, value) {
      if (prop === "message2") {
        console.log(`message2が${value}に変更されました`);
      }
      return Reflect.set(...arguments);
    }
  };
  
  // Proxyオブジェクトの作成
  const proxy = new Proxy(target, handler);
  
  console.log(proxy.message1); // "こんにちは" を出力
  console.log(proxy.message2); // "everyone" を出力
  
  proxy.message2 = "みなさん"; // コンソールに "message2がみなさんに変更されました" と出力