const express = require('express');
const app = express();

// グローバルカウンター
let globalCount = 0;

app.get('/stream', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // データを生成するジェネレータ関数
  async function* generateData() {
    while (globalCount < 50) {  // グローバルカウンターを使用
      yield JSON.stringify({ count: globalCount++, timestamp: Date.now() });
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // データをストリーミング
  const generator = generateData();
  for await (const data of generator) {
    res.write(`data: ${data}\n\n`);
  }

  res.end();
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});