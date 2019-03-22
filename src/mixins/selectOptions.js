/**
* @mixin
*/
export default {
  data: () => ({
    selectOptions: {
      housingType: [
        'Single Family Detached',
        'Mobile Home'
      ],
      bedrooms: [
        1, 2, 3, 4, '5+'
      ],
      squareFootage: [
        '0-499',
        '500-749',
        '750-999',
        '1000-1249',
        '1250-1499',
        '1500-1999',
        '2000-2499',
        '2500-2999',
        '3000-3999',
        '4000+'
      ],
      mobilityAssessmentDist: [
        'Urban',
        'Rural'
      ],
      parkSchoolAssessmentDist: [
        'Northwest',
        'Northeast',
        'Central',
        'South'
      ]
    }
  })
}
