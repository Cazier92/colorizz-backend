const router = require('express').Router()
const palettesCtrl = require('../controllers/palettes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', checkAuth, palettesCtrl.index)

router.post('/', checkAuth, palettesCtrl.create)

router.get('/:paletteId', checkAuth, palettesCtrl.show)

router.post('/:paletteId/paints/:paintId', checkAuth, palettesCtrl.associatePaint)

router.delete('/:paletteId/paints/:paintId', checkAuth, palettesCtrl.removePaint)




module.exports = router