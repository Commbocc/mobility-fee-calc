<template>
	<form id="calc-form" class="panel panel-default">
		<header class="panel-heading">
			<h4 class="panel-title">{{ title }}</h4>
		</header>

		<fieldset class="panel-body">

			<div class="form-group">
				<label>Housing Type</label>
				<!-- <span class="title-tooltip small" :title="tooltip"> -->
				<!-- <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span> -->
				<!-- </span> -->
				<select class="form-control" v-model="housing_type">
					<option selected :value="false">N/A</option>
					<option v-for="option in $store.state.selectOptions['housing_type']" :value="option">{{ option }}</option>
				</select>
			</div>

			<div class="form-group">
				<label>Number of Bedrooms</label>
				<select class="form-control" v-model="bedrooms">
					<option selected :value="false">N/A</option>
					<option v-for="option in $store.state.selectOptions['bedrooms']" :value="option">{{ option }}</option>
				</select>
			</div>

			<div class="form-group">
				<label>Living Area Square Footage Range</label>
				<select class="form-control" v-model="square_footage">
					<option selected :value="false">N/A</option>
					<option v-for="option in $store.state.selectOptions['square_footage']" :value="option">{{ option }}</option>
				</select>
			</div>

			<div class="form-group">
				<label>Mobility Assessment District</label>
				<select class="form-control" v-model="$store.state.mobility_assessment_dist">
					<option selected :value="false">N/A</option>
					<option v-for="option in $store.state.selectOptions['mobility_assessment_dist']" :value="option">{{ option }}</option>
				</select>
			</div>

			<div class="form-group">
				<label>Park/Schools Impact Fee Zone</label>
				<select class="form-control" v-model="$store.state.park_schools_fee_zone">
					<option selected :value="false">N/A</option>
					<option v-for="option in $store.state.selectOptions['park_schools_fee_zone']" :value="option">{{ option }}</option>
				</select>
			</div>
		</fieldset>
	</form>
</template>

<script>
import _ from 'underscore'
import { mapState } from 'vuex'

export default {
	name: 'calc-form',
	props: ['nId','title'],
	data () {
		return {
			housing_type: false,
			bedrooms: false,
			square_footage: false,

			prices: {
				mobility_val: 0,
				park_val: 0,
				school_val: 0,
				fire_val: 0
			}
		}
	},
	computed: {
    ...mapState({
      pricingMobility: state => state.pricing.mobility,
      pricingPark: state => state.pricing.park,
      pricingSchool: state => state.pricing.school,
      pricingFire: state => state.pricing.fire
    }),
		computedProperty() {
			return [
				this.housing_type,
				this.$store.state.mobility_assessment_dist,
				this.$store.state.park_schools_fee_zone,
				this.bedrooms,
				this.square_footage,
				Date.now()
			]
		}
	},
	watch: {
		computedProperty () {
			// calc_mobility
			if ( this.housing_type && this.$store.state.mobility_assessment_dist && this.square_footage ) {
				var housing_type = _.findWhere(this.pricingMobility, {type: this.housing_type})
				var district = _.findWhere(housing_type['districts'], {type: this.$store.state.mobility_assessment_dist})
				this.prices.mobility_val = district['prices'][this.square_footage]
			} else {
				this.prices.mobility_val = 0
			}
			// calc_park
			if ( this.housing_type && this.$store.state.park_schools_fee_zone && this.bedrooms ) {
				var housing_type = _.findWhere(this.pricingPark, {type: this.housing_type})
        console.log(housing_type)
				var zone = _.findWhere(housing_type['zones'], {zoneName: this.$store.state.park_schools_fee_zone})
				this.prices.park_val = zone['priceByBeds'][this.bedrooms]
			} else {
				this.prices.park_val = 0
			}
			// calc_school
			if ( this.square_footage ) {
				this.prices.school_val = this.pricingSchool[this.square_footage]
			} else {
				this.prices.school_val = 0
			}
			// calc_fire
			if ( this.housing_type || this.bedrooms || this.square_footage ) {
				this.prices.fire_val = this.pricingFire
			} else {
				this.prices.fire_val = 0
			}
			// dispatch action
			this.$store.dispatch('updateCalcModule', {
				nId: this.nId,
				prices: this.prices
			})
		}
	}
}
</script>

<style scoped>
.panel-body > .form-group:last-child {
	margin-bottom: 0;
}
.title-tooltip {
	cursor: help;
}
</style>
