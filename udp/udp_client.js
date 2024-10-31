const dgram = require('dgram');

// UDPクライアント
const client = dgram.createSocket('udp4');

// ホストとポートの設定
const HOST = '127.0.0.1';
const PORT = 41234;

// メッセージを送信
const message = Buffer.from('こんにちは、サーバー！');
client.send(message, PORT, HOST, (err) => {
    if (err) {
        console.log('メッセージ送信エラー:', err);
    } else {
        console.log('メッセージを送信しました');
    }
});

// クライアントの応答受信
client.on('message', (msg, rinfo) => {
    console.log(`クライアントがメッセージを受信: ${msg} from ${rinfo.address}:${rinfo.port}`);
    client.close();
});


/*
コードの説明：
1. サーバー側：
dgramモジュールを使用してUDPソケットを作成
ポート41234でリッスン
メッセージを受信したら、送信元に確認メッセージを返信

2. クライアント側：
同じくdgramモジュールでソケットを作成
サーバーにメッセージを送信
サーバーからの応答を受信したらソケットを閉じる
使用方法：
このコードを2つのファイルに分けて実行する場合は、サーバー部分とクライアント部分を別々のファイルにしてください
まずサーバーを起動し、その後クライアントを実行します

注意：
このコードはローカルホスト（127.0.0.1）で動作します
実際の運用では、エラーハンドリングをより堅牢にする必要があります
ネットワークセキュリティに関する考慮が必要です


*/