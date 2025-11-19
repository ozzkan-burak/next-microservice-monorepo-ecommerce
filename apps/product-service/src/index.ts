import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors({
  origin: ['http://localhost:3002', 'http://localhost:3003'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});
