const { Mixture, Paint, PaintMixture } = require("../models")

const create = async (req, res) => {
  try {
    req.body.profileId = req.user.profile.id
    const mixture = await Mixture.create(req.body)
    res.status(200).json(mixture)
  } catch (error) {
    res.status(500).json(error)
  }
}

const associatePaint = async (req, res) => {
  try {
    const { mixtureId, paintId } = req.params

    const association = await PaintMixture.create({
      paintId: paintId, mixtureId: mixtureId
    })
    res.status(200).json(association)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const mixtures = await Mixture.findAll(
      {
        include: [
          {model: Paint, as: 'paints', through: {attributes: []}},
        ]
      }
    )
    res.status(200).json(mixtures)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  associatePaint,
  index,
}