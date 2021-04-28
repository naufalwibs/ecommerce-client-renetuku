<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/renetuku-bg.png">
          </div>
            <BannerCard
            v-for="banner in banners"
            :key="banner.id"
            :banner="banner"
            />
          <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
  </div>
</template>

<script>
import BannerCard from './BannerCard'

export default {
  name: 'Carrousel',
  components: {
    BannerCard
  },
  computed: {
    banners () {
      return this.$store.state.banners.filter(banner => banner.status === 'Active')
    }
  },
  created () {
    this.$store.dispatch('fetchBanners')
  }
}
</script>

<style>

</style>
