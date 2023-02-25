const router = require('express').Router()
const palettesCtrl = require('../controllers/palettes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/:paletteId', checkAuth, palettesCtrl.show)

router.post('/', checkAuth, palettesCtrl.create)

router.post('/:paletteId/paints/:paintId', checkAuth, palettesCtrl.associatePaint)




module.exports = router