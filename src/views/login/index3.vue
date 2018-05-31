<<template>
    <div style="padding:20px;" id="app">
        <el-table:data="usdts"  style="width: 100%">
              <el-table-column  prop="isBuy"  label="isBuy"  width="180"></el-table-column>
              <el-table-column  prop="clientName"  label="clientName"  width="180"></el-table-column>
         </el-table>
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