import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Payment Service is running!');
});

app.get('/health', (c) => {
  return c.json({ status: 'ok', service: 'payment-service' });
});

const start = async () => {
  try {
    serve(
      {
        fetch: app.fetch,
        port: 8002,
        hostname: '0.0.0.0',
      },
      () => {
        console.log('Payment Service is running on port 8002');
      }
    );
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

start();
