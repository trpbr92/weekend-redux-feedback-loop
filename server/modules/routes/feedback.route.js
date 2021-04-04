const express = require('express');
let router = express.Router();

router.get('/', (req,res)=>{
    console.log('in /feeback GET', req.body);
    res.send('rosebud');
})

router.post('/', (req,res)=>{
    console.log('in /feeback POST', req.body);
    res.send('Aye Carumba');
})



module.exports = router;