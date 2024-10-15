const express = require('express');
const { Client } = require('../models');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const clients = await Client.findAll({ where: { UserId: req.user.id } });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const client = await Client.create({ ...req.body, UserId: req.user.id });
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add more routes for updating and deleting clients

module.exports = router;