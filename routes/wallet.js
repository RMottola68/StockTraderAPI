var express = require('express');
var router = express.Router();
const {Wallet} = require('../lib/models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a value');
});

//CREATE
router.post('/', async function(req, res, next) {
  console.log(req.body);
  let wallet = await Wallet.create(req.body);

  // Alternative to async await
  // Stock.create(req.body)
  //   .then((stock) =>{
  //     res.json({success: true})
  //   })

  res.json({wallet});
});

//UPDATE
router.put('/:id', async function(req, res, next) {
  console.log(req.body);
  console.log(req.params);
  let wallet = await Wallet.update(req.body, {where: {id: req.params.id}
  });
  
  res.json({success:true});
});

module.exports = router;
