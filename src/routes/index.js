const express = require('express');
const router=express.Router();

router.get('/', (req, res) => {

    res.render('index.html', { title: 'JYREH' });

});

router.get('/contact', (req, res) => {

    
   
    res.render('contact.html', { title: '' });

});

module.exports = router;