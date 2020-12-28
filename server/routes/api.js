const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/test', (req, res) => {
  res.send([{
    title:"Hellow 3amo",
    description:"Hi 3amo do u have layz chips?"
  }])
});

router.post('/posty' , (req,res) =>{
  res.send("Hello " +req.body.name);
});

router.get('/posty/:name', (req, res) =>{
  res.send("Hello " + req.params.name + "!");
})

module.exports = router;
