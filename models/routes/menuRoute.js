
const express = require('express');
const router = express.Router();
const Menu = require('./../menu');

router.post('/', async(req,res) =>{
    try{
        const data = req.body
        const newMenu = new Menu(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response); 
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
 })

 router.get('/', async(req,res) =>{
    try{
        const data = await Menu.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
 })

 router.get('/:taste', async(req,res) =>{
    try{
        const tastes = req.params.taste;
        if(tastes == 'spicy' || tastes == 'sour' || tastes == 'sweet'){
            const response = await Menu.find({taste: tastes});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }
        catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal server error'});
    }
 })

 

 module.exports = router;


