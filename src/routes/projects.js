const express = require('express');
const { Project } = require('../models');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll({ where: { UserId: req.user.id } });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const project = await Project.create({ ...req.body, UserId: req.user.id });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add more routes for updating and deleting projects

module.exports = router;