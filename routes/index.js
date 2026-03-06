const router = require('express').Router();

router.get('/', (req, res) =>{
    res.send("Hello, I'm listening");

});
router.use('/contacts', require('./contacts'));

module.exports = router;