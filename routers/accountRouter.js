const router = require("express").Router();
const {accountControllers} = require('../controllers/staffControllers')

router.post('/login',accountControllers.loginControllerService)
router.post('/create',accountControllers.createAccountService)

module.exports = router;