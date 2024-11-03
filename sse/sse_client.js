const EventSource = require('eventsource');

class StockTracker {
  constructor() {
    this.eventSource = new EventSource('http://localhost:3000/stocks');
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.eventSource.onmessage = async (event) => {
      try {
        const stocks = JSON.parse(event.data);
        await this.processStockUpdates(stocks);
      } catch (error) {
        console.error('Error processing stock data:', error);
      }
    };

    this.eventSource.onerror = (error) => {
      console.error('SSE Error:', error);
      this.eventSource.close();
    };
  }

  async processStockUpdates(stocks) {
    for await (const stock of stocks) {
      this.updateStockDisplay(stock);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  updateStockDisplay(stock) {
    console.log(`${stock.symbol}: $${stock.price.toFixed(2)}`);
  }
}

// 使用例
const tracker = new StockTracker();