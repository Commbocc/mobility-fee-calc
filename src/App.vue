<template>
	<div id="app">

		<address-form v-on:mobility-district-set="update_mobility_district" v-on:school-district-set="update_school_district">
			<p>
				{{ address_form_desc }}
			</p>
		</address-form>

		<alert v-for="alert in $store.state.alerts" :item="alert" :key="alert.id"></alert>

		<div class="form-group">
			<label>{{ const_label }}</label>
			<div class="checkbox">
				<label>
					<input type="checkbox" v-model="$store.state.is_new_construction"> {{ const_desc }}
				</label>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6">
				<calc-form
				v-on:submit="new_calc_form_submitted"
				title="New Home"></calc-form>

			</div>
			<div class="col-md-6">
				<calc-form
				v-if="!$store.state.is_new_construction"
				v-on:submit="existing_calc_form_submitted"
				title="Existing Home"></calc-form>
			</div>
			<div class="col-md-6" :class="offsetResultsClass">
				<results></results>
			</div>
		</div>
		<!-- <router-view></router-view> -->

	</div>
</template>

<script>
import AddressForm from '@/components/AddressForm'
import CalcForm from '@/components/CalcForm'
import Results from '@/components/Results'
import Alert from '@/components/Alert';

export default {
	name: 'index',
	data () {
		return {
			address_form_desc: 'Your address will be used to populate the "Mobility Assessment District" and "Park/Schools Impact Fee Zone" fields below.',
			const_label: 'New Construction',
			const_desc: 'This estimate is for a site with no existing home.',

			mobility_district: null,
			school_district: null,

			newCalcFormData: {
				mobility_val: 0,
				park_val: 0,
				school_val: 0,
				fire_val: 0
			},
			existingCalcFormData: {
				mobility_val: 0,
				park_val: 0,
				school_val: 0,
				fire_val: 0
			},
			results: {
				mobility_val: 0,
				park_val: 0,
				school_val: 0,
				fire_val: 0,
				total: 0
			}
		}
	},
	components: {
		'address-form': AddressForm,
		'calc-form': CalcForm,
		'results': Results,
		'alert': Alert,
	},
	watch: {
		'$store.state.is_new_construction': function() {
			this.udpate_results()
		}
	},
	computed: {
		offsetResultsClass () {
			return (!this.$store.state.is_new_construction) ? 'col-md-offset-3' : null
		}
	},
	methods: {
		update_mobility_district (data) {
			// console.log('update_mobility_district')
			this.mobility_district = data;
			this.udpate_results()
		},
		update_school_district (data) {
			// console.log('update_school_district')
			this.school_district = data;
			this.udpate_results()
		},
		new_calc_form_submitted (data) {
			// console.log('new_calc_form_submitted')
			this.newCalcFormData = data;
			this.udpate_results()
		},
		existing_calc_form_submitted (data) {
			// console.log('existing_calc_form_submitted')
			this.existingCalcFormData = data;
			this.udpate_results()
		},
		udpate_results () {
			// console.log('update results')
			this.results.total = [
				this.calc_diff('mobility_val'),
				this.calc_diff('park_val'),
				this.calc_diff('school_val'),
				this.calc_diff('fire_val')
			].reduce(function(acc, val) {return acc + val;}, 0);
		},
		calc_diff (index) {
			var difference = (!this.$store.state.is_new_construction) ? this.newCalcFormData[index] - this.existingCalcFormData[index] : this.newCalcFormData[index]
			this.$set(this.results, index, difference)
			return difference
		}
	}
}
</script>
