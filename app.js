const express = require('express');
 
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded())

// app.get('/test', (req, res) => {
//   res.send('This request for "/test" directory');
// });


app.listen(3000)