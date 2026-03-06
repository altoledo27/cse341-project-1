const router = require('express').Router();

router.get('/', (req, res) =>{
    res.send("Hello, I'm listening");

});

module.exports = router;