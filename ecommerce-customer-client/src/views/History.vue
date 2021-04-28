<template>
  <section id="transaction-history-page">
        <div class="container">
            <div class="row">
                <h3 class="text-center title-page"><i class="fas fa-history"></i>  My History </h3>
                <div class="col-lg">
                    <table class="table table-history">
                        <thead>
                          <tr>
                            <th scope="col">Transaction-ID</th>
                            <th scope="col">Purchase Date</th>
                            <!-- class="stock-ws-th" -->
                            <th scope="col">Total Item</th>
                            <th scope="col">Total Price</th>
                          </tr>
                        </thead>
                        <tbody class="scrollable">
                    <!-- ITEM -->
                        <HistoryCard
                        v-for="history in filteredHistories"
                        :key="history.id"
                        :history="history"
                        />
                        <tr>
                            <td class="text-center total-cost" colspan="2"> Total Spent </td>
                            <td class="text-center total-cost" colspan="2">{{ totalSpend }} </td>
                        </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    <Highlight class="mt-5"/>
  </section>
</template>

<script>
import HistoryCard from '../components/HistoryCard'
import Highlight from '../components/Highlight'

export default {
  name: 'History',
  components: {
    HistoryCard,
    Highlight
  },
  computed: {
    filteredHistories () {
      return this.$store.state.histories.filter(history => history.UserId === +localStorage.id)
    },
    totalSpend () {
      let totalSpendHistory = null
      this.$store.state.histories.forEach(history => {
        if (history.UserId === +localStorage.id) {
          totalSpendHistory += history.totalPrice
        }
      })
      return new Intl.NumberFormat('id-Rp', { style: 'currency', currency: 'IDR' }).format(totalSpendHistory)
    }
  },
  created () {
    this.$store.dispatch('fetchHistories')
  }

}
</script>

<style>

</style>
