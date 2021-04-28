<template>
  <div id="app">
    <NavbarBeforeLogin v-if="!navbar"/>
    <NavbarAfterLogin v-if="navbar"/>
    <router-view/>
  </div>
</template>

<script>
import NavbarBeforeLogin from './components/NavbarBeforeLogin'
import NavbarAfterLogin from './components/NavbarAfterLogin'

export default {
  name: 'App',
  components: {
    NavbarBeforeLogin,
    NavbarAfterLogin
  },
  computed: {
    navbar () {
      return this.$store.state.navbar
    }
  },
  created () {
    this.$store.dispatch('checkLocalStorage')
  }
}
</script>

<style>

</style>
