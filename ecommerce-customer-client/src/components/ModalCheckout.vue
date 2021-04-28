<template>
<div>
  <div class="container-fluid d-flex justify-content-center overlay"></div>
  <section id="checkout-confirm" class="scrollable-checkout">
        <div class="container">
            <main>
              <div class="py-3 text-center">
                <img class="d-block mx-auto mb-4" src="../assets/renetuku-logo.png" alt="" width="72" height="57">
                <h2>Checkout form</h2>
                <p class="lead">Renetuku checkout form, please confirm payment below.</p>
              </div>

              <div class="row g-3 justify-content-center">
                <div class="col-md-7 col-lg-8">
                  <h4 class="mb-3">Billing address</h4>
                  <form class="needs-validation" novalidate>
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label for="firstName" class="form-label">First name</label>
                        <input disabled type="text" class="form-control" id="firstName" placeholder="" value="" required>
                        <div class="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <label for="lastName" class="form-label">Last name</label>
                        <input disabled type="text" class="form-control" id="lastName" placeholder="" value="" required>
                        <div class="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div class="col-12">
                        <label disabled for="address" class="form-label">Address</label>
                        <input disabled type="text" class="form-control" id="address" placeholder="Jl. Indo 1" required>
                        <div class="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div class="col-md-5">
                        <label for="country" class="form-label">Country</label>
                        <select disabled class="form-select" id="country" required>
                          <option value="">Choose...</option>
                          <option>Indonesia</option>
                        </select>
                        <div class="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div class="col-md-4">
                        <label for="state" class="form-label">State</label>
                        <select disabled class="form-select" id="state" required>
                          <option value="">Choose...</option>
                          <option>Jakarta</option>
                        </select>
                        <div class="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>

                      <div class="col-md-3">
                        <label for="zip" class="form-label">Zip</label>
                        <input disabled type="text" class="form-control" id="zip" placeholder="14045" required>
                        <div class="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>

                    <h4 class="mb-3">Payment</h4>

                    <div class="my-3">
                      <div class="form-check">
                        <input disabled id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
                        <label class="form-check-label" for="credit">Credit card</label>
                      </div>
                      <div class="form-check">
                        <input disabled id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
                        <label class="form-check-label" for="debit">Debit card</label>
                      </div>
                    </div>

                    <button @click.prevent="confirmCheckout" class="w-100 btn btn-outline-dark btn-lg" type="submit">Confirm Payment</button>
                    <button @click.prevent="closeModal" class="w-100 btn btn-dark btn-lg" type="submit">Back to Shopping</button>
                  </form>
                </div>
              </div>
            </main>
          </div>
      </section>
    </div>
</template>

<script>
export default {
  name: 'ModalCheckout',
  props: ['carts'],
  methods: {
    confirmCheckout () {
      this.$store.commit('setCheckoutModal', false)
      this.$store.dispatch('checkout', this.carts)
    },
    closeModal () {
      this.$store.commit('setCheckoutModal', false)
    }
  }

}
</script>

<style>

</style>
