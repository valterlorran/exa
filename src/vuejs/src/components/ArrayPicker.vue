<template>
	<span>
		<modal v-if="name" :name="name"  height="auto" :scrollable="true" width="60%" @opened="opened">
			<div id="jsoneditor" style="width: 100%; height: 400px;"></div>
			<div style="padding:15px" class="text-right">
				<button class="btn btn-primary" 
					@click="$emit('saved', ob.getText());$modal.hide(name)">
					Save
				</button>
				<button class="btn btn-light" @click="$modal.hide(name)">Cancel</button>
			</div>
		</modal>
	</span>
</template>

<script>
	import JSONEditor from 'jsoneditor';
	export default {
		data(){
			return {
				ob:null,
				json:null,
				name:null
			}
		},
		mounted(){
			this.name = this.makeid();
		},
		methods:{
			makeid() {
				var text = "";
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				for (var i = 0; i < 10; i++)
				text += possible.charAt(Math.floor(Math.random() * possible.length));

				return 'ud'+text;
			},
			show(data){
				this.json = data;
				this.$modal.show(this.name);
			},
			opened(){
				this.$nextTick(()=>{
					var container = document.getElementById("jsoneditor");
			        var options = {
			        	mode:'code',
			        	autocomplete:'true'
			        };
			        var editor = new JSONEditor(container, options);

			        if(this.json && typeof this.json == 'string'){
			        	editor.setText(this.json)
			        }else if(this.json){
			        	editor.set(this.json)
			        }


			        // get json
			        this.ob = editor;
				})
			}
		}
	}
</script>