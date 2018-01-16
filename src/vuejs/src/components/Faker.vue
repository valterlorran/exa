<template>
	<div>
		<div class="card">
  			<div class="card-body">
  				<input type="text" class="form-control" v-model="search" :placeholder="placeholder">
  			</div>
  		</div>
  		<faker-row v-for="faker in fakers" :faker="faker" 
  			@click="selectFaker(faker)" :key="faker.fn"></faker-row>
	</div>
</template>
<script>
	import faker from '../options/faker2.js';
	import FakerRow from './FakerRow.vue';

	export default {
		props:{
			placeholder:{
				default:'Search Faker function',
			},
			dataList:{
				default(){
					return faker;
				}
			}
		},
		data(){
			return {
				search:''
			}
		},
        components:{
            'faker-row':FakerRow
        },
		computed:{
			fakers(){
				return Object.keys(this.dataList).map(key => {
					return {
						fn:key,
						data: this.dataList[key]
					}
				}).filter(f => {
					if(!this.search){
						return true;
					}

					return f.fn.indexOf(this.search) > -1;
				})
			}
		},
		methods:{
			selectFaker(f){
				this.$emit('input', f);
			}
		}
	}
</script>