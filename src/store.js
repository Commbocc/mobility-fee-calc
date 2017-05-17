import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		//
		mobility_assessment_dist: false,
		park_schools_fee_zone: false,

		//
		is_new_construction: false,

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
		]
	},
	actions: {

	},
	mutations: {
		addAlert: (state, id) => {
			state.alerts.push( state.alertIndex.find(alert => alert.id === id) )
		}
	},
	getters: {

	}
})
