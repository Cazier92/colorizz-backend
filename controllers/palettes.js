const { Profile, Paint, Palette } = require('../models')

async function create(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const paletteExists = await Palette.findOne({ where: { profileId: req.body.profileId } })
    if (paletteExists) {
      console.log('PALETTE EXISTS:', paletteExists)
      throw new Error('Palette Already Exists')
    } else {
      const palette = await Palette.create(req.body)
      res.status(200).json(palette)
    }
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create
}