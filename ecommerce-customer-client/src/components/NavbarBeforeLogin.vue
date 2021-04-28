<template>
      <nav id="nav-before-login" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a @click="toLandingPage" class="navbar-brand" href="#">
                <img src="../assets/renetuku-nav-logo.png" alt="rt-logo" width="150" class="d-inline-block align-top brand-radius">
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
                    <a @click.prevent="toLoginPage" class="nav-link active" aria-current="page" href="#"><i class="fas fa-sign-in-alt"></i> Login</a>
                </li>
                <li class="nav-item">
                    <a @click.prevent="toRegisterPage" class="nav-link" href="#"><i class="fas fa-clipboard-list"></i> Register</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavbarBeforeLogin',
  methods: {
    toLoginPage () {
      this.$router.push('/login')
    },
    toRegisterPage () {
      this.$router.push('/register')
    },
    toShopping () {
      this.$router.push('/shopping')
    },
    toLandingPage () {
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>
