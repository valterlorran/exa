<template>
	<div :class="{
		'btn btn-light btn-block btn-sm text-left':!noBtnClass
	}" @click="$emit('click')" style="white-space: initial;">
			<div>
			<h5>{{faker.fn}}</h5>
			<p>{{faker.data.info}}</p>
			<table class="table table-bordered table-sm" v-if="faker.data.params.length">
				<thead>
					<tr>
						<th colspan="10">Params</th>
					</tr>
				</thead>
				<tr v-for="param in faker.data.params">
					<td width="100">{{param.name[0]}}</td>
					<td width="100" v-if="param.types && param.types.length">{{param.types.join(' | ')}}</td>
					<td>{{param.text}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		props:['faker', 'noBtnClass']
	}
</script>