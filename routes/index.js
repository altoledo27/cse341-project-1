const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) =>{
    //swagger.tags['Hello, I'm listening']
    res.send("Hello, I'm listening");

});
router.use('/contacts', require('./contacts'));

module.exports = router;