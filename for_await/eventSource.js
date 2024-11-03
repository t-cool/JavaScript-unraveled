const EventSource = require('eventsource');

function streamData() {
    const eventSource = new EventSource('http://localhost:3000/stream');
  
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received:', data);
    };
  
    eventSource.onerror = (error) => {
      console.error('Error:', error);
      eventSource.close();
    };
}
  
// 実行
streamData();