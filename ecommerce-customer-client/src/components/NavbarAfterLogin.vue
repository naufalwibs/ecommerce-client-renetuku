<template>
      <nav id="nav-after-login" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a @click.prevent="toShopping" class="navbar-brand" href="#">
                <img src="../assets/renetuku-nav-logo.png" alt="" width="150" class="d-inline-block align-top brand-radius">
            </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a @click.prevent="toShopping" class="nav-link active" aria-current="page" href="#"><i class="fas fa-shopping-bag"></i> Shop</a>
                </li>
                <li class="nav-item">
                    <a @click.prevent="toWishlist" class="nav-link" href="#"><i class="fas fa-heart"></i> My Wishlist</a>
                </li>
                <li class="nav-item">
                    <a @click.prevent="toCart" class="nav-link" href="#"><i class="fas fa-shopping-cart"></i> My Cart</a>
                </li>
                <li class="nav-item">
                    <a @click.prevent="toHistory" class="nav-link" href="#"><i class="fas fa-history"></i> Transaction History</a>
                </li>
                <li class="nav-item">
                    <a @click.prevent="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavbarAfterLogin',
  methods: {
    toShopping () {
      this.$router.push('/shopping')
    },
    toWishlist () {
      this.$router.push('/wishlist')
    },
    toCart () {
      this.$router.push('/cart')
    },
    toHistory () {
      this.$router.push('/history')
    },
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
