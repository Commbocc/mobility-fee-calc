import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		// results
		results: {
			mobility_val: 0,
			park_val: 0,
			school_val: 0,
			fire_val: 0,
			total: 0
		},
		module_prices: { '1':{}, '2':{} },

		//
		is_new_construction: true,

		//
		mobility_assessment_dist: false,
		park_schools_fee_zone: false,

		//
		alerts: [],
		alertIndex: [
			{
				id: 'address-not-found',
				title: 'Address Not Found',
				msg: 'Please confirm the address and search again. If you feel this is an error, please contact the <a href="http://hcflgov.net/government/departments/customer">Customer Service Center</a>.',
				class: 'alert-warning'
			},
			{
				id: 'no-mobility-dist',
				title: 'Mobility Assessment District',
				msg: 'A <em>Mobility Assessment District</em> could not be determined.',
				class: 'alert-warning'
			},
			{
				id: 'no-school-dist',
				title: 'Park/Schools Impact Fee Zone',
				msg: 'A <em>Park/Schools Impact Fee Zone</em> could not be determined.',
				class: 'alert-warning'
			}
		],

		//
		selectOptions: {
			housing_type: [
				'Single Family Detached',
				'Mobile Home',
			],
			mobility_assessment_dist: [
				'Urban',
				'Rural',
			],
			park_schools_fee_zone: [
				'Northwest',
				'Northeast',
				'Central',
				'South',
			],
			bedrooms: [
				1,2,3,4,'5+'
			],
			square_footage: [
				'0-499',
				'500-749',
				'750-999',
				'1000-1249',
				'1250-1499',
				'1500-1999',
				'2000-2499',
				'2500-2999',
				'3000-3999',
				'4000+',
			]
		}
	},
	actions: {
		updateCalcModule (context, data) {
			context.commit('updateCalcModuleState', data)
			context.commit('updateResults')
		}
	},
	mutations: {
		addAlert: (state, id) => {
			state.alerts.push( state.alertIndex.find(alert => alert.id === id) )
		},
		updateCalcModuleState: (state, data) => {
			Vue.set(state.module_prices, data.nId, data.prices)
		},
		updateResults: (state) => {
			// console.log('update results')

			if (state.is_new_construction) {
				state.module_prices['2'] = {}
			}

			Object.keys(state.module_prices['1']).map( (k) => {
				var total = (state.module_prices['2'][k]) ? (state.module_prices['1'][k] - state.module_prices['2'][k]) : state.module_prices['1'][k]
				Vue.set(state.results, k, total)
			})

			var positive_values = [
				'mobility_val',
				'park_val',
				'school_val',
				'fire_val'
			].map( (k) => {
				return (state.results[k] >= 0) ? state.results[k] : 0
			})

			state.results.total = positive_values.reduce(function(acc, val) {return acc + val}, 0)
		}
	}
})
