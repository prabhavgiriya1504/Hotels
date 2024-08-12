const express = require('express');
const app = express();

 const db = require('./db');

 const bodyParser = require('body-parser');
 app.use(bodyParser.json());

 


app.get('/',function(req,res){
    res.send('Hello World , how are you ?');
})

const personRoutes = require('./models/routes/personRoute');
app.use('/person',personRoutes);

const menuRoutes = require('./models/routes/menuRoute');
app.use('/menu',menuRoutes);



app.listen(3000 , ()=> {
    console.log('listening on port 3000');
})

