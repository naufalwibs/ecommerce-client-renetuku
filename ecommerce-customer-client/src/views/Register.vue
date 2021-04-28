<template>
    <section id="register-page">
        <div class="col-lg d-flex justify-content-center">
            <div class="container-fluid backlay">
               <main class="form-signin">
                   <div class="col-lg d-flex justify-content-center logo-login">
                       <img src="../assets/renetuku-logo.png" alt="renetuku" width="200px">
                   </div>
                   <div class="col-lg">
                       <form class="login-form">
                         <h1 class="h3 mb-3 fw-normal text-center">Feel free to register</h1>
                         <label for="inputEmail" class="d-none">Email address</label>
                         <input v-model="email" type="email" id="email-login" class="form-control top" placeholder="Email address">
                         <label for="inputPassword" class="d-none">Password</label>
                         <input v-model="password" type="password" id="password-login" class="form-control middle" placeholder="Password">
                         <label for="repeat-password-register" class="d-none">Repeat Password</label>
                         <input v-model="repeatPassword" type="password" id="repeat-password-register" class="form-control bottom" placeholder="Repeat Password">
                         <div class="checkbox mb-3">
                           <label>
                             <input type="checkbox" value="remember-me"> I accept terms & condtions.
                           </label>
                         </div>
                         <button @click.prevent="toRegister" class="w-100 btn btn-lg btn-outline-light" type="submit">Register</button>
                         <p class="p-btn-register"> Have an account? </p>
                         <button @click.prevent="toLoginPage" class="w-100 btn btn-lg btn-outline-dark" type="submit">Back to Login Page</button>
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
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    toRegister () {
      if (this.password === this.repeatPassword) {
        this.$store.dispatch('register', { email: this.email, password: this.password })
        this.emptyInput()
      } else {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: "Repeat Password did'nt match",
          footer: '<a>Powered by Heroku and Firebase</a>'
        })
        this.emptyInput()
      }
    },
    toLoginPage () {
      this.$router.push('/login')
    },
    emptyInput () {
      this.email = ''
      this.password = ''
      this.repeatPassword = ''
    }
  }

}
</script>

<style>

</style>
