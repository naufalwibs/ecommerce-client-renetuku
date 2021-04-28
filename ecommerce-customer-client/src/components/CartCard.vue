<template>
  <tr>
    <td class="table-cart-image">
      <img class="cart-image" :src="cart.Product.image_url">
    </td>
    <td>{{ cart.Product.category }}</td>
    <td>
        <div class="row">
            <div class="col-lg-3">
                <input v-model="cart.quantity" class="form-control qty-input" type="number">
            </div>
            <div class="col-lg-1">
              <i @click.prevent="addOne(cart.Product.id)" class="fas fa-plus-circle i-cart"></i>
            </div>
            <div class="col-lg-1">
              <i @click.prevent="reduceOne(cart.Product.id)" class="fas fa-minus-circle i-cart"></i>
            </div>
            <div class="col-lg-1">
              <i @click.prevent="deleteItemCart(cart.id)" class="fas fa-trash-alt i-cart"></i>
            </div>
            <div class="col-lg-1">
              <button @click.prevent="submitQtyChange(cart.Product.id)" class="btn btn-outline-dark" > Confirm Change </button>
            </div>
        </div>
    </td>
    <td>{{ priceRupiah }}</td>
  </tr>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['cart'],
  data () {
    return {
    }
  },
  methods: {
    addOne (id) {
      this.cart.quantity++
      this.$store.dispatch('updateQuantity', { id, quantity: this.cart.quantity })
    },
    reduceOne (id) {
      this.cart.quantity--
      this.$store.dispatch('updateQuantity', { id, quantity: this.cart.quantity })
    },
    deleteItemCart (id) {
      this.$store.dispatch('deleteFromCart', { id })
    },
    submitQtyChange (id) {
      this.$store.dispatch('updateQuantity', { id, quantity: this.cart.quantity })
        .then(() => {
          this.$swal({
            icon: 'success',
            title: 'Quantity Updated Successfully!',
            text: 'More buy, more bonus',
            footer: '<a>Powered by Heroku and Firebase</a>'
          })
        })
    }
  },
  computed: {
    priceRupiah () {
      return new Intl.NumberFormat('id-Rp', { style: 'currency', currency: 'IDR' }).format(this.cart.Product.price * this.cart.quantity)
    }
  }

}
</script>

<style>

</style>
