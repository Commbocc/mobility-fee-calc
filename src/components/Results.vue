<template>
	<div class="panel panel-info">

		<header class="panel-heading">
			<h4 class="panel-title">
				Balance Due
			</h4>
		</header>

		<section class="table-responsive">
			<table class="table table-striped table-bordered">
				<tbody>
					<tr>
						<th>
							Mobility Amount
						</th>
						<td class="text-right" width="10">
							{{ currency($parent.results.mobility_val) }}
						</td>
					</tr>
					<tr>
						<th>
							Park Amount
						</th>
						<td class="text-right">
							{{ currency($parent.results.park_val) }}
						</td>
					</tr>
					<tr>
						<th>
							School Amount
						</th>
						<td class="text-right">
							{{ currency($parent.results.school_val) }}
						</td>
					</tr>
					<tr>
						<th>
							Fire Amount
						</th>
						<td class="text-right">
							{{ currency($parent.results.fire_val) }}
						</td>
					</tr>
					<tr>
						<th>
							TOTAL
						</th>
						<th class="text-right">
							{{ currency($parent.results.total) }}
						</th>
					</tr>
				</tbody>
			</table>
		</section>

		<footer class="panel-footer small">
			<em>
				{{ disclaimer }}
			</em>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'results',
	data () {
		return {
			disclaimer: 'All fees provided on this calculator are only estimates to assist in planning, actual fees will be assessed on building permits based on application data provided.'
		}
	},
	methods: {
		currency (decimal) {
			if (decimal <= 0) {
				return '-'
			} else {
				return '$' + decimal.toFixed(2)
			}
		}
	}
}
</script>
