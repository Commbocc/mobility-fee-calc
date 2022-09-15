interface ISubtotal {
  mobility: number
  park: number
  school: number
  fire: number
}

interface IGrandTotal extends ISubtotal {
  total: number
}

type HousingTypes = 'Single Family Detached' | 'Mobile Home' | null

type DistrictTypes = 'Urban' | 'Rural' | null

interface CalcFormOptions {
  housingType: HousingTypes
  squareFootage: number | null
  mobilePark: boolean | null
}
