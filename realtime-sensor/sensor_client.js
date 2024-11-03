class SensorMonitor {
  constructor() {
    this.ws = new WebSocket('ws://localhost:8080');
    this.dataBuffer = [];
    this.setupWebSocket();
  }

  setupWebSocket() {
    this.ws.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      this.dataBuffer.push(data);
      
      // バッファがたまったら処理
      if (this.dataBuffer.length >= 5) {
        await this.processSensorData();
      }
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  async processSensorData() {
    const dataToProcess = [...this.dataBuffer];
    this.dataBuffer = [];

    for await (const reading of dataToProcess) {
      await this.analyzeSensorReading(reading);
    }
  }

  async analyzeSensorReading(reading) {
    // センサーデータの分析と表示
    console.log('Sensor Reading:', reading);
    
    // 異常値の検出
    if (reading.temperature > 35) {
      this.handleHighTemperature(reading);
    }
    
    // データベースへの保存など
    await this.saveSensorData(reading);
  }

  async saveSensorData(reading) {
    // データベースへの保存をシミュレート
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log('Saved reading:', reading.timestamp);
  }

  handleHighTemperature(reading) {
    console.warn('High temperature alert:', reading.temperature);
    // アラート処理を実装
  }
}

// 使用例
const monitor = new SensorMonitor();