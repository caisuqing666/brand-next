import { streamText } from 'ai';
import 'dotenv/config';

console.log('API Key:', process.env.AI_GATEWAY_API_KEY ? `Loaded` : 'NOT FOUND');

async function main() {
  try {
    const result = streamText({
      model: 'claude-3-5-sonnet-latest',
      prompt: 'Say hello',
    });

    // 使用 fullStream 来捕获包括错误在内的所有信息
    for await (const part of result.fullStream) {
      console.log('Part type:', part.type);
      
      if (part.type === 'text-delta') {
        // text-delta 事件携带字段名为 text，而非 delta
        process.stdout.write(part.text);
      } else if (part.type === 'error') {
        console.error('Stream error:', part.error);
      }
    }
  } catch (error) {
    console.error('Caught error:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error cause:', (error as any).cause);
      console.error('Full error:', JSON.stringify(error, null, 2));
    }
  }
}

main();