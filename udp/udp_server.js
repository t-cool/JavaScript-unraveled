// UDPサーバー
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

// サーバーの設定
const PORT = 41234;
const HOST = '127.0.0.1';

// サーバーのイベントハンドラ
server.on('error', (err) => {
    console.log(`サーバーエラー:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`サーバーがメッセージを受信: ${msg} from ${rinfo.address}:${rinfo.port}`);
    // クライアントにメッセージを送り返す
    server.send(`受信確認: ${msg}`, rinfo.port, rinfo.address);
});

server.on('listening', () => {
    const address = server.address();
    console.log(`サーバーが起動しました -> ${address.address}:${address.port}`);
});

// 指定したポートでリッスン開始
server.bind(PORT, HOST);
