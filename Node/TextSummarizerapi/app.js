const express = require('express');
const bodyParser = require('body-parser');
const sumroutes = require('./routes/summarizer');
var cors = require('cors')



const app = express();
app.use(express.static('./public'));
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended :false}));
app.use(cors());

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type,Authorization');
    next();


});

app.use('/summarizer',sumroutes);
app.listen(3400);
