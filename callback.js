/*
コールバック関数を引数に含めることの有用性については、以下の点が挙げられます。

1. 非同期処理の管理: JavaScriptでは、Web APIの呼び出しやデータベース操作など、非同期処理が一般的です。コールバック関数を使用することで、非同期処理が完了した後に特定の処理を実行することができます。

2. カスタマイズ可能な処理: コールバック関数を引数として受け取ることで、関数の利用者がその場で処理をカスタマイズできます。これにより、関数の再利用性が高まり、柔軟なコーディングが可能になります。

3. イベント駆動プログラミング: ユーザーのアクションや特定のイベントが発生した際に、コールバック関数を通じて処理を実行することができます。これにより、ユーザーインターフェースが反応的で、直感的な操作が可能になります。

以上のように、コールバック関数を引数に含めることは、非同期処理の管理、処理のカスタマイズ、イベント駆動プログラミングを実現する上で非常に有用です。
*/

// 非同期処理の管理
// JavaScriptでは、Web APIの呼び出しやデータベース操作など、非同期処理が一般的です。
// コールバック関数を使用することで、非同期処理が完了した後に特定の処理を実行することができます。

// 非同期処理を行い、完了後にコールバック関数を呼び出す例
function loadJSON(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(null, data)) // 成功時
        .catch(error => callback(error, null)); // エラー時
}

// 使用例
loadJSON('https://api.example.com/data', function(err, data) {
    if (err) {
        console.error("エラーが発生しました:", err);
    } else {
        console.log("取得したデータ:", data);
    }
});

// 2. カスタマイズ可能な処理
// コールバック関数を引数として受け取ることで、
// 関数の利用者がその場で処理をカスタマイズできます。
// これにより、関数の再利用性が高まり、柔軟なコーディングが可能になります。

// データを加工してからコールバック関数を呼び出す例
function transformData(data, transformFunction, callback) {
    try {
        const transformedData = transformFunction(data);
        callback(null, transformedData);
    } catch (error) {
        callback(error, null);
    }
}

// 使用例
transformData("Hello, World!", (data) => data.toLowerCase(), function(err, result) {
    if (err) {
        console.error("エラーが発生しました:", err);
    } else {
        console.log("加工後のデータ:", result); // "hello, world!"
    }
});

// 3. イベント駆動プログラミング
// ユーザーのアクションや特定のイベントが発生した際に、
// コールバック関数を通じて処理を実行することができます。
// これにより、ユーザーインターフェースが反応的で、直感的な操作が可能になります。

// 非同期処理を行い、完了後にコールバック関数を呼び出す例
function loadJSON(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(null, data)) // 成功時
        .catch(error => callback(error, null)); // エラー時
}

// 使用例
loadJSON('https://api.example.com/data', function(err, data) {
    if (err) {
        console.error("エラーが発生しました:", err);
    } else {
        console.log("取得したデータ:", data);
    }
});

function myFunctionWithCallback(data, callback) {
    // 何らかの処理を行う
    console.log("データを処理中: ", data);
    // コールバック関数を呼び出す
    callback(data);
}

// 使用例
myFunctionWithCallback("テストデータ", function(result) {
    console.log("コールバック結果: ", result);
});