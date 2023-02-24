const { Paint } = require('../models')


async function create(req, res) {
  try {
		req.body.profileId = req.user.profile.id
    const paint = await Paint.create(req.body)
    res.status(200).json(paint)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const paints = await Paint.findAll()
    res.status(200).json(paints)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function show(req, res) {
  try {
    const paint = await Paint.findByPk(req.params.id)
    res.status(200).json(paint)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  try {
    const paint = await Paint.findByPk(req.params.id)
    if (paint.profileId === req.user.profile.id) {
      paint.set(req.body)
      await paint.save()

      res.status(200).json(paint)
    } else {
      throw new Error(
        'Not Authorized'
      )
    }
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deletePaint(req, res) {
  try{
    const paint = await Paint.findByPk(req.params.id)
    if (paint.profileId === req.user.profile.id) {
      await paint.destroy()

      res.status(200).json(paint)
    } else {
      throw new Error(
        'Not Authorized'
      )
    }
  } catch (error) {
    res.status(500).json({ err: error })
  }
}


module.exports = {
  create,
  index,
  show,
  update,
  delete: deletePaint,
}