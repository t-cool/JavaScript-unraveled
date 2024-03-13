// 関数をターゲットとしたProxyを使って、Common Lispのマクロをシミュレートするデモ

// ターゲット関数
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // ハンドラオブジェクト
  const handler = {
    // 関数の呼び出しをインターセプト
    apply: function(target, thisArg, argumentsList) {
      // 特定の引数に基づいて異なる振る舞いをする
      if (argumentsList[0] === "world") {
        // "world"が引数の場合、別のメッセージを出力
        console.log("Hello, world! This is a macro-like behavior in JavaScript.");
      } else {
        // それ以外の場合は、元の関数をその引数で呼び出す
        return Reflect.apply(...arguments);
      }
    }
  };
  
  // Proxyオブジェクトの作成
  const proxyGreet = new Proxy(greet, handler);
  
  // テスト
  proxyGreet("world"); // "Hello, world! This is a macro-like behavior in JavaScript." を出力
  proxyGreet("Alice"); // "Hello, Alice!" を出力