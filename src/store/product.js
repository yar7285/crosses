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
  state: {
    products: []
  },
  getters: {
    someFunc (state) {
      return state.products + 1
    }
  },
  mutations: {
    changeState (state, payload) { // setters ------ payload -> object val
      state.products = payload
    }
  },
  actions: {
    getProducts (context, payload) {
      const products = this.$http.get('products')
        .then(response => {
          return response.json()
        })
        .then(products => {
          this.products = products
        })

      context.commit('changeState', products)
    }
  }
}
