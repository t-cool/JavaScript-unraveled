async function streamData() {
    try {
      const response = await fetch('http://localhost:3000/stream');
      const decoder = new TextDecoder();
  
      // レスポンスボディをストリームとして非同期イテレーション
      for await (const chunk of streamAsyncIterable(response.body)) {
        const text = decoder.decode(chunk, { stream: true });
        console.log('Received:', text);
      }
      
      console.log('Stream complete');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // ストリームを非同期イテレータに変換するヘルパー関数
  async function* streamAsyncIterable(stream) {
    const reader = stream.getReader();
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        yield value;
      }
    } finally {
      reader.releaseLock();
    }
  }
  
  // 実行
  streamData();