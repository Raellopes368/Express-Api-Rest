const Purchase = require('../models/Purchase')
const Ad = require('../models/Ad')

class SaleController {
  async update (req, res) {
    const purchase = await Purchase.findById(req.params.id).populate('ad')

    if (!purchase.ad.author.equals(req.userId)) {
      return res.status(401).json({ error: "You're not the ad author" })
    }

    if (purchase.ad.purchasedBy) {
      return res
        .status(400)
        .json({ error: 'This ad had already been purchased' })
    }

    const ad = await Ad.findByIdAndUpdate(
      purchase.ad._id,
      { purchasedBy: purchase._id },
      {
        new: true
      }
    )

    res.json(ad)
  }
}

module.exports = new SaleController()
