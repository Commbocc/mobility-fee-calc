<template>
	<div id="app">

		<address-form>
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
				<calc-form :n-id="1"
				title="New Home"></calc-form>
			</div>
			<div class="col-md-6">
				<calc-form :n-id="2"
				v-if="!$store.state.is_new_construction"
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
			const_desc: 'This estimate is for a site with no existing home.'
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
			this.$store.commit('updateResults')
		}
	},
	computed: {
		offsetResultsClass () {
			return (!this.$store.state.is_new_construction) ? 'col-md-offset-3' : null
		}
	}
}
</script>
