const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express is working!');
});

app.listen(7777, () => {
  console.log('Server running at http://localhost:7777');
});
