<template>
	<form id="addr-form" @submit.prevent="submit_form()">

		<fieldset>
			<div class="form-group">
				<label for="address">{{ label }}</label>
				<div class="small">
					<em>
						<slot>{{ msg }}</slot>
					</em>
				</div>
				<div class="input-group">
					<input class="form-control" :placeholder="placeholder" autocomplete="off" required>
					<span class="input-group-btn">
						<button class="btn btn-primary" type="submit">
							<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
							Search
						</button>
					</span>
				</div>
			</div>
		</fieldset>


	</form>
</template>

<script>
export default {
	name: 'address-form',
	data () {
		return {
			msg: '',
			label: 'Your Address',
			placeholder: '601 E. Kennedy Blvd'
		}
	},
	methods: {
		submit_form () {
			this.$emit('submit')
		}
	}
}
</script>
