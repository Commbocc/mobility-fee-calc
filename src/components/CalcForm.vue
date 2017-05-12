<template>
	<form id="calc-form" class="panel panel-default">
		<header class="panel-heading">
			<h4 class="panel-title">{{ title }}</h4>
		</header>

		<fieldset class="panel-body">
			<select-field label="Hosuing Type" tooltip="Lorem Ipsum" v-model="housing_type" index="housing_type"></select-field>

			<select-field label="Mobility Assessment District" v-model="mobility_assessment_dist" index="mobility_assessment_dist"></select-field>

			<select-field label="Park/Schools Impact Fee Zone" v-model="park_schools_fee_zone" index="park_schools_fee_zone"></select-field>

			<select-field label="Number of Bedrooms" v-model="bedrooms" index="bedrooms"></select-field>

			<select-field label="Living Area Square Footage Range" v-model="square_footage" index="square_footage"></select-field>
		</fieldset>
	</form>
</template>

<script>
import _ from 'underscore'

import MobilityData from '@/data/mobility.json'
import ParkData from '@/data/parks.json'
import SchoolData from '@/data/school.json'

import SelectField from '@/components/SelectField'

export default {
	name: 'calc-form',
	props: ['title'],
	data () {
		return {
			housing_type: false,
			mobility_assessment_dist: false,
			park_schools_fee_zone: false,
			bedrooms: false,
			square_footage: false,

			prices: {
				mobility_val: 0,
				park_val: 0,
				school_val: 0,
				fire_val: 0
			},
		}
	},
	components: {
		'select-field': SelectField
	},
	computed: {
		computedProperty() {
			return [
				this.housing_type,
				this.mobility_assessment_dist,
				this.park_schools_fee_zone,
				this.bedrooms,
				this.square_footage,
				Date.now()
			]
		}
	},
	watch: {
		computedProperty () {
			// console.log('computedProperty watched')

			// calc_mobility
			if ( this.housing_type && this.mobility_assessment_dist && this.square_footage ) {
				var housing_type = _.findWhere(MobilityData, {type: this.housing_type})
				var district = _.findWhere(housing_type['districts'], {type: this.mobility_assessment_dist})
				this.prices.mobility_val = district['prices'][this.square_footage]
			} else {
				this.prices.mobility_val = 0
			}

			// calc_park
			if ( this.housing_type && this.park_schools_fee_zone && this.bedrooms ) {
				var housing_type = _.findWhere(ParkData, {type: this.housing_type})
				var zone = _.findWhere(housing_type['zones'], {zone_name: this.park_schools_fee_zone})
				this.prices.park_val = zone['price_by_beds'][this.bedrooms]
			} else {
				this.prices.park_val = 0
			}

			// calc_school
			if ( this.square_footage ) {
				this.prices.school_val = SchoolData[this.square_footage]
			} else {
				this.prices.school_val = 0
			}

			// calc_fire
			if ( this.housing_type || this.mobility_assessment_dist || this.park_schools_fee_zone || this.bedrooms || this.square_footage ) {
				this.prices.fire_val = 48.66
			} else {
				this.prices.fire_val = 0
			}

			this.$emit('submit', this.prices)

		}
	}
}
</script>

<style scoped>
.panel-body > .form-group:last-child {
	margin-bottom: 0;
}
</style>
