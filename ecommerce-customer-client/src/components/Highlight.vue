<template>
  <section id="highlight-product">
        <div class="container">

            <div class="col-lg-12 text-center">
                <h3> New Arrivals </h3>
            </div>
              <div class="row">
                <ProductCard
                v-for="(product, i) in productsSelect"
                :key="i"
                :product="product"
                />
            </div>
          </div>
      </section>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  name: 'Highlight',
  components: {
    ProductCard
  },
  data () {
    return {
      productToShow: 4
    }
  },
  computed: {
    productsSelect () {
      const show4 = []
      const show4Idx = []

      if (!this.$store.state.products[0]) {
        return 'Fetching...'
      } else {
        while (show4Idx.length < this.productToShow) {
          const r = Math.floor(Math.random() * this.$store.state.products.length)
          if (show4Idx.indexOf(r) === -1) show4Idx.push(r)
        }
        show4Idx.forEach(idx => {
          show4.push(this.$store.state.products[idx])
        })
      }

      if (show4[0]) {
        return show4
      } else {
        return 'Fetching...'
      }
    },
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }

}
</script>

<style>

</style>
