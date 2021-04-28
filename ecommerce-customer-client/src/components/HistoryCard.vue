<template>
  <tr>
      <td>#{{ history.transactionCode }}-{{ history.id }}</td>
      <td>{{ history.purchaseDate }}</td>
      <td>{{ history.totalItem }} Pcs</td>
      <td>{{ priceRupiah }}</td>
  </tr>
</template>

<script>
export default {
  name: 'HistoryCard',
  props: ['history'],
  computed: {
    priceRupiah () {
      return new Intl.NumberFormat('id-Rp', { style: 'currency', currency: 'IDR' }).format(this.history.totalPrice)
    }
  }

}
</script>

<style>

</style>
