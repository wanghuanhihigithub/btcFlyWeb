<<template>
    <div style="padding:20px;" id="app">
        <el-table :data="coins"  style="width: 100%">
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
    self = this;
    setInterval(function() {self.findAll()}, 20000)
  },
  methods: {
    findAll: function(){
        axios.get('/api/coins').then(res=>{
            debugger;
            this.coins = eval('(' + res.data + ')');
        }).catch(error=>console.log(error));
    }
  }
}
</script>

<style scoped>

</style>