const eventCtrl = {};

// Models
const Event = require('../models/Note');

eventCtrl.renderAllEventsFrontEnd = async (req, res) => {
   const notes = await Event.find()
      .sort({ date: 'desc' })
      .lean();
 //   res.render('events/all-events', { notes });
    res.send(notes);
  };

  module.exports = eventCtrl;