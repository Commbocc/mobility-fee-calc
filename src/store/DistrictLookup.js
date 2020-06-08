export default class DistrictLookup {

  constructor(result) {
    this.result = result
  }

  async fetchMobilityDistrict() {
    let url = 'https://maps.hillsboroughcounty.org/arcgis/rest/services/DSD_Viewer_Services/Mobility_Fees/MapServer/0'

    try {
      let { attributes } = await this.result.queryFeatures({ url })
      return Promise.resolve(DistrictLookup.formatStr(attributes['DATA']))
    }
    catch {
      return Promise.reject('A Mobility District could not be determined.')
    }
  }

  async fetchParkSchoolDistrict() {
    let url = 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/infoLayers/MapServer/3'

    try {
      let { attributes } = await this.result.queryFeatures({ url })
      return Promise.resolve(DistrictLookup.formatStr(attributes['ZONE']))
    }
    catch {
      return Promise.reject('A Park/Schools Impact Fee Zone could not be determined.')
    }
  }

  static formatStr(str) {
    return str.charAt().toUpperCase() + str.toLowerCase().slice(1)
  }

}
