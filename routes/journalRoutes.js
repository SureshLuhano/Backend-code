const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');

// write gratitude post route
router.post('/write-journal', journalController.writeJournal);

// Route to get all journal entries by userId
router.get('/get-journal/:userId', journalController.getJournalEntries);

// Route to get all journal entries by type
router.get('/get-journal/type/:journalType', journalController.getJournalEntriesByType);

module.exports = router;
