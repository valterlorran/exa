<template>
	<span>
		<span class="badge badge-info" v-if="!options && optionalParam == 'int'">
            Integer {{name}}
        </span>
		<span class="badge badge-info" v-if="!options && optionalParam == 'string'">
            String {{name}}
        </span>
		<span class="badge badge-info" v-if="!options && optionalParam == 'array'">
            Array {{name}}
        </span>
        <span class="badge badge-info" 
            v-if="!options && (optionalParam == 'bool' || optionalParam == 'boolean')">
            Boolean {{name}}
        </span>
        <select class="badge badge-info" v-if="options" v-model="selected">
        	<option :value="null">Select</option>
        	<option v-for="o in options" :value="o.v">{{o.l}}</option>
        	<!-- <option :value="null">Mixed</option>
        	<option value="array">Array</option>
        	<option value="boolean">Boolean</option>
        	<option value="int">Integer</option>
        	<option value="string">String</option> -->
        </select>
        <input v-if="optionalParam == 'string'" type="text" v-model="newValue">
        <input v-if="optionalParam == 'int'" type="number" v-model="newValue">
        <input v-if="optionalParam == 'bool' || optionalParam == 'boolean'" type="checkbox" v-model="newValue">
        <button v-if="optionalParam == 'array'" 
        	style="font-size:10px"
        	class="btn btn-sm btn-primary"
        	@click="showRef()">Edit Array</button>
        <array-picker @saved="savedArray" :ref="ref"></array-picker>
	</span>
</template>
<script>
    import ArrayPicker from './ArrayPicker.vue';
	export default {
		props:['param', 'value'],
		components:{
            'array-picker':ArrayPicker,
		},
		data(){
			return {
				selected:null,
				newValue:null,
				ref:'',
				options_map:{
					'string':'String',
					'int':'Integer',
					'array':'Array',
					'bool':'Boolean',
					'boolean':'Boolean',
				}
			}
		},
		mounted(){
			this.ref = this.makeid();
			this.start();
		},
		computed:{
			options(){
				if(this.param.types.length == 2 && this.param.types.indexOf('null') == -1 && this.param.types.indexOf('mixed') == -1){
					return this.param.types.map(type => {

						return {
							v:type,
							l:this.options_map[type]
						};
					});
				}else if(this.param.types.length && this.param.types[0] == 'mixed'){
					return Object.keys(this.options_map).map(type => {
						return {
							v:type,
							l:this.options_map[type]
						}; 
					});
				}
				return false;
			},
			name(){
				return this.param.name[0];
			},
			paramMixed(){
				return (this.param.types && this.param.types[0] == 'mixed');
			},
			singleParam(){
				if(!this.param.types || this.param.types.length > 1 || !this.param.types.length){
					return false;
				}
				return this.param.types[0].toLowerCase();
			},
			optionalParam(){
				if(this.selected){
					return this.selected;
				}
				if(this.param.types && this.param.types.length == 2 && this.param.types.indexOf('null') > -1){
					return this.param.types[0];
				}
				return this.singleParam;
			}
		},
		watch:{
			newValue(){
				this.$emit('input', {
					v:this.newValue,
					t:this.optionalParam
				});
			},
			selected(){
				this.$emit('input', {
					v:this.newValue,
					t:this.optionalParam
				});
			},
			'param.types'(){
				this.start();
			}
		},
		methods:{
			savedArray(d){
				this.newValue = d;
			},
			showRef(){
				this.$refs[this.ref].show(this.newValue)
			},
			makeid() {
				var text = "";
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				for (var i = 0; i < 10; i++)
				text += possible.charAt(Math.floor(Math.random() * possible.length));

				return 'ud'+text;
			},
			start(){
				if(!this.value){
					return;
				}else{
					this.newValue = this.value.v;
				}
				if(this.value.t && this.value.t.indexOf('mixed.') === 0){
					let s = this.value.t.split('.');
					if(this.param.types.indexOf(s[1]) > -1)
						this.selected = s[1];
					else
						this.selected = this.param.types[0];
				}else if(this.value.t){
					if(this.param.types.indexOf(this.value.t) > -1)
						this.selected = this.value.t;
					else
						this.selected = this.param.types[0];
				}
			}
		}
	}
</script>