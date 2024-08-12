/*
//  convert jsonString to jsonObject 

const jsonString = '{"name": "john","age": 30,"city":"new york"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);

// convert jsonObject to jsonString

const objectToConvert = {
    name: "Alice",
     age: 25
};
const json = JSON.stringify(objectToConvert);
console.log(json);
*/




const express = require('express');
const app = express();

 const db = require('./db');

 const bodyParser = require('body-parser');
 app.use(bodyParser.json());

 const Family = require('./models/family')

app.get('/family', async (req, res) => {
    try {
        const family = await Family.find();
        res.json(family);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/family', async (req, res) => {
    try {
        const family = new Family(req.body);
        await family.save();
        res.status(201).send(family);
    } catch (err) {
        res.status(500).send(err.message);
    }
});



app.get('/',function(req,res){
    res.send('Hello World , how are you ?');
})





app.listen(3000 , ()=> {
    console.log('listening on port 3000');
})

