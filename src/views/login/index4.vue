<<template>
    <div style="padding:20px;" id="app">
        <div class="panel panel-primary">
            <table class="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>isBuy</th>
                        <th>clientName</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "(usdt,index) in usdts">
                      <td>{{index+1}}</td>
                      <td>{{usdt.isBuy}}</td>
                      <td>{{usdt.clientName}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: function(){
    return {usdts:[]}
  },
  mounted: function(){
    this.findAll();
  },
  methods: {
    findAll: function(){
        axios.get('/api/usdts').then(res=>{
            this.usdts = eval('(' + res.data + ')');
        }).catch(error=>console.log(error));
    }
  }
}
</script>

<style scoped>

</style>