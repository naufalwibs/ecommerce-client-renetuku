<template>
  <section id="wishlist-page">
        <div class="container">
          <h3 class="text-center title-page"><i class="fas fa-heart"></i> My Wishlist </h3>
            <div class="row">
                <div class="col-lg scrollable-table">
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col" colspan="2">Product</th>
                            <th scope="col" class="stock-ws-th">Stock Available</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                        <!-- ITEM -->
                          <WishlistCard
                          v-for="wishlist in wishlists"
                          :key="wishlist.id"
                          :wishlist="wishlist"
                          />
                        </tbody>
                      </table>
                      <h3 v-if="wishlists.length === 0" class="text-center"> Your don't have wishlist, explore now! </h3>
                </div>
            </div>
        </div>
        <Highlight class="mt-5"/>
      </section>
</template>

<script>
import WishlistCard from '../components/WishlistCard'
import Highlight from '../components/Highlight'

export default {
  name: 'Wishlist',
  components: {
    WishlistCard,
    Highlight
  },
  computed: {
    wishlists () {
      return this.$store.state.wishlists.filter(wishlist => wishlist.UserId === +localStorage.id)
    }
  },
  created () {
    this.$store.dispatch('fetchWishlist')
  }

}
</script>

<style>

</style>
