export const mobility = {
  'Single Family Detached': {
    Urban: [
      //[minSqFt, maxSqFt, price]
      [0, 1499, 8178],
      [1500, 2499, 9183],
      [2500, Number.POSITIVE_INFINITY, 10550],
    ],
    Rural: [
      //[minSqFt, maxSqFt, price]
      [0, 1499, 11633],
      [1500, 2499, 13038],
      [2500, Number.POSITIVE_INFINITY, 14938],
    ],
  },
  'Mobile Home': {
    Urban: [
      //[minSqFt, maxSqFt, price]
      [0, Number.POSITIVE_INFINITY, 3455],
    ],
    Rural: [
      //[minSqFt, maxSqFt, price]
      [0, Number.POSITIVE_INFINITY, 4885],
    ],
  },
}

export const park = [
  //[minSqFt, maxSqFt, price]
  [0, 499, 777],
  [500, 749, 1126],
  [750, 999, 1368],
  [1000, 1249, 1555],
  [1250, 1499, 1710],
  [1500, 1999, 1957],
  [2000, 2499, 2145],
  [2500, 2999, 2299],
  [3000, 3999, 2540],
  [4000, Number.POSITIVE_INFINITY, 2742],
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
