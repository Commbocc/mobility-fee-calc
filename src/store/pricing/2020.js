export const mobility = {
  'Single Family Detached': {
    'Urban': [
      //[minSqFt, maxSqFt, price]
      [0, 1499, 3987],
      [1500, 2499, 5094],
      [2500, Number.POSITIVE_INFINITY, 5722]
    ],
    'Rural': [
      //[minSqFt, maxSqFt, price]
      [0, 1499, 5774],
      [1500, 2499, 7377],
      [2500, Number.POSITIVE_INFINITY, 8282]
    ]
  },
  'Mobile Home': {
    'Urban': [
      //[minSqFt, maxSqFt, price]
      [0, Number.POSITIVE_INFINITY, 1878]
    ],
    'Rural': [
      //[minSqFt, maxSqFt, price]
      [0, Number.POSITIVE_INFINITY, 2725]
    ]
  }
}

export const park = {
  'Single Family Detached': {
    'Northwest': {
      '1': 317.2,
      '2': 317.2,
      '3': 421.6,
      '4': 517.34,
      '5+': 593.31
    },
    'Northeast': {
      '1': 264.9,
      '2': 264.9,
      '3': 352.09,
      '4': 432.04,
      '5+': 495.49
    },
    'Central': {
      '1': 313.53,
      '2': 313.53,
      '3': 416.72,
      '4': 511.36,
      '5+': 586.45
    },
    'South': {
      '1': 168.36,
      '2': 168.36,
      '3': 223.78,
      '4': 274.59,
      '5+': 314.92
    }
  },
  'Mobile Home': {
    'Northwest': {
      '1': 279.74,
      '2': 328.70,
      '3': 461.78,
      '4': 461.78,
      '5+': 461.78
    },
    'Northeast': {
      '1': 233.61,
      '2': 274.51,
      '3': 385.64,
      '4': 385.64,
      '5+': 385.64
    },
    'Central': {
      '1': 276.49,
      '2': 324.89,
      '3': 456.44,
      '4': 456.44,
      '5+': 456.44
    },
    'South': {
      '1': 148.48,
      '2': 174.46,
      '3': 245.10,
      '4': 245.10,
      '5+': 245.10
    }
  }
}

export const school = [
  //[minSqFt, maxSqFt, price]
  [0, 899, 1645],
  [900, 1299, 3891],
  [1300, 1799, 7027],
  [1800, 2499, 8227],
  [2500, 3399, 9369],
  [3400, Number.POSITIVE_INFINITY, 10976]
]

export const fire = {
  'Single Family Detached': 335,
  'Mobile Home': 299
}
