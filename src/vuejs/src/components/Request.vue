<template>
    <div>
        <div class="row">
            <div class="col-md-2">
                <h4>Method</h4>
                <p>
                    {{request.method}}
                </p>
            </div>
            <div class="col-md-4">
                <h4>Url</h4>
                <p>
                    {{request.url}}
                </p>
            </div>
            <div class="col-md-4">
                <h4>Regex</h4>
                <p>
                    {{request.regex}}
                </p>
            </div>
        </div>
        <assertions v-if="request.id" :request="request"></assertions>
        <br>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <label class="col-3">
                        <input type="checkbox" v-model="request.acting_user"> Acting As User
                    </label>
                    <div class="col-9">
                        <input type="text" class="form-control" 
                            v-model="request.acting_user_sql"
                            placeholder="Sql Condition. Example: active = true">
                        <small>Leave it empty to get an random user.</small>
                        <button class="btn btn-sm btn-success"
                            style="float:right;"
                             @click="updateRequestActing()">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th width="250">Type</th>
                    <th>Name</th>
                    <th>Map</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in list">
                    <td>Query String/Request Payload</td>
                    <td>
                        {{d.name}}
                    </td>
                    <td>
                        <button class="btn btn-sm btn-primary" @click="openModalMap(d)">Map</button>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger" 
                        @click="confirmDelete(d)">
                            Delete
                        </button>
                    </td>
                </tr>
                <tr v-for="d in params_list">
                    <td>Url Variables</td>
                    <td>
                        {{d.name}}
                    </td>
                    <td>
                        <button class="btn btn-sm btn-primary" @click="openModalMap(d)">Map</button>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger" 
                        @click="confirmDelete(d)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <modal name="map" height="auto" :scrollable="true">
            <div style="padding:15px">
                <h3>Mapping field <strong>{{selected_map.name}}</strong></h3>
                <table class="table table-sm">
                    <tr>
                        <td>
                            <strong>Value Generator</strong>
                        </td>
                        <td>
                            <button class="btn btn-success btn-sm" @click="showModalFaker()">
                                Select Faker
                            </button>
                            <button class="btn btn-success btn-sm" @click="ruleCreatorModal()">
                                Rule
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Should throw error if missing</strong>
                        </td>
                        <td>
                            <input type="checkbox" name="" v-model="selected_map.error_if_missing" @change="errorIfMissing()">
                        </td>
                    </tr>
                </table>
                <div class="text-right">
                    <button class="btn btn-sm btn-light" @click="$modal.hide('map')">Cancel</button>
                </div>
            </div>
            <modal name="faker" height="auto" :scrollable="true" width="80%">
                <div style="padding:15px">
                    <faker @input="selectedFaker"></faker>
                    <div class="text-right">
                        <button class="btn btn-sm btn-light" @click="$modal.hide('faker')">Cancel</button>
                    </div>
                </div>
            </modal>
            <modal name="selected-faker" height="auto" :scrollable="true" width="80%">
                <div style="padding:15px">
                    <faker-row :faker="selected_faker" :no-btn-class="true"></faker-row>
                    <table class="table" v-if="selected_faker.data && Object.keys(selected_faker.data.params).length > 0">
                        <thead>
                            <tr>
                                <th>Param</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tr v-for="(param, i) in selected_faker.data.params">
                            <td>{{param.name[0]}}</td>
                            <td>
                                <input type="text" class="form-control" 
                                     v-model="faker_rule.params[i]"
                                    :placeholder="param.types && param.types.length ? param.types.join(' | ') : ''">
                            </td>
                        </tr>
                    </table>
                    <div class="text-right">
                        <button class="btn btn-sm btn-success" @click="saveFakerRule()">Save</button>
                        <button class="btn btn-sm btn-light" 
                            @click="$modal.hide('selected-faker')">Cancel</button>
                    </div>
                </div>
            </modal>
            <modal name="rule" height="auto" :scrollable="true" width="80%">
                <div style="padding:15px">
                    <h3>Create Rule</h3>
                    <p>
                        Use the Rule to fetch data that exists in your database.<br>
                        <strong>Example:</strong> Get a existing <strong>Post</strong> id so you can test adding comments to an existing <strong>Post</strong>.
                    </p>
                    <table class="table">
                        <tr>
                            <td>Exists In</td>
                            <td>
                                <input type="text" class="form-control" v-model="rule.exists" placeholder="Table name">
                            </td>
                            <td>Column Name</td>
                            <td>
                                <input type="text" class="form-control" v-model="rule.column_name" placeholder="Column name">
                            </td>
                        </tr>
                        <tr>
                            <td>Extra Where</td>
                            <td colspan="3">
                                <textarea class="form-control" 
                                    v-model="rule.extra_where"
                                    placeholder="Example: {$user->id} = posts.user_id"></textarea>
                                <small>
                                    Use <strong>{$user->property}</strong> to get the Authenticated user.
                                </small>
                            </td>
                        </tr>
                    </table>
                    <div class="text-right">
                        <button class="btn btn-sm btn-success" @click="saveRule()">Save</button>
                        <button class="btn btn-sm btn-light" @click="$modal.hide('rule')">Cancel</button>
                    </div>
                </div>
            </modal>
        </modal>
        <modal name="loading" :clickToClose="false">
            <h2 class="text-center">Loading...</h2>
        </modal>
    </div>
</template>

<script>
    import Faker from './Faker.vue'
    import FakerRow from './FakerRow.vue';
    import Assertions from './Assertions.vue';
    import _faker from '../options/faker2.js';
    export default {
        name: 'Request',
        components:{
            'faker':Faker,
            'faker-row':FakerRow,
            'assertions':Assertions,
        },
        data () {
            return {
                list: [],
                params_list:[],
                base_url: null,
                request:{},
                selected_map:{},
                selected_faker:{},
                rule:{},
                faker_rule:{}
            }
        },
        async mounted(){
            this.base_url = `request-map`;
            // this.fetch();
            try{
                let response = await axios.get('request/'+this.$route.params.id);
                if(response.data){
                    this.request = response.data;
                    this.params_list = this.request.maps.filter(map => map.is_param);
                    this.list = this.request.maps.filter(map => !map.is_param);
                }

            }catch(e){
                console.log(e);
            }
        },
        methods:{
            assertionParams(assertion){
                return Object.keys(assertion.params).map(key => {
                    return assertion.params[key].value;
                }).join(', ');
            },
            async updateRequestActing(){
                this.$modal.show('loading');
                try{
                    let response = await axios.put('request/'+this.request.id, {
                        acting_user:this.request.acting_user,
                        acting_user_sql:this.request.acting_user_sql,
                    });
                }catch(e){
                    console.log(e);
                }
                this.$modal.hide('loading');
            },
            async fetch(){
                try{
                    let response = await axios.get(this.base_url, {
                        headers:{
                            request_id:this.$route.params.id
                        }
                    });
                    this.list = response.data;
                }catch(e){
                    console.log(e);
                }
            },
            confirmDelete(map){
                let response = confirm('Do you really want delete this Record?');
                if(map){
                    this.remove(map);
                }
            },
            async remove(r){
                try{
                    let response = await axios.delete(this.base_url+'/'+r.id, {
                        headers:{
                            request_id:this.$route.params.id
                        }
                    });
                    this.list.splice(this.maps.indexOf(r), 1);
                }catch(e){
                    console.log(e);
                }
            },
            openModalMap(map){
                this.selected_map = map;
                this.selected_map.error_if_missing = map.map.error_if_missing;
                this.$modal.show('map');
            },
            async errorIfMissing(){
                let data = this.selected_map.map;
                data.error_if_missing = this.selected_map.error_if_missing;
                this.updateMap(data, this.selected_map.id);
            },
            showModalFaker(){
                this.faker_rule = {
                    params:{}
                };
                if(this.selected_map.map.faker_rule){
                    this.faker_rule = this.selected_map.map.faker_rule;
                    this.faker_rule.params = this.selected_map.map.faker_rule.params;

                    this.$nextTick(()=>{
                        for(var i in this.selected_map.map.faker_rule.params){
                            var p =  this.selected_map.map.faker_rule.params[i];
                            this.$set(this.faker_rule.params, i, p)
                        }
                    })

                    if(this.selected_map.map.faker_rule && this.selected_map.map.faker_rule.name){
                        this.selectedFaker({
                            fn:this.selected_map.map.faker_rule.name,
                            data:_faker[this.selected_map.map.faker_rule.name]
                        });
                        return;
                    }
                }
                this.$modal.show('faker');
            },
            selectedFaker(faker){
                this.faker_rule = {
                    params:{}
                };
                this.faker_rule.name = faker.fn;
                this.selected_faker = faker;
                this.$modal.hide('faker');
                this.$modal.show('selected-faker');
            },
            saveFakerRule(){
                this.updateMap({
                    faker_rule:this.faker_rule,
                    error_if_missing:this.selected_map.error_if_missing
                }, this.selected_map.id);
            },
            ruleCreatorModal(){
                if(this.selected_map.map.rule){
                    this.rule = this.selected_map.map.rule;
                }
                this.$modal.show('rule');
            },
            saveRule(){
                this.updateMap({
                    rule:this.rule,
                    error_if_missing:this.selected_map.error_if_missing
                }, this.selected_map.id);
            },
            async updateMap(map, id)
            {
                this.$modal.show('loading');
                try{
                    let response = await axios.put(this.base_url+'/'+id, {
                        map:JSON.stringify(map)
                    }, {
                        headers:{
                            request_id:this.$route.params.id
                        }
                    });
                    this.selected_map.map = map;

                }catch(e){

                }
                this.$modal.hide('rule');
                this.$modal.hide('selected-faker');
                this.$modal.hide('loading');
            }
        }
    }
</script>

<style scoped>

</style>
