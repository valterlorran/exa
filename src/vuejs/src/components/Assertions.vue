<template>
	<div class="card">
        <div class="card-body">
            <h5>Assertions</h5>
            <div v-if="request.assertions && request.assertions.length">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th>Assertions</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tr v-for="(assertion, index) in request.assertions">
                        <td>
                            <div v-if="!assertion.assertion">
                                Select an Assertion
                            </div>
                            <div v-else>
                                <p>
                                    <button class="btn btn-sm btn-outline-dark" 
                                        @click="assertion.showing_info = !assertion.showing_info">
                                        ?
                                    </button>
                                    <strong>
                                        {{assertion.assertion.fn}}(
                                        	<assertion-param v-for="(param, index) in getParams(assertion)"
                                        	:param="param" v-model="assertion.params[index]"
                                        	@input="value => { assertion.params[index] = value }"
                                        	:key="'param'+index">
                                        		
                                        	</assertion-param>
                                        )
                                    </strong>
                                </p>

                                <div class="card" v-if="assertion.showing_info">
                                    <div class="card-body">
                                        <faker-row :faker="assertion.assertion" 
                                        :no-btn-class="true"></faker-row>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td width="250">
                            <button class="btn btn-outline-dark btn-sm"
                                @click="$modal.show('assertion-types'); selected_assertion = assertion;">
                                {{assertion.assertion ? 'Change' :'Select'}} Assertion
                            </button>
                            <button class="btn btn-outline-danger pull-right btn-sm" 
                            @click="removeAssertion(index)">
                                Remove
                            </button>
                        </td>
                    </tr>
                </table>
                <modal name="assertion-types" height="auto" :scrollable="true" width="80%">
                    <faker @input="selectedAssertion" 
                        :data-list="listAssertions"
                        placeholder="Search Assertion function"></faker>
                </modal>
            </div>
            <p v-else class="text-center">
                No assertions yet, click in button below to add.
            </p>
            <div class="text-right">
                <button class="btn btn-primary" @click="addAssertion()">Add Response Assertion</button>
                <button class="btn btn-success" @click="saveAssertions()">Save Assertions</button>
            </div>
        </div>
    </div>
</template>
<script>
    import Faker from './Faker.vue';
    import FakerRow from './FakerRow.vue';
    import AssertionParam from './AssertionParam.vue';
    import _assertions from '../options/assertions.js';
	export default {
		props:['request'],
        components:{
            'faker':Faker,
            'faker-row':FakerRow,
            'assertion-param':AssertionParam,
        },
		data(){
			return {
				selected_assertion:null
			}
		},
        computed:{
            listAssertions(){
                return _assertions;
            }
        },
        mounted(){
        	this.mountAssertions(this.request.assertions);
        },
		methods:{
            getParams(assertion){
            	return Object.keys(assertion.assertion.data.params).map(param => {
            		return assertion.assertion.data.params[param];
            	});
            },
            addAssertion(){
                if(!this.request.assertions){
                    this.$set(this.request, 'assertions', []);
                }
                this.request.assertions.push({
                    assertion:null,
                    showing_info:false,
                    params:{}
                });
            },
            selectedAssertion(assertion_data){
                this.selected_assertion.assertion = assertion_data;
                this.$modal.hide('assertion-types');
            },
            async saveAssertions(){
                let assertions = this.request.assertions.map( assertion => {
                    return {
                        fn:assertion.assertion.fn,
                        params:assertion.params
                    }
                });

                this.$modal.show('loading');
                try{
                    let response = await axios.put('request/'+this.request.id, {
                        assertions:JSON.stringify(assertions)
                    });
                }catch(e){
                    console.log(e);
                }
                this.$modal.hide('loading');
            },
            aP(assertion, param){
                return assertion.assertion.data.params[param]
            },
            uc(assertion, param){
                if(assertion.assertion.data.params[param].types.length > 1 || 
                    !assertion.assertion.data.params[param].types.length){
                    return false;
                }

                return assertion.assertion.data.params[param].types[0];
            },
            mountAssertions(assertions){
            	console.log(assertions);
                this.request.assertions = [];
                if(!assertions){
                    return;
                }
                assertions.map( assertion => {
                    this.request.assertions.push({
                        assertion:{
                            fn:assertion.fn,
                            data:_assertions[assertion.fn]
                        },
                        showing_info:false,
                        params:assertion.params
                    });
                });
            },
            removeAssertion(index){
                this.request.assertions.splice(index, 1);
            },
		},
	}
</script>