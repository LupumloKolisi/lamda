const express = require('express');
const app = express();
const path = require('path');
const staticPath = path.join(__dirname);

// middleware

app.set('view engine', 'ejs');
app.use(express.static(staticPath));

// routes

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PROCESS || 3000;
app.listen(PORT, () => {
  console.log('port up');
});


app.get('/admin', (req, res) => {
  
});

const PORT = process.env.PROCESS || 3000;
app.listen(PORT, () => {
  console.log('port up');
});

