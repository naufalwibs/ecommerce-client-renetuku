<template>
  <div>
    <Carrousel/>
    <Highlight/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carrousel from '../components/Carrousel'
import Highlight from '../components/Highlight'

export default {
  name: 'Landing',
  components: {
    Carrousel,
    Highlight
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchBanners')
  }
}
</script>
