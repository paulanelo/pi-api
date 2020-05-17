const { Router } = require('express');

const router = Router();

const PetController = require('../controllers/PetController');

router.get('/', PetController.store);

module.exports = router;
