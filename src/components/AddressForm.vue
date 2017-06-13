<template>
	<form id="addr-form" @submit.prevent="findAddressGeo()">

		<fieldset>
			<div class="form-group">
				<label for="address">{{ label }}</label>
				<div class="small">
					<em>
						<slot>{{ msg }}</slot>
					</em>
				</div>
				<div class="input-group">
					<input class="form-control" v-model="address_input" v-bind:placeholder="placeholder" :readonly="reset_enabled" autocomplete="off" required>
					<span class="input-group-btn">
						<button v-if="reset_enabled" @click.prevent="softReset()" class="btn btn-warning" type="button">
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

		<!-- <pre>{{ $data }}</pre> -->

	</form>
</template>

<script>
import * as esriLoader from 'esri-loader'

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
			}
		}
	},
	methods: {
		softReset () {
			console.log('soft reset')
			this.$store.state.alerts = []
			this.reset_enabled = false
			this.address_input = ''
			// this.$emit('reset')
			// location.reload()
		},
		findAddressGeo () {
			// console.log('searched')
			this.reset_enabled = true
			this.address_input = this.address_input

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
					this.getDistricts()
				}).otherwise( (err) => {
					// console.log('error finding address')
					this.$store.commit('addAlert', 'address-not-found')
					// that.is_map_shown = true
					// that.is_loading = false
				});
			})
		},
		getDistricts () {
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
					// console.log(result.features[0])
					this.districts.mobility = result.features[0].attributes['DATA'].formatDistrict()
					this.$store.state.mobility_assessment_dist = this.districts.mobility
				}).otherwise( (err) => {
					// console.error('error getting mobility district')
					this.$store.commit('addAlert', 'no-mobility-dist')
				})

				var schoolDistQueryTask = new QueryTask({
					url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/infoLayers/MapServer/3"
				})
				schoolDistQueryTask.execute(query).then( (result) => {
					// console.log(result.features[0])
					this.districts.school = result.features[0].attributes['ZONE'].formatDistrict()
					this.$store.state.park_schools_fee_zone = this.districts.school
				}).otherwise( (err) => {
					// console.error('error getting school district')
					this.$store.commit('addAlert', 'no-school-dist')
				})
			})
		}
	}
}
</script>
