<<template>
    <div style="padding:20px;" id="app">
        <el-button type="primary" icon="el-icon-search" v-on:click=search>高级查询</el-button>
        <el-table :data="coins"  style="width: 100%;margin-top:20px">
          <el-table-column  prop="fromType"  label="fromType"  width="120"/>
          <el-table-column  prop="toType"  label="toType"  width="90"/>
          <el-table-column  prop="fromMinSalePrice"  label="fromMinSalePrice"  width="120"/>
          <el-table-column  prop="fromMaxBuyPrice"  label="fromMaxBuyPrice"  width="120"/>
          <el-table-column  prop="toMinSalePrice"  label="toMinSalePrice"  width="120"/>
          <el-table-column  prop="toMaxBuyPrice"  label="toMaxBuyPrice"  width="120"/>
          <el-table-column  prop="lastVs"  label="lastVs"  width="120"/>
          <el-table-column  prop="fromToProfit"  label="fromToProfit"  width="180"/>
          <el-table-column  prop="toFromProfit"  label="toFromProfit"  width="180"/>
          <el-table-column  prop="createdTime"  label="createdTime"  width="180"/>
         </el-table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: function(){
    return {coins:[]}
  },
  mounted: function(){
    self = this
    this.findAll()
    setInterval(function() {self.findAll()}, 20000)
  },
  methods: {
    findAll: function(){
        axios.get('/api/coins').then(res=>{
            this.coins = eval('(' + res.data + ')');
        }).catch(error=>console.log(error));
    },
    search: function(){
        this.$router.push({path:"/search"})
    }
  }
}
</script>

<style scoped>

</style>