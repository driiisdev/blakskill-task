const Trade = require('../models/trades');

class TradeController {
  static async createTrade (req, res) {
    try {
      const trade = await Trade.create(req.body);
      res.status(201).json(trade);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create trade' });
    }
  };
  
  static async getAllTrades(req, res) {
    try {
      const trades = await Trade.findAll();
      res.status(200).json(trades);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch trades' });
    }
  };
  
  static async getTradeById (req, res) {
    try {
      const id = req.params.id;
      const trade = await Trade.findByPk(id);
      if (!trade) {
        res.status(404).send('ID not found');
      } else {
        res.status(200).json(trade);
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch trade' });
    }
  };
  
  static async updateTrade (req, res) {
    res.status(405).send('Method Not Allowed'); 
  };
  
  static async deleteTrade (req, res) {
    res.status(405).send('Method Not Allowed');
  };
}

module.exports = TradeController;
