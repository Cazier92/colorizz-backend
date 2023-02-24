const router = require('express').Router()
const paintsCtrl = require('../controllers/paints.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/
router.get('/', paintsCtrl.index)
router.get('/:id', paintsCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', checkAuth, paintsCtrl.create)

router.put('/:id', checkAuth, paintsCtrl.update)

router.delete('/:id', paintsCtrl.delete)


module.exports = router