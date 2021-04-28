<template>
  <div class="carousel-item">
    <img :src="banner.banner_url">
  </div>
</template>

<script>
export default {
  name: 'BannerCard',
  props: ['banner']
}
</script>

<style>

</style>
