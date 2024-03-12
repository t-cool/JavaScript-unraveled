/*
モジュールパターンで即時関数（Immediately Invoked Function Expression, IIFE）を使用する理由は、プライベートな状態と振る舞いをカプセル化し、公開する部分だけを外部に露出させるためです。このパターンは、JavaScriptにおける情報隠蔽とカプセル化の原則を実現するためによく用いられます。

即時関数を使う主な理由は以下の通りです：
1. 名前空間の汚染を防ぐ：即時関数は新しいスコープを作成します。このスコープ内で宣言された変数や関数は、外部からアクセスできないため、グローバルスコープを汚染しません。

2. プライベート変数と関数の作成：即時関数内で宣言された変数や関数は、外部から直接アクセスできないプライベートなものとなります。これにより、モジュールの内部状態を外部から隠蔽できます。

3. パブリックAPIの定義：即時関数はオブジェクトを返すことができます。このオブジェクトには、外部からアクセス可能なパブリックなプロパティやメソッドを定義でき、これがモジュールの公開APIとなります。

このように、即時関数を使用することで、モジュールパターンはJavaScriptにおける強力なカプセル化と情報隠蔽のメカニズムを提供します。これにより、コードの構造が改善され、他のコードとの干渉を避けることができます。
*/
var TestModule = (function () {
    // プライベート変数
    var counter = 0;

    // プライベート関数
    function privateMethod() {
        console.log("I am private");
    }

    // パブリックな部分をオブジェクトリテラルで返す
    return {
        // パブリックな関数
        incrementCounter: function () {
            console.log("count is : " + counter);
            return ++counter;
        },
        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };
})();

// テスト
TestModule.incrementCounter();
TestModule.incrementCounter();
TestModule.incrementCounter();
TestModule.resetCounter();
TestModule.incrementCounter();
TestModule.incrementCounter();
