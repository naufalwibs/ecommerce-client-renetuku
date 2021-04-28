<template>
    <section id="login-page">
        <div class="col-lg d-flex justify-content-center">
            <div class="container-fluid backlay">
            <main class="form-signin">
                <div class="col-lg d-flex justify-content-center logo-login">
                    <img src="../assets/renetuku-logo.png" alt="renetuku" width="200px">
                </div>
                <div class="col-lg">
                    <form class="login-form">
                        <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>
                        <label for="inputEmail" class="d-none">Email address</label>
                        <input v-model="email" type="email" id="email-login" class="form-control top" placeholder="Email address">
                        <label for="inputPassword" class="d-none">Password</label>
                        <input v-model="password" type="password" id="password-login" class="form-control bottom" placeholder="Password">
                        <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                        </div>
                        <button @click.prevent="toLogin" class="w-100 btn btn-lg btn-outline-light" type="submit">Sign in</button>
                        <p class="p-btn-register"> Don't Have an account? </p>
                        <button @click.prevent="toRegisterPage" class="w-100 btn btn-lg btn-outline-dark" type="submit">Register</button>
                        <p class="mt-5 mb-3 text-center">&copy; 2021</p>
                    </form>
                </div>
            </main>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toLogin () {
    //   console.log('Login')
      this.$store.dispatch('login', { email: this.email, password: this.password })
      this.email = ''
      this.password = ''
    },
    toRegisterPage () {
      this.$router.push('/register')
    }
  }

}
</script>

<style>

</style>
