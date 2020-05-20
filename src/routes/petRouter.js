const { Router } = require('express');

const router = Router();

const PetController = require('../controllers/PetController');

router.post('/', PetController.store);
router.get('/:id', PetController.show);

module.exports = router;
