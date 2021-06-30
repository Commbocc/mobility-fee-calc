export const mobility = {
  'Single Family Detached': {
    Urban: [
      //[minSqFt, maxSqFt, price]
      [0, 1499, 6542],
      [1500, 2499, 7346],
      [2500, Number.POSITIVE_INFINITY, 8440],
    ],
    Rural: [
      //[minSqFt, maxSqFt, price]
      [0, 1499, 9306],
      [1500, 2499, 10430],
      [2500, Number.POSITIVE_INFINITY, 11950],
    ],
  },
  'Mobile Home': {
    Urban: [
      //[minSqFt, maxSqFt, price]
      [0, Number.POSITIVE_INFINITY, 2764],
    ],
    Rural: [
      //[minSqFt, maxSqFt, price]
      [0, Number.POSITIVE_INFINITY, 3908],
    ],
  },
}

export const park = [
  //[minSqFt, maxSqFt, price]
  [0, 499, 658],
  [500, 749, 953],
  [750, 999, 1157],
  [1000, 1249, 1316],
  [1250, 1499, 1447],
  [1500, 1999, 1656],
  [2000, 2499, 1815],
  [2500, 2999, 1945],
  [3000, 3999, 2149],
  [4000, Number.POSITIVE_INFINITY, 2320],
]

export const school = [
  //[minSqFt, maxSqFt, price]
  [0, 899, 1645],
  [900, 1299, 3891],
  [1300, 1799, 7027],
  [1800, 2499, 8227],
  [2500, 3399, 9369],
  [3400, Number.POSITIVE_INFINITY, 10976],
]

export const fire = {
  'Single Family Detached': 335,
  'Mobile Home': 299,
}
