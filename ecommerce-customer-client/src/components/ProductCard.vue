<template>
<div class="col-lg-3">
    <div class="card thumb-product">
        <img :src="product.image_url">
        <div class="card-body">
            <h5 class="card-title"> {{ product.name }} </h5>
            <p class="card-text"><i class="fab fa-vuejs"></i> Category {{ product.category }} </p>
            <p class="card-text"><i class="fas fa-cubes"></i> Stock {{ product.stock }} </p>
            <p class="card-text"><i class="fas fa-tag"></i> Price {{ priceRupiah }}</p>
            <div class="d-flex justify-content-around btn-card">
                <p @click.prevent="addToCart(product.id)" class="btn btn-dark"><i class="fas fa-cart-plus"></i> Add to Cart </p>
                <p @click.prevent="addToWishlist(product.id)" class="btn btn-outline-dark"><i class="fas fa-heart"></i> Wishlist </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart (id) {
      this.$store.dispatch('addToCart', { id })
    },
    addToWishlist (id) {
      this.$store.dispatch('addToWishlist', { ProductId: id, UserId: +localStorage.id })
    }
  },
  computed: {
    priceRupiah () {
      return new Intl.NumberFormat('id-Rp', { style: 'currency', currency: 'IDR' }).format(this.product.price)
    }
  }
}

</script>

<style>

</style>
