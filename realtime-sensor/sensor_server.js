const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

// センサーデータを生成する関数
function generateSensorData() {
  return {
    temperature: Math.random() * 30 + 10,
    humidity: Math.random() * 50 + 30,
    pressure: Math.random() * 100 + 900,
    timestamp: Date.now()
  };
}

wss.on('connection', (ws) => {
  console.log('New client connected');

  // センサーデータの定期送信
  const intervalId = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      const data = generateSensorData();
      ws.send(JSON.stringify(data));
    }
  }, 1000);

  ws.on('close', () => {
    clearInterval(intervalId);
    console.log('Client disconnected');
  });
});

console.log('Sensor WebSocket server running on port 8080');