<template>
  <div class="card mb-3">

    <div class="card-header bg-secondary text-light d-flex align-items-center justify-content-between">
      <strong>Balance Due</strong>
    </div>

    <table class="table table-striped border-0 mb-0">
      <tbody>
        <tr>
          <th>
            Mobility Amount
          </th>
          <td class="text-right" width="10">
            {{ currency(totals.mobility) }}
          </td>
        </tr>
        <tr>
          <th>
            Park Amount
          </th>
          <td class="text-right">
            {{ currency(totals.park) }}
          </td>
        </tr>
        <tr>
          <th>
            School Amount
          </th>
          <td class="text-right">
            {{ currency(totals.school) }}
          </td>
        </tr>
        <tr>
          <th>
            Fire Amount
          </th>
          <td class="text-right">
            {{ currency(totals.fire) }}
          </td>
        </tr>
        <tr>
          <th>
            TOTAL
          </th>
          <th class="text-right">
            {{ currency(totals.total) }}
          </th>
        </tr>
      </tbody>
    </table>

    <footer class="card-footer small">
      <em>
        All fees provided by this calculator are only estimates to assist in planning, actual fees will be assessed on building permits based on application data provided.
      </em>
    </footer>
  </div>
</template>

<script>
import Pricing from '../assets/pricing'

export default {
  name: 'results',
  computed: {
    totals () {
      let totals = Pricing.zeroedValues
      let diff = 0

      Object.keys(totals).forEach(k => {
        if (this.$parent.isNewConstruction) {
          diff = this.$parent.$refs.formNew.subtotals[k]
        } else {
          diff = this.$parent.$refs.formNew.subtotals[k] - this.$parent.$refs.formExisting.subtotals[k]
        }
        totals[k] = (diff > 0) ? diff : 0
      })

      totals.total = Object.values(totals).reduce((a, b) => a + b)

      return totals
    }
  },
  methods: {
    currency (decimal) {
      return (decimal > 0) ? '$' + decimal.toFixed(2) : '-'
    }
  }
}
</script>
