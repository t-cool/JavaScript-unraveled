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
