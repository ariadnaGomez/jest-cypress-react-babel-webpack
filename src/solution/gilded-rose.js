import {
  isSulfuras,
  isBackStage,
  isAgedBrie,
  increaseQuality,
  decreaseQuality,
} from 'solution/gilded-rose-utilities'

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (!isSulfuras(item)) {
        this.items[i] = this.updateNotSulfurasItem(item)
      }
    }

    return this.items
  }

  updateNotSulfurasItem(item) {
    item.sellIn = item.sellIn - 1
    if (isBackStage(item)) {
      item = updateBackstageItem(item)
    } else if (isAgedBrie(item)) {
      item = updateAgedBrie(item)
    } else {
      item = updateNormalItems(item)
    }
    return item
  }
}

function updateAgedBrie(item) {
  item = increaseQuality(item)

  if (item.sellIn < 0) {
    item = increaseQuality(item)
  }
  return item
}

function updateBackstageItem(item) {
  item = increaseQuality(item)
  if (item.sellIn < 10) {
    item = increaseQuality(item)
  }
  if (item.sellIn < 5) {
    item = increaseQuality(item)
  }
  if (item.sellIn < 0) {
    item.quality = 0
  }
  return item
}

function updateNormalItems(item) {
  item.quality = decreaseQuality(item)
  if (item.sellIn < 0) {
    item.quality = decreaseQuality(item)
  }
  return item
}

module.exports = {
  Item,
  Shop,
}
