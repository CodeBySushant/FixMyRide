const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const services = [
  { id: 1, name: 'Oil Change', price: 500 },
  { id: 2, name: 'Engine Repair', price: 5000 },
  { id: 3, name: 'Tire Replacement', price: 1500 },
];

app.get('/api/services', (req, res) => {
  res.json(services);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
