<template>
	<form id="addr-form" @submit.prevent="find_address_geo()">

		<fieldset>
			<div class="form-group">
				<label for="address">{{ label }}</label>
				<div class="small">
					<em>
						<slot>{{ msg }}</slot>
					</em>
				</div>
				<div class="input-group">
					<input class="form-control" v-model="address_input" :placeholder="placeholder" autocomplete="off" required :readonly="reset_enabled">
					<span class="input-group-btn">
						<button v-if="reset_enabled" class="btn btn-warning" type="reset" @click.prevent="reset_form">
							<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
							Reset
						</button>
						<button v-else class="btn btn-info" type="submit">
							<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
							Search
						</button>
					</span>
				</div>
			</div>
		</fieldset>

		<alert v-for="alert in alerts" :item="alert" :key="alert.key"></alert>

		<!-- <pre>{{ $data }}</pre> -->

	</form>
</template>

<script>
import * as esriLoader from 'esri-loader';
import Alert from '@/components/Alert';

String.prototype.formatDistrict = function() {
	return this.charAt(0).toUpperCase() + this.toLowerCase().slice(1);
}

export default {
	name: 'address-form',
	data () {
		return {
			msg: '',
			address_input: '',
			label: 'Your Address',
			placeholder: '601 E. Kennedy Blvd',
			address_geo: null,
			reset_enabled: false,
			districts: {
				mobility: null,
				school: null
			},

			alerts: []
		}
	},
	components: {
		'alert': Alert
	},
	methods: {
		reset_form () {
			this.address_input = ''
			this.reset_enabled = false
			this.$emit('reset')
			// this.$router.push('/')
			location.reload()
		},
		find_address_geo () {
			// console.log('searched')
			this.reset_enabled = true
			this.placeholder = this.address_input

			esriLoader.dojoRequire([
				"esri/tasks/Locator",
				"esri/tasks/QueryTask",
				"esri/tasks/support/Query",
			], (Locator, QueryTask, Query) => {
				var hcLocator = new Locator({
					url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/DBO_composite_address_locator/GeocodeServer"
				});

				hcLocator.addressToLocations({
					address: { SingleLine: this.address_input },
					maxLocations: 1
				}).then( (response) => {
					this.address_input = response[0].address
					this.address_geo = response[0].location
					this.get_districts()
				}).otherwise( (err) => {
					// console.log('error finding address')
					this.alerts.push({
						title: 'Address Not Found',
						msg: 'Please confirm the address and search again. If you feel this is an error, please contact the <a href="http://hcflgov.net/government/departments/customer">Customer Service Center</a>.',
						class: 'alert-warning'
					})
					// that.is_map_shown = true
					// that.is_loading = false
				});
			})
		},
		get_districts () {
			esriLoader.dojoRequire([
				"esri/tasks/QueryTask",
				"esri/tasks/support/Query"
			], (QueryTask, Query) => {
				var query = new Query()
				query.geometry = this.address_geo
				query.spatialRelationship = "within";

				var mobilityDistQueryTask = new QueryTask({
					url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/DSD_Viewer_Services/Mobility_Fees/MapServer/0"
				})
				mobilityDistQueryTask.execute(query).then( (result) => {
					this.districts.mobility = result.features[0].attributes['DATA'].formatDistrict()
					this.$emit('mobility-district-set', this.districts.mobility)
				}).otherwise( (err) => {
					// console.log('error getting mobility district')
					this.alerts.push({
						title: 'Mobility Assessment District',
						msg: 'A <em>Mobility Assessment District</em> could not be determined.',
						class: 'alert-warning'
					})
				})

				var schoolDistQueryTask = new QueryTask({
					url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/infoLayers/MapServer/3"
				})
				schoolDistQueryTask.execute(query).then( (result) => {
					this.districts.school = result.features[0].attributes['ZONE'].formatDistrict()
					this.$emit('school-district-set', this.districts.school)
				}).otherwise( (err) => {
					// console.log('error getting school district')
					this.alerts.push({
						title: 'Park/Schools Impact Fee Zone',
						msg: 'A <em>Park/Schools Impact Fee Zone</em> could not be determined.',
						class: 'alert-warning'
					})
				})
			})
		}
	},
	mounted () {
		if (!esriLoader.isLoaded()) {
			esriLoader.bootstrap((err) => {
				if (err) { console.error(err); }
			}, {
				url: 'https://js.arcgis.com/4.3'
			});
		}
	}
}
</script>
