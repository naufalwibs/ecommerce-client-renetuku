<template>
  <section id="product-page">
    <Carrousel/>

    <div class="col-lg-12 text-center">
        <h3> Best of Best Products </h3>
    </div>

    <div class="col-lg d-flex justify-content-center">
        <input
        v-model="search"
        type="text"
        class="form-control search-bar"
        placeholder="Search products here..."
        >
    </div>

    <!-- PRODUCT CARD -->
    <div class="container scrollable">
        <div class="row row-products">
            <ProductCard
            v-for="product in filteredProduct"
            :key="product.id"
            :product="product"
            />
        </div>
    </div>

    </section>
</template>

<script>
import Carrousel from '../components/Carrousel'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Shopping',
  data () {
    return {
      search: ''
    }
  },
  components: {
    Carrousel,
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    filteredProduct () {
      return this.$store.state.products.filter(product => product.name.toLowerCase().includes(this.search.toLowerCase()) && product.stock > 0)
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchBanners')
  }

}
</script>

<style>

</style>
