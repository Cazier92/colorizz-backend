const router = require('express').Router()
const mixturesCtrl = require('../controllers/mixtures.js')

// Routes

router.get('/', mixturesCtrl.index)

router.post('/', mixturesCtrl.create)
router.post('/:mixtureId/paints/:paintId', mixturesCtrl.associatePaint)

module.exports = router