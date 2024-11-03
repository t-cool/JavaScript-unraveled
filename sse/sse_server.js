const express = require('express');
const app = express();

app.get('/stocks', (req, res) => {
  // SSEヘッダーの設定
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // 株価データを生成して送信
  const sendStockUpdate = () => {
    const stocks = [
      { symbol: 'AAPL', price: Math.random() * 200 + 150 },
      { symbol: 'GOOGL', price: Math.random() * 300 + 2500 },
      { symbol: 'MSFT', price: Math.random() * 100 + 300 }
    ];

    res.write(`data: ${JSON.stringify(stocks)}\n\n`);
  };

  // 1秒ごとにデータを送信
  const intervalId = setInterval(sendStockUpdate, 1000);

  // クライアントが接続を切った時の処理
  req.on('close', () => {
    clearInterval(intervalId);
  });
});

app.listen(3000, () => {
  console.log('SSE Server running on port 3000');
});