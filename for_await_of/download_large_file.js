async function streamData() {
    try {
      const response = await fetch('http://localhost:3000/stream');
      const decoder = new TextDecoder();
  
      // レスポンスボディをストリームとして非同期イテレーション
      for await (const chunk of streamAsyncIterable(response.body)) {
        const text = decoder.decode(chunk, { stream: true });
        console.log('Received:', text);
      }
    } catch (error) {
      console.error('Error:', error);
    }
}