export function increaseQuality(item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1
  }
  return item
}

export function decreaseQuality(item) {
  let quality = item.quality
  if (item.quality > 0) {
    quality--
  }
  return quality
}

export function isAgedBrie(item) {
  return item.name === 'Aged Brie'
}

export function isBackStage(item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert'
}

export function isSulfuras(item) {
  return item.name === 'Sulfuras, Hand of Ragnaros'
}
