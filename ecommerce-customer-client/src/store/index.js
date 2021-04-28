import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navbar: false,
    checkoutModal: false,
    products: [],
    banners: [],
    carts: [],
    wishlists: [],
    histories: []
  },
  mutations: {
    setNavbar (state, payload) {
      state.navbar = payload
    },
    setCheckoutModal (state, payload) {
      state.checkoutModal = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    },
    setWishlists (state, payload) {
      state.wishlists = payload
    },
    setHistories (state, payload) {
      state.histories = payload
    }
  },
  actions: {
    login (context, payload) {
      axios
        .post('/loginCustomer', {
          email: payload.email,
          password: payload.password
        })
        .then(response => {
          localStorage.setItem('id', response.data.id)
          localStorage.setItem('email', response.data.email)
          localStorage.setItem('access_token', response.data.access_token)
          context.commit('setNavbar', true)
          router.push('/shopping')
          this._vm.$swal({
            icon: 'success',
            title: 'Login success!',
            text: `Welcome to Renetuku ${localStorage.email.split('@')[0]}`,
            footer: '<a>Powered by Heroku and Firebase</a>'
          })
        })
        .catch(err => {
          this._vm.$swal({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`,
            footer: '<a>Powered by Heroku and Firebase</a>'
          })
        })
    },
    logout (context, payload) {
      context.commit('setNavbar', false)
      this._vm.$swal({
        icon: 'success',
        title: 'Logout success!',
        text: `See you again ${localStorage.email.split('@')[0]}`,
        footer: '<a>Powered by Heroku and Firebase</a>'
      })
      localStorage.removeItem('id')
      localStorage.removeItem('email')
      localStorage.removeItem('access_token')
    },
    register (context, payload) {
      axios
        .post('/register', payload)
        .then(response => {
          this._vm.$swal({
            icon: 'success',
            title: 'Register success!',
            text: `Welcome to Renetuku, ${response.data.message}`,
            footer: '<a>Powered by Heroku and Firebase</a>'
          })
          router.push('/login')
        })
        .catch(err => {
          this._vm.$swal({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.detail}`,
            footer: '<a>Powered by Heroku and Firebase</a>'
          })
        })
    },
    fetchProducts (context, payload) {
      axios
        .get('/products')
        .then(response => {
          context.commit('setProducts', response.data.products)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBanners (context, payload) {
      axios
        .get('/banners')
        .then(response => {
          context.commit('setBanners', response.data.banners)
        })
        .catch(err => {
          console.log({ err })
        })
    },
    fetchCarts (context, payload) {
      axios
        .get('/carts', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(response => {
          context.commit('setCarts', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      if (!localStorage.access_token) {
        this._vm.$swal({
          icon: 'error',
          title: 'Add to Cart Failed!',
          text: 'You must login first.',
          footer: '<a>Powered by Heroku and Firebase</a>'
        })
      } else {
        axios
          .post(`/carts/${payload.id}`, {
            ProductId: payload.id,
            UserId: +localStorage.id
          }, {
            headers: {
              access_token: localStorage.access_token
            }
          })
          .then(response => {
            this._vm.$swal({
              icon: 'success',
              title: `${response.data.message} !`,
              text: 'Item can be viewed at my cart',
              footer: '<a>Powered by Heroku and Firebase</a>'
            })
            context.dispatch('fetchCarts')
          })
          .catch(err => {
            console.log({ err })
            this._vm.$swal({
              icon: 'error',
              title: 'Stock Item Exceed',
              text: 'Already on your cart, last stock item, checkout now!',
              footer: '<a>Powered by Heroku and Firebase</a>'
            })
          })
      }
    },
    deleteFromCart (context, payload) {
      this._vm.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`/carts/${payload.id}`, {
              headers: {
                access_token: localStorage.access_token
              }
            })
            .then(response => {
              this._vm.$swal(
                'Deleted!',
                `${response.data.message}`,
                'success'
              )
              context.dispatch('fetchCarts')
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    },
    updateQuantity (context, payload) {
      axios
        .patch(`/carts/${payload.id}`, {
          id: payload.id,
          quantity: payload.quantity
        }, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(cart => {
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          if (err.response.data.detail) {
            this._vm.$swal({
              icon: 'error',
              title: 'Not Valid Stock Number!',
              text: `${err.response.data.detail}`,
              footer: '<a>Powered by Heroku and Firebase</a>'
            })
          } else {
            this._vm.$swal({
              icon: 'error',
              title: 'Stock Item Exceed',
              text: 'Last stock item, checkout now!',
              footer: '<a>Powered by Heroku and Firebase</a>'
            })
          }
          context.dispatch('fetchCarts')
        })
    },
    fetchWishlist (context, payload) {
      axios
        .get('/wishlists', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(response => {
          context.commit('setWishlists', response.data)
        })
        .catch(err => {
          console.log({ err })
        })
    },
    addToWishlist (context, payload) {
      if (!localStorage.access_token) {
        this._vm.$swal({
          icon: 'error',
          title: 'Add to Wishlist Failed!',
          text: 'You must login first.',
          footer: '<a>Powered by Heroku and Firebase</a>'
        })
      } else {
        axios
          .post('/wishlists', payload, {
            headers: {
              access_token: localStorage.access_token
            }
          })
          .then(response => {
            this._vm.$swal({
              icon: 'success',
              title: 'Add to Wishlist Successfully!',
              text: 'Item can be viewed at my wishlist',
              footer: '<a>Powered by Heroku and Firebase</a>'
            })
            context.dispatch('fetchWishlist')
          })
          .catch(err => {
            this._vm.$swal({
              icon: 'error',
              title: 'Add to Wishlist Failed!',
              text: `${err.response.data.message}`,
              footer: '<a>Powered by Heroku and Firebase</a>'
            })
          })
      }
    },
    removeFromWishlist (context, payload) {
      this._vm.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`/wishlists/${payload.id}`, {
              headers: {
                access_token: localStorage.access_token
              }
            })
            .then(response => {
              this._vm.$swal(
                'Deleted!',
                `${response.data.message}`,
                'success'
              )
              context.dispatch('fetchWishlist')
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    },
    fetchHistories (context, payload) {
      axios
        .get('/checkout', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(response => {
          context.commit('setHistories', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkout (context, payload) {
      axios
        .post('/checkout', {
          UserId: +localStorage.id
        }, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(response => {
          this._vm.$swal({
            icon: 'success',
            title: 'Checkout Success!',
            text: 'Congratulation, you\'ve just step closer being awesome! ',
            footer: '<a>Powered by Heroku and Firebase</a>'
          })
          context.dispatch('fetchCarts')
          router.push('/shopping')
        })
        .catch(err => {
          console.log({ err })
          this._vm.$swal({
            icon: 'error',
            title: 'Checkout Failed!',
            text: 'You\'ve got nothing on your cart 🥺',
            footer: '<a>Powered by Heroku and Firebase</a>'
          })
        })
    },
    checkLocalStorage (context, payload) {
      if (localStorage.access_token) {
        context.commit('setNavbar', true)
      } else {
        context.commit('setNavbar', false)
      }
    }
  },
  modules: {
  }
})
