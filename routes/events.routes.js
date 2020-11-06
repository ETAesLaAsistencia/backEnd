const express = require('express');
const router = express.Router();

// Controller
const {renderAllEventsFrontEnd
} = require('../controllers/events.controller');

// Get All Events
router.get('/events', renderAllEventsFrontEnd);

module.exports = router;
