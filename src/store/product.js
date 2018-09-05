class Product {
  constructor (title, description, ownerId, price, quantity, size, imageSrc = '', promo = false, inStock, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.inStock = inStock
    this.price = price
    this.size = size
    this.quantity = quantity
    this.id = id
  }
}

export default {

}
