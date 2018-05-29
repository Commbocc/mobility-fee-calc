<template>
  <div class="card mb-3">

    <strong class="card-header bg-secondary text-light font-weight-bold">
      Balance Due
    </strong>

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
import { pricingMixin } from '../store/modules/pricing'

export default {
  name: 'results',
  mixins: [pricingMixin],
  methods: {
    currency (decimal) {
      if (decimal > 0) {
        return '$' + decimal.toFixed(2)
      } else {
        return '-'
      }
    }
  }
}
</script>
