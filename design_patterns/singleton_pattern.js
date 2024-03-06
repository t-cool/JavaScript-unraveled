/*
Singleton Patternは、特定のクラスのインスタンスがプログラム全体で一つだけであることを保証するデザインパターンです。これは、設定、データベース接続など、一元管理されるべきリソースに対してよく使用されます。

以下は、JavaScriptでSingleton Patternを実装する一般的な方法です。この実装では、クロージャを使用してプライベート変数を保持し、外部からの直接的なアクセスを防ぎます。
*/

var Singleton = (function () {
    // インスタンスを保持するための変数
    var instance;

    // Singletonのインスタンスを作成する関数
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    // 外部からアクセス可能な部分
    return {
        // インスタンスを取得するためのメソッド
        getInstance: function () {
            // インスタンスがまだ作成されていない場合は作成する
            if (!instance) {
                instance = createInstance();
            }
            // インスタンスを返す
            return instance;
        }
    };
})();

// 使用例
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log(instance1 === instance2);  // trueを出力、同一のインスタンスであることを確認