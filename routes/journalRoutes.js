const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');

// write gratitude post route
router.post('/write-journal', journalController.writeJournal);


module.exports = router;
