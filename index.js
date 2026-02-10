const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function randomColor() {
  const random = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${random}`;
}
document.body.addEventListener("click", randomColor);

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.send('First Pipeline Challenge - Week 4 GET REKT EVRY OTHER TEAM');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

app.body.style.backgroundColor = "red";
