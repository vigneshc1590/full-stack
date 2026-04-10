const express = require('express');
 
const bodyparser = require('body-parser');

const app = express();

const router = require('./routers/routers')

app.use(bodyparser.urlencoded({extended:false}))

app.use(router)

// app.get('/test', (req, res) => {
//   res.send('This request for "/test" directory');
// });


app.listen(3000)