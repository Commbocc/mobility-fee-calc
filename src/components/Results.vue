<script setup lang="ts">
import { grandTotals } from "../lib/pricing";

const currency = (n: number) => (n > 0 ? "$" + n.toFixed(2) : "-");
</script>

<template>
  <div class="card my-3">
    <div
      class="card-header bg-secondary text-light d-flex align-items-center justify-content-between"
    >
      <strong>Balance Due</strong>
    </div>

    <table class="table table-striped border-0 mb-0">
      <tbody>
        <tr>
          <th>Mobility Amount</th>
          <td class="text-right" width="10">
            {{ currency(grandTotals.mobility) }}
          </td>
        </tr>
        <tr>
          <th>Park Amount</th>
          <td class="text-right">
            {{ currency(grandTotals.park) }}
          </td>
        </tr>
        <tr>
          <th>School Amount</th>
          <td class="text-right">
            {{ currency(grandTotals.school) }}
          </td>
        </tr>
        <tr>
          <th>Fire Amount</th>
          <td class="text-right">
            {{ currency(grandTotals.fire) }}
          </td>
        </tr>
        <tr>
          <th>TOTAL</th>
          <th class="text-right">
            {{ currency(grandTotals.total) }}
          </th>
        </tr>
      </tbody>
    </table>

    <footer class="card-footer small">
      <em>
        All fees provided by this calculator are only estimates to assist in
        planning, actual fees will be assessed on building permits based on
        application data provided.
      </em>
    </footer>
  </div>
</template>
