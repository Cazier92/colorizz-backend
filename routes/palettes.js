const router = require('express').Router()
const palettesCtrl = require('../controllers/palettes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', checkAuth, palettesCtrl.create)




module.exports = router