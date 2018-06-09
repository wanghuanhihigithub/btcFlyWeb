<<template>
    <div style="padding:20px;" id="app">
        <el-date-picker
              v-model="createdTimeBegin"
              type="datetime"
              placeholder="开始时间"
              format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>
        <el-date-picker
              v-model="createdTimeEnd"
              type="datetime"
              placeholder="结束时间"
              format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>
        <el-button type="primary" icon="el-icon-search" v-on:click=search>查询</el-button>
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
         <el-pagination
             @size-change="handleSizeChange"
             @current-change="handleCurrentChange"
             :current-page="currentPage"
             :page-sizes="[10, 20, 50, 100]"
             :page-size="pageSize"
             layout="total, sizes, prev, pager, next, jumper"
             :total="itemCount">
         </el-pagination>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'search',
  data: function(){
    return {coins:[],createdTimeBegin:'',createdTimeEnd:'',pageSize:10,currentPage:1,itemCount:0}
  },
  methods: {
    search: function(){
       var params = {createdTimeStart:this.createdTimeBegin,createdTimeEnd:this.createdTimeEnd,page:this.currentPage}
       var self = this;
       axios.get('/api/api/coins/params',{params:params}).then(res=>{
               console.log(res)
               self.coins = res.data.coins;
               self.currentPage = res.data.page.page_index
               self.itemCount = res.data.page.item_count
       }).catch(error=>console.log(error));
    },
    handleSizeChange: function (size) {
        this.pagesize = size;
        this.search()
    },
    handleCurrentChange: function(currentPage){
        debugger;
        this.currentPage = currentPage;
        this.search()
    }
  }
}
</script>

<style scoped>

</style>