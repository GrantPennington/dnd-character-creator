const express = require('express');
const { generateCharacter } = require('../controllers/characterController.js');

const router = express.Router();

router.post('/generate', generateCharacter);

module.exports = router;