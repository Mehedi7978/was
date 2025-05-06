const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Render backend! hello how  you backend is working properly ' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
