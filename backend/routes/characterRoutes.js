const express = require('express');
const { generateCharacter, regenerateField } = require('../controllers/characterController.js');

const router = express.Router();

router.post('/generate', generateCharacter);
router.post('/regenerate-field', regenerateField);

module.exports = router;