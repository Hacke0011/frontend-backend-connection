const express = require('express');
const cors = require('cors');
const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
