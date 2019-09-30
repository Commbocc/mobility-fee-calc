export default class DistrictLookup {

  constructor (result) {
    this.result = result
    // this.mobilityAssessment
    // this.parkSchoolAssessment

    // this.fetchMobilityDistrict()
    // this.fetchParkSchoolDistrict()
  }

  fetchMobilityDistrict () {
    let url = 'https://maps.hillsboroughcounty.org/arcgis/rest/services/DSD_Viewer_Services/Mobility_Fees/MapServer/0'
    return this.result.queryFeatures({url}).then(feature => {
      if (feature) {
        return this.formatDistrictStr(feature.attributes['DATA'])
      } else {
        throw null
      }
    }).catch(() => {
      throw new Error('A Mobility District could not be determined.')
    })
  }

  fetchParkSchoolDistrict () {
    let url = 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/infoLayers/MapServer/3'
    return this.result.queryFeatures({url}).then(feature => {
      if (feature) {
        return this.formatDistrictStr(feature.attributes['ZONE'])
      } else {
        throw null
      }
    }).catch(() => {
      throw new Error('A Park/Schools Impact Fee Zone could not be determined.')
    })
  }

  formatDistrictStr (str) {
    return str.charAt().toUpperCase() + str.toLowerCase().slice(1)
  }

}
