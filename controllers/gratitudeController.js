const Gratitude = require('../models/gratitudeModel');

exports.writeGratitude = async (req, res, next) => {
    // write gratitude
    try {
       const {gratitudeInput1, gratitudeInput2, gratitudeInput3 } = req.body;
    
       const gratitude = new Gratitude({gratitudeInput1, gratitudeInput2, gratitudeInput3 });
       await gratitude.save();
       res.status(201).json({ message: 'Gratitude created successfully...', data: gratitude });
    } catch (error) {
       res.status(500).send(error);
    }
};
