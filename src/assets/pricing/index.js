// import * as y2017 from './2017'
// import * as y2018 from './2018'
import * as y2019 from './2019'
import * as y2020 from './2020'

export const years = {
  "2019": y2019,
  "2020": y2020
}

export default class Pricing {

  constructor (year) {
    this.setYear(year)
    this.setPricing()
  }

  setYear (year) {
    var y
    let currentYear = new Date().getFullYear()

    if (year in years) {
      y = year
    } else if (currentYear in years) {
      y = currentYear
    } else {
      y = Object.keys(years)[Object.keys(years).length-1]
    }

    this.year = y
  }

  setPricing () {
    for (let [key, value] of Object.entries(years[this.year])) {
      this[key] = value
    }
  }

  static get zeroedValues () {
    return {
      mobility: 0,
      park: 0,
      school: 0,
      fire: 0
    }
  }
}
