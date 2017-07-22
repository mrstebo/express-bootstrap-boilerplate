const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

app.get('/', (req, res) => {
  res.render('index', {
    theDate: new Date().toString()
  });
})

module.exports = app;
