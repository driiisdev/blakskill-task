const express = require('express');
const TradeController = require('../controllers/trades')

const router = express.Router();

router.post('/', TradeController.createTrade);
router.get('/', TradeController.getAllTrades);
router.get('/:id', TradeController.getTradeById);
router.put('/:id', TradeController.updateTrade);
router.patch('/:id', TradeController.updateTrade);
router.delete('/:id', TradeController.deleteTrade);

module.exports = router;
