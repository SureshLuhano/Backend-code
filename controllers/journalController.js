
const Journal = require('../models/journalModel');
const AppError = require('../utils/appError');

exports.writeJournal = async (req, res, next) => {
    try {
        const {freeFlow, reFrame, devotional} = req.body;

        // Check if required fields are provided
        if((!freeFlow && !reFrame && !devotional)){
            return next(new AppError('Missing arguments', 400));
        };

       
        // Prepare the journal object based on journalType
        let journalData = {freeFlow, reFrame, devotional};
      

        // Create a new journal entry
        const journal = new Journal(journalData);
        console.log("🚀 ~ exports.writeJournal= ~ journal:", journal);

        // Save the journal entry
        await journal.save();

        // Respond with a success message and the created journal entry
        res.status(201);
    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        res.status(500).send(error);
    }
}

