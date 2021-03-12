var express = require('express');
var router = express.Router();
const {Portfolio} = require('../lib/models');
const yahooStockPrices = require('yahoo-stock-prices');

// CREATE perform POST request on http://localhost:3000/api/v1/portfolio
// DELETE perform DELETE request on http://localhost:3000/api/v1/portfolio/:id
// UPDATE perform PUT request on http://localhost:3000/api/v1/portfolio/:id

//NON-REST - CUSTOM
//GET /api/v1/stocks/search/AAPL

router.get('/search/:symbol', async function(req, res, next) {
  console.log(req.query);
  console.log(req.params);

  try{
  const data = await yahooStockPrices.getCurrentData(req.params.symbol);
  res.json({success: true, data: data});
  } catch(err){
    res.json({success: false, data: {}})
  }

});

//CREATE
router.post('/', async function(req, res, next) {
  console.log(req.body);
  let stock = await Portfolio.create(req.body);

    // Alternative to async await
    // Portfolio.create(req.body)
    //   .then((stock) =>{
    //     res.json({success: true})
    //   })

  res.json({stock});
});

//UPDATE
router.put('/:id', async function(req, res, next) {
  console.log(req.body);
  console.log(req.params);
  let stock = await Portfolio.update(req.body, {where: {id: req.params.id}
  });
  
  res.json({success:true});
});

//DELETE
router.delete('/:id', async function(req, res, next) {
  let dog = await Portfolio.destroy({where: {id: req.params.id}
  });
  res.json({success:true});
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a stock');
});

module.exports = router;
