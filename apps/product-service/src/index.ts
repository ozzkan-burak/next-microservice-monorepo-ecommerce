import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});
