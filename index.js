const express = require('express');
const mail = require('./mail.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

/*StartPage*/
app.get('/', function(req, res) {
  console.log('GET-request on INDEX is working.');
  res.render('index');
});

app.post('/', urlencodedParser, (req, res) => {
  console.log('POST-request on INDEX is working.');
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  var data = {
      name: req.body.name,
      email: req.body.email
  };
  console.log(data);
  mail.mail(data);
  res.status(200).send('OK');
});

/*Start web-server*/
app.listen('3000', () => {
  console.log('Server started on port 3000');
});