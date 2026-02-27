import express from 'express';
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('UbiLearn backend running');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});