<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th width="30">Active</th>
                    <th>Method</th>
                    <th>Url</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="request in requests">
                    <td>
                        <input type="checkbox" v-model="request.test" @change="updateRequest(request)">
                    </td>
                    <td>
                        {{request.method}}
                    </td>
                    <td>
                        <a href="javascript:void(0)" @click="view(request)">{{request.url}}</a>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-default" :disabled="request.locked" 
                        @click="view(request)">
                            View
                        </button>
                        <button class="btn btn-sm btn-danger" :disabled="request.locked" 
                        @click="confirmDelete(request)">
                            Delete
                        </button>
                    </td>
                </tr>
                <tr v-if="loadMore">
                    <td colspan="10">
                        <button class="btn btn-success" :disabled="loading" @click="fetchRequests()">
                            Load More
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Requests',
        data () {
            return {
                requests: [],
                page:1,
                loadMore:true,
                loading:false
            }
        },
        mounted(){
            this.fetchRequests();
        },
        methods:{
            async fetchRequests(){
                this.loading = true;
                try{
                    let requests = await axios.get('request?page='+this.page);
                    this.loadMore = requests.data.next_page_url;
                    requests.data.data.map(data => {
                        this.requests.push(data);
                    });
                    this.page++;
                }catch(e){

                }
                this.loading = false;
            },
            confirmDelete(request){
                let response = confirm('Do you really want delete this Record?');
                if(response){
                    this.removeRequest(request);
                }
            },
            async removeRequest(request){
                request.locked = true;
                try{
                    let response = await axios.delete('request/'+request.id);
                    this.requests.splice(this.requests.indexOf(request), 1);
                }catch(e){

                }
                request.locked = false;
            },
            view(r){
                this.$router.push('/request/'+r.id);
            },
            async updateRequest(request){
                request.locked = true;
                try{
                    let response = await axios.put('request/'+request.id, {
                        test:request.test
                    });
                }catch(e){

                }
                request.locked = false;
            }
        }
    }
</script>

<style scoped>

</style>
