import { Item, Shop } from '../gilded-rose'

describe('Gilded Rose', () => {
  function createAnyItem(sellIn = 5, quality = 2, name = 'any item') {
    return new Item(name, sellIn, quality)
  }

  function createShop(sellIn = 5, quality = 2, name) {
    const item = createAnyItem(sellIn, quality, name)
    return new Shop([item])
  }

  test('All Items should have a SellIn value representing days left to sell the item', () => {
    const item = createAnyItem()

    expect(item.sellIn).toEqual(5)
  })

  test('All Items should have a quality value representing the value of the item', () => {
    const item = createAnyItem()

    expect(item.quality).toEqual(2)
  })

  test('The system lowers quality and sellIn of everyItem every day', () => {
    const shop = createShop()
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(1)
    expect(shop.items[0].sellIn).toEqual(4)
  })

  test('When the sell by date has passed quality degrades twice', () => {
    const shop = createShop(0, 4)
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(2)
    expect(shop.items[0].sellIn).toEqual(-1)
  })

  test('The quality of an item is never negative', () => {
    const shop = createShop(1, 0)
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(0)
  })

  test('Aged Brie increases quality the older it gets', () => {
    const shop = createShop(5, 3, 'Aged Brie')
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(4)
  })

  test('Aged Brie increases by 2 when sellIn date has arrived', () => {
    const shop = createShop(0, 48, 'Aged Brie')
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(50)
  })

  test('Aged Brie quality cannot be more than 50', () => {
    const shop = createShop(5, 50, 'Aged Brie')
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(50)
  })

  test('Sulfuras does not modify quality or sale date', () => {
    const shop = createShop(5, 20, 'Sulfuras, Hand of Ragnaros')
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(20)
    expect(shop.items[0].sellIn).toEqual(5)
  })

  test('Backstage passes increases quality as sellIn approaches', () => {
    const shop = createShop(20, 10, 'Backstage passes to a TAFKAL80ETC concert')
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(11)
  })

  test('Backstage passes increases by 2 quality when 10 days left to concert', () => {
    const shop = createShop(10, 10, 'Backstage passes to a TAFKAL80ETC concert')
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(12)
  })

  test('Backstage passes increases by 2 quality when less than 10 days left to concert', () => {
    const shop = createShop(6, 10, 'Backstage passes to a TAFKAL80ETC concert')
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(12)
  })

  test('Backstage passes increases by 3 quality when less than 5 days left to concert', () => {
    const shop = createShop(3, 10, 'Backstage passes to a TAFKAL80ETC concert')
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(13)
  })

  test('Backstage passes increases by 3 quality when 5 days left to concert', () => {
    const shop = createShop(5, 10, 'Backstage passes to a TAFKAL80ETC concert')
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(13)
  })

  test('Backstage passes quality drops to 0 after the concert', () => {
    const shop = createShop(0, 10, 'Backstage passes to a TAFKAL80ETC concert')
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(0)
  })
})
