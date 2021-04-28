<template>
  <section id="checkout-page">
          <div class="container">
              <div class="row">
              <h3 class="title-page my-cart"><i class="fas fa-shopping-cart"></i> My Cart </h3>
                  <div class="col-lg-8 scrollable-table">
                      <table class="table">
                          <thead>
                            <tr>
                              <th scope="col" colspan="2">Product</th>
                              <th scope="col" class="quantity-th-length">Quantity</th>
                              <th scope="col">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- ITEM -->
                              <CartCard
                              v-for="cart in filteredCarts"
                              :key="cart.id"
                              :cart="cart"
                              />
                              <tr>
                                  <td class="text-center total-cost" colspan="2"> Total Cost </td>
                                  <td class="text-center total-cost" colspan="2"> {{ totalPriceCarts }} </td>
                              </tr>
                          </tbody>
                        </table>
                  </div>
                  <div class="col-lg-4 align-self-center">
                      <div class="col-lg">
                          <button @click.prevent="openCheckoutModal" class="btn btn-dark btn-cart-checkout"> Checkout </button>
                      </div>
                      <div class="col-lg">
                          <button @click.prevent="toShopping" class="btn btn-outline-dark btn-cart-continue"> Continue Shopping </button>
                      </div>
                  </div>
              </div>
          </div>

        <Highlight class="mt-5"/>
        <ModalCheckout :carts="filteredCarts" v-if="checkoutModal"/>

  </section>
</template>

<script>
import CartCard from '../components/CartCard'
import Highlight from '../components/Highlight'
import ModalCheckout from '../components/ModalCheckout'

export default {
  name: 'Cart',
  data () {
    return {

    }
  },
  computed: {
    checkoutModal () {
      return this.$store.state.checkoutModal
    },
    filteredCarts () {
      return this.$store.state.carts.filter(cart => cart.UserId === +localStorage.id)
    },
    totalPriceCarts () {
      let totalPrice = null
      this.$store.state.carts.forEach(cart => {
        if (cart.UserId === +localStorage.id) {
          totalPrice += Number(cart.Product.price * cart.quantity)
        }
      })
      return new Intl.NumberFormat('id-Rp', { style: 'currency', currency: 'IDR' }).format(totalPrice)
    }
  },
  components: {
    CartCard,
    Highlight,
    ModalCheckout
  },
  methods: {
    toShopping () {
      this.$router.push('/shopping')
    },
    openCheckoutModal () {
      this.$store.commit('setCheckoutModal', true)
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
  }

}
</script>

<style>

</style>
