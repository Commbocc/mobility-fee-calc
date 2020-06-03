export default class Pricing {

  constructor(year) {
    this.setYear(year)
    this.setPricing()
  }

  setYear(year) {
    var y
    let currentYear = new Date().getFullYear()

    if (year in Pricing.years) {
      y = year
    } else if (currentYear in Pricing.years) {
      y = currentYear
    } else {
      y = Object.keys(Pricing.years)[0]
    }

    this.year = y
  }

  async setPricing() {
    let pricing = await Pricing.years[this.year]()
    for (let [key, value] of Object.entries(pricing)) {
      this[key] = value
    }
  }

  static get years() {
    return {
      "2020": () => import('./2020'),
      // "2019": () => import('./2019'),
      // "2018": () => import('./2018'),
      // "2017": () => import('./2017'),
    }
  }

  static get zeroedValues() {
    return {
      mobility: 0,
      park: 0,
      school: 0,
      fire: 0
    }
  }

  calcMobility(housing, mobilityAssessment, sqFt = null) {
    if (sqFt !== null) {
      return this.mobility[housing][mobilityAssessment].map(([min, max, price]) => (min <= sqFt && sqFt <= max) ? price : null).filter(Boolean)[0]
    } else {
      return null
    }
  }

  calcSchool(sqFt = null) {
    if (sqFt !== null) {
      return this.school.map(([min, max, price]) => (min <= sqFt && sqFt <= max) ? price : null).filter(Boolean)[0]
    } else {
      return null
    }
  }

}
