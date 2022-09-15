<script setup lang="ts">
import {
  SearchBootstrap,
  featureLayerProps,
  queryFeatures,
} from '@hcflgov/vue-esri-search'
import { district } from '../lib/districts'

// SearchBootstrap's submit event
const watchResults = async (results: __esri.SearchResult[]) => {
  try {
    if (!results.length) throw 'No Search Results'
    const [firstResult] = results

    // set feature layer url to query against
    featureLayerProps.url =
      'https://maps.hillsboroughcounty.org/arcgis/rest/services/DSD_Viewer_Services/Mobility_Fees/MapServer/0'

    // query result's geometry against feature layer
    const [{ attributes }] = await queryFeatures(firstResult?.feature?.geometry)

    district.value = formatStr(attributes['DATA'])
  } catch (error) {
    console.warn(error)
  }
}

function formatStr(str: string): DistrictTypes {
  return (str.charAt(0).toUpperCase() +
    str.toLowerCase().slice(1)) as DistrictTypes
}
</script>

<template>
  <SearchBootstrap hc-sources large @results="watchResults" />
</template>
