const router = require('express').Router()
const mixturesCtrl = require('../controllers/mixtures.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

// Routes
/*---------- Public Routes ----------*/
router.get('/', mixturesCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', checkAuth, mixturesCtrl.create)
router.post('/:mixtureId/paints/:paintId', checkAuth, mixturesCtrl.associatePaint)

module.exports = router