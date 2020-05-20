const { Router } = require('express');

const router = Router();

const UserController = require('../controllers/UserController');

router.post('/', UserController.store);
router.get('/:id', UserController.show);
router.delete('/:id', UserController.delete);
router.put('/:id', UserController.update);

module.exports = router;
