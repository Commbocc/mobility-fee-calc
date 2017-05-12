<template>
	<div id="app">

		<address-form v-on:mobility-district-set="update_mobility_district" v-on:school-district-set="update_school_district">
			<p>
				{{ address_form_desc }}
			</p>
		</address-form>

		<div class="form-group">
			<label>{{ new_constructon_label }}</label>
			<div class="checkbox">
				<label for="existing-home">
					<input type="checkbox" id="existing-home" v-model="new_constructon"> {{ new_constructon_desc }}
				</label>
			</div>
		</div>

		<div class="row">
			<div class="col-md-7">

				<calc-form
				:mobility-district="mobility_district"
				:school-district="school_district"
				v-on:submit="new_calc_form_submitted"
				title="New Home"></calc-form>

				<calc-form
				v-if="!new_constructon"
				:mobility-district="mobility_district"
				:school-district="school_district"
				v-on:submit="existing_calc_form_submitted"
				title="Existing Home"></calc-form>

			</div>
			<div class="col-md-5">
				<results :new-calc-form-data="newCalcFormData" :existing-calc-form-data="existingCalcFormData"></results>
			</div>
		</div>

		<!-- <router-view></router-view> -->

	</div>
</template>

<script>
import AddressForm from '@/components/AddressForm'
import CalcForm from '@/components/CalcForm'
import Results from '@/components/Results'

export default {
	name: 'index',
	data () {
		return {
			address_form_desc: 'Your address will be used to populate the "Mobility Assessment District" and "Park/Schools Impact Fee Zone" fields below.',
			new_constructon_label: 'New Construction',
			new_constructon_desc: 'This estimate is for a site with no existing home.',
			new_constructon: false,
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
	},
	watch: {
		'new_constructon': function() {
			this.udpate_results()
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
			this.results.mobility_val = this.calc_diff('mobility_val')
			this.results.park_val = this.calc_diff('park_val')
			this.results.school_val = this.calc_diff('school_val')
			this.results.fire_val = this.calc_diff('fire_val')
			this.results.total = [
				this.results.mobility_val,
				this.results.park_val,
				this.results.school_val,
				this.results.fire_val
			].reduce(function(acc, val) {return acc + val;}, 0);
		},
		calc_diff (index) {
			return (!this.new_constructon) ? this.newCalcFormData[index] - this.existingCalcFormData[index] : this.newCalcFormData[index]
		}
	}
}
</script>
