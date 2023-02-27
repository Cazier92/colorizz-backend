const { Profile, Paint, Palette, PaintPalette } = require('../models')

async function create(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    // const paletteExists = await Palette.findOne({ where: { profileId: req.body.profileId } })
    // if (paletteExists) {
    //   console.log('PALETTE EXISTS:', paletteExists)
    //   throw new Error('Palette Already Exists')
    // } else {
      const palette = await Palette.create(req.body)
      res.status(200).json(palette)
    // }
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function associatePaint(req, res) {
  try {
    const paletteId = req.params.paletteId
    const paintId = req.params.paintId
    const palette = await Palette.findByPk(paletteId, {
      include: [
        {model: Paint, as: 'paints'}
      ]
    })
    const association = await PaintPalette.create({
      paletteId: paletteId,
      paintId: paintId,
    })
    res.status(200).json(palette)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function removePaint(req, res) {
  try {
    const paletteId = req.params.paletteId
    const paintId = req.params.paintId
    const palette = await Palette.findByPk(paletteId, {
      include: [
        {model: Paint, as: 'paints'}
      ]
    })
    const association = await PaintPalette.findOne({
      where: {paletteId: paletteId, paintId: paintId}
    })
    await association.destroy()
    
    res.status(200).json(palette)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function show(req, res) {
  try {
    const userPalette = await Palette.findByPk(req.params.paletteId, {include: [
      {model: Paint, as: 'paints'}
    ]})
    res.status(200).json(userPalette)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const palettes = await Palette.findAll({
      include: [
        {model: Paint, as: 'paints'}

      ]
      
    })
    res.status(200).json(palettes)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create,
  associatePaint,
  show,
  removePaint,
  index,
}