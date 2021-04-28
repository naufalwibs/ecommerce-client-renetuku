<template>
  <tr>
    <td class="table-cart-image">
      <img class="cart-image" :src="wishlist.Product.image_url">
    </td>
    <td>{{ wishlist.Product.name }}</td>
    <td>
        <div class="col-lg">
            <p><strong> {{ wishlist.Product.stock }} </strong></p>
            <button @click.prevent="addToCart(wishlist.Product.id)" class="btn btn-light"><i class="fas fa-shopping-cart"></i> Add to Cart </button>
            <button @click.prevent="removeFromWishlist(wishlist.id)" class="btn btn-dark"><i class="fas fa-trash-alt"></i> Remove Wishlist </button>
        </div>
  </td>
    <td>Fashion</td>
    <td>{{ priceRupiah }}</td>
  </tr>
</template>

<script>
export default {
  name: 'WishlistCard',
  props: ['wishlist'],
  methods: {
    addToCart (id) {
      console.log(id)
      this.$store.dispatch('addToCart', { id })
    },
    removeFromWishlist (id) {
      this.$store.dispatch('removeFromWishlist', { id })
    }
  },
  computed: {
    priceRupiah () {
      return new Intl.NumberFormat('id-Rp', { style: 'currency', currency: 'IDR' }).format(this.wishlist.Product.price)
    }
  }
}
</script>

<style>

</style>
