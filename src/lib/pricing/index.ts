import { computed, reactive } from 'vue'
import { district } from '../districts'
import { mobility, park, school, fire } from './current'

export const ZEROED_VALUES = (): ISubtotal => ({
  mobility: 0,
  park: 0,
  school: 0,
  fire: 0,
})

export const pricing = reactive<{
  year: number
  isNewConstruction: boolean
  newPricing: ISubtotal
  existingPricing: ISubtotal
}>({
  year: new Date().getFullYear(),
  isNewConstruction: true,
  newPricing: ZEROED_VALUES(),
  existingPricing: ZEROED_VALUES(),
})

export const grandTotals = computed<IGrandTotal>(() => {
  let values = ZEROED_VALUES()
  let k: keyof typeof values
  for (k in values) {
    let diff = 0
    if (pricing.isNewConstruction) {
      diff = pricing.newPricing[k]
    } else {
      diff = pricing.newPricing[k] - pricing.existingPricing[k]
    }
    values[k] = diff > 0 ? diff : 0
  }

  return {
    ...values,
    total: Object.values(values).reduce((a: number, b: number) => a + b),
  }
})

export const calculatePricing = (options: CalcFormOptions): ISubtotal => {
  let values = ZEROED_VALUES()

  const mapMinMax = (pricePoint: number[][]) => {
    return pricePoint
      .map(([min, max, price]) =>
        min <= options.squareFootage! && options.squareFootage! <= max
          ? price
          : 0
      )
      .filter(Boolean)[0]
  }

  if (options.housingType != null && options.squareFootage && district.value) {
    values.mobility = mapMinMax(mobility[options.housingType][district.value])
  }

  if (options.squareFootage) {
    values.park = mapMinMax(park)
    values.school = mapMinMax(school)
  }

  if (options.housingType || options.squareFootage) {
    values.fire = fire[options.housingType!]
    if (options.mobilePark) {
      values.fire = fire[options.housingType!]
    } else {
      values.fire = fire['Single Family Detached']
    }
  }

  return values
}
