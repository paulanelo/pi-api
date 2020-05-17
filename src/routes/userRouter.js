const { Router } = require('express');

const router = Router();

const UserController = require('../controllers/UserController');

router.get('/', UserController.store);

module.exports = router;
