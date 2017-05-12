<template>
	<div class="form-group">
		<label>{{ label }}</label>
		<span v-if="tooltip" class="title-tooltip small" :title="tooltip">
			<span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
		</span>
		<select class="form-control" v-model="internalValue">
			<option selected :value="false">N/A</option>
			<option v-for="option in options[index]" :value="option">{{ option }}</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'select-field',
	props: ['label', 'value', 'tooltip', 'index'],
	data: function() {
		return {
			internalValue: '',
			options: {
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
		}
	},
	watch: {
		'internalValue': function() {
			this.$emit('input', this.internalValue)
		}
	},
	created: function() {
		this.internalValue = this.value
	}
}
</script>

<style scoped>
.title-tooltip {
	cursor: help;
}
</style>
