<template>
	<div class="alert" :class="alert_class">
		<button type="button" class="close" aria-label="Close" @click="remove()">
			<span aria-hidden="true">&times;</span>
		</button>

		<i class="fa fa-fw" :class="icon"></i>

		<strong>{{ item.title }}</strong>

		<div v-html="item.msg"></div>

		<footer v-if="item.footer_txt" class="small">
			{{ item.footer_txt }}
		</footer>
	</div>
</template>

<script>
export default {
	name: 'alert',
	props: ['item'],
	data () {
		return {
			msg: 'hi'
		}
	},
	computed: {
		alert_class () {
			return this.item.class || 'alert-info'
		},
		icon () {
			switch (this.alert_class) {
				case 'alert-warning':
				return 'fa-warning'
				break;
				case 'alert-danger':
				return 'fa-times-rectangle'
				break;
				case 'alert-success':
				return 'fa-check-circle'
				break;
				default:
				return 'fa-info-circle'
			}
		},
		item_index () {
			return this.$parent.alerts.indexOf(this.item)
		}
	},
	methods: {
		remove () {
			this.$parent.alerts.splice(this.item_index, 1)
		}
	}
}
</script>

<style scoped>
footer {
	margin-top: 10px;
}
</style>
